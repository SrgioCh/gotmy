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
Block = props => {

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Image
                    source={props.imag}
                    style={{
                        height: 30,
                        width: 30
                    }}
                />
            </View>
            <View style={{
                flex: 8.5,
                paddingBottom: 10,
                borderBottomColor: 'grey',
                borderBottomWidth: 0.4
            }}>
                <Text style={{
                    fontSize: wp('4%'),
                    color: '#312f3d',
                    fontWeight: 'bold'
                }}>{props.textOne}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: wp('4%'),
                        color: '#312f3d',
                    }}>{props.textLeft}</Text>
                    <Text style={{
                        fontSize: wp('4%'),
                        color: '#312f3d',
                        marginHorizontal: hp('0.5%')
                    }}>{props.textToo}</Text>
                    <Text style={{
                        fontSize: wp('4%'),
                        color: '#312f3d',
                    }}>{props.textRight}</Text>
                </View>

            </View>
        </View>
    )
}


export default Block; 