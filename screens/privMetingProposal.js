import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,Modal,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class  PrivMetingProposal extends Component {
    static navigationOptions = {
        headerTitle:'Private Meeting Proposal',
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
              <Text style={{color:'#ff5a60'}}></Text>
     
            </View>
            ),   
          headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);
      
      this.state = {
           imagInflu:require('../assets/influencers/spffiele.jpg'),
           name:'Sophia Lindsey',
          

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
                          position:'absolute',width:'90%',height:'80%',left:'5%',
                          top:'10%',paddingHorizontal:'5%',
                           }}> 

                       <View style={{marginTop:hp('5%')}}>
                     
                        
                       <Text  style={{ textAlign:'center',
                               color:"#312f3d",  fontSize: wp('6%'),fontWeight: "bold",
                                marginVertical: '3%',}}>
                        How it works {'\n'}Private Meetins        
                        </Text>

                        <View style={{flexDirection:'row',marginTop:hp('3%')}}>
                            <View style={{flex:1,}}>
                                 <Text>1. </Text>
                            </View>
                            <View style={{flex:9}}>
                            <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                              }}>Send your proposal to the influencer  
                             </Text>
                            </View>
                        </View>
                         
                          <View style={{flexDirection:'row',marginTop:hp('3%')}}>
                            <View style={{flex:1}}>
                                 <Text>2. </Text>
                            </View>
                            <View style={{flex:9}}>
                            <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                 }}>
                                Wait for influencer's response aceppting, rejecting or proposing new terms.
                                  </Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',marginTop:hp('3%')}}>
                            <View style={{flex:1}}>
                                 <Text>3. </Text>
                            </View>
                            <View style={{flex:9}}>
                            <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                }}>
                               Accept or reject these new terms
                             </Text>
                            </View>
                        </View>

 

                        <View style={{flexDirection:'row',marginTop:hp('3%')}}>
                            <View style={{flex:1}}>
                                 <Text>4. </Text>
                            </View>
                            <View style={{flex:9}}>
                            <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                }}>
                                 Once you both agree in the meeting terms, you'll receive a link to buy your ticket and share this private meeting with your friends.
                              </Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                            <View style={{flex:1}}>
                                 <Text>5. </Text>
                            </View>
                            <View style={{flex:9}}>
                            <Text  style={{ 
                               color:"#677183",  fontSize: wp('4%'),fontWeight: "normal",
                                }}>
                              All tickets must have been purchased 24 hours in advance, or influencer shall have the right to  cancel the private meeting.
                        </Text>
                            </View>
                        </View>



 
                       

                   

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
            marginTop:hp('7%'),
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
         <Image source={this.state.imagInflu} 
                style={{ width:120,height:120,borderRadius:Platform.OS === 'ios' ? 60:80}}          
           />
      </View>
       <View style={{flex:1, alignItems:'center'}}>
           <Text style={{
                fontSize:wp('7%'),
                color:'#312f3d',
                fontWeight:'500'
               }}>{this.state.name}</Text>
              

       </View>
      
       <View style={{flex:1.5,alignItems:'center',paddingHorizontal:wp('17%')}}>
             <Text style={{ textAlign:'center',
               fontSize:wp('3.5%'),
                          color:'#312f3d'}}>
                Explicar AL INFLUENCER individual or  
                Request a private individual or group video
                Request a private individual or group video
                 Request a private  </Text>
            
                
        </View>
        <View style={{flex:1,alignItems:'center'}}>
               <TouchableOpacity style={styles.containerbutton}
               onPress={() => this.props.navigation.navigate("")}
               > 
               <Text style={{color:'white',fontSize:wp('4.5%')}}>
                Create Private Meeting Proposal</Text>      
              </TouchableOpacity> 
        </View>

        <View style={{flex:3.5 ,alignItems:'center'}}>
        <TouchableOpacity 
                onPress={() => this.toggleModal(true)}
               >     
        <Text style={{
                fontSize:wp('4%'),
                color:'#ff5a60',
                fontWeight:'500'
               }}>How it works?</Text>

        </TouchableOpacity>
        </View>
           
        
 </View>


     
    );
  }
 
}


const styles = StyleSheet.create({
 
    containerbutton:{
      backgroundColor: '#ff5a60',
      width:'90%',
      height:'60%',
      borderRadius:27,
      alignItems:'center',
      justifyContent:'center',
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