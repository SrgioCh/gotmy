import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Modal,
  StyleSheet,ScrollView,Dimensions,
  Image,TouchableOpacity} from 'react-native';

  import Button from 'react-native-button'; 

export default class RequestPri4 extends Component {


    static navigationOptions = {
        headerTitle:'Pending Response',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '80%',
            fontWeight:'500',
                letterSpacing:0.41,
                height:120,
                fontSize:16,
                color:'#312f3d',
                marginTop:  Platform.OS === 'ios' ? '45%':'43%',
    
        },
        headerRight: (<View>
         <Image
                 source={require('../../assets/icons_genGMI/Time.png')}
                  style={{
                  width:20,
                  height:20,
                  marginRight:16,
                 }}
               />
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
       
             attendes:'23 attendees',
             dates:'12 Jan, 2019',
             timess:'12:00 - 14:00 (2 hours)',
             budgess:'1,200',

             //PARA VENTANA MODAL
             modalVisible: true,
          }
      
      }// fin de consttructor

     //PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}

      
  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
      lefMod='7%';
    }else if(screenHeight<=678){ // mi movil
      lefMod='7%';
   }else if(screenHeight<=685){ //1080 *1920
    lefMod='9%';
   }else if(screenHeight<=775){
    lefMod='10%';
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    lefMod='7%';
    
   }else{
    lefMod='7%';
   }

    return (


          <View style={{flexDirection:'column' }}>
           <Modal
          transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
             
                  </View> 

                 <View style={{backgroundColor:'white',borderRadius:20,
                          position:'absolute',left:lefMod,
                          top:'20%',marginHorizontal:'5%',paddingHorizontal:'10%',
                       paddingVertical:'10%'}}> 

                       <View style={{alignItems:'center',marginTop:5}}>


                             <View style={{alignItems:'center'}}>
                              <Image  
                             source={require("../../assets/influencers/uno.png")}
                                   />
                            </View>


                            <Text style={{
                              color:'#312f3d',
                              fontSize:20,
                              fontWeight:'bold'}} >Request received!</Text>

          <Text style={{ textAlign:'center',
                    color:"gray",  fontSize: 14, marginLeft:3,
                    marginRight:3, fontWeight: "normal",
                     marginVertical: '3%',}}>
                I will response you as soon as{'\n'}
                     possible</Text>
           <View style={{
              backgroundColor: '#ff5a60',
              width:'80%',
              paddingVertical:13,
              borderRadius:27,
              textAlign:"center",
              marginTop:10,
            marginHorizontal:'4%'
           }}>

            
                       <Button 
                           onPress={() => {
                            this.props.navigation.navigate("requesPendin");
                            this.toggleModal(!this.state.modalVisible);
                          
                          }}
                         style={{color:'white',fontSize:17}}
                       >Continue</Button>      
                   </View> 





         
          <View style={{ marginTop:20}}>
          <TouchableOpacity onPress = {() => {
                    this.toggleModal(!this.state.modalVisible);
                   
                    }}>
            <Text style={{
              color:'#ff5a60',fontSize:17,
            }}>
              Cancel request
            </Text>
            </TouchableOpacity>
          </View>



                 </View>

              </View>
           </Modal>
           
           <ScrollView>

               <View style={{flexDirection:'row',marginHorizontal:16,marginTop:8,marginBottom:2}}>
               <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("profile1")}
                     >
                 <View style={{flex:2}}>
                 <Image source={require('../../assets/influencers/uno.png')} 
                 style={{ width:50,height:50,borderRadius:30}}
                 />   
                 </View>
                </TouchableOpacity>
               <View style={{flex:8,flexDirection:'column',paddingLeft:2 ,
                     }}>
                    <View>

                    <Text style={{fontSize:17,color:'#312f3d'
                        ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
                    </View>
                   
                    <View  style={styles.estrellasTrending}>
                                   <Image source={require('../../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
               </View>
          </View>
          
          {/* TITULO */}  
        <View style={{marginHorizontal:16}}>
               <Text style={{fontSize:28,color:'#312f3d',
                 fontWeight: 'bold',}}>Birthday surprise</Text>
         </View>

         <Text style={{fontSize:16,color:'#312f3d',marginTop:2,marginBottom: 20,
                 fontWeight: '500',marginHorizontal:16}}>Private meeting details</Text>
       
         
          <View style={{marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
              <Image source={require('../../assets/icons_genGMI/User.png')} 
                 style={{ width:30,height:30}}
                 />   
              </View>
              <View style={{flex:8,flexDirection:'column',marginLeft:20,
                       borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Attendess</Text>
              <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>{this.state.attendes}</Text>
              </View>
          </View>


          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/CalendarGrey.png')} 
                style={{ width:30,height:30}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Date</Text>
             <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
             {this.state.dates}</Text>
             </View>
          </View>

          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/Time.png')} 
                style={{ width:30,height:30}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Time</Text>
             <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
             {this.state.timess}</Text>
             </View>
          </View>

          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/budget.png')} 
                style={{ width:30,height:30}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Budget</Text>
             <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
             $ {this.state.budgess}</Text>
             </View>
          </View>


          <Text style={{fontSize:16,color:'#312f3d',marginTop:15,marginBottom: 15,
                 fontWeight: '500',marginHorizontal:16}}>Request description</Text>

         <Text style={{fontSize:14,color:'#312f3d',marginHorizontal:16,paddingBottom: 20}}>
                 Many people would say that it is absolute madness{'\n'} to keep on doing the
                  same thing, time after time,{'\n'} expecting to get a different result or
                   for something {'\n'}different to happen.
                 </Text>

             

      <View style={styles.containerbutton }>
                         <Button 
                          onPress={() => this.props.navigation.navigate("requestPri1")}
                         style={{color:'white',fontSize:17}}
                       >Continue</Button>      
                   </View> 




      </ScrollView>


    
 </View>
 
              
   

   
     
    );
  }
 
}





const styles = StyleSheet.create({
 
    estrellasTrending:{
        paddingTop:7,
       marginBottom:20,
        flexDirection:'row',
      
      },
      // ventana modal
modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'black',
  opacity:0.5,
  padding: 100
},
text: {
  color: '#3f2949',
  marginTop: 10
},

containerbuttonModal:{
backgroundColor: '#ff5a60',
width:'80%',
paddingVertical:13,
borderRadius:27,
textAlign:"center",
marginTop:20,
marginBottom: 10,

},
containerbutton:{
  backgroundColor: '#B3B8C1',
  width:'90%',
  paddingVertical:13,
  borderRadius:27,
  textAlign:"center",
  marginTop:10,
marginBottom:20,
  marginHorizontal:'4%'

},
});