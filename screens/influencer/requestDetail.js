import React, { Component } from 'react';
import {
  Platform, AppRegistry, Alert,
  View, Text, TextInput, Dimensions,
  StyleSheet, ScrollView, Modal,
  Image, TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class RequestDetail extends Component {


  static navigationOptions = {
    headerTitle: 'Pending Request',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '80%',
      fontWeight: '500',
      letterSpacing: 0.41,
      height: 120,
      fontSize: 16,
      color: '#312f3d',
      marginTop: Platform.OS === 'ios' ? '45%' : '40%',

    },

    headerRight: (<View>
      <Image
        source={require('../../assets/icons_genGMI/Time.png')}
        style={{
          width: 25,
          height: 25,
          marginRight: 16,
        }}
      />
    </View>),
    headerTintColor: '#ff5a60',
  };



  constructor(props) {

    super(props);



    this.state = {

      modalVisible: false,
      modalVisible2: false,

      nombreInflu: 'Sophia Lindsey',
      ciudaInflu: 'Luxembourg',

      attendes: '23 attendees',
      dates: '12 Jan, 2019',
      timess: '12:00 - 14:00 (2 hours)',
      budgess: '1,200'
    }

  }// fin de consttructor

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  modalrejected(visible) {
    this.setState({ modalVisible2: visible });
  }



  render() {

    let screenHeight = Dimensions.get('window').height;

    if (screenHeight <= 592) { //1080 * 1920  xxhdpi

      leftMod = '8%'
      titu = 24
      iconWidth = 20
      iconheigh = 20
      letraG = 14
      letraM = 12
      marginReqs = 5
      padinBut = 1
      fontEnd = 12
      butTop = null
    } else if (screenHeight <= 605) { //mopvil de  david
      titu = 28
      leftMod = '8%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = null
    } else if (screenHeight <= 678) { // mi movil
      titu = 28
      leftMod = '8%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = null
    } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
      titu = 28
      leftMod = '10%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = null
    } else if (screenHeight <= 775) {//1440 *2880 :560dpi
      titu = 28
      leftMod = '10%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = '10%'
    } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9
      titu = 28
      leftMod = '8%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = '10%'
    } else { // 800 = 480 * 800 mdpi
      titu = 28
      leftMod = '8%'
      iconWidth = 30
      iconheigh = 30
      letraG = 16
      letraM = 14
      marginReqs = 15
      padinBut = 20
      fontEnd = 14
      butTop = '10%'
    }




    return (


      <View style={{ flex: 1 }}>
        {/* ---------------  modal ---------------- */}

        <Modal transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>

          <View style={styles.modal}>
          </View>


          {/* ventana blanca del modal*/}
          <View style={{
            backgroundColor: 'white', borderRadius: 20,
            position: 'absolute', paddingHorizontal: '5%', width: '70%', height: '35%', left: '15%',
            top: '30%',
          }}>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Image
                source={require("../../assets/influencers/spffiele.png")}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <Text style={{
                fontSize: 20, fontWeight: 'bold'
              }} >Request accepted!</Text>
              <Text style={{
                textAlign: 'center',
                color: "gray", fontSize: 14, marginLeft: 3,
                marginRight: 3, fontWeight: "normal",
                marginVertical: '3%',
              }}>
                Now your can create a private{'\n'}
                meeting for this follower</Text>



              <View style={styles.containerbuttonModal}>
                <Button
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                    this.props.navigation.navigate("requestAcepted2")
                    this.setState({
                      fondoPrincipal: ''
                    })
                  }}
                  style={{ color: 'white', fontSize: 17 }}
                >Continue</Button>
              </View>



            </View>
          </View>
        </Modal>

        {/*  ---------------modal  reject------------------------- */}
        <Modal transparent={true}
          visible={this.state.modalVisible2}
          onRequestClose={() => { console.log("Modal has been closed.") }}>

          <View style={styles.modal}>
          </View>


          {/* ventana blanca del modal*/}
          <View style={{
            backgroundColor: 'white', borderRadius: 20,
            position: 'absolute', paddingHorizontal: '5%', width: '70%', height: '35%', left: '15%',
            top: '30%',
          }}>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Image
                source={require("../../assets/influencers/spffiele.png")}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <Text style={{
                fontSize: 20, fontWeight: 'bold'
              }} >Request rejected!</Text>
              <Text style={{
                textAlign: 'center',
                color: "gray", fontSize: 14, marginLeft: 3,
                marginRight: 3, fontWeight: "normal",
                marginVertical: '3%',
              }}>
                sofia has received a{'\n'}
                notification</Text>



              <View style={styles.containerbuttonModal2}>
                <Button
                  onPress={() => {
                    this.setState({ modalVisible2: false });
                    this.props.navigation.navigate("")
                    this.setState({
                      fondoPrincipal: ''
                    })
                  }}
                  style={{ color: '#ff5a60', fontSize: wp('4%') }}
                >Got it</Button>
              </View>



            </View>
          </View>
        </Modal>
        {/*  ---------------fin de modales------------------------ */}
        <View style={{ flex: 8.5 }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: '4%' }}>
            <View style={{ flex: 2 }}>
              <Image source={require('../../assets/influencers/spffiele.png')}
                style={{ width: 50, height: 50, borderRadius: 30 }}
              />
            </View>

            <View style={{
              flex: 8, flexDirection: 'column', paddingLeft: 10,
            }}>
              <View>

                <Text style={{
                  fontSize: 17, color: '#312f3d'
                  , fontWeight: '500'
                }}>{this.state.nombreInflu}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 10, height: 10, marginTop: 5 }}>
                  <Image source={require('../../assets/icons_genGMI/ubicacion.png')}
                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                  />
                </View>
                <Text style={{ fontSize: 13, color: '#697181', marginLeft: 4 }}>{this.state.ciudaInflu}</Text>
              </View>
            </View>
          </View>
          {/* TITULO */}
          <View style={{ marginHorizontal: 16 }}>
            <Text style={{
              fontSize: titu, color: '#312f3d', marginTop: '2%',
              fontWeight: 'bold',
            }}>Just For Fun</Text>
          </View>

          <Text style={{
            fontSize: 16, color: '#312f3d', marginTop: '2%', marginBottom: '4%',
            fontWeight: '500', marginHorizontal: 16
          }}>Susprise for a friend</Text>


          <View style={{ marginHorizontal: 16, flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Image source={require('../../assets/icons_genGMI/User.png')}
                style={{ width: iconWidth, height: iconheigh }}
              />
            </View>
            <View style={{
              flex: 8, flexDirection: 'column', marginLeft: 20,
              borderBottomColor: '#e1e3e6', borderBottomWidth: 1,
            }}>
              <Text style={{ color: '#312f3d', fontSize: letraG, marginTop: -7 }}>Attendess</Text>
              <Text style={{ color: '#677183', fontSize: letraM, paddingBottom: 8, paddingTop: 4 }}>{this.state.attendes}</Text>
            </View>
          </View>
          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Image source={require('../../assets/icons_genGMI/CalendarGrey.png')}
                style={{ width: iconWidth, height: iconheigh }}
              />
            </View>
            <View style={{
              flex: 8, flexDirection: 'column', marginLeft: 20,
              borderBottomColor: '#e1e3e6', borderBottomWidth: 1,
            }}>
              <Text style={{ color: '#312f3d', fontSize: letraG, marginTop: -7 }}>Date</Text>
              <Text style={{ color: '#677183', fontSize: letraM, paddingBottom: 8, paddingTop: 4 }}>
                {this.state.dates}</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Image source={require('../../assets/icons_genGMI/Time.png')}
                style={{ width: iconWidth, height: iconheigh }}
              />
            </View>
            <View style={{
              flex: 8, flexDirection: 'column', marginLeft: 20,
              borderBottomColor: '#e1e3e6', borderBottomWidth: 1,
            }}>
              <Text style={{ color: '#312f3d', fontSize: letraG, marginTop: -7 }}>Time</Text>
              <Text style={{ color: '#677183', fontSize: letraM, paddingBottom: 8, paddingTop: 4 }}>
                {this.state.timess}</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Image source={require('../../assets/icons_genGMI/budget.png')}
                style={{ width: iconWidth, height: iconheigh }}
              />
            </View>
            <View style={{
              flex: 8, flexDirection: 'column', marginLeft: 20,
              borderBottomColor: '#e1e3e6', borderBottomWidth: 1,
            }}>
              <Text style={{ color: '#312f3d', fontSize: letraG, marginTop: -7 }}>Budget</Text>
              <Text style={{ color: '#677183', fontSize: letraM, paddingBottom: 8, paddingTop: 4 }}>
                $ {this.state.budgess}</Text>
            </View>
          </View>


          <Text style={{
            fontSize: 16, color: '#312f3d', marginVertical: marginReqs,
            fontWeight: '500', marginHorizontal: 16
          }}>Request description</Text>

          <Text style={{ fontSize: fontEnd, color: '#312f3d', marginHorizontal: 16, paddingBottom: padinBut }}>
            Many people would say that it is absolute madness{'\n'} to keep on doing the
                  same thing, time after time,{'\n'} expecting to get a different result or
                   for something {'\n'}different to happen.
           </Text>

        </View>
        <View style={{ flexDirection: 'row', flex: 1.5 }}>
          <View style={[styles.containerbutton, {
            backgroundColor: '#B3B8C1',
            marginHorizontal: 16
          }]}>
            <Button
              onPress={() => this.modalrejected(true)}
              style={{ color: 'white', fontSize: 17 }}
            >Reject</Button>
          </View>

          <View style={[styles.containerbutton, {
            backgroundColor: '#ff5a60',
            marginRight: 16
          }]}>
            <Button
              onPress={() => this.toggleModal(true)}
              style={{ color: 'white', fontSize: 17 }}
            >Acept</Button>
          </View>
        </View>

        <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}
          onPress={() => this.props.navigation.navigate("privMetingProposal")}
        >
          <Text style={{ color: '#ff5a60', fontSize: wp('4%') }}>
            I'do like to send a proposal</Text>
        </TouchableOpacity>



      </View>



    );
  }

}



const styles = StyleSheet.create({

  containerbutton: {

    width: '43%',
    paddingVertical: 5,
    borderRadius: 27,
    textAlign: "center",
    marginTop: hp('1%'),
    marginBottom: hp('6%'),
    justifyContent: 'center',

  },

  // ventana modal
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    padding: 100
  },
  text: {
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
  containerbuttonModal2: {
    borderColor: '#ff5a60',
    width: '80%',
    paddingVertical: 13,
    borderWidth: 0.5,
    borderRadius: 27,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,

  },
});