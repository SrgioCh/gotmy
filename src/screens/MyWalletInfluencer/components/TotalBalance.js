import React from 'react';
import {
    View, Text,
    StyleSheet,
    Image, TouchableOpacity
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';
// usando hooks 
TotalBalance = props => {

    return (

        <View style={{
            backgroundColor: '#FAFAFA',
            paddingHorizontal: hp('2%'),
            paddingVertical: hp('5%'),
            borderRadius: hp('2%'),
        }}>



            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 5, justifyContent: 'flex-end', paddingLeft: wp('3%') }}>

                    <Text style={{
                        paddingVertical: hp('1%'),
                        color: '#312f3d', fontSize: wp('4%'), fontWeight: '500'
                    }}>Total Current{'\n'}Balance</Text>
                </View>
                <View style={{ flex: 5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{
                            color: '#312f3d', fontSize: wp('6%'), fontWeight: '500'
                        }}> $ {props.money}</Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                            <View>
                                <Image source={props.stayMoney}
                                    style={{ width: 20, height: 20 }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: '#70D25E',
                                    fontSize: wp('5%'),
                                    fontWeight: '500'
                                }}>{props.porcentage}</Text>
                        </View>
                    </View>

                </View>

            </View>

            <View style={{ marginTop: hp('4%'), flexDirection: 'row' }}>
                <View style={{ flex: 5, alignItems: 'center' }}>
                    <View>
                        <Text
                            style={{
                                color: '#312f3d',
                                fontSize: wp('3.5%'),
                                fontWeight: '100'
                            }} >
                            Available Balance
                                  </Text>
                        <Text style={{
                            textAlign: 'center',
                            color: '#312f3d',
                            fontSize: wp('4%'),
                            fontWeight: '500'
                        }}>
                            $ {props.moneyA}</Text>
                    </View>
                </View>
                <View style={{ flex: 5, alignItems: 'center' }}>
                    <View>
                        <Text style={{
                            color: '#312f3d',
                            fontSize: wp('3.5%'),
                            fontWeight: '100'
                        }}>
                            Unavailable Balance
                                  </Text>
                        <Text style={{
                            textAlign: 'center',
                            color: '#312f3d',
                            fontSize: wp('4%'),
                            fontWeight: '500'
                        }}>
                            $ {props.moneyB}
                        </Text>
                    </View>
                </View>
            </View>




        </View>



    )
}


export default TotalBalance; 