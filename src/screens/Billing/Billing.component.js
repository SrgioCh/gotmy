import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Keyboard,
    Text, TextInput, TouchableOpacity,
    View, Image, ScrollView

} from 'react-native';



import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./Billing.style"




export default class PastStreaming extends Component {

    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {

            arrowBack: require('../../../assets/icons_genGMI/atrasito.png'),
            datos: [{
                fecha: '12/01/2019-12:00',
                tipo: 'Transaction Live Event Name',
                trans: 'Craig Brooks',
                dinero: '23.00',


            },
            {
                fecha: '12/01/2019-11:25',
                tipo: 'gotmy draw out',
                trans: 'Transfer to your credit card',
                dinero: '300.00',


            },
            {
                fecha: '12/01/2019-12:00',
                tipo: 'Transaction Live Event Name',
                trans: 'Max Welch',
                dinero: '80.00',


            },
            {
                fecha: '12/02/2018-13:25',
                tipo: 'Transaction Live Event Name',
                trans: 'Craig Brooks',
                dinero: '23.00',

            },
            {
                fecha: '12/02/2018-09:56',
                tipo: 'gotmy draw out',
                trans: 'Transfer to your credit card',
                dinero: '500.00',


            },
            {
                fecha: '12/02/2018-13:10',
                tipo: 'Transaction Live Event Name',
                trans: 'Max Welch',
                dinero: '80.00',


            },

            ]

        };
    }


    componentDidMount() {

    }



    render() {
        return (

            <View style={{ flex: 1 }}>
                <View
                    onTouchEnd={() => this.props.navigation.toggleDrawer()}
                    style={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: '4%' }}>
                    <Image
                        source={this.state.arrowBack}
                        style={{
                            width: 30, height: 30,
                        }}
                    />
                </View>

                <View style={{ flex: 2 }}>


                    {/* TITULO */}

                    <View style={{ marginHorizontal: '4%' }}>
                        <Text style={{
                            fontSize: wp('8%'), color: '#312f3d', marginVertical: hp('3%'),
                            fontWeight: 'bold',
                        }}>Billing</Text>

                    </View>

                    {/* BUSCADOR*/}
                    <View style={{ marginHorizontal: 16, marginBottom: 20, paddingVertical: 5, flexDirection: 'row' }}>
                        <View style={{
                            flexDirection: 'row', backgroundColor: '#f6f6f6',
                            alignItems: 'center', borderRadius: 10
                        }}>

                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/buscador/lupa.jpg')}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </View>
                            <TextInput
                                style={{

                                    height: 42,
                                    width: '90%',

                                    borderRadius: 10,

                                }}
                                placeholder="Search......"
                                editable={true} // con false , no podremos escribir nada
                                borderBottomColor='#e2e7ee'
                                borderBottomWidth={1}
                                paddingHorizontal={5}
                                onChangeText={
                                    (text3) => {
                                        this.setState(() => {

                                            return {
                                                tytexto: text3,
                                            }
                                        })
                                    }


                                }//fin de onchange
                            />

                        </View>

                    </View>

                    {/* ------------------------------ fin de buscadorr------------*/}

                </View>

                <View style={{ flex: 7 }}>

                    <ScrollView >

                        {  // AQUI PINTAREMOS TODOS LOS DATOS QUE NOS VINIERON


                            this.state.datos.map((item, i) => {


                                return (
                                    <View
                                        onTouchEnd={() => { this.props.navigation.navigate("billDetail", { dinerillo: item.dinero }) }}

                                        key={i} style={{ marginTop: 10 }}>


                                        <View style={{
                                            flex: 1, flexDirection: 'row',
                                            marginHorizontal: '4%', marginTop: 5, borderBottomColor: '#e2e7ee',
                                            borderBottomWidth: 1,
                                        }}>

                                            <View style={{ flex: 7, paddingBottom: 10, paddingTop: 5 }}>
                                                <Text style={styles.textoDatos1}>{item.fecha}</Text>
                                                <Text style={styles.textoDatos2}>{item.tipo}</Text>
                                                <Text style={styles.textoDatos3}>{item.trans}</Text>
                                            </View>
                                            <View style={{ flex: 3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                                <Text style={{
                                                    color: '#312f3d', fontSize: 20, fontWeight: '500',
                                                }}>$  {item.dinero}</Text>

                                            </View>
                                        </View>
                                    </View>
                                )

                            }
                            )


                        }


                    </ScrollView>

                </View>



            </View>
        );
    }
}
