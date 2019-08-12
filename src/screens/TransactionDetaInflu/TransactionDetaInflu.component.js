import React, { Component } from 'react';
import {
    Platform, AppRegistry, Alert,
    View, Text, TextInput, Dimensions,
    StyleSheet, ScrollView,
    Image, TouchableOpacity
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./TransactionDetaInflu.style"
import Block from "./components/Block"

export default class TransactionDetaInflu extends Component {
    static navigationOptions = {
        headerTitle: 'Transaction detail',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
            fontWeight: '500',
            letterSpacing: 0.41,
            fontSize: 16,
            color: '#312f3d',


        },
        headerRight: (<View>
        </View>),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {

        super(props);

        this.state = {


            transac_ID: 768483732,
            transac_status: 'Success',
            data: '12/01/2019 - 12:45 PM)',
            fullName: 'Jack Vega',

            imagA: require('../../../assets/icons_genGMI/transaccionB.png'),
            textA: 768483732,
            imagB: require('../../../assets/icons_genGMI/Time.png'),
            textB: 'Succes',
            imagC: require('../../../assets/icons_genGMI/CalendarGrey.png'),
            textC: '12/01/2019-12:45 PM',
            imagD: require('../../../assets/icons_genGMI/User.png'),
            textD: 'Jack Vega'


        }

    }// fin de consttructor




    render() {

        const dinero = this.props.navigation.getParam('dinerillo');
        let screenHeight = Dimensions.get('window').height;

        if (screenHeight <= 592) { //1080 * 1920  xxhdpi
            fontM = 14;
            fontN = 12;

        } else if (screenHeight <= 605) { //mopvil de  david
            fontM = 16;
            fontN = 14;
        } else if (screenHeight <= 678) { // mi movil
            fontM = 16;
            fontN = 14;
        } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
            fontM = 16;
            fontN = 14;
        } else if (screenHeight <= 775) {//1440 *2880 :560dpi
            fontM = 16;
            fontN = 14;
        } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9
            fontM = 16;
            fontN = 14;
        } else { // 800 = 480 * 800 mdpi
            fontM = 16;
            fontN = 14;
        }

        return (

            <View style={{ flex: 1 }}>




                <View style={{ flex: 8.5 }}>
                    <View style={{
                        flex: 2,
                        alignItems: 'center', justifyContent: 'center',
                        marginHorizontal: 35, marginTop: '10%'
                    }}>
                        <Text style={{ color: '#312f3d', fontSize: wp('5%'), fontWeight: '500', letterSpacing: 0.32 }}>
                            Amount</Text>
                        <Text style={{ color: '#312f3d', fontSize: wp('10%'), fontWeight: 'bold', letterSpacing: 0.32, }}>
                            $ {dinero}
                        </Text>
                    </View>


                    {/* cajita fecha*/}
                    <View style={{ flex: 2, justifyContent: 'center', marginHorizontal: '4%' }}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#f6f6f6'
                        }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'white', flexDirection: 'column',
                                paddingTop: 20, alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: wp('8%'), fontWeight: 'bold' }}>
                                    21</Text>
                                <Text style={{ color: 'red' }}>DEC</Text>
                            </View>
                            <View style={{
                                flex: 6, flexDirection: 'column', backgroundColor: 'white',
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    fontSize: wp('5%'),
                                    fontWeight: 'bold', color: '#312f3d'
                                }}>
                                    My FIRST Godr of War experience !</Text>
                                <Text style={{
                                    fontSize: wp('4%'),
                                    fontWeight: 'bold', color: '#677183'
                                }} >Games</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/icons_genGMI/ubicacion.png')}
                                        style={{ width: 11, height: 11, marginLeft: 2, marginTop: 6 }}
                                    />
                                    <Text style={{
                                        fontSize: wp('3%'),
                                        fontWeight: 'bold', color: '#677183',
                                        paddingVertical: 4, marginLeft: 5
                                    }}>Live from New York, at 18:30 pm</Text>
                                </View>

                            </View>
                        </View>
                    </View>


                    {/* ------------------  CAJAS DE DETALLES -----------------------*/}
                    <View style={{ flex: 6, marginHorizontal: '4%', paddingVertical: hp('2%') }}>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagA}
                                textOne="Transaction ID"
                                textToo={this.state.textA}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagB}
                                textOne="Transaction status"
                                textToo={this.state.textB}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagC}
                                textOne="Date"
                                textToo={this.state.textC}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagD}
                                textOne="Full name"
                                textToo={this.state.textD}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                    </View>



                </View>
                {/*  fin del flex 8.5 */}

                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>



                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => { this.props.navigation.navigate("vieweredit") }}
                    >
                        <Text style={{ color: '#ff5a60', fontSize: wp('4.5%') }}>
                            Download invoice</Text>
                    </TouchableOpacity>

                </View>


            </View>




        );
    }

}