import React, { Component } from 'react';
import {
   AppRegistry, Alert, TouchableOpacity, Platform,
   View, Text, TextInput, Dimensions,
   StyleSheet, ScrollView,
   Image
} from 'react-native';

import BicardView from './../components/bicardview'
import EventContents from "./../components/eventContents"

import { Ionicons } from "@expo/vector-icons"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Profilemiinfluencer extends Component {

   static navigationOptions = {
      header: null,
   };

   constructor(props) {

      super(props);

      this.state = {
         //para cardview
         fotoGrande: require('../assets/influencers/MandyJTV/maxresdefault-2.jpg'),
         fotoUser: require('../assets/influencers/influencer.png'),
         usuario: 'Kala|Tempo',
         num_segui: 34,
         mensaje: 'Only 2 tickets left',
         dia: 21,
         mes: 'DEC',
         texto1: 'My FIRST God of War experience!',
         texto2: 'Games',
         direccion: 'Live from New York, at 18:30 pm',

         //para los evencotent
         usuarios: [
            {
               fecha: 'Monday, 19/12/2018',
               descripcion: 'Teaching Machamp THE BEST MOVE IN THE GAME',
               imagVideo: require('../assets/influencers/chicacorriendo.jpg'),
               duraVid: '12:40',
               tipo: 'Naturs,Outdoors & Chefs'

            },
            {
               fecha: 'Monday, 19/12/2018',
               descripcion: 'Teaching Machamp THE BEST MOVE IN THE GAME',
               imagVideo: require('../assets/influencers/chicarosa.jpg'),
               duraVid: '12:40',
               tipo: 'Naturs,Outdoors & Chefs'
            },
         ]
      }

   }// fin de consttructor



   render() {

      let screenWidth = Dimensions.get('window').width; //para poner la imagen normal
      let screenHeight = Dimensions.get('window').height;


      if (screenHeight <= 592) { //1080 * 1920  xxhdpi
         instaTop = -5
         botCard = 120
         leftEvent = 10
         widtTrans = '95.6%'
      } else if (screenHeight <= 605) { //mopvil de  david

         instaTop = -5
         botCard = 120
         leftEvent = 50
         widtTrans = '100%'

      } else if (screenHeight <= 678) { // mi movil
         instaTop = -5
         botCard = 115
         leftEvent = 10
         widtTrans = '95.6%'
      } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
         instaTop = -5
         botCard = 95
         leftEvent = 50
         widtTrans = '96.4%'
      } else if (screenHeight <= 775) {//1440 *2880 :560dpi
         instaTop = -5
         botCard = 95
         leftEvent = 50
         widtTrans = '96.4%'
      } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9
         instaTop = -5
         botCard = 98
         leftEvent = 10
         widtTrans = '100%'
      } else { // 800 = 480 * 800 mdpi
         instaTop = -5
         botCard = 98
         leftEvent = 10
         widtTrans = '100%'
      }




      return (

         <ScrollView style={{}} >

            {/*  CAJA DE IMAGEN CON SU TEXTO SUPERPUESTO*/}
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate("verifyPhone")}
            >
               <Image
                  source={require('../assets/influencers/KalaTempo/dos.jpg')}
                  style={{
                     width: screenWidth, //para imagen grande a la pantalla
                     height: 348,

                  }}
               />

            </TouchableOpacity>


            <View style={{
               marginHorizontal: 16,
               position: 'absolute', top: 210
            }}>
               <Text style={{ fontSize: 34, color: 'white' }}>Kala | Tempo</Text>
               <Text style={{ fontSize: 20, color: 'white' }}>@Kurtis</Text>
               <Text style={{ fontSize: 17, color: 'white', paddingTop: 20 }}>
                  12,342 Friends  984 Following</Text>
            </View>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate("editinfluencerprofile")}
               style={{
                  position: 'absolute', right: 10, top: 35,
               }}

            >
               <Image
                  source={require('../assets/icons_genGMI/lapizPublish.png')}
                  style={{
                     width: 40,
                     height: 40,
                     borderRadius: 20,

                  }}
               />
            </TouchableOpacity>
            <TouchableOpacity
               // onPress={() => this.props.navigation.pop()}
               onPress={() => this.props.navigation.toggleDrawer()}
               style={{ position: 'absolute', left: '4%', top: 35 }}
            >
               <Image
                  source={require('../assets/icons_genGMI/Backwhitebk.png')}
                  style={{

                     width: 25,
                     height: 25,


                  }}
               />
            </TouchableOpacity>

            {/* numero grande de estadistica*/}
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate("reviewDos")}
            >
               <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                  <View style={{ flex: 2, alignItems: 'center' }} >
                     <Text style={{
                        fontSize: 55, color: '#312f3d'
                     }}>4.1</Text>
                  </View>


                  <View style={{
                     flex: 4, flexDirection: 'column',
                     justifyContent: 'center'
                  }}>
                     <View >

                        <View style={styles.estrellasTrendingProfile}>
                           <Image source={require('../assets/Red.png')}
                              style={{ width: 14, height: 14, }}
                           />
                           <Image source={require('../assets/Red.png')}
                              style={{ width: 14, height: 14, marginLeft: 2 }}
                           />
                           <Image source={require('../assets/Red.png')}
                              style={{ width: 14, height: 14, marginLeft: 2 }}
                           />
                           <Image source={require('../assets/Red.png')}
                              style={{ width: 14, height: 14, marginLeft: 2 }}
                           />
                           <Image source={require('../assets/Grey.png')}
                              style={{ width: 14, height: 14, marginLeft: 2 }}
                           />
                        </View>

                     </View>

                     <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#677183' }}>Based en 45 reviews</Text>
                     </View>
                  </View>
                  <View style={{
                     flexDirection: 'row', flex: 2, alignItems: 'center',
                     marginTop: 28
                  }}>
                     <Image
                        source={require('../assets/icons_genGMI/ViewsGrey.png')}
                        style={{
                           width: 15,
                           height: 15,

                           marginLeft: -6,
                           marginRight: 5,

                        }}
                     />
                     <Text style={{ color: '#677183' }}>27.551.803</Text>
                  </View>
               </View>


               {/*========================================================================= */}


               <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>

                  <View style={{ flex: 2, flexDirection: 'row' }}>
                     <Image
                        source={require('../assets/influencers/KalaTempo/uno.jpg')}
                        style={styles.ImagInfluence}
                     />
                     <Image
                        source={require('../assets/influencers/KalaTempo/dos.jpg')}
                        style={[{ marginLeft: -5 }, styles.ImagInfluence]}
                     />
                     <Image
                        source={require('../assets/OnBoard/podcast.jpg')}
                        style={[{ marginLeft: -5 }, styles.ImagInfluence]}
                     />
                  </View>
                  <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'center' }}>
                     <Text style={{
                        color: '#697181', fontSize: 16,
                        marginLeft: -10
                     }}>23 event attendees</Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                     <Image
                        source={require('../assets/icons_genGMI/ArrowGrey.png')}
                        style={styles.ImagInfluence}
                     />
                  </View>

               </View>

            </TouchableOpacity>
            {/* ----------biagraphy----------------*/}

            <View style={{ marginHorizontal: 16, paddingBottom: 10, paddingVertical: 15 }}>

               <Text style={{
                  color: '#312f3d', fontSize: 17, fontWeight: '500'
               }}>Biography</Text>
            </View>


            <View style={{
               paddingBottom: 10, marginHorizontal: 15,
               paddingVertical: 5, textAlign: 'left'
            }}>

               <Text style={{
                  color: '#312f3d', fontSize: 16, letterSpacing: 0.32
               }}>Many people would say that it is absolute madness to keep on doing the same
                            thing, time after time, expecting to get a different result or for something
         different to happen.</Text>
            </View>

            {/* LOCATION*/}
            <View style={{ marginHorizontal: 15, marginVertical: 20, paddingVertical: 10 }}>
               <Text style={{
                  color: '#312f3d', fontSize: 17, letterSpacing: 0.41, fontWeight: '500'
               }}>Location</Text>
               <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                  <Image
                     source={require('../assets/icons_genGMI/ubicacion.png')}
                     style={{
                        width: 17,
                        height: 17,
                        marginRight: 5,

                     }}
                  />
                  <Text style={{
                     color: '#677183', fontSize: 16, letterSpacing: 0.32
                  }}>Czeck Republic</Text>
               </View>

            </View>

            {/* LANGUAGE*/}

            <View style={{ marginHorizontal: 15 }}>
               <Text style={{
                  color: '#312f3d', fontSize: wp('4%'), letterSpacing: 0.41, fontWeight: '500'
               }}>Language</Text>
               <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                  <Image
                     source={require('../assets/banderasLenguaje/eeuu.png')}
                     style={{
                        width: 17,
                        height: 17,
                        marginRight: 5,
                        borderRadius: 8.5,

                     }}
                  />
                  <Text style={{
                     color: '#677183', fontSize: 16, letterSpacing: 0.32
                  }}>English</Text>
               </View>

            </View>

            {/* FOLLOW  REDES SOCIALES */}

            <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
               <Text style={{
                  color: '#312f3d', fontSize: 17, letterSpacing: 0.41, fontWeight: '500'
               }}>Follow me</Text>
               <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                  <Image
                     source={require('../assets/icons_genGMI/Social/Linkedin.png')}
                     style={styles.redes}
                  />
                  <Image
                     source={require('../assets/icons_genGMI/Social/Twitch.png')}
                     style={styles.redes}
                  />
                  <Image
                     source={require('../assets/icons_genGMI/Social/Twitter.png')}
                     style={styles.redes}
                  />
                  <Image
                     source={require('../assets/icons_genGMI/Social/Youtube.png')}
                     style={styles.redes}
                  />

                  <Image
                     source={require('../assets/icons_genGMI/Social/insta.png')}
                     style={{
                        width: 50,
                        height: 50,
                        marginRight: 15,
                        borderRadius: 25,
                        marginTop: instaTop,

                     }}
                  />
               </View>

            </View>

            {/* up coming elevent*/}

            <View style={{
               flexDirection: 'row',
               justifyContent: 'space-between', padding: 10, marginHorizontal: 10
               , marginTop: -10
            }}>
               <View >
                  <Text style={{ color: "#312f3d", fontSize: 17 }}>Upcoming Live Events</Text>
               </View>
               <View style={{ flexDirection: 'row' }} >
                  <Text style={{ color: "#ff5a60", fontSize: 16 }}>Show all</Text>
                  <Text style={{ color: "#ff5a60", fontSize: 16, fontWeight: 'bold' }}> > </Text>
               </View>
            </View>

            {/* --------------------------- --------------------*/}



            {/* -----------------BICARDVIEW--------------*/}
            <BicardView
               fotoGrande={this.state.fotoGrande}
               fotoUser={this.state.fotoUser}
               usuario={this.state.usuario}
               num_segui={this.state.num_segui}
               mensaje={this.state.mensaje}
               dia={this.state.dia}
               mes={this.state.mes}
               texto1={this.state.texto1}
               texto2={this.state.texto2}
               direccion={this.state.direccion}
            />
            {/* -------------------------------------------------------------------*/}

            {/* Past Live events*/}
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate("mediacontentsmy")}
            >
               <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between', padding: 10, marginHorizontal: 10
                  , marginTop: 10
               }}>
                  <View >
                     <Text style={{ color: "#312f3d", fontSize: 17 }}>Past Live Events</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }} >
                     <Text style={{ color: "#ff5a60", fontSize: 16 }}>Show all</Text>
                     <Text style={{ color: "#ff5a60", fontSize: 16, fontWeight: 'bold' }}> > </Text>
                  </View>
               </View>
            </TouchableOpacity>
            {/* --------------------------- --------------------*/}

            {/* ------------- LISTA VIDEO ----------------------------*/}
            <View style={{ marginHorizontal: '4%' }}>
               <EventContents
                  fecha={this.state.usuarios[0].fecha}
                  descripcion={this.state.usuarios[0].descripcion}
                  imagVideo={this.state.usuarios[0].imagVideo}
                  duraVid={this.state.usuarios[0].duraVid}
                  tipo={this.state.usuarios[0].tipo}
               />
            </View>


            {/*-------------------------------------------------------------------------------- */}

            {/* rEVIEWS*/}

            <View style={{
               flexDirection: 'row',
               justifyContent: 'space-between', padding: 10, marginHorizontal: 10
               , marginTop: 10
            }}>
               <View >
                  <Text style={{ color: "#312f3d", fontSize: 17 }}>Reviews</Text>
               </View>
               <View style={{ flexDirection: 'row' }} >
                  <Text style={{ color: "#ff5a60", fontSize: 16 }}>Show all</Text>
                  <Text style={{ color: "#ff5a60", fontSize: 16, fontWeight: 'bold' }}> > </Text>
               </View>
            </View>

            {/* --------------------------- --------------------*/}


            {/*  LISTA INFLUENCERRRSSSSSSSSSS--------------------------------------------------------- */}

            <View style={{ flexDirection: 'row', marginHorizontal: 16, marginVertical: 14 }}>

               <View style={{ flex: 1 }}>

                  <Image source={require('../assets/reviews/SoLindsey.png')}
                     style={{ width: 50, height: 50, borderRadius: 25 }}
                  />


               </View>

               <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 10 }}>
                  <View>
                     <Text style={{
                        fontSize: 17, color: '#312f3d', fontWeight: 'bold'
                        , marginTop: 3
                     }}>Sophia Lindsey</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <View style={{ width: 10, height: 10, marginTop: 5 }}>
                        <Image source={require('../assets/buscador/lupa.jpg')}
                           style={{ borderRadius: 10, width: '100%', height: '100%' }}
                        />
                     </View>
                     <Text style={{ fontSize: 13, color: '#697181', marginLeft: 4 }}>Spain</Text>
                  </View>

               </View>

               <View style={{
                  flex: 2, alignItems: 'flex-end',
                  justifyContent: 'center'
               }}>
                  <View style={styles.estrellasTrendingUltima}>
                     <Image source={require('../assets/Red.png')}
                        style={{ width: 11, height: 11, }}
                     />
                     <Image source={require('../assets/Red.png')}
                        style={{ width: 11, height: 11, marginLeft: 2 }}
                     />
                     <Image source={require('../assets/Grey.png')}
                        style={{ width: 11, height: 11, marginLeft: 2 }}
                     />
                     <Image source={require('../assets/Grey.png')}
                        style={{ width: 11, height: 11, marginLeft: 2 }}
                     />
                     <Image source={require('../assets/Grey.png')}
                        style={{ width: 11, height: 11, marginLeft: 2 }}
                     />
                  </View>

               </View>

            </View>

            <Text style={{
               marginHorizontal: 16, fontSize: 17, color: '#312f3d',
               paddingBottom: 25
            }}>
               Your comedy sketches may just be the best of any PokeTuber right now.
</Text>

            {/* caja imagen de video*/}
            <View style={{ marginBottom: hp('2%'), marginHorizontal: '4%' }}>
               <EventContents
                  fecha={this.state.usuarios[1].fecha}
                  descripcion={this.state.usuarios[1].descripcion}
                  imagVideo={this.state.usuarios[1].imagVideo}
                  duraVid={this.state.usuarios[1].duraVid}
                  tipo={this.state.usuarios[1].tipo}
               />

            </View>

            {/*-------------------------------------------------------------------------------- */}


         </ScrollView>



      );
   }

}





const styles = StyleSheet.create({


   estrellasTrendingProfile: {
      marginTop: 6,
      paddingBottom: 13,

      flexDirection: 'row',
      zIndex: 4,

   },
   estrellasTrending: {
      marginTop: 15,
      marginLeft: -55,
      flexDirection: 'row',
      zIndex: 4,

   },
   /* imagenes pequenias superpuestas*/
   ImagInfluence: {
      width: 30,
      height: 30,
      borderRadius: 15,
   },

   /*  ultima estrella */
   estrellasTrendingUltima: {
      paddingTop: 7,
      marginBottom: 20,
      flexDirection: 'row',
   },
   textTren: {
      color: '#312f3d',
      fontSize: 15,
      fontWeight: '500',
   },
   transparenteNuevo: {

      height: 60,
      position: 'absolute',
      zIndex: 3,
      backgroundColor: 'black',
      opacity: 0.5,
      marginHorizontal: 7,
      bottom: 6,

   },
   redes: {
      width: 40,
      height: 40,
      marginRight: 15,
      borderRadius: 20,

   }

});