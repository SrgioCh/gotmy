import React from 'react';
import {
    Platform, Text, TouchableOpacity, Dimensions,
    View, Image
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./VerificationStep4.style"

export default class Verificationstep4 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Confirm your email",
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center',
                width: '80%',
                fontWeight: '500',
                letterSpacing: 0.41,
                fontSize: 16,
                color: '#312f3d',
            },
            headerRight: (<View>
                <TouchableOpacity onPress={() => navigation.navigate("discover")} >
                    <Text style={{
                        color: '#ff5a60', marginRight: 15, fontSize: 16
                    }}>Cancel</Text>
                </TouchableOpacity>
            </View>),
            headerTintColor: '#ff5a60',
        }
    }

    render() {

        let screenHeight = Dimensions.get('window').height;



        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 8.5 }}>
                    <View style={{
                        alignItems: 'center',
                        flex: 6, justifyContent: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/logoGotmy.png')}
                        />
                    </View>

                    <View style={{ flex: 4,alignItems: 'center' }}>


                        <Text style={styles.text}>
                            Almost there!
                        </Text>
                        <Text style={styles.subtitulo}>
                             We sent a verification email{'\n'} to your email address
                       
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1.5 }}>

                    <View style={{ alignItems: 'center' }}>

                        <TouchableOpacity style={styles.containerbutton}
                            onPress={() => this.props.navigation.navigate("requesPendin")}
                        >
                            <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                                View My Influencer Profile</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* -----------------------BOTONES ------------------*/}
            </View>
        );
    }
}