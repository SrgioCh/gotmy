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
Bloque = props => {

    return (

        <View style={{
            flexDirection: 'row', marginHorizontal: '4%', paddingTop: hp('2.5%'), paddingBottom: hp('1.5%'),
            borderBottomColor: 'grey', borderBottomWidth: 0.5
        }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={{
                    fontSize: wp('4%'),
                    fontWeight: 'bold'
                }}>{props.texOne}</Text>
            </View>
            <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{
                    fontSize: wp('3.5%'),

                }}>{props.email}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image source={require('../../../../assets/icons_genGMI/ArrowGrey.png')}
                    style={{ width: 22, height: 25, }}
                />
            </View>
        </View>
    )
}


export default Bloque; 