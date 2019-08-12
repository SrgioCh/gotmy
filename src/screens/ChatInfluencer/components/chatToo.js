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
ChatToo = props => {

    return (
        <View style={{
            marginHorizontal: '4%', flexDirection: 'row', marginBottom: 10,
        }}>

            <Text style={{ flex: 3 }}> {' '}</Text>
            <View style={{
                flex: 7, flexDirection: 'column',
                paddingBottom: hp('1.5%')
            }}>



                <View style={{
                    flexWrap: 'wrap', backgroundColor: '#f6f6f6',
                    padding: hp('2%'), borderRadius: 10
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: '#312f3d'
                    }}>{props.mensaje}</Text>
                </View>

                <View style={{ alignItems: 'flex-end', marginTop: hp('0.5%') }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#677183'
                    }}>{props.mensaFinal}</Text>
                </View>
            </View>
        </View>
    )
}


export default ChatToo; 