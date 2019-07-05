import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,Modal,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import EstrellasPrincipal from "../components/estrellasPrincipal" 

export default class  RequesPrivMeting extends Component {
    static navigationOptions = {
        headerTitle:'Request Private Meeting',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
  
          width: '90%',
            fontWeight:'500',
                letterSpacing:0.41,
               
                fontSize:wp('4%'),
                color:'#312f3d',
            
         },
         headerRight: ( 
            <View style={{alignItems:'center',marginRight:wp('4%')}}>
              <Text style={{color:'#ff5a60'}}>Cancel</Text>
     
            </View>
            ),   
          headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);
      
      this.state = {
           imagInflu:require('../assets/influencers/MandyJTV/manyfot.png'),
           name:'MandyJTV',
           estrellas:4,

            //PARA VENTANA MODAL
            modalVisible: false,

        }
      
      }
   
 
      //PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}

  render() {
 
 
    let screenWidth=Dimensions.get('window').width;
     



    return (
      <View style={{flex:1}}>

<Modal
          transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
             
                {/*  <Text style = {styles.text}>Modal is open!</Text>
                 
                 <TouchableOpacity onPress = {() => {
                    this.toggleModal(!this.state.modalVisible)}}>
                    
                    <Text style = {styles.text}>Close Modal</Text>
                 </TouchableOpacity>  */}
                 </View> 

                 <View style={{backgroundColor:'white',borderRadius:20,
                          position:'absolute',
                          top:'10%',marginHorizontal:wp('4.7%'),paddingHorizontal:'10%',
                       paddingVertical:'10%'}}> 

                       <View style={{marginTop:hp('3%')}}>
                     
                        
                       <Text  style={{ textAlign:'center',
                               color:"#312f3d",  fontSize: wp('6%'),fontWeight: "bold",
                                marginVertical: '3%',}}>
                        How it works {'\n'}Private Meetins        
                        </Text>
                        <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                marginVertical: '3%',}}>
                        1.  Send your proposal to the {'\n'}       influencer  

                         </Text>
                        <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                marginVertical: '3%',}}>
                        2.  Wait for influencer's response {'\n'}       aceppting, rejecting or proposing {'\n'}       new terms.
                        </Text>
                        <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                marginVertical: '3%',}}>
                        3.  Accept or reject these new terms
                       </Text>
                       <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                marginVertical: '3%',}}>
                        4.  Once you both agree in the meeting {'\n'}       terms, you'll receive a link to buy {'\n'}       your ticket and share this private {'\n'}       meeting with your friends.
                        </Text>
                        <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                marginVertical: '3%',}}>
                        5.  All tickets must have been {'\n'}       purchased 24 hours in advance, {'\n'}       or influencer shall have the right to {'\n'}       cancel the private meeting.
                        </Text>

                   

                              {/*   botoness   */}

                              <TouchableOpacity
                                style={{
            backgroundColor: 'white',
            width:'70%',
            padding:15,
            color:'white',
            borderRadius:27,
            borderColor:'#ff5a60',
            alignItems:'center',
            borderWidth:1,
            marginTop:hp('3%'),
            marginHorizontal:'15%'
         }}
         onPress={() => {
       
          this.toggleModal(!this.state.modalVisible)}}
      
      
         
         >
          <Text style={{color:'#ff5a60'}}>
           Got it!
          </Text>
        </TouchableOpacity>
       

                     </View>
                 </View>

        
           </Modal>


        <View style={{flex:3,alignItems:'center',
                justifyContent:'center'}}>
     <View style={{flexDirection:'row'}}>
       <View style={{padding:hp('0.5%'),borderWidth:wp('0.5%'),borderRadius:80,
              borderColor:'grey'}}>
          <Image source={this.state.imagInflu} 
                style={{ width:120,height:120,borderRadius:80}}          
           />
         </View>
         <View style={{justifyContent:'flex-end',marginLeft:wp('-12%')}}>
         <Image source={require('../assets/icons_genGMI/raiceOf.png')} 
                style={{ width:35,height:35,borderRadius:25}}          
           />
         </View>
        

     </View>
         
          
                    
       </View>
       <View style={{flex:1.5, alignItems:'center'}}>
           <Text style={{
                fontSize:wp('7%'),
                color:'#312f3d',
                fontWeight:'500'
               }}>{this.state.name}</Text>
               <View style={{marginVertical:hp('0.5%')}}>
              <EstrellasPrincipal  estrellas={this.state.estrellas}/>
              </View>

       </View>
      
       <View style={{flex:1,alignItems:'center'}}>
             <Text style={{fontSize:wp('3.5%'),
             
                               color:'#312f3d'}}>
                Request a private individual or group video</Text>
            
                 <Text  style={{ fontSize:wp('3.5%'),
                          
                               color:'#312f3d'}}> 
                 meeting with this influencer</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
               <TouchableOpacity style={styles.containerbutton}
               onPress={() => this.props.navigation.navigate("")}
               
               > 
               <Text style={{color:'white',fontSize:wp('4.5%')}}>
                Request Private Meeting</Text>      
              </TouchableOpacity> 
        </View>
      
        <TouchableOpacity style={{flex:3.5 ,alignItems:'center'}}
               onPress={() => this.toggleModal(true)}
               > 
        <Text style={{
                fontSize:wp('4%'),
                color:'#ff5a60',
                fontWeight:'500'
               }}>How it works?</Text>
       </TouchableOpacity>
           
        
 </View>


     
    );
  }
 
}


const styles = StyleSheet.create({
 
    containerbutton:{
        backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        alignItems:'center',
        marginBottom:40,
     
    
      },

      modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'black',
  opacity:0.5,
  padding: 100
},
});