import React, { Component } from 'react';
import {
  Text, ImageBackground,
  View, Image, ScrollView

} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./PastStreaming.style"
import BlockChat from "./componentes/bloqueMensaje"


export default class PastStreaming extends Component {

  static navigationOptions = {
    header: null,
  };






  constructor(props) {
    super(props);

    this.state = {
      imag1: require("../../../assets/mixto/videojuego.jpg"),
      users: require("../../../assets/icons_genGMI/userWhite.png"),
      influImag: require("../../../assets/influencers/MandyJTV/mandy4.jpg"),
      numUsers: 134
    };

    this.usuarios = [
      {
        nombre: 'Sophia Lindsey',
        mensaje: 'How many days do you think will take us to discover Paris?',
        foto: require('../../../assets/usuarios/cinco.png'),
      },
      {
        nombre: 'Ian Curtis',
        mensaje: 'All the people new series!!!!!🌋',
        foto: require('../../../assets/usuarios/cuatro.png'),
      },
      {
        nombre: 'Marco Aurelio',
        mensaje: 'master trainer battle 😂',
        foto: require('../../../assets/usuarios/tres.png'),
      },
      {
        nombre: 'Lian Newton',
        mensaje: 'You still have to do kakuna 😅',
        foto: require('../../../assets/usuarios/dos.png'),
      },
      {
        nombre: 'Sophia Lindsey',
        mensaje: 'How many days do you think will take us to discover Paris?',
        foto: require('../../../assets/usuarios/cinco.png'),
      },
      {
        nombre: 'Sophia Lindsey',
        mensaje: 'How many days do you think will take us to discover Paris?',
        foto: require('../../../assets/usuarios/cinco.png'),
      },
      {
        nombre: 'Ian Curtis',
        mensaje: 'All the people new series!!!!!🌋',
        foto: require('../../../assets/usuarios/cuatro.png'),
      },

    ]

  }


  componentDidMount() {
    //LO QUE VENDRIA DE UNA BASE DE DATOS


  }

  render() {
    return (
      <View style={{
        flex: 1,
      }}>

        <ImageBackground source={this.state.imag1} style={{ flex: 4.5 }}>
          <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <View style={styles.cajaTrans}></View>
            <View style={{
              flexDirection: 'row', paddingVertical: hp('0.5%'),
              width: wp('20%')
            }}>
              <Image
                source={this.state.users}
                style={{
                  width: 20,
                  height: 20
                }}
              />
              <View style={{}}>
                <Text style={{
                  marginLeft: wp('1%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>{this.state.numUsers}
                </Text>

              </View>

            </View>
          </View>
          <View style={{
            flex: 6.5,
            marginHorizontal: '2%',
            justifyContent: 'flex-end'
          }}>
            <View style={styles.borderImagUser}>
              <Image
                source={this.state.influImag}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 15
                }} />
            </View>
          </View>
          <View style={{ flex: 1.5 }}>

          </View>
        </ImageBackground>

        <View style={{
          flex: 5.5
        }}>

          <ScrollView>

            <View style={{ marginTop: hp('2.5%') }}>
              {this.usuarios.map((item, i) => {
                return (
                  <BlockChat
                    key={i}
                    foto={item.foto}
                    nombre={item.nombre}
                    mensaje={item.mensaje}
                  />
                )
              })
              }
            </View>

          </ScrollView>

        </View>
      </View>
    );
  }
}
