import React, { Component } from 'react';
import {
    View, Text, Dimensions,
    Image, TouchableOpacity
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./BillDetail.style"
import Block from "./components/Block"

export default class BillDetail extends Component {
    static navigationOptions = {
        headerTitle: 'Transaction detail bill',
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

            imagA: require('../../../assets/icons_genGMI/price_detail3.png'),
            textA: '20.00',
            imagB: require('../../../assets/icons_genGMI/load.png'),
            textB: '2.00',
            imagC: require('../../../assets/icons_genGMI/CalendarGrey.png'),
            textC: '12/01/2019-12:45 PM',
            imagD: require('../../../assets/icons_genGMI/User.png'),
            textD: 'Jack Vega'


        }

    }// fin de consttructor




    render() {

        const dinero = this.props.navigation.getParam('dinerillo');
        let screenHeight = Dimensions.get('window').height;


        return (

            <View style={{ flex: 1 }}>




                <View style={{ flex: 8.5 }}>
                    <View style={{
                        flex: 2,
                        alignItems: 'center', justifyContent: 'center',
                        marginHorizontal: 35, marginTop: '10%'
                    }}>
                        <Text style={{ color: '#312f3d', fontSize: wp('5%'), fontWeight: '500', letterSpacing: 0.32 }}>
                            Total</Text>
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
                                    fontWeight: 'bold', color: '#ff5a60'
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
                    <View style={{ flex: 5, marginHorizontal: '4%', paddingVertical: hp('2%') }}>

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
                                textOne="Influencer name"
                                textToo={this.state.textD}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>

                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagA}
                                textOne="Ticket price"
                                textToo={this.state.textA}
                                textRight={null}
                                textLeft='$ '
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagB}
                                textOne="Management Fee"
                                textToo={this.state.textB}
                                textRight={null}
                                textLeft='$ '
                            />
                        </View>


                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: '4%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1.5, }}>
                                <Image
                                    source={require('../../../assets/icons_genGMI/mastercard.png')}
                                    style={styles.icono}
                                />
                            </View>
                            <View style={{
                                flex: 8.5, paddingBottom: hp('1.5%'),
                                borderBottomColor: 'grey', borderBottomWidth: 0.5,
                            }}>
                                <View>
                                    <Text style={styles.sub}>Payment Method</Text>
                                    <Text style={styles.subtext}>MasterCard **** **** **** 0959</Text>
                                </View>

                            </View>


                        </View>
                    </View>


                </View>
                {/*  fin del flex 8.5 */}

                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>



                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => { this.props.navigation.navigate("") }}
                    >
                        <Text style={{ color: '#fff', fontSize: wp('4.5%') }}>
                            Download invoice</Text>
                    </TouchableOpacity>

                </View>


            </View>




        );
    }

}