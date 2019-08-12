import React, { Component } from 'react';
import {
    Platform, AppRegistry, Alert,
    View, Text, TextInput,
    StyleSheet, ScrollView,
    Image, TouchableOpacity
} from 'react-native';

import styles from "./TransactionsInflu.style"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class TransactionsInflu extends Component {
    static navigationOptions = {
        headerTitle: ' ',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '80%',
            fontWeight: '500',
            letterSpacing: 0.41,
            height: 120,
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
            influencer: `Kurtis 'Kala' Lloyd`,
            fotoInflu: 'uno.png',
            correoInflu: '@kalatempo',

            datos: [{
                fecha: '12/01/2019',
                tipo: 'Transaction Live Event Name',
                trans: 'Craig Brooks',
                dinero: '23.00',


            },
            {
                fecha: '12/01/2019',
                tipo: 'gotmy draw out',
                trans: 'Transfer to your credit card',
                dinero: '300.00',


            },
            {
                fecha: '12/01/2019',
                tipo: 'Transaction Live Event Name',
                trans: 'Max Welch',
                dinero: '80.00',


            },
            {
                fecha: '12/02/2018',
                tipo: 'Transaction Live Event Name',
                trans: 'Craig Brooks',
                dinero: '23.00',

            },
            {
                fecha: '12/02/2018',
                tipo: 'gotmy draw out',
                trans: 'Transfer to your credit card',
                dinero: '500.00',


            },
            {
                fecha: '12/02/2018',
                tipo: 'Transaction Live Event Name',
                trans: 'Max Welch',
                dinero: '80.00',


            },

            ]


        }

    }// fin de consttructor

    render() {

        meses = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];

        mesElegidos = [];
        /*  si quieremoss  que nos coja  la fecha del sistema,usamos esto:
  var f = new Date();
  alert(f.getDate());
  alert(f.getMonth()+1); */

        const data = this.props.navigation.getParam('datos');


        /*   var   Fech=item.fecha;
               
                     var  FechaArray=Fech.split('/');
                  
                     var  dia=FechaArray[0];
                     var  mes=meses[parseInt(FechaArray[1])];
                     var  anio=FechaArray[2];
                   
               
                 
                  if(mesElegidos.length<=0){
                    mesElegidos.push('enero');
                    alert("aqui")
                  }else{
                   alert(mesElegidos)
                  }
      
                   */

        return (


            <View style={{ flex: 1 }}>

                <View style={{ flex: 2 }}>


                    {/* TITULO */}

                    <View style={{ marginHorizontal: 16 }}>
                        <Text style={{
                            fontSize: 34, color: '#312f3d', marginVertical: 15,
                            fontWeight: 'bold',
                        }}>Transactions</Text>

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

                <View style={{ flex: 8 }}>

                    <ScrollView >

                        <View style={{
                            marginHorizontal: '4%', marginVertical: hp('1.5%')
                        }}><Text style={styles.textoDatos2}>
                                January,2019
                         </Text></View>
                        {  // AQUI PINTAREMOS TODOS LOS DATOS QUE NOS VINIERON


                            this.state.datos.map((item, i) => {


                                return (
                                    <View
                                        onTouchEnd={() => { this.props.navigation.navigate("transactionDetaInflu", { dinerillo: item.dinero }) }}

                                        key={i} style={{ marginTop: hp('1%') }}>
                                        <View style={{
                                            display: i == 3 ? 'flex' : 'none',
                                            marginHorizontal: '3%', marginVertical: hp('1.5%')
                                        }}><Text style={styles.textoDatos2}>
                                                December,2018
                                              </Text></View>

                                        <View style={{
                                            flex: 1, flexDirection: 'row',
                                            marginHorizontal: '4%', marginTop: 5, borderBottomColor: '#e2e7ee',
                                            borderBottomWidth: 1,
                                        }}>

                                            <View style={{ flex: 7, paddingBottom: 10, paddingTop: 5 }}>
                                                <Text style={styles.textoDatos1}>{item.fecha}</Text>
                                                <Text style={styles.textoDatos2}>{item.tipo}</Text>
                                                <Text style={styles.textoDatos1}>{item.trans}</Text>
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


