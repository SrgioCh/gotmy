import React, { Component } from 'react';
import {
  AppRegistry, Alert,
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard,
  StyleSheet, ScrollView,
  Image, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Cabezera from './component/cabezera';


export default class Mensaje2 extends Component {


  static navigationOptions = {
    header: null,
  };

  constructor(props) {

    super(props);




    this.state = {

      imagInflu: require('../../assets/influencers/influencer.png'),
      influencer: 'Kala | Tempo',
      // fotoInflu:'influencer.png',
      correoInflu: '@kalatempo',
      imagMasco: require('../../assets/influencers/KalaTempo/mascotaKala.png'),
      icono: require('../../assets/icons_genGMI/mensajex.png'),
      haciaPag: 'chatInfluencer',




      opaciNo: null,
      opaciSi: 0.5,


      //mensajes


      mensaje2: 'Just Cause 4 FINALLY ',
      tiempo2: '2 hours ago',
      Use2mensa: 'Charlotte Roberson',
      mensaFinal2: 'How many days do you think will take us.',
      reloj2: 'none',


      tiempo3: 'Yesterday, 12:00',
      Use3mensa: 'Elmer Santos',
      mensaFinal3: 'How many days do you think will take us.',


    }

  }// fin de consttructor


  recogeDeHijo(dato) {

    this.props.navigation.navigate(dato)

  }

  abrirMenu() {
    this.props.navigation.toggleDrawer()
  }







  render() {

    return (

      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

          <Cabezera
            imagInflu={this.state.imagInflu}
            influencer={this.state.influencer}

            correoInflu={this.state.correoInflu}
            imagMasco={this.state.imagMasco}
            icono={this.state.icono}

            haciaPag={this.state.haciaPag}
            enviaAPadreMenu={this.abrirMenu.bind(this)}
            enviaAPadre={this.recogeDeHijo.bind(this)}
          />

        </TouchableWithoutFeedback>
        <View style={{ flex: 8.7 }}>

          {/* TITULO */}

          <View style={{ marginHorizontal: 16 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <Text style={{
                fontSize: 34, color: '#312f3d', marginVertical: hp('2%'),
                fontWeight: 'bold',
              }}>Messages</Text>
            </TouchableWithoutFeedback>
          </View>

          {/* BUSCADOR*/}
          <View style={{ marginHorizontal: 16, marginBottom: 20, paddingVertical: 5, flexDirection: 'row' }}>
            <View style={{
              flexDirection: 'row', flex: 5, backgroundColor: '#f6f6f6',
              alignItems: 'center', borderRadius: 10
            }}>

              <View style={{ width: 30, height: 30 }}>
                <Image source={require('../../assets/buscador/lupa.jpg')}
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


          <ScrollView>

            {/* ----------------------------------------------------------- */}

            <View style={{
              flex: 1, marginHorizontal: 16, flexDirection: 'row', marginBottom: 10,
            }}>

              <View style={{ flex: 2 }}>
                <Image source={require(`../../assets/influencers/dos.png`)}
                  style={{
                    width: 50, height: 50,
                    borderRadius: 10
                  }}
                />
              </View>

              <View style={{
                flex: 8, flexDirection: 'column',
                paddingBottom: 10, borderBottomColor: '#e1e3e6', borderBottomWidth: 1
              }}>
                <View style={{ flexDirection: 'row' }}>



                  <View style={{
                    width: 15,
                    height: 15,
                    marginRight: 5,
                    marginTop: 3,
                    display: this.state.reloj2
                  }}>
                    <Image
                      source={require('../../assets/icons_genGMI/relojMesage.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                  <Text style={{
                    flex: 6, fontSize: 14,
                    color: '#312f3d', fontWeight: '500'

                  }}>{this.state.mensaje2}</Text>
                  <Text style={{
                    flex: 2, fontSize: 12, marginRight: '7%',
                    color: '#677183'
                  }}>{this.state.tiempo2}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                  <Text style={{
                    flex: 7, fontSize: 14,
                    color: '#312f3d'
                  }}>{this.state.Use2mensa}</Text>

                  <View style={{ alignItems: 'flex-end' }}>
                    <Image
                      source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                      style={{
                        width: 25,
                        height: 25,
                        flex: 1
                      }}
                    />

                  </View>

                </View>
                <View style={{}}>
                  <Text style={{
                    fontSize: 12,
                    color: '#677183'
                  }}>{this.state.mensaFinal2}</Text>
                </View>

              </View>


            </View>
            {/* ----------------------------------------------------------- */}



            {/* --------------- BLOQUE MENSAJE 2 PARTES-------------------- */}
            <View style={{
              flex: 1, marginHorizontal: 16, flexDirection: 'row', marginBottom: 10,
            }}>

              <View style={{ flex: 2 }}>
                <Image source={require(`../../assets/influencers/tres.png`)}
                  style={{
                    width: 50, height: 50,
                    borderRadius: 10
                  }}
                />
              </View>

              <View style={{
                flex: 8, flexDirection: 'column',
                paddingBottom: 10, borderBottomColor: '#e1e3e6', borderBottomWidth: 1
              }}>

                <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                  <Text style={{
                    flex: 6, fontSize: 14,
                    color: '#312f3d'
                  }}>{this.state.Use3mensa}</Text>

                  <Text style={{
                    flex: 3, fontSize: 12, right: 20,
                    color: '#677183'
                  }}>{this.state.tiempo3}</Text>

                  <View style={{ position: 'absolute', top: 15, left: '91%' }}>
                    <Image
                      source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                      style={{
                        width: 25,
                        height: 25,

                      }}
                    />

                  </View>

                </View>
                <View style={{}}>
                  <Text style={{
                    fontSize: 12,
                    color: '#677183'
                  }}>{this.state.mensaFinal3}</Text>
                </View>

              </View>


            </View>
            {/* ----------------------------------------------------------- */}

            <View style={{
              flex: 1, marginHorizontal: 16, flexDirection: 'row', marginBottom: 10,
            }}>

              <View style={{ flex: 2 }}>
                <Image source={require(`../../assets/influencers/dos.png`)}
                  style={{
                    width: 50, height: 50,
                    borderRadius: 10
                  }}
                />
              </View>

              <View style={{
                flex: 8, flexDirection: 'column',
                paddingBottom: 10, borderBottomColor: '#e1e3e6', borderBottomWidth: 1
              }}>
                <View style={{ flexDirection: 'row' }}>



                  <View style={{
                    width: 15,
                    height: 15,
                    marginRight: 5,
                    marginTop: 3,
                    display: this.state.reloj2
                  }}>
                    <Image
                      source={require('../../assets/icons_genGMI/relojMesage.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                  <Text style={{
                    flex: 6, fontSize: 14,
                    color: '#312f3d', fontWeight: '500'

                  }}>{this.state.mensaje2}</Text>
                  <Text style={{
                    flex: 2, fontSize: 12, marginRight: '7%',
                    color: '#677183'
                  }}>{this.state.tiempo2}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                  <Text style={{
                    flex: 7, fontSize: 14,
                    color: '#312f3d'
                  }}>{this.state.Use2mensa}</Text>

                  <View style={{ alignItems: 'flex-end' }}>

                    <Image
                      source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                      style={{
                        width: 25,
                        height: 25,
                        flex: 1
                      }}
                    />

                  </View>

                </View>
                <View style={{}}>
                  <Text style={{
                    fontSize: 12,
                    color: '#677183'
                  }}>{this.state.mensaFinal2}</Text>
                </View>

              </View>


            </View>
            {/* ----------------------------------------------------------- */}



            {/* --------------- BLOQUE MENSAJE 2 PARTES-------------------- */}
            <View style={{
              flex: 1, marginHorizontal: 16, flexDirection: 'row', marginBottom: 10,
            }}>

              <View style={{ flex: 2 }}>
                <Image source={require(`../../assets/influencers/tres.png`)}
                  style={{
                    width: 50, height: 50,
                    borderRadius: 10
                  }}
                />
              </View>

              <View style={{
                flex: 8, flexDirection: 'column',
                paddingBottom: 10, borderBottomColor: '#e1e3e6', borderBottomWidth: 1
              }}>

                <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                  <Text style={{
                    flex: 6, fontSize: 14,
                    color: '#312f3d'
                  }}>{this.state.Use3mensa}</Text>

                  <Text style={{
                    flex: 3, fontSize: 12, right: 20,
                    color: '#677183'
                  }}>{this.state.tiempo3}</Text>

                  <View style={{ position: 'absolute', top: 15, left: '91%' }}>
                    <Image
                      source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                      style={{
                        width: 25,
                        height: 25,

                      }}
                    />

                  </View>

                </View>
                <View style={{}}>
                  <Text style={{
                    fontSize: 12,
                    color: '#677183'
                  }}>{this.state.mensaFinal3}</Text>
                </View>

              </View>


            </View>
            {/* ----------------------------------------------------------- */}


          </ScrollView>

        </View>

      </View>



    );
  }

}





const styles = StyleSheet.create({

  //en lista influencer
  estrellasTrending: {
    paddingTop: 7,
    marginLeft: -6,
    flexDirection: 'row',

  },
  socialBotonRojo: {
    backgroundColor: '#ff5a60',
    alignItems: 'center',
    borderRadius: 27,
    width: '80%',
    paddingVertical: 5,
    paddingHorizontal: 6,


  },
  socialBotonBlanco: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 27,
    width: '80%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#312f3d',
  },
  pentaIcon: {
    color: 'white',
    fontSize: 13,

  },

});