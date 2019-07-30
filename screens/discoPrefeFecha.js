import React, { Component } from 'react';
import {
  Platform, AppRegistry, Alert,
  View, Text, TextInput, Dimensions,
  StyleSheet, ScrollView,
  Image, TouchableOpacity
} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class DiscoPrefeFecha extends Component {
  static navigationOptions = {
    headerTitle: 'Date and time range',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',

      width: '90%',
      fontWeight: '500',
      letterSpacing: 0.41,

      fontSize: 16,
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


    isCheckedA: false,
    valueA: '',
    isCheckedB: false,
    valueB: '',
    isCheckedC: false,
    valueC: '',
    isCheckedD: false,
    valueD: '',
    isCheckedE: false,
    valueE: '',
    isCheckedF: false,
    valueF: '',
    isCheckedG: false,
    valueG: '',
  };



  render() {

    let screenHeight = Dimensions.get('window').height;

    if (screenHeight <= 592) { //1080 * 1920  xxhdpi

    } else if (screenHeight <= 605) { //mopvil de  david


    } else if (screenHeight <= 678) { // mi movil

    } else if (screenHeight <= 685) { //1080 *1920 420dpi  --- 1440 *2560 :560 dpi

    } else if (screenHeight <= 775) {//1440 *2880 :560dpi

    } else if (screenHeight <= 778) {//1440 *3300 :xxxhdpi Snote9

    } else { // 800 = 480 * 800 mdpi
      // <Image source={require('../assets/icons_genGMI/Time.png')}
    }


    return (



      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, marginHorizontal: '4%', flexDirection: 'row' }}>
          <View style={{ flex: 4 }}>
            <View style={{ flex: 4, justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: wp('3.5%'), color: 'grey', fontWeight: '500', marginLeft: '4%' }}>
                Start time</Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
              <View style={{
                borderRadius: 27, borderWidth: 1, borderColor: '#e2e7ee', paddingVertical: hp('1%'),
                width: '95%', flexDirection: 'row', paddingLeft: 10,
              }}>

                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                  <Image source={require('../assets/icons_genGMI/TimeRed.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </View>



                <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='00'
                    maxLength={2}
                    keyboardType='numeric'
                    style={{
                    }}

                    onChangeText={
                      (texto) => this.setState({
                        horaStar: texto//los que va encontrando
                      })
                    } />

                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{

                    fontSize: wp('5%'), color: 'grey', fontWeight: '500'
                  }}>
                    :</Text>

                </View>
                <View style={{ flex: 3.5, justifyContent: 'center' }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='00'
                    maxLength={2}
                    keyboardType='numeric'
                    style={{


                    }}

                    onChangeText={
                      (texto2) => this.setState({
                        minStar: texto2//los que va encontrando
                      })
                    } />
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 6, paddingLeft: '4%' }}>
            <View style={{ flex: 4, justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: wp('3.5%'), color: 'grey', fontWeight: '500' }}>
                End time</Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
              <View style={{
                borderRadius: 27, borderWidth: 1, borderColor: '#e2e7ee', paddingVertical: hp('1%'),
                width: '60%', flexDirection: 'row', paddingLeft: 10
              }}>

                <View style={{ flex: 3, alignItems: 'flex-end', paddingRight: 5, marginTop: 3 }}>
                  <Image source={require('../assets/icons_genGMI/Time.png')}
                    style={{ width: 22, height: 22 }}
                  />
                </View>



                <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='00'
                    maxLength={2}
                    keyboardType='numeric'
                    style={{
                    }}

                    onChangeText={
                      (texto) => this.setState({
                        horaStar: texto//los que va encontrando
                      })
                    } />

                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{

                    fontSize: wp('5%'), color: 'grey', fontWeight: '500'
                  }}>
                    :</Text>

                </View>
                <View style={{ flex: 3.5, justifyContent: 'center' }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='00'
                    maxLength={2}
                    keyboardType='numeric'
                    style={{


                    }}

                    onChangeText={
                      (texto2) => this.setState({
                        minStar: texto2//los que va encontrando
                      })
                    } />
                </View>
              </View>







            </View>
          </View>
        </View>
        <View style={{ flex: 7 }}>
          <ScrollView >
            <View style={{
              flexDirection: 'row', marginHorizontal: '4%'
            }}>
              <View style={{ flex: 0.8, paddingBottom: 10 }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedA == true) {
                      this.setState({
                        isCheckedA: false,

                      })


                    } else {
                      this.setState({
                        isCheckedA: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedA}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '


                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, zIndex: 3, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>Today</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedB == true) {
                      this.setState({
                        isCheckedB: false,

                      })


                    } else {
                      this.setState({
                        isCheckedB: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedB}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '

                  value={this.state.valueB}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>Tomorrow</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedC == true) {
                      this.setState({
                        isCheckedC: false,

                      })


                    } else {
                      this.setState({
                        isCheckedC: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedC}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '

                  value={this.state.valueC}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>This Weekend</Text>
              </View>
            </View>
            {/* ------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedD == true) {
                      this.setState({
                        isCheckedD: false,

                      })


                    } else {
                      this.setState({
                        isCheckedD: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedD}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '

                  value={this.state.valueD}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>This Week</Text>
              </View>
            </View>
            {/* ------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedE == true) {
                      this.setState({
                        isCheckedE: false,

                      })


                    } else {
                      this.setState({
                        isCheckedE: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedE}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '
                  value={this.state.valueE}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>Next Week</Text>
              </View>
            </View>
            {/* ------------------------------------------- */}

            {/* ------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedF == true) {
                      this.setState({
                        isCheckedF: false,

                      })


                    } else {
                      this.setState({
                        isCheckedF: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedF}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '
                  value={this.state.valueF}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>This month</Text>
              </View>
            </View>
            {/* ------------------------------------------- */}
            {/* ------------------------------------------- */}
            <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
              <View style={{
                flex: 0.8, paddingBottom: 10,
              }}>
                <Checkbox
                  onChange={() => {
                    if (this.state.isCheckedG == true) {
                      this.setState({
                        isCheckedG: false,

                      })


                    } else {
                      this.setState({
                        isCheckedG: true,

                      })
                    }
                  }}
                  checked={this.state.isCheckedG}
                  containerStyle={{
                    marginTop: Platform.OS === 'ios' ? 5 : 10,
                  }}
                  checkboxStyle={{
                    backgroundColor: 'white',
                  }}

                  label='  '

                  value={this.state.valueG}
                  checkedImage={require('../assets/icons_genGMI/boxred.png')}
                  uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                />
              </View>

              <View style={{ flex: 9.2, justifyContent: 'center', paddingLeft: wp('2%') }}>
                <Text style={{ fontSize: wp('3.5%'), color: 'black', fontWeight: '500' }}>Next month</Text>
              </View>
            </View>
            {/* ------------------------------------------- */}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{
            flex: 1, backgroundColor: '#ff5a60',
            alignItems: 'center', justifyContent: 'center'
          }}
          onPress={() => this.props.navigation.navigate('')}

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