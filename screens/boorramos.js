import React from 'react';
import { Alert,Platform,StatusBar, StyleSheet, Text,TextInput,TouchableHighlight, View, Image,Modal } from 'react-native';
import { Button } from "react-native-elements";

const util = require("util");


export default class Boorramos extends React.Component {

 

  static navigationOptions = {
    headerTitle: '"Become An Influencer"',
    
};

state = {
    modalVisible: false,
 }
 toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }

  render() {

    return (
       
        <View style = {styles.container}>
           <Modal transparent = {true}
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }>
          
              <View style = {styles.modal}>
                 <Text style = {styles.text}>Modal is open!</Text>
                 
                 <TouchableHighlight onPress = {() => {
                    this.toggleModal(!this.state.modalVisible)}}>
                    
                    <Text style = {styles.text}>Close Modal</Text>
                 </TouchableHighlight>
              </View>
              <View style={{
                  backgroundColor:'pink',
                  position:'absolute',
                  left:'20%',
                  top:'30%',
              }}>
              <Text style = {{
                  fontWeight:'500'
              }}>Texto fuera del modal</Text>
              </View>
           </Modal>
           
           <TouchableHighlight onPress = {
               () => {
                   this.toggleModal(true);  }}>
              <Text style = {styles.text}>Open Modal</Text>
           </TouchableHighlight>
        </View>
     )
  }
}




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 100,
        flex:1
     },
     modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        opacity:0.5,
        padding: 100
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     }
});
