import React, { Component } from 'react';
import {
    TouchableWithoutFeedback, Keyboard,
    View, Text, TextInput,
    StyleSheet,
    Image, TouchableOpacity
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class TransferToMyAccount extends Component {
    static navigationOptions = {
        headerTitle: 'Inmediate Transfer',
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
            <View style={{ alignItems: 'center', marginRight: wp('4%') }}>
                <Text style={{ color: '#ff5a60' }}>{' '}</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };


    state = {

        money: '',
        isCheckedA: false,
        check: require('../../assets/icons_genGMI/checkNo.png'),
        textBank: 'none',

        isCheckedB: false,
        checkPay: require('../../assets/icons_genGMI/checkNo.png'),
        textPay: 'none',


        isCheckedC: false,
        checkTermino: require('../../assets/icons_genGMI/boxwhite.png'),

    };



    componentDidMount() {

    }
    submit = () => {

        if (this.state.money != '') {
            if (this.state.isCheckedA && this.state.isCheckedC) {
                console.log('entro aqui en tarjeta')
                this.props.navigation.navigate("transactionStripe", { money: this.state.money })
            } else if (this.state.isCheckedB && this.state.isCheckedC) {
                this.props.navigation.navigate("transactionPaypal", { money: this.state.money })
            } else {
                alert('You must select a payment method and accept the conditions by checking the box')
            }
        } else {
            alert('You must set an amount of money');
        }

    }


    render() {

        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 3.5 }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={{
                            flex: 4,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.textMoney}>$8.000.00</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={{
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Text style={{
                                fontSize: wp('4%'),
                                color: '#312f3d',
                                fontWeight: 'bold'
                            }}>Amount to Transfer</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={{ flex: 4, alignItems: 'center', }}>

                            <View style={styles.contInput}>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    placeholder="$ 00.00"
                                    style={{ width: '40%', fontSize: wp('5%'), textAlign: 'center' }}
                                    onChangeText={
                                        (money) => this.setState({
                                            money: money//los que va encontrando
                                        })
                                    } />

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>



                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{ flex: 4, marginHorizontal: '4%' }}>
                        <View style={{ flex: 1.5 }}>
                            <Text style={{
                                fontSize: wp('4%'),
                                color: '#312f3d',
                                fontWeight: 'bold'
                            }}>Choose a payment method</Text>
                        </View>

                        <View style={{ flex: 8.5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1.5, }}>
                                    <Image
                                        source={require('../../assets/icons_genGMI/mastercard.png')}
                                        style={styles.icono}
                                    />
                                </View>
                                <View style={styles.borderBase7}>
                                    <View>
                                        <Text style={styles.sub}>Bank Account</Text>
                                        <Text style={styles.subtext}>**** **** **** 0959</Text>
                                    </View>
                                    <View style={{
                                        display: this.state.textBank,
                                        marginTop: hp('1%')
                                    }}>
                                        <Text style={styles.textInform}>Stripe Direct Deposit</Text>
                                        <Text style={styles.textInform}>$0.25 fee (pago automatic)</Text>
                                        <Text style={styles.textInform}>$0.25 fee plus 3% of the transferred amount</Text>
                                    </View>
                                </View>

                                <View style={styles.borderBase1}>

                                    <View onTouchStart={() => {
                                        if (this.state.isCheckedA == true) {
                                            this.setState({
                                                isCheckedA: false,
                                                check: require('../../assets/icons_genGMI/checkNo.png'),
                                                textBank: 'none'
                                            })


                                        } else {
                                            this.setState({
                                                isCheckedA: true,
                                                isCheckedB: false,
                                                check: require('../../assets/icons_genGMI/check.png'),
                                                checkPay: require('../../assets/icons_genGMI/checkNo.png'),
                                                textBank: 'flex',
                                                textPay: 'none'
                                            })
                                        }
                                    }
                                    }>
                                        <Image
                                            source={this.state.check}
                                            style={styles.icono}
                                        />
                                    </View>

                                </View>

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                marginTop: hp('1.5%')
                            }}>
                                <View style={{ flex: 1.5, }}>
                                    <Image
                                        source={require('../../assets/icons_genGMI/paypal.png')}
                                        style={styles.icono}
                                    />
                                </View>
                                <View style={styles.borderBase7}>
                                    <View>
                                        <Text style={styles.sub}>Paypal account</Text>
                                        <Text style={styles.subtext}>info@email.com</Text>
                                    </View>
                                    <View style={{
                                        display: this.state.textPay,
                                        marginTop: hp('1%')
                                    }}>
                                        <Text style={styles.textInform} >1% of the Transferred amount with $0.25 minimum and a maximum of $20</Text>

                                        <Text style={[styles.textInform, { marginTop: '1%' }]}>4% of the transferred amount with $1 minimum and a maximum of 80$</Text>

                                    </View>
                                </View>

                                <View style={styles.borderBase1}>
                                    <View onTouchStart={() => {
                                        if (this.state.isCheckedB == true) {
                                            this.setState({
                                                isCheckedB: false,
                                                checkPay: require('../../assets/icons_genGMI/checkNo.png'),
                                                textPay: 'none'
                                            })


                                        } else {
                                            this.setState({
                                                isCheckedB: true,
                                                isCheckedA: false,
                                                checkPay: require('../../assets/icons_genGMI/check.png'),
                                                check: require('../../assets/icons_genGMI/checkNo.png'),
                                                textPay: 'flex',
                                                textBank: 'none'
                                            })
                                        }
                                    }
                                    }>
                                        <Image
                                            source={this.state.checkPay}
                                            style={styles.icono}
                                        />
                                    </View>

                                </View>

                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    marginHorizontal: '4%'
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <View onTouchStart={() => {
                                if (this.state.isCheckedC == true) {
                                    this.setState({
                                        isCheckedC: false,
                                        checkTermino: require('../../assets/icons_genGMI/boxwhite.png'),

                                    })
                                } else {
                                    this.setState({
                                        isCheckedC: true,
                                        checkTermino: require('../../assets/icons_genGMI/boxred.png'),



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
                                fontSize: wp('3.5%'),
                                fontWeight: '200'
                            }} >By click the button you accept the</Text>
                            <Text style={{
                                color: '#ff5a60',
                                fontSize: wp('2.8%'),
                            }}>Terms and Conditions and privacy Policy</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1.5,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.submit()}

                    >
                        <Text style={{
                            color: 'white',
                            fontSize: wp('4.5%')
                        }}>
                            Inmediate Transfer</Text>
                    </TouchableOpacity>

                </View>

            </View>


        );
    }

}


const styles = StyleSheet.create({
    textMoney: {
        fontSize: wp('11%'),
        color: '#312f3d',
        fontWeight: 'bold'
    },
    textInform: {
        color: '#312f3d',
        fontSize: wp('3%')
    },
    contInput: {
        height: '50%',
        width: '55%',
        borderRadius: hp('4%'),
        borderColor: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub: {
        color: '#312f3d',
        fontSize: wp('4%'),
        letterSpacing: 0.32,
        fontWeight: 'bold'
    },
    subtext: {
        color: '#312f3d',
        fontSize: wp('3.5%'),
        letterSpacing: 0.32,
    },
    button: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '50%',
        borderRadius: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderBase1: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    borderBase7: {
        flex: 7.5,
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    icono: {
        width: 30,
        height: 30,
    }

});