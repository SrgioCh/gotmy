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
Cabezera = props => {

    return (



        <View style={{ flexDirection: 'row', paddingHorizontal: '4%' }}>
            <TouchableOpacity
                style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}
            // onPress={() => this.props.enviaAPadreMenu()} 
            >
                <Image source={props.imagInflu}
                    style={{
                        width: 40, height: 40,
                        borderRadius: 10
                    }}
                />
            </TouchableOpacity>
            <View style={{ flex: 7.5, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: '#312f3d',
                        fontSize: wp('4%'), letterSpacing: 0.41
                    }}>{props.influencer}</Text>
                    <Image source={props.imagMasco}
                        style={{ marginLeft: wp('2%'), width: 20, height: 20 }}
                    />
                </View>

                <Text style={{
                    color: '#677183',
                    fontSize: wp('3.5%'), letterSpacing: 0.08
                }}>{props.correoInflu}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => props.enviaAPadre(props.haciaPag)}
                // onPress={() => this.props.navigation.navigate("publishEven1")}
                >
                    <Image source={props.icono}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}


export default Cabezera; 