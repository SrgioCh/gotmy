import React from 'react';
import {
    View, Text,
    Image, Platform
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// usando hooks 
BlockChat = props => {

    return (
        <View style={{ flex: 1, marginHorizontal: '4%', flexDirection: 'row', marginBottom: hp('2%') }}>

            <View style={{ flex: 1.8, alignItems: 'center' }}>

                <Image source={props.foto}
                    style={{ width: 40, height: 40, borderRadius: Platform.OS === 'ios' ? 20 : 20 }}
                />

            </View>

            <View style={{ flex: 8.2, flexDirection: 'column' }}>

                <View>
                    <Text style={{
                        fontSize: wp('3.5%'),
                        color: '#ff5a60'
                    }}>{props.nombre}</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        flex: 8, paddingVertical: hp('0.5%'),
                        flexWrap: 'wrap'
                    }}>
                        <Text style={{
                            fontSize: wp('4%'),
                            color: 'black'
                        }}>{props.mensaje}</Text>
                    </View>

                    <View style={{ flex: 2 }}></View>

                </View>

            </View>
        </View>

    )
}


export default BlockChat; 