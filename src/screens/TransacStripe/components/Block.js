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

    /*
        <Text>  textoo  </Text>
                <Text>
                    {props.textos}
                </Text>
    */

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={props.imag}
                    style={{
                        height: 30,
                        width: 30
                    }}
                />
            </View>
            <View style={{
                flex: 8,
                paddingBottom: 10,
                borderBottomColor: 'grey',
                borderBottomWidth: 0.4
            }}>
                <Text style={{
                    fontSize: wp('4%'),
                    color: '#312f3d',
                    fontWeight: 'bold'
                }}>{props.textOne}</Text>
                <Text style={{
                    fontSize: wp('4%'),
                    color: '#312f3d',
                }}>{props.textToo}</Text>
            </View>
        </View>
    )
}


export default Block; 