import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, Modal, Image

} from 'react-native';

import Button from 'react-native-button';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./MyWalletInfluencer.style"
import Cabezera from './components/cabezera';
import TotalBalance from "./components/TotalBalance"
import Block from "./components/Block"

export default class MyWallet extends Component {

    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            //PARA CABEZERA
            imagInflu: require('../../../assets/influencers/influencer.png'),
            influencer: 'Kala | Tempo',
            correoInflu: '@kalatempo',
            imagMasco: require('../../../assets/influencers/KalaTempo/mascotaKala.png'),
            icono: require('../../../assets/icons_genGMI/statsIcon.png'),
            haciaPag: ' ',

            money: '8,200.00',
            stayMoney: require('../../../assets/icons_genGMI/stasMoney.png'),
            porcentage: '45,2%',
            moneyA: '8,000.00',
            moneyB: '200.00',

            imagOne: require('../../../assets/icons_genGMI/CalendarGrey.png'),
            fechaOne: 'Payment scheduled on March 31,2019',
            priceOne: '4,000.00',

            imagToo: require('../../../assets/icons_genGMI/CalendarGrey.png'),
            fechaToo: 'Payment scheduled on April 31,2019',
            priceToo: '4,000.00',

            imagTree: require('../../../assets/icons_genGMI/price_detail3.png'),
            mensaje: 'Payment scheduled on April 31,2019',
            priceTree: '200.00',

            modalVisible: true,
            iconoModal: require('../../../assets/icons_genGMI/roscaBlack.png'),
        };
    }


    componentDidMount() {
        console.log('pasa por aqui')
    }


    recogeDeHijo(dato) {

        this.props.navigation.navigate(dato)

    }


    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Modal transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal}>
                    </View>


                    {/* ventana blanca del modal*/}
                    <View style={{
                        backgroundColor: 'white', borderRadius: 20,
                        position: 'absolute', paddingHorizontal: '5%', width: '70%', height: '42%', left: '15%',
                        top: '32%',
                    }}>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ marginBottom: hp('2%') }}>

                                <Image source={this.state.iconoModal}
                                    style={{ width: 60, height: 60, borderRadius: 30 }}
                                />


                            </View>
                            <Text style={{
                                fontSize: 20, fontWeight: 'bold'
                            }} >Verify your</Text>
                            <Text style={{
                                fontSize: 20, fontWeight: 'bold'
                            }} >Influencer Profile</Text>
                            <Text style={{
                                textAlign: 'center',
                                color: "gray", fontSize: 14, marginLeft: 3,
                                marginRight: 3, fontWeight: "normal",
                                marginVertical: '3%',
                            }}>
                                Please download,fill out , sign{'\n'}
                                and upload this tax form</Text>



                            <View style={styles.containerbuttonModal}>
                                <Button
                                    onPress={() => {
                                        this.setState({ modalVisible: false });

                                    }}
                                    style={{ color: 'white', fontSize: wp('4%') }}
                                >Download</Button>

                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('1%') }}>
                                <Text style={{
                                    color: '#ff5a60',
                                    fontSize: wp('3.5%')
                                }}>Maybe later</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Cabezera
                        imagInflu={this.state.imagInflu}
                        influencer={this.state.influencer}

                        correoInflu={this.state.correoInflu}
                        imagMasco={this.state.imagMasco}
                        icono={this.state.icono}
                        haciaPag={this.state.haciaPag}

                    />
                </View>
                <View style={{ flex: 8, paddingHorizontal: '4%' }}>
                    <View style={{ flex: 1, }}>

                        <Text style={{
                            fontSize: wp('10%'), color: '#312f3d', marginVertical: hp('1.5%'),
                            fontWeight: 'bold',
                        }}>My Balance</Text>
                    </View>
                    <View style={{ flex: 3.5, justifyContent: 'center' }}>


                        <TotalBalance
                            porcentage={this.state.porcentage}
                            money={this.state.money}
                            stayMoney={this.state.stayMoney}
                            moneyA={this.state.moneyA}
                            moneyB={this.state.moneyB}
                        />


                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 5, alignItems: 'flex-start' }}>
                                <Text style={{
                                    fontSize: wp('4.5%'), color: '#312f3d', fontWeight: '500'
                                }}>
                                    Balance Resume
                                 </Text>
                            </View>
                            <View
                                onTouchEnd={() => this.props.navigation.navigate("transactionsInflu")}
                                style={{ flex: 5, alignItems: 'flex-end' }}>
                                <Text style={{
                                    fontSize: wp('4.5%'), color: '#ff5a60', fontWeight: '500'
                                }}>
                                    View transactions
                                 </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 4.5 }}>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagOne}
                                textOne={this.state.fechaOne}
                                textToo={this.state.priceOne}
                                textRight={null}
                                textLeft='$ '
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagToo}
                                textOne={this.state.fechaToo}
                                textToo={this.state.priceToo}
                                textRight={null}
                                textLeft='$ '
                            />
                        </View>
                        <View style={{ marginTop: hp('1.5%') }}>
                            <Block
                                imag={this.state.imagTree}
                                textOne={this.state.mensaje}
                                textToo={this.state.priceTree}
                                textRight={null}
                                textLeft='$ '
                            />
                        </View>


                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            flex: 1, backgroundColor: '#ff5a60',
                            alignItems: 'center', justifyContent: 'center'
                        }}

                        onPress={() => this.props.navigation.navigate("transferToMyAcountInflu")}
                    >

                        <Text style={{ color: 'white', fontSize: wp('3.5%'), letterSpacing: 0.41 }}>
                            Inmediate Transfer ( additional 3 % advance fee )</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
