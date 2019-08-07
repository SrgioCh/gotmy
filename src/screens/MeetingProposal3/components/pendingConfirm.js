import React from 'react';
import {
    View, Text,
    Image, Platform
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styles from "../MeetingProposal3.style"

// usando hooks 
BlockPending = props => {

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{
                flex: 1
            }}>
                <Image
                    source={props.imag}
                    style={styles.icon}
                />

            </View>
            <View style={{
                flex: 9, justifyContent: 'center'
            }}>
                <Text style={{
                    color: '#ff5a60',
                    fontSize: wp('4%'),
                    fontWeight: '500'
                }}>Pending confirmation</Text>
            </View>
        </View>

    )
}


export default BlockPending; 