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

import styles from './VerifyPhone.style';

export default class VerifyPhone extends Component {

    static navigationOptions = {
        headerTitle: 'Verify Phone Number',
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
            flag: require('../../../assets/banderasLenguaje/usa.png'),
            phone: '',
            distext: 'flex',
            disphone: 'none',
            borra: require('../../../assets/icons_genGMI/borra.png'),
        }
        this.i = 1;
    }

    componentDidMount() {

    }

    numberPhone = (nume) => {

        if (this.i <= 9) {
            this.i++;
            this.setState({
                distext: 'none',
                disphone: 'flex',
                phone: this.state.phone + nume
            })

        }
        else {
            alert('Type only 9 numbers')
        }
    }

    borra = () => {



        number = this.state.phone;
        console.log('tam ' + number.length)

        number = number.slice(0, -1);
        //console.log('quitamos : ' + number)
        this.setState({
            phone: number
        })


        if (number.length == 0) {
            this.setState({
                distext: 'flex',
                disphone: 'none',
            })
        }


    }

    render() {




        return (

            <View style={{
                flex: 1,
            }}>
                <View style={{ flex: 5.5 }}>
                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={styles.Textprinci}>
                            What's your phone number ?
                       </Text>
                    </View>
                    <View style={{ flex: 2.5, flexDirection: 'row', marginHorizontal: '4%' }}>
                        <View style={{ flex: 2.5, justifyContent: 'center' }}>
                            <View style={styles.flag}>
                                <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image source={this.state.flag}
                                        style={{ width: 20, height: 20 }}
                                    />
                                </View>
                                <View style={{ flex: 6, alignItems: 'center' }}>
                                    <Text>+ 1</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flex: 7.5, justifyContent: 'center' }}>
                            <View style={styles.number}>
                                <Text style={{ textAlign: 'center', display: this.state.distext, }}>Enter your phone number</Text>
                                <Text style={{ textAlign: 'center', display: this.state.disphone, fontSize: wp('4%') }}>{this.state.phone}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.Text}>
                            By tapping "Send confirmation code" above,
                      </Text>
                        <Text style={styles.Text}>
                            We will send you and SMS to  confirm your
                      </Text>
                        <Text style={styles.Text}>
                            phone number
                      </Text>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.containerbutton}
                            onPress={() => this.props.navigation.navigate("verifyCode")}

                        >
                            <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                                Send confirmation code</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ flex: 4.5, backgroundColor: '#E4E0E0', }}>
                    <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(1)}

                                style={styles.but}>
                                <Text style={styles.num}>1</Text>
                                <Text>{' '}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(2)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>2</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>ABC</Text>
                                </View>


                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View onTouchEnd={() => this.numberPhone(3)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>3</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>DEF</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(4)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>4</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>GHI</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(5)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>5</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>JKL</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(6)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>6</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>MNO</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(7)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>7</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>PQRS</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(8)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>2</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>TUV</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(9)}
                                style={styles.but}>
                                <View style={{ flex: 6 }}>
                                    <Text style={styles.num}>9</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.letras}>WXYZ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center' }}>

                            <Text style={styles.num}>+ * #</Text>

                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', marginTop: hp('0.5%') }}>
                            <View
                                onTouchEnd={() => this.numberPhone(0)}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: hp('1%'),
                                    width: '90%',
                                    height: '45%',
                                    alignItems: 'center'
                                }}>
                                <Text style={styles.num}>0</Text>
                                <Text style={styles.letras}>{' '}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', }}>
                            <View
                                onTouchEnd={this.borra}
                                style={{ alignItems: 'center', marginVertical: hp('1%') }}>
                                <Image source={this.state.borra}
                                    style={{ width: 27, height: 25 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>

            </View>



        );
    }

}