import React, { Component } from 'react';
import {
  Platform, AppRegistry, Alert,
  View, Text, TextInput, Dimensions,
  StyleSheet, ScrollView,
  Image, TouchableOpacity
} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

leng = [];
imag = [];
export default class DiscoPrefeLanguage extends Component {
  static navigationOptions = {
    headerTitle: 'Choose your languages',
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
        <Text style={{ color: '#ff5a60' }}>Cancel</Text>

      </View>
    ),
    headerTintColor: '#ff5a60',
  };


  state = {
    language: [{

      len: 'English',
      imagLen: require('../assets/banderasLenguaje/usa.png'),
    },
    {
      len: 'Spanish',
      imagLen: require('../assets/banderasLenguaje/spain.png'),
    },
    {
      len: 'Romanie',
      imagLen: require('../assets/banderasLenguaje/romania.png'),
    },
    {
      len: 'Italian',
      imagLen: require('../assets/banderasLenguaje/italy.png'),
    },
    {
      len: 'Portugueis',
      imagLen: require('../assets/banderasLenguaje/portugal.png'),
    },
    {
      len: 'Hindu',
      imagLen: require('../assets/banderasLenguaje/india.png'),
    },
    {
      len: 'German',
      imagLen: require('../assets/banderasLenguaje/germany.png'),
    },
    {
      len: 'French',
      imagLen: require('../assets/banderasLenguaje/france.png'),
    }
    ],

    color: 'grey',
    color2: 'red',
    check: require('../assets/icons_genGMI/checkLengNo.png'),
    check2: require('../assets/icons_genGMI/checkLeng.png'),
    cambiaste: false
  };

  cambia(x) {
    console.log('presionaste ' + x);
    if (leng[x] == this.state.color) {
      leng[x] = this.state.color2;
      imag[x] = this.state.check2;
    } else {
      leng[x] = this.state.color;
      imag[x] = this.state.check;
    }

    this.state.language.map((item, i) => {
      if (i != x) {

        leng[i] = this.state.color;
        imag[i] = this.state.check;
      }
      else {
        console.log('item elegido :   ' + item.len)
      }
    })
    this.setState({
      cambiaste: true
    })
  }

  render() {


    let screenHeight = Dimensions.get('window').height;

    if (screenHeight <= 592) { //1080 * 1920  xxhdpi

    } else if (screenHeight <= 605) { //mopvil de  david


    } else if (screenHeight <= 678) { // mi movil

    } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi

    } else if (screenHeight <= 775) {//1440 *2880 :560dpi

    } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9

    } else { // 800 = 480 * 800 mdpi

    }



    return (

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5, marginHorizontal: '4%', justifyContent: "center" }}>
          {/* BUSCADOR*/}

          <View style={{
            flexDirection: 'row', backgroundColor: '#F1F1F1', paddingLeft: '3%',
            borderRadius: hp('3%')
          }}>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icons_genGMI/searchB.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <View style={{ flex: 8.5, paddingLeft: '4%' }}>
              <TextInput
                style={{

                  height: hp('6%'),
                  width: wp('70%'),

                  borderRadius: hp('3%'),

                }}
                placeholder="Search Language"
                editable={true} // con false , no podremos escribir nada
                underlineColorAndroid="transparent"

                paddingHorizontal={5}
                onChangeText={

                  (text3) => {

                    console.log(text3)

                    busqueda = []; //metere los coches que coincidan con la letra
                    text3 = text3.toLowerCase();

                    this.state.modelos.map((item, i) => {

                      if (item.marca.toLowerCase().search(text3) != -1) {
                        busqueda.push(item);

                      }

                    }


                    )

                    if (text3 != '') {

                      this.setState({
                        modelos: busqueda //los que va encontrando
                      })
                    } else {
                      console.log('entra aquiii')

                      this.setState({
                        modelos: this.state.original //los valores originales
                      })
                    }
                  }

                }//fin de onchange
              />

            </View>


          </View>



        </View>
        <View style={{ flex: 7.5, marginHorizontal: '4%' }}>
          <ScrollView>

            {
              this.state.language.map((item, i) => {

                if (!this.state.cambiaste) {
                  leng[i] = this.state.color;
                  imag[i] = this.state.check
                }


                return (
                  <View key={i} style={{
                    flexDirection: 'row', paddingVertical: hp('2%')
                  }}>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                      <Image source={item.imagLen}
                        style={{ width: 30, height: 30 }}
                      />
                    </View>
                    <View style={{ flex: 7, justifyContent: 'center' }}>
                      <Text onPress={() => {
                        this.cambia(i)
                      }} style={{ fontSize: wp('3.5%'), color: leng[i], fontWeight: '500' }}>
                        {item.len}
                      </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image source={imag[i]}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>

                  </View>
                )
              }
              )
            }


            {/* ------------------------------------------- */}
          </ScrollView>
        </View>




        <TouchableOpacity
          style={{
            flex: 1, backgroundColor: '#ff5a60',
            alignItems: 'center', justifyContent: 'center'
          }}
          onPress={() => this.props.navigation.navigate('requesPrivMeting')}

        >

          <Text style={{
            color: 'white',
            fontSize: wp('4.5%'), letterSpacing: 0.41
          }}>
            Save changes</Text>
        </TouchableOpacity>

      </View>


    );
  }

}


const styles = StyleSheet.create({


});