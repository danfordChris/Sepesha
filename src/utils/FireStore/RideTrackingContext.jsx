// RideTrackingContext.js
import React, { createContext, useEffect, useState, useContext } from 'react';
import {
  onSnapshot,
  query,
  collection,
  where,
  doc,
  updateDoc,
  runTransaction,
  addDoc,
  serverTimestamp,
  getFirestore,
  getDoc
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const RideTrackingContext = createContext();

export const RideTrackingProvider = ({ children }) => {
  const [currentRide, setCurrentRide] = useState(null);
  const [availableRides, setAvailableRides] = useState([]);
  const db = getFirestore();
  const auth = getAuth();

  // Determine user role (stubbed; you can fetch from Firestore or custom claims)
  const [role, setRole] = useState(null); // 'driver' or 'rider'

  // Load role from user profile (assumes you store it in Firestore)
  useEffect(() => {
    const loadRole = async () => {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setRole(userSnap.data().role); // 'driver' or 'rider'
      }
    };
    loadRole();
  }, []);
  // Listen for available ride requests (drivers only)
  useEffect(() => {
    if (role !== 'driver') return;
    const q = query(
      collection(db, 'rides'),
      where('status', '==', 'requested')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAvailableRides(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [role]);

  // Listen for current user's ride updates (riders only)
  useEffect(() => {
    if (!auth.currentUser?.uid || role !== 'rider') return;
    const q = query(
      collection(db, 'rides'),
      where('riderId', '==', auth.currentUser.uid),
      where('status', 'in', ['requested', 'accepted', 'pickup_confirmed', 'started'])
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const rides = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCurrentRide(rides[0] || null);
    });
    return () => unsubscribe();
  }, [role]);

  // Rider creates a new ride request
  const requestRide = async (pickupLocation, destinationLocation) => {
    const rideRef = await addDoc(collection(db, 'rides'), {
      riderId: auth.currentUser.uid,
      pickupLocation,
      destinationLocation,
      status: 'requested',
      acceptedBy: null,
      timestamps: { requested: serverTimestamp() }
    });
    setCurrentRide({ id: rideRef.id, status: 'requested' });
  };

  // Driver attempts to accept a ride
  const acceptRide = async (rideId) => {
    const rideRef = doc(db, 'rides', rideId);
    try {
      await runTransaction(db, async (transaction) => {
        const rideDoc = await transaction.get(rideRef);
        if (!rideDoc.exists()) throw new Error('Ride does not exist');
        const ride = rideDoc.data();
        if (ride.status !== 'requested') throw new Error('Ride already accepted');
        transaction.update(rideRef, {
          status: 'accepted',
          acceptedBy: auth.currentUser.uid,
          timestamps: { ...ride.timestamps, accepted: serverTimestamp() }
        });
      });
      setCurrentRide({ id: rideId, status: 'accepted' });
    } catch (error) {
      console.error('Failed to accept ride:', error);
    }
  };

  // Update driver's live location during ride
  const updateDriverLocation = async (rideId, location) => {
    const rideRef = doc(db, 'rides', rideId);
    await updateDoc(rideRef, {
      driverLocation: location
    });
  };

  // Confirm pickup by rider
  const confirmPickup = async (rideId) => {
    const rideRef = doc(db, 'rides', rideId);
    await updateDoc(rideRef, {
      status: 'pickup_confirmed',
      'timestamps.pickupConfirmed': serverTimestamp()
    });
  };

  // Start ride to destination
  const startRide = async (rideId) => {
    const rideRef = doc(db, 'rides', rideId);
    await updateDoc(rideRef, {
      status: 'started',
      'timestamps.started': serverTimestamp()
    });
  };

  // End ride
  const completeRide = async (rideId) => {
    const rideRef = doc(db, 'rides', rideId);
    await updateDoc(rideRef, {
      status: 'completed',
      'timestamps.completed': serverTimestamp()
    });
  };

  return (
    <RideTrackingContext.Provider
      value={{
        role,
        requestRide,
        acceptRide,
        updateDriverLocation,
        confirmPickup,
        startRide,
        completeRide,
        currentRide,
        availableRides,
      }}
    >
      {children}
    </RideTrackingContext.Provider>
  );
};

export const useRideTracking = () => useContext(RideTrackingContext);
