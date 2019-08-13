import React, { Component } from 'react';
import {
  Platform, Alert, TouchableOpacity,
  View, Text, TextInput, Dimensions,
  StyleSheet, ScrollView,
  Image
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BicardView from './../components/bicardview'
import BookedEvDos from "./bookedEventes2"
import BookedEvTres from "./bookedEventes3"
import CabezeraViewer from "./../components/cabezeraViewer"


export default class BookedEvUno extends Component {

  static navigationOptions = {
    header: null,
  };


  screenwidth = Dimensions.get('window').width;
  screenheigth = Dimensions.get('window').height;


  constructor(props) {

    super(props);

    this.state = {

      // PARA LA CABEZERA
      imagViewer: require('../assets/reviews/kuskal.png'),
      nombreView: `Kurtis 'Kala' Lloyd`,
      correoView: '@kurtiskala',
      iconoUno: null,
      iconoDos: require('../assets/icons_genGMI/calendarRojo.png'),



      tytexto: '',
      menu1: styles.menuelegido,
      textoUno: styles.textoElegido,

      menu2: styles.menunormal,
      textoDos: styles.textoNormal,

      menu3: styles.menunormal,
      textoTres: styles.textoNormal,


      //Bidcardview
      fotoGrande: require('../assets/influencers/MandyJTV/maxresdefault-2.jpg'),
      fotoUser: require('../assets/influencers/influencer.png'),
      usuario: 'Mabel Spencer',
      num_segui: 34,
      mensaje: 'Only 2 tickets left',
      dia: 21,
      mes: 'DEC',
      texto1: 'My FIRST God of War experience!',
      texto2: 'Fashion',
      direccion: 'Live from New York, at 18:30 pm',







    }

  }// fin de consttructor




  //para la cabezera
  recogeDeHijo1() {
    console.log('no existe')
  }

  recogeDeHijo2() {
    alert(' abrira una pagina')


  }

  abrirMenu() {
    this.props.navigation.toggleDrawer()
  }

  //para el cuerpo del boked 3
  recogeDeHijo(dato) {

    this.props.navigation.navigate(dato)

  }


  cambiarVista = (num) => {

    if (num == 1) {
      this.refs.scrol.scrollTo({ x: 0, y: 0, animated: true })
      this.setState({
        menu1: styles.menuelegido,
        textoUno: styles.textoElegido,


        menu2: styles.menunormal,
        textoDos: styles.textoNormal,


        menu3: styles.menunormal,
        textoTres: styles.textoNormal,

      })
    } else if (num == 2) {
      this.refs.scrol.scrollTo({ x: this.screenwidth, y: 0, animated: true })
      this.setState({

        menu1: styles.menunormal,
        textoUno: styles.textoNormal,


        menu2: styles.menuelegido,
        textoDos: styles.textoElegido,


        menu3: styles.menunormal,
        textoTres: styles.textoNormal,

      })
    } else if (num == 3) {
      this.refs.scrol.scrollTo({ x: this.screenwidth * 2, y: 0, animated: true })
      this.setState({

        menu1: styles.menunormal,
        textoUno: styles.textoNormal,


        menu2: styles.menunormal,
        textoDos: styles.textoNormal,


        menu3: styles.menuelegido,
        textoTres: styles.textoElegido,

      })
    }

  }



  transicion = (num) => {

    if (num == 1) {

      this.setState({
        menu1: styles.menuelegido,
        textoUno: styles.textoElegido,
        menu2: styles.menunormal,
        textoDos: styles.textoNormal,
        menu3: styles.menunormal,
        textoTres: styles.textoNormal,

      })
    } else if (num == 2) {

      this.setState({
        menu1: styles.menunormal,
        textoUno: styles.textoNormal,
        menu2: styles.menuelegido,
        textoDos: styles.textoElegido,
        menu3: styles.menunormal,
        textoTres: styles.textoNormal,

      })
    } else if (num == 3) {

      this.setState({

        menu1: styles.menunormal,
        textoUno: styles.textoNormal,


        menu2: styles.menunormal,
        textoDos: styles.textoNormal,


        menu3: styles.menuelegido,
        textoTres: styles.textoElegido,

      })
    }

  }

  render() {
    let screenHeight = Dimensions.get('window').height;
    if (screenHeight <= 592) {//1080 * 1920  xxhdpi
      transNuev = '95.6%'
    } else if (screenHeight <= 605) { //mopvil de  david

      transNuev = '95.6%';

    } else if (screenHeight <= 678) { // mi movil
      transNuev = '95.6%';
    } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
      transNuev = '96.4%';
    } else if (screenHeight <= 775) {//1440 *2880 :560dpi
      transNuev = '96.2%';
    } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9
      transNuev = '95.7%';
    } else {// 800 = 480 * 800 mdpi
      transNuev = '95.7%';
    }

    bookedEvUno = (<ScrollView>

      {/* -----------------BICARDVIEW--------------*/}
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("boked4")}

      >

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
      </TouchableOpacity>
      {/* -------------------------------------------------------------------*/}
    </ScrollView>);





    return (
      <View style={{ flex: 1 }}>
        <CabezeraViewer
          imagViewer={this.state.imagViewer}

          nombreView={this.state.nombreView}
          correoView={this.state.correoView}

          iconoUno={this.state.iconoUno}
          iconoDos={this.state.iconoDos}


          enviaAPadreIconoUno={this.recogeDeHijo1.bind(this)}
          enviaAPadreIconoDos={this.recogeDeHijo2.bind(this)}

          enviaAPadreMenu={this.abrirMenu.bind(this)}

        />


        <View style={{ flex: 8.7 }}>


          {/* ----------- TITULO ----------------*/}

          <View style={{ marginTop: hp('2%'), marginHorizontal: 16, paddingBottom: 2 }}>

            <Text style={{
              color: '#312f3d',
              fontSize: 34,
              fontWeight: 'bold',
              letterSpacing: 0.41,
            }}>Live Events</Text>
          </View>




          {/* ----------------MENU ----------------*/}

          <View style={{
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
            , marginHorizontal: 16, marginVertical: 10
          }}>

            <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, this.state.menu1]}>
              <TouchableOpacity
                onPress={() => this.cambiarVista(1)}
              >
                <Text style={this.state.textoUno}>
                  Upcoming
                 </Text>
              </TouchableOpacity>
            </View>



            <View style={[this.state.menu2, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
              <TouchableOpacity
                onPress={() => this.cambiarVista(2)}
              >
                <Text style={[this.state.textoDos, { marginLeft: 10 }]}>
                  Past Events
          </Text>
              </TouchableOpacity>
            </View>


            <View style={[this.state.menu3, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
              <TouchableOpacity
                onPress={() => this.cambiarVista(3)}
              >
                <Text style={[this.state.textoTres, { marginLeft: 10 }]}>
                  Favorites
              </Text>
              </TouchableOpacity>
            </View>

          </View>

          <ScrollView ref='scrol'
            horizontal={true}
            pagingEnabled={true}
            onScroll={
              (event) => {
                pos = event.nativeEvent.contentOffset.x;
                if (pos == 0) {
                  this.transicion(1);

                } else if (pos >= this.screenwidth - 1 && pos < (this.screenwidth * 2) - 10) {
                  this.transicion(2);

                } else if (pos >= (this.screenwidth * 2) - 10) {
                  this.transicion(3);

                }
              }
            }


          >

            <View style={{
              flex: 1,
              width: this.screenwidth,

            }}>
              {bookedEvUno}


            </View>
            <View style={{

              flex: 1,
              width: this.screenwidth,


            }}>
              <BookedEvDos enviaAPadre={this.recogeDeHijo.bind(this)} />
            </View>
            <View style={{

              flex: 1,
              width: this.screenwidth,


            }}>
              <BookedEvTres enviaAPadre={this.recogeDeHijo.bind(this)} />
            </View>

          </ScrollView>

















        </View>


      </View>


    );
  }

}





const styles = StyleSheet.create({

  /* PARA TRANSPARENCIA */
  estrellasTrending: {
    marginTop: 15,
    marginLeft: -55,
    flexDirection: 'row',
    zIndex: 4,

  },
  transparente: {
    width: 313,
    height: 60,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    bottom: -4,

  },




  //   MENUS
  menuelegido: {
    borderBottomWidth: 1,
    borderBottomColor: '#ff5a60',
  },

  menunormal: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e3e6',
  },
  textoElegido: {
    color: '#312f3d', fontSize: 17, paddingVertical: 14
  },
  textoNormal: {
    color: '#697181', fontSize: 17, paddingVertical: 14
  },

  //TABS PENTA ICON

  pentaIcon: {
    color: 'white',
    fontSize: 13,
  },
  estrellasTrendingNuevo: {
    paddingTop: 7,
    marginLeft: -6,
    flexDirection: 'row',
    marginTop: -5,

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




});