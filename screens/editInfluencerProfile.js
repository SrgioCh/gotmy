import React from 'react';
import {
  Platform, StyleSheet, View, Alert,
  Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Dimensions,
  ScrollView, Image, Modal
} from 'react-native';
import Button from 'react-native-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Editinfluencerprofile extends React.Component {


  static navigationOptions = {
    header: null,
  };


  constructor(props) {
    super(props)
    this.state = {
      linkedin: false,
      caja1: styles.socialBotone,
      marca1: styles.Textsinmarcar,
      texto1: 'Connect',

      twitch: false,
      caja2: styles.socialBotone,
      marca2: styles.Textsinmarcar,
      texto2: 'Connect',

      twiter: false,
      caja3: styles.socialBotone,
      marca3: styles.Textsinmarcar,
      texto3: 'Connect',

      yutub: false,
      caja4: styles.socialBotone,
      marca4: styles.Textsinmarcar,
      texto4: 'Connect',

      //trending 
      source7: require('../assets/manga.jpg'),
      source8: require('../assets/motor.jpg'),
      source9: require('../assets/nature.jpg'),
      //PARA VENTANA MODAL
      modalVisible: false,

    }
  } /*  fin del constructor */

  //PARA VENTANA MODAL
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {

    let screenWidth = Dimensions.get('window').width; //para poner la imagen normal
    let screenHeight = Dimensions.get('window').height;


    if (screenHeight <= 592) { //1080 * 1920  xxhdpi
      widFot = 330
      widImag = 104
      heImag = 104
      leftBut = 90
      leftEN = 110
    } else if (screenHeight <= 605) { //mopvil de  david

      widFot = '92%'
      widImag = 104
      heImag = 104
      leftBut = 90
      leftEN = 110
    } else if (screenHeight <= 678) { // mi movil
      widFot = '92%'
      widImag = 104
      heImag = 104
      leftBut = 90
      leftEN = 110
    } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
      widFot = '93%'
      widImag = 122
      heImag = 120
      leftBut = 130
      leftEN = 150
    } else if (screenHeight <= 775) {//1440 *2880 :560dpi
      widFot = '93%'
      widImag = 122
      heImag = 120
      leftBut = 130
      leftEN = 150
    } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9
      widFot = '93%'
      widImag = 104
      heImag = 104
      leftBut = 90
      leftEN = 110
    } else { // 800 = 480 * 800 mdpi
      widFot = '93%'
      widImag = 104
      heImag = 104
      leftBut = 90
      leftEN = 110
    }



    return (

      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}
        >

          <View style={styles.modal}>
          </View>

          <View style={{
            backgroundColor: 'white', borderRadius: 20,
            position: 'absolute', left: '14%',
            top: '30%', marginHorizontal: '5%', paddingHorizontal: '10%',
            paddingVertical: Platform.OS === 'ios' ? hp('15%') : '15%'
          }}>

            <View style={{ alignItems: 'center', marginTop: 10 }}>



              <Text style={{
                color: '#312f3d', fontSize: 20, fontWeight: '500'
              }} >Changes done!</Text>


              <View style={{
                backgroundColor: '#ff5a60',
                width: '90%',
                paddingVertical: 13,
                borderRadius: 27,
                textAlign: "center",
                marginTop: 20,
                marginHorizontal: '4%',

              }}>
                <Button
                  onPress={() => this.toggleModal(!this.state.modalVisible)}
                  style={{ color: 'white', fontSize: 17 }}
                >Continue</Button>
              </View>





            </View>

          </View>


        </Modal>








        <View style={{
          flex: 1,
          marginTop: '2%'
        }}>



          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{
              flex: 1, flexDirection: 'row',
              borderBottomWidth: 2, borderBottomColor: '#C3C1C0'
            }}>
              <View style={{ flex: 1, marginLeft: '4%', marginTop: Platform.OS === 'ios' ? '12%' : '14%' }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.pop()}
                >
                  <Image
                    source={require('../assets/icons_genGMI/Back.png')}
                    style={{

                      width: 20,
                      height: 20,


                    }}
                  />







                </TouchableOpacity>
              </View>
              <View style={{
                flex: 7,
                alignItems: 'center'
              }}>
                <Text style={{
                  marginTop: hp('6%'),
                  color: '#312f3d', fontSize: 17, fontWeight: '500'
                }}>Edit Influencer Profile</Text>
                <Text style={{ marginTop: '4%' }}>{' '}</Text>
              </View>
              <View style={{
                flex: 2, marginTop: Platform.OS === 'ios' ? '12%' : '14%',
                marginRight: '4%', alignItems: 'flex-end'
              }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("profile2")}
                >
                  <Text style={{
                    color: '#ff5a60', fontSize: 15, fontWeight: '200'
                  }}>cancel</Text>
                </TouchableOpacity>
              </View>
            </View>


            <Image style={[styles.imagen, { width: Platform.OS === 'ios' ? '91%' : widFot }]}

              source={require('../assets/blanco.jpg')}
            />

            <Image style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              top: Platform.OS === 'ios' ? '17%' : '16%',
              left: wp('43%'),
              position: 'absolute',

            }}
              source={require('../assets/icons_genGMI/foto.png')}
            />



            <Text style={styles.text}>
              <Text >Basic information</Text>
            </Text>

            <Text style={styles.text2}>
              <Text >Full name</Text>
            </Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.input}
            />


            <Text style={styles.text2}>
              <Text >Usarname</Text>
            </Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.input}
            />

            <Text style={styles.text2}>
              <Text >Biography</Text>
            </Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.input}
            />


            <Text style={styles.text2}>

              <Text >Based on</Text>
            </Text>

            {/*  BASED ON*/}
            <View>
              <Image style={{
                width: 20,
                height: 20,
                top: '26%',
                left: '10%',
                position: 'absolute',

              }}
                source={require('../assets/icons_genGMI/ubicacionrojo.png')}
              />

              <TextInput
                underlineColorAndroid='transparent'
                style={styles.inputBaseon}
              />

            </View>
            {/*-----------------FIN DE   BASED ON*/}

            {/* My categories */}

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between', paddingVertical: 10,
              marginTop: 20, marginHorizontal: '4%'
            }}>
              <View >
                <Text style={{ color: "#312f3d", fontSize: 17 }}>My categories</Text>
              </View>
              <TouchableOpacity style={{ flexDirection: 'row' }}
                onPress={
                  () => this.props.navigation.navigate('editInfluencerCategories')
                }
              >

                <Text style={{ color: "#ff5a60", fontSize: 16 }}>Edit categories</Text>
                <Text style={{ color: "#ff5a60", fontSize: 16, fontWeight: 'bold' }}> > </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filas}>
              <TouchableOpacity
                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                onPress={() => {
                  if (this.state.source7 == require("../assets/manga.jpg")) {
                    this.setState({
                      source7: require("../assets/13.png")
                    })
                  }
                  else {
                    this.setState({
                      source7: require("../assets/manga.jpg")
                    })
                  }
                }}
              >
                <Text style={styles.textoprueba}>
                  Manga
          </Text>
                <Image source={this.state.source7}
                  style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                />
              </TouchableOpacity>


              <TouchableOpacity
                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                onPress={() => {
                  if (this.state.source8 == require("../assets/motor.jpg")) {
                    this.setState({
                      source8: require("../assets/12.png")
                    })
                  }
                  else {
                    this.setState({
                      source8: require("../assets/motor.jpg")
                    })
                  }
                }}
              >
                <Text style={styles.textoprueba}>
                  Motor
        </Text>
                <Image source={this.state.source8}
                  style={{ borderRadius: 10, width: '100%', height: '100%' }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                onPress={() => {
                  if (this.state.source9 == require("../assets/nature.jpg")) {
                    this.setState({
                      source9: require("../assets/11.png")
                    })
                  }
                  else {
                    this.setState({
                      source9: require("../assets/nature.jpg")
                    })
                  }
                }}
              >
                <Text style={styles.textoprueba}>
                  Nature,{'\n'}Outdoors and {'\n'}Oets
        </Text>
                <Image source={this.state.source9}
                  style={{ borderRadius: 10, width: '100%', height: '100%' }}
                />
              </TouchableOpacity>

            </View>




            {/* lenguaje*/}


            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between', paddingVertical: 10,
              marginTop: 20, marginHorizontal: '4%'
            }}>
              <View >
                <Text style={{ color: "#312f3d", fontSize: 17 }}>Language</Text>
              </View>
              <TouchableOpacity style={{ flexDirection: 'row' }}
                onPress={() => this.props.navigation.navigate('becomeInfluencer5')

                }
              >

                <Text style={{ color: "#ff5a60", fontSize: 16 }}>English, Spanish</Text>
                <Text style={{ color: "#ff5a60", fontSize: 16, fontWeight: 'bold' }}> > </Text>
              </TouchableOpacity>
            </View>







            <Text style={styles.tituloConect} >Connect  your social networks</Text>

            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{ flex: 1.3 }}>
                <Image style={{ height: 35, width: 35 }}
                  source={require('../assets/social/Linkedin.png')}
                />
              </View>

              <View style={{ flex: 4.4, justifyContent: 'center' }}>
                <Text style={{ color: '#312f3d', fontSize: wp('4%'), fontWeight: '500' }}>Linkedin</Text>
              </View>

              <View style={{ flex: 4.3 }}>
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={() => {
                    if (this.state.linkedin !== false) {
                      this.setState({
                        caja1: styles.socialBotone,
                        marca1: styles.Textsinmarcar,
                        texto1: 'Connect',
                        linkedin: false,
                      })
                    }
                    else {
                      this.setState({
                        linkedin: true,
                        caja1: styles.socialBotonBlanco,
                        marca1: ' ',
                        texto1: '✔ Connected',
                      })
                    }
                  }}
                >
                  <View style={this.state.caja1} >
                    <Text style={this.state.marca1}>
                      {this.state.texto1}
                    </Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
            {/* --------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: hp('2%') }}>

              <View style={{ flex: 1.3 }}>
                <Image style={{ height: 35, width: 35 }}
                  source={require('../assets/social/Twitch.png')}
                />
              </View>

              <View style={{ flex: 4.4, justifyContent: 'center' }}>
                <Text style={{ color: '#312f3d', fontSize: wp('4%'), fontWeight: '500' }}>Twitch</Text>
              </View>
              <View style={{ flex: 4.3 }}>
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={() => {
                    if (this.state.twitch !== false) {
                      this.setState({
                        caja2: styles.socialBotone,
                        marca2: styles.Textsinmarcar,
                        texto2: 'Connect',
                        twitch: false,
                      })
                    } else {
                      this.setState({
                        twitch: true,
                        caja2: styles.socialBotonBlanco,
                        marca2: ' ',
                        texto2: '✔ Connected',
                      })
                    }
                  }}
                >
                  <View style={this.state.caja2} >
                    <Text style={this.state.marca2}>
                      {this.state.texto2}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            {/* ----------------------------------------------- */}



            {/* --------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: hp('2%') }}>
              <View style={{ flex: 1.3 }}>
                <Image style={{ height: 35, width: 35 }}
                  source={require('../assets/social/Twitter.png')}
                />
              </View>

              <View style={{ flex: 4.4, justifyContent: 'center' }}>
                <Text style={{ color: '#312f3d', fontSize: wp('4%'), fontWeight: '500' }}>Twitter</Text>
              </View>

              <View style={{ flex: 4.3 }}>
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={() => {
                    if (this.state.twiter !== false) {
                      this.setState({
                        caja3: styles.socialBotone,
                        marca3: styles.Textsinmarcar,
                        texto3: 'Connect',
                        twiter: false,
                      })
                    }
                    else {
                      this.setState({
                        twiter: true,
                        caja3: styles.socialBotonBlanco,
                        marca3: ' ',
                        texto3: '✔ Connected',
                      })
                    }
                  }}
                >
                  <View style={this.state.caja3} >
                    <Text style={this.state.marca3}>
                      {this.state.texto3}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* ----------------------------------------------- */}




            {/* --------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: hp('2%') }}>
              <View style={{ flex: 1.3 }}>
                <Image style={{ height: 35, width: 35 }}
                  source={require('../assets/social/Youtube.png')}
                />
              </View>

              <View style={{ flex: 4.4, justifyContent: 'center' }}>
                <Text style={{ color: '#312f3d', fontSize: wp('4%'), fontWeight: '500' }}>Youtube</Text>
              </View>

              <View style={{ flex: 4.3 }}>
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={() => {
                    if (this.state.yutub !== false) {
                      this.setState({
                        caja4: styles.socialBotone,
                        marca4: styles.Textsinmarcar,
                        texto4: 'Connect',
                        yutub: false,
                      })
                    }
                    else {
                      this.setState({
                        yutub: true,
                        caja4: styles.socialBotonBlanco,
                        marca4: ' ',
                        texto4: '✔ Connected',
                      })
                    }
                  }}
                >
                  <View style={this.state.caja4} >
                    <Text style={this.state.marca4}>
                      {this.state.texto4}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>



            {/* ----------------------------------------------- */}
            <View style={{ alignItems: 'center', marginVertical: '8%', }}>
              <TouchableOpacity
                onPress={() => this.toggleModal(!this.state.modalVisible)}
                style={{

                  alignItems: 'center',
                  paddingVertical: hp('2.8%'),
                  justifyContent: 'center',
                  backgroundColor: '#ff5a60',
                  width: '90%',
                  borderRadius: wp('10%')
                }}
              >

                <Text style={{

                  color: "white",
                  fontSize: 17,

                  paddingBottom: Platform.OS === 'ios' ? hp('3%') : hp('0.8%'),

                }}>
                  Save changes
                      </Text>

              </TouchableOpacity>

            </View>



          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  //el contenedor del boton


  text: {

    textAlign: 'left',
    color: "#312f3d",
    fontSize: 17,
    fontWeight: '300',
    fontStyle: "normal",
    marginTop: '5%',
    marginLeft: 16,
  },
  subtitulo: {

    backgroundColor: 'white',
    textAlign: 'center',
    color: "gray",

    fontSize: 16,
    marginLeft: '5%',
    marginRight: '5%',
    fontWeight: "normal",
    fontStyle: "normal",


  },
  imagen: {
    marginTop: 36,
    marginLeft: 16,

    height: 210,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#312f3d',
  },
  text2: {

    backgroundColor: 'white',
    textAlign: 'left',
    color: "gray",

    marginTop: 10,
    marginLeft: 15,

  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#e2e7ee',
    borderRadius: 27,
    paddingLeft: 10,
    paddingVertical: 5,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: 15,


  },
  inputBaseon: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#e2e7ee',
    borderRadius: 27,
    padding: 5,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: 15,
    paddingVertical: 5, //base on
    paddingLeft: '15%', //base on

  },

  contentContainer: {
    paddingVertical: 20
  },
  language: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e7ee',
    marginTop: hp('2%'),
    marginBottom: 10,
    marginLeft: 15,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  languageTexto: {
    color: "#312f3d",
    fontSize: 17,

  },

  languageTexto2: {
    color: "#312f3d",
    fontSize: 17,
    //paddingBottom: 20,

    marginRight: 30,
  },

  languageBoton: {
    color: '#b3b8c1',
    fontSize: 19,
    marginLeft: -20,

    width: 20,
  },

  tituloConect: {
    color: '#312f3d',
    fontSize: 17,
    padding: 20,
  },



  //  botones  de  redes  sociales

  //al inicio
  socialBotone: {
    borderRadius: Platform.OS === 'ios' ? 18 : hp('5%'),
    backgroundColor: '#ff5a60',
    paddingVertical: 8,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ff5a60',
    alignItems: 'center'
  },
  Textsinmarcar: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: '500'
  },
  //
  socialBotonBlanco: {
    backgroundColor: 'white',
    paddingVertical: 8,
    width: '80%',
    color: 'black',
    borderRadius: Platform.OS === 'ios' ? 18 : hp('5%'),
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center'
  },



  //**** TRENDING CATEGORIES */
  filas: {
    flex: 1,
    flexDirection: 'row',
    marginTop: hp('1.5%'),
    marginHorizontal: '4%'
  },

  textoprueba: {
    position: 'absolute',
    zIndex: 3,
    color: 'white',
    fontWeight: '500',
    textAlign: 'left',
    bottom: hp('2%'),
    left: wp('2%')
  },

  //VENTANA MODAL
  // ventana modal
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    padding: 100
  },
  textmod: {
    color: '#3f2949',
    marginTop: 10
  },

  containerbuttonModal: {
    backgroundColor: '#ff5a60',
    width: '80%',
    paddingVertical: 13,
    borderRadius: 27,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,

  },

  //


});
