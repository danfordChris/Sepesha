import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'
import { IMAGE } from '../../../../../utils/Constants/Images'
import CustomHeader from '../../../../../components/CustomHeader'
import { COLORS } from '../../../../../utils/Constants/Colors'
import moment from 'moment'
import { RootState } from '../../../../../redux/store/store'
import { useSelector } from 'react-redux'


const EarningVendor = ({navigation}:any) => {
    const inset = useSafeAreaInsets()

    const [currentWeek, setCurrentWeek] = useState(0);
  
    const getProfile = useSelector(
      (state: RootState) => state.API.data.getProfileUserResposne,
    );


    console.log(getProfile)
  
    // Format wallet balance with commas
    const walletBalance = getProfile?.data[0]?.wallet_balance_tzs 
      ? Number(getProfile.data[0].wallet_balance_tzs).toLocaleString('en-US')
      : '0';
  
    // Calculate week range
    const getWeekRange = (weekOffset: number) => {
      const start = moment().add(weekOffset, 'weeks').startOf('week');
      const end = moment().add(weekOffset, 'weeks').endOf('week');
      return `${start.format('MMM D')} - ${end.format('MMM D')}`;
    };
    const handlePrevWeek = () => {
      setCurrentWeek(prev => prev - 1);
    };
  
    const handleNextWeek = () => {
      setCurrentWeek(prev => prev + 1);
    };
    return (
        <View style={styles.container}>
          <View style={{ paddingTop: inset.top }}>
            <CustomHeader
              btnBack={() => navigation.goBack()} 
              text={'Earnings'} 
              arrowImage={IMAGE.LEFT} 
            />
            
            <View style={styles.content}>
          {/* Week Selector */}
          <View style={styles.dateSelector}>
            <TouchableOpacity 
              onPress={handlePrevWeek}
              style={styles.arrow}
              disabled={currentWeek <= -4} // Limit to 4 weeks back
            >
              <Image 
                tintColor={currentWeek <= -4 ? COLORS.LIGHT_GREY : COLORS.main} 
                source={IMAGE.LEFT} 
                style={styles.arrow} 
              />
            </TouchableOpacity>
            
            <Text style={styles.dateRange}>{getWeekRange(currentWeek)}</Text>
            
            <TouchableOpacity 
              onPress={handleNextWeek}
              style={styles.arrow}
              disabled={currentWeek >= 0} // Don't allow future weeks
            >
              <Image 
                tintColor={currentWeek >= 0 ? COLORS.LIGHT_GREY : COLORS.main} 
                source={IMAGE.arrowright} 
                style={styles.arrow} 
              />
            </TouchableOpacity>
          </View>

          {/* Balance Card */}
          <View style={styles.balanceCard}>
            <View>
              <Text style={styles.balanceLabel}>Today Earning</Text>
              <Text style={styles.balanceDate}>
                As at {moment().format('MMM D, YYYY')}
              </Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.currency}>TZS</Text>
              <Text style={styles.amount}>{walletBalance}</Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            {/* <View style={styles.statRow}>
              <Text style={styles.statLabel}>Time</Text>
              <Text style={styles.statValue}>42 Hours 32 Minutes</Text>
            </View> */}
            <View style={styles.divider} />
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Deliveries</Text>
              <Text style={styles.statValue}>
                {getProfile?.data[0]?.total_deliveries || 0}
              </Text>
            </View>
          </View>

          {/* <TouchableOpacity 
            style={styles.detailsButton}
            onPress={() => navigation.navigate('EarningDetails')}
          >
            <Text style={styles.detailsText}>See Details</Text>
          </TouchableOpacity> */}
        </View>
          </View>
        </View>
      )
  }


export default EarningVendor

