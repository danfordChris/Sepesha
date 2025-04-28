import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      marginBottom: 30,
    },
    routeText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    categoryText: {
      fontSize: 14,
      color: '#666',
    },
    prograssContainer: {
      marginVertical: 20,
    },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    stepCircle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    activeStep: {
      backgroundColor: '#4CAF50',
    },
    inactiveStep: {
      backgroundColor: '#E0E0E0',
    },
    stepText: {
      color: 'white',
      fontWeight: 'bold',
    },
    stepTitle: {
      fontSize: 16,
    },
    activeText: {
      color: '#000',
      fontWeight: 'bold',
    },
    inactiveText: {
      color: '#999',
    },
    stepConnector: {
      height: 40,
      width: 2,
      marginLeft: 14,
      marginBottom: 5,
    },
    activeConnector: {
      backgroundColor: '#4CAF50',
    },
    inactiveConnector: {
      backgroundColor: '#E0E0E0',
    },
    driverCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      padding: 15,
      borderRadius: 10,
      marginVertical: 20,
    },
    driverPhoto: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
    },
    driverInfo: {
      flex: 1,
    },
    driverName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    driverRating: {
      fontSize: 14,
      color: '#FFC107',
    },
    driverVehicle: {
      fontSize: 14,
      color: '#666',
    },
    driverETA: {
      fontSize: 14,
      color: '#4CAF50',
    },
    callButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
    },
    callButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    rideDetails: {
      marginVertical: 20,
    },
    detailTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    detailLabel: {
      fontSize: 14,
      color: '#666',
    },
    detailValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    cancelButton: {
      backgroundColor: '#F44336',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    cancelButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    secondaryButton: {
      borderWidth: 1,
      borderColor: '#4CAF50',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      flex: 1,
      marginRight: 10,
    },
    secondaryButtonText: {
      color: '#4CAF50',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  export default styles