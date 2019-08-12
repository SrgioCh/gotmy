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
ChatOne = props => {

    return (
        <View style={{
            marginHorizontal: '4%', flexDirection: 'row',
            paddingVertical: hp('0.5%'),
            marginVertical: hp('2%'),
        }}>

            <View style={{ flex: 1.5, justifyContent: 'center' }}>

                <Image source={props.imag}
                    style={{
                        width: 50, height: 50,
                        borderRadius: 25
                    }}
                />

            </View>

            <View style={{
                flex: 8.5, paddingVertical: hp('1.5%')
            }}>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        flex: 8, flexWrap: 'wrap', backgroundColor: '#e2e7ee',
                        borderRadius: 10, padding: hp('1.5%'),
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#312f3d'
                        }}>{props.mensaje}</Text>
                    </View>


                    <Text style={{ flex: 2 }}> {' '}</Text>
                </View>
                <View style={{ marginTop: hp('0.5%') }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#677183'
                    }}>{props.mensaFinal}</Text>
                </View>
            </View>
        </View>
    )
}


export default ChatOne; 