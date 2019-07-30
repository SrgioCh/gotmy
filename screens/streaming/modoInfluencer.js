import React from 'react';
import {
  Platform, StyleSheet, Text, Dimensions, ScrollView,
  TextInput, TouchableOpacity, View, Image, ImageBackground,
  TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import OpcionesUno from "./componentes/opcionesUno"
import { Ionicons } from "@expo/vector-icons"
import Modales from "./componentes/modales"

export default class ModoInfluencer extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

      imagModerador: null,
      nombreMod: null,
      cargo: null,

      //SERAN LOS QUE  APARESCAN EN EL CHAT DE TXTO
      usuarios: [
        {
          foto: require('../../assets/usuarios/cinco.png'),
          nick: 'Clide Collins',
          mensj: 'Everithing and evereyone else  around you can effect your self',
        },
        {
          foto: require('../../assets/usuarios/tres.png'),
          nick: 'Flora sephens',
          mensj: 'Everithing and evereyone else  around you can effect your self',
        }, {
          foto: require('../../assets/usuarios/cuatro.png'),
          nick: 'Louis Singleton',
          mensj: 'Everithing and evereyone else  around you can effect your self',
        }, {
          foto: require('../../assets/usuarios/dos.png'),
          nick: 'Ethan Ramos',
          mensj: 'Everithing and evereyone else  around you can effect your self',
        }
      ],



      seleccionables: [
        {
          foto: require('../../assets/usuarios/usera.png'),
          nick: 'Clide Collins',
        },
        {
          foto: require('../../assets/usuarios/userb.png'),
          nick: 'Flora sephens',
        },
        {
          foto: require('../../assets/usuarios/userc.png'),
          nick: 'Louis Singleton',
        },
        {
          foto: require('../../assets/usuarios/userd.png'),
          nick: 'Ethan Ramos',
        },
        {
          foto: require('../../assets/usuarios/usere.png'),
          nick: 'Clide Collins',
        },
        {
          foto: require('../../assets/usuarios/userf.png'),
          nick: 'Flora sephens',
        },
        {
          foto: require('../../assets/usuarios/userb.png'),
          nick: 'Clide Collins',
        },
        {
          foto: require('../../assets/usuarios/userd.png'),
          nick: 'Louis Singleton',
        },
        {
          foto: require('../../assets/usuarios/usera.png'),
          nick: 'Ethan Ramos',
        },
      ],




      //en la parte inicial sin seleccioanr Video
      displicoInit: 'flex',
      displvidFot: 'none',
      //para redimensionado en caso teclado
      //*normal :
      heiteclado: '10%',
      heichat: '30%',
      displChat: 'flex',




      //para seleccion de opciones :
      displMicro: 'none',
      icoChat: require('../../assets/streamingIcon/chat.png'),
      icoVide: require('../../assets/streamingIcon/videoNo.png'),
      icoReload: require('../../assets/streamingIcon/reload.png'),
      icoCoach: require('../../assets/streamingIcon/coachmode.png'),
      icoMicro: require('../../assets/streamingIcon/microLiveOf.png'),

      mensVidFone: ` 19 Viewers \n  Waiting Raise Hand...`,

      displchangeCam: 'none',//aparece cuando seleccionamos el video

      //para caja de texto en diferente pantalla
      margintextTop: null,
      //para la caja de texto 
      habilitaInput: true,

      //Para manejar las pantallas modal
      flexInit: 2.5,
      blockModer: 'none',
      blocNormal: 'flex',


      //PARA MODAL MODERADOR
      disfotInicio: 'flex',
      disfotmoder: 'none',
      iconMod: require("../../assets/icons_genGMI/banuser.png"),
      titMod: "Choose Moderator",
      //PARA MODAR HANDLER
      blockRaiser: 'none',
      iconRais: require('../../assets/streamingIcon/reload.png'),
      titRais: "18 Viewers Raise Hand"
    },



      users = this.state.usuarios;
  } // fin del constructor

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      displChat: 'none',
    })
    if (screenHeight >= 776) {
      //alert('llega aqui 2')
      this.setState({
        margintextTop: Platform.OS === 'ios' ? hp('0.1%') : hp('6%'),

      })
    } else {
      this.setState({
        margintextTop: Platform.OS === 'ios' ? hp('0.1%') : hp('-9%'),

      })
    }
  }


  _keyboardDidHide = () => {

    this.setState({
      displChat: 'flex',

      margintextTop: null,
    })

  }

  microfonoNo = () => {
    //alert(users)
    this.setState({
      icoChat: require('../../assets/streamingIcon/chat.png'),
      usuarios: users,
      habilitaInput: true,
    })
  }

  // para moderadores
  recogeDeHijo = (datos) => {
    // console.log(datos.nick)
    this.setState({
      imagModerador: datos.foto,
      disfotInicio: 'none',
      disfotmoder: 'flex',
      nombreMod: datos.nick,
      cargo: 'Moderator',
      flexInit: 2.5,
      blockModer: 'none',
      blocNormal: 'flex',

    })
  }
  // para raiser
  recogeDeHijo2 = (datos) => {
    console.log("el raiser elegido  " + datos.nick)
    this.setState({


      flexInit: 2.5,
      blockRaiser: 'none',
      blocNormal: 'flex',

    })
  }



  selecModer = () => {

    this.setState({
      flexInit: 1.5,
      blockModer: 'flex',
      blocNormal: 'none',

    })
  }

  selecRaiser = () => {


    this.setState({
      flexInit: 1.5,

      blockRaiser: 'flex',
      blocNormal: 'none',

    })

  }

  render() {

    screenHeight = Dimensions.get('window').height;

    // alert(screenHeight)

    if (screenHeight <= 592) {


    } else if (screenHeight <= 678) {// mi movil

    } else if (screenHeight <= 684) {

    } else if (screenHeight <= 775) {

    } else {

    }


    return (

      <ImageBackground source={require('../../assets/influencers/bonita.jpg')}
        style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 2, flexDirection: 'row', marginHorizontal: wp('4%') }}>

              <TouchableOpacity
                style={{ flex: 1.8, justifyContent: 'center', alignItems: 'flex-start' }}
                onPress={() => { this.selecModer() }} >

                <View style={{ display: this.state.disfotInicio }}>


                  <View style={{
                    paddingHorizontal: hp('3.5%'), paddingVertical: hp('3.5%'), backgroundColor: 'black', opacity: 0.5, zIndex: 1,
                    borderRadius: Platform.OS === 'ios' ? 50 : 30, borderColor: 'grey', borderWidth: wp('0.5%')
                  }} >

                  </View>
                  <Image source={require('../../assets/icons_genGMI/banuser.png')}
                    style={{ width: 35, height: 35, zIndex: 3, position: "absolute", left: wp('3%'), top: hp('1.5%') }}
                  />
                </View>

                <View style={{ display: this.state.disfotmoder }}>
                  <Image source={this.state.imagModerador}
                    style={{ width: 50, height: 50, zIndex: 3, borderRadius: Platform.OS === 'ios' ? 25 : 30 }}
                  />
                </View>



              </TouchableOpacity>
              <View style={{ flex: 6.2, justifyContent: 'center' }}>
                <Text style={{
                  color: 'white', fontSize: wp('4.5%'), fontWeight: '500'
                }}>{this.state.nombreMod}</Text>
                <View style={{}}>
                  <Text style={{
                    color: 'white', fontSize: wp('3.5%'), fontWeight: '200'
                  }}>{this.state.cargo}</Text>

                </View>



              </View>
              <View style={{ flex: 2, justifyContent: 'center'/*backgroundColor:'yellow'*/, paddingTop: hp('5%') }}>
                <View style={{ display: this.state.displicoInit }}>


                  <View style={{ flexDirection: 'row', marginBottom: hp('2%'), alignItems: 'flex-end' }}>
                    <Image source={require('../../assets/icons_genGMI/userWhite.png')}
                      style={{ width: 18, height: 16, marginLeft: wp('1%') }}
                    />
                    <Text style={{
                      color: 'white', fontSize: wp('4%'), fontWeight: '200'
                    }}>4.354</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/streamingIcon/upload.png')}
                      style={{ width: 50, height: 48, borderRadius: 25 }}
                    />
                  </View>
                </View>
                <View style={{ display: this.state.displvidFot }}>
                  <View style={{ alignItems: 'center', marginBottom: hp('-3%') }}>
                    <Image source={require('../../assets/influencers/spffiele.png')}
                      style={{
                        width: wp('22%'), height: hp('19%'), borderColor: 'white',
                        borderRadius: 15, borderWidth: wp('0.5%')
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {

              Keyboard.dismiss();
              //   console.log('presionaste')
              this.setState({
                flexInit: 2.5,
                blockModer: 'none',
                blocNormal: 'flex',
                blockRaiser: 'none',
                icoCoach: require('../../assets/streamingIcon/coachmode.png'),
              })

            }} accessible={false}>
            <View style={{ flex: this.state.flexInit }}>
            </View>
          </TouchableWithoutFeedback>
          <View style={{ flex: 4.5, display: this.state.blocNormal, marginHorizontal: wp('4%') }}>
            <View style={{
              display: this.state.displChat, flex: 1, flexDirection: 'row', height: hp(this.state.heichat), marginTop: hp('8%'),
              paddingBottom: hp('1.5%'),/* backgroundColor:'pink' */
            }}>

              <View style={{ flex: 8.5 }}>
                <ScrollView >
                  {
                    this.state.usuarios.map((item, i) => {
                      return (
                        <View key={i} style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                          <View style={{ flex: 1.3, paddingVertical: hp('1%') }}>
                            <Image source={item.foto}
                              style={{ width: 30, height: 29, borderRadius: 15 }}
                            />
                          </View>
                          <View style={{ flex: 8.7, /* backgroundColor:'green'  */ }}>
                            <Text style={{ color: 'white', fontSize: wp('3.5%'), fontWeight: 'normal' }} >
                              <Text style={{
                                color: '#ff5a60', fontSize: wp('4%'), fontWeight: '500'
                              }}>{item.nick}</Text>{' '}{item.mensj}</Text>
                          </View>
                        </View>
                      )


                    })

                  }
                </ScrollView>
                <View style={{ display: this.state.displMicro/* backgroundColor:'red' */, height: hp('10%') }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/influencers/spffiele.png')}
                          style={{ width: 50, height: 48, borderRadius: Platform.OS === 'ios' ? 25 : 30, zIndex: 3 }}
                        />
                        <Image source={require('../../assets/usuarios/userc.png')}
                          style={{ width: 50, height: 48, borderRadius: Platform.OS === 'ios' ? 25 : 30, marginLeft: wp('-5%'), zIndex: 2 }}
                        />
                        <Image source={require('../../assets/usuarios/usera.png')}
                          style={{ width: 50, height: 48, borderRadius: Platform.OS === 'ios' ? 25 : 30, marginLeft: wp('-5%'), zIndex: 1 }}
                        />

                      </View>

                    </View>
                    <View style={{ flex: 6, justifyContent: 'center' }}>
                      <Text style={{ color: 'white', fontSize: wp('3.5%'), fontWeight: 'normal' }}>
                        {this.state.mensVidFone}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity
                  style={{ display: this.state.displchangeCam, flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <Image source={require('../../assets/streamingIcon/changecam.png')}
                    style={{ width: 40, height: 38, borderRadius: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}
                  onPress={() => {

                    if (this.state.displchangeCam == 'none') {
                      this.setState({
                        displchangeCam: 'flex',
                        icoVide: require('../../assets/streamingIcon/video.png'),
                        displicoInit: 'none',
                        displvidFot: 'flex',
                        //  mensVidFone:" You're In!\n Share your troughts!",
                      })
                    } else {
                      this.setState({
                        displchangeCam: 'none',
                        icoVide: require('../../assets/streamingIcon/videoNo.png'),
                        displicoInit: 'flex',
                        displvidFot: 'none',
                        //   mensVidFone:" Wait for your turn\n to speak",

                      })
                    }

                  }}>
                  <Image source={this.state.icoVide}
                    style={{ width: 40, height: 38, borderRadius: 20 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                  onPress={() => {

                    if (this.state.icoChat == require('../../assets/streamingIcon/chat.png')) {
                      this.setState({
                        // displMicro:'flex'   
                        icoMicro: require('../../assets/streamingIcon/microRed.png'),
                        icoChat: require('../../assets/streamingIcon/chatNo.png'),
                        usuarios: [],
                        habilitaInput: false,
                      })
                    } else {

                      this.setState({
                        // displMicro:'flex'   
                        icoMicro: require('../../assets/streamingIcon/microLiveOf.png'),

                      })
                      this.microfonoNo();
                    }
                  }
                  }

                >

                  <Image source={this.state.icoMicro}
                    style={{ width: 40, height: 38, borderRadius: 20 }}
                  />
                </TouchableOpacity>



                <TouchableOpacity
                  style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                  onPress={() => {


                    if (this.state.icoCoach == require('../../assets/streamingIcon/coachmode.png')) {
                      this.setState({
                        icoCoach: require('../../assets/streamingIcon/coachmodeOn.png'),

                      })
                      this.selecRaiser()
                    } else {
                      this.setState({
                        icoCoach: require('../../assets/streamingIcon/coachmode.png')
                      })

                    }


                  }}
                >
                  <Image source={this.state.icoCoach}
                    style={{ width: 40, height: 38, borderRadius: 20 }}
                  />

                </TouchableOpacity>




                <TouchableOpacity
                  style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start' }}
                  onPress={() => {

                    if (this.state.displMicro == 'none') {
                      this.setState({
                        displMicro: 'flex',
                        icoReload: require('../../assets/streamingIcon/reloadselec.png'),
                        habilitaInput: true,
                      })
                      this.microfonoNo();
                    } else {
                      this.setState({
                        displMicro: 'none',
                        icoReload: require('../../assets/streamingIcon/reload.png')
                      })

                    }

                  }}
                >
                  <Image source={this.state.icoReload}
                    style={{ width: 40, height: 38, borderRadius: 20 }}
                  />

                </TouchableOpacity>
              </View>
            </View>



            <View style={{ height: hp(this.state.heiteclado), marginTop: this.state.margintextTop }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 8.5, alignItems: 'center', justifyContent: 'center' }}>

                  <View style={{
                    paddingVertical: Platform.OS === 'ios' ? hp('2.5%') : hp('1.5%'), backgroundColor: 'black', opacity: 0.7, paddingTop: Platform.OS === 'ios' ? hp('2.3%') : hp('2.3%'),
                    zIndex: 1, paddingLeft: wp('3%'), width: wp('75%'), borderRadius: hp('10%')
                  }}>

                    <TextInput
                      style={{
                        color: 'white',
                        zIndex: 4,
                      }}
                      underlineColorAndroid="transparent"
                      placeholder="Say something ......"
                      placeholderTextColor="white"
                      onChangeText={(text2) =>
                        this.setState({ text2 })}

                      textAlignVertical='top'
                      value={this.state.text2}
                      editable={this.state.habilitaInput}
                      selectTextOnFocus={this.state.habilitaInput}
                    />
                  </View>
                </View>
                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>

                  {/*  <Image source={this.state.icoChat} 
                                     style={{width:40,height:38,borderRadius:20}}
                                     /> */}
                  <Ionicons name="md-paper-plane" size={35} color="#e2e7ee" />
                </View>




              </View>

            </View>
          </View>



          {/*     elegir moderador    */}
          <View style={{ flex: 5.5, display: this.state.blockModer }}>

            <Modales icon={this.state.iconMod} tit={this.state.titMod}
              selec={this.state.seleccionables} enviaAPadre={this.recogeDeHijo.bind(this)} />

            <View style={{
              zIndex: 1, position: 'absolute', height: '100%', width: '100%',
              borderTopLeftRadius: 20, borderTopRightRadius: 20,
              bottom: 0, backgroundColor: 'black', opacity: 0.7
            }}>


            </View>

          </View>

          {/*     elegir Raiser  */}
          <View style={{ flex: 5.5, display: this.state.blockRaiser }}>

            <Modales icon={this.state.iconRais} tit={this.state.titRais}
              selec={this.state.seleccionables} enviaAPadre={this.recogeDeHijo2.bind(this)} />

            <View style={{
              zIndex: 1, position: 'absolute', height: '100%', width: '100%',
              borderTopLeftRadius: 20, borderTopRightRadius: 20,
              bottom: 0, backgroundColor: 'black', opacity: 0.7
            }}>
            </View>

          </View>


        </View>
      </ImageBackground>

    );
  }
}




const styles = StyleSheet.create({



});