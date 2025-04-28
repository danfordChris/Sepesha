import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  RefreshControl
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppDispatch } from "../../../redux/store/store";
import { SCREEN_NAME } from "../../../utils/Constants/Screens";
import styles from "./styles";
import { FONTS } from "../../../utils/Constants/Fonts";
import CustomHeader from "../../../components/CustomHeader";
import { IMAGE } from "../../../utils/Constants/Images";

const NotificationListing = ({ route, navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const insets = useSafeAreaInsets()
  const [listAry, setListAry] = useState([]);
  const [refreshing, setRefreshing] = useState(false);



  useFocusEffect(
    useCallback(() => {
    //   getnotifications();
    }, [])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getnotifications().then(() => setRefreshing(false));
  }, []);

  const getnotifications = async () => {
    try {
      const result = await dispatch(getnotificationsApi());
      if (result?.payload?.status == 200) {
        setListAry(result?.payload?.data?.notifications);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };


  const btnNotification = (item: any) => {
    console.log(item);


  }




  return (
    <View style={styles.container}>
      <View style={{paddingTop:insets.top}}>
         <CustomHeader
                    btnBack={() => navigation.goBack()}
                    text={'Notification'}
                    arrowImage={IMAGE.LEFT}
                />
                </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.notificationList}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#000000']}
            tintColor="#000000"
          />
        }
      >
        {listAry?.length > 0 ? (
          listAry?.map((notification: any) => (
            <TouchableOpacity
              key={notification._id}
              style={styles.notificationItem}
              onPress={() => btnNotification(notification)}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.notificationTitle}>{'notification.title'}</Text>
                <Text style={styles.notificationTime}>
                  {/* {moment(notification.createdAt).format('hh:mm A | DD.MM.YYYY')} */}
                  20/03/2025
                </Text>
              </View>
              <Text style={styles.notificationDescription}>{'notification.body'}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 300 }}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONTS.SEMI_BOLD }}>
              No data found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationListing;