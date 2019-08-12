import React, { Component } from 'react';
import {
    View, Text,
    TextInput, TouchableOpacity,
    Image, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

import styles from './VerificationStep3.styles'

export default class VerificationStep3 extends Component {

    static navigationOptions = {
        headerTitle: 'Verify Profile',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',

            width: '90%',
            fontWeight: '500',
            letterSpacing: 0.41,

            fontSize: wp('4%'),
            color: '#312f3d',

        },
        headerRight: (
            <View style={{
                alignItems: 'center',
                marginRight: wp('4%'),

            }}>
                <Text style={{ color: '#ff5a60' }}>{' '}</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);

        this.state = {
            checkTermino: require('../../../assets/icons_genGMI/boxwhite.png'),

        }

    }

    componentDidMount() {

    }



    render() {




        return (

            <View style={{
                flex: 1.5, marginHorizontal: '4%'
            }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.Textprinci}>
                        Review the disclosure and authorizaton of
                  </Text>
                    <Text style={styles.Textprinci}>
                        the background check
                  </Text>
                </View>

                <View style={{ flex: 6.5 }}>
                    <Text style={{ textAlign: 'justify', fontSize: wp('3.8%') }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {'\n'}{'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {'\n'}{'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <View onTouchStart={() => {
                                if (this.state.isCheckedC == true) {
                                    this.setState({
                                        isCheckedC: false,
                                        checkTermino: require('../../../assets/icons_genGMI/boxwhite.png'),

                                    })
                                } else {
                                    this.setState({
                                        isCheckedC: true,
                                        checkTermino: require('../../../assets/icons_genGMI/boxred.png'),



                                    })
                                }
                            }
                            }>
                                <Image
                                    source={this.state.checkTermino}
                                    style={{
                                        width: 25,
                                        height: 25,

                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={{
                                color: '#312f3d',
                                fontSize: wp('3.9%'),
                                fontWeight: '200'
                            }} >By click the button you accept the</Text>
                            <Text style={{
                                color: '#ff5a60',
                                fontSize: wp('3%'),
                            }}>Terms and Conditions and privacy Policy</Text>
                        </View>
                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => this.props.navigation.navigate("verificationStep4")}

                    >
                        <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                            Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>



        );
    }

}