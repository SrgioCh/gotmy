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

import styles from './VerifyCode.style'

export default class VerifyCode extends Component {

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

            code: '',
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
                code: this.state.code + nume
            })

        }
        else {
            alert('Type only 6 numbers')
        }
    }

    borra = () => {



        number = this.state.code;
        console.log('tam ' + number.length)

        number = number.slice(0, -1);
        //console.log('quitamos : ' + number)
        this.setState({
            code: number
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
                    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.Textprinci}>
                            What's your verification code ?
                       </Text>
                    </View>
                    <View style={{ flex: 3, marginHorizontal: '4%', alignItems: 'center', justifyContent: 'center' }}>

                        <View style={styles.code}>
                            <Text style={{ textAlign: 'center', display: this.state.distext, color: '#4B4B4B', fontSize: wp('7%') }}>Enter your code</Text>
                            <Text style={{
                                textAlign: 'center', display: this.state.disphone, color: '#4B4B4B',
                                fontSize: wp('7%')
                            }}>{this.state.code}</Text>
                        </View>

                    </View>

                    <View style={{ flex: 4 }}>

                        <View style={{ flex: 4, alignItems: 'center' }}>
                            <TouchableOpacity style={styles.containerbutton}
                                onPress={() => this.props.navigation.navigate("verification1")}

                            >
                                <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                                    Verify confirmation code</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 6, alignItems: 'center', paddingTop: hp('2%') }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => this.props.navigation.navigate("")}

                            >
                                <Text style={{ color: '#ff5a60', fontSize: wp('4.5%') }}>
                                    I didn't get a code</Text>
                            </TouchableOpacity>
                        </View>


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
                                <Text style={styles.num}>2</Text>
                                <Text style={styles.letras}>ABC</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View onTouchEnd={() => this.numberPhone(3)}
                                style={styles.but}>
                                <Text style={styles.num}>3</Text>
                                <Text style={styles.letras}>DEF</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(4)}
                                style={styles.but}>
                                <Text style={styles.num}>4</Text>
                                <Text style={styles.letras}>GHI</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(5)}
                                style={styles.but}>
                                <Text style={styles.num}>5</Text>
                                <Text style={styles.letras}>JKL</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(6)}
                                style={styles.but}>
                                <Text style={styles.num}>6</Text>
                                <Text style={styles.letras}>MNO</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(7)}
                                style={styles.but}>
                                <Text style={styles.num}>7</Text>
                                <Text style={styles.letras}>PQRS</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(8)}
                                style={styles.but}>
                                <Text style={styles.num}>8</Text>
                                <Text style={styles.letras}>TUV</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                onTouchEnd={() => this.numberPhone(9)}
                                style={styles.but}>
                                <Text style={styles.num}>9</Text>
                                <Text style={styles.letras}>WXYZ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', marginHorizontal: '1%' }}>
                        <View style={{ flex: 3.3 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.num}>+ * #</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.3, alignItems: 'center', }}>
                            <View style={{
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