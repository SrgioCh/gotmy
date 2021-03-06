import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,Modal,TouchableHighlight,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class PublishPri10 extends Component {


    static navigationOptions = {
        headerTitle:' ',
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
        headerRight: (<View style={{
                flexDirection: 'row',
                  }}>
   
            <Image
                    source={require('../../assets/icons_genGMI/lapizPublish.png')}
                     style={{
                     width:40,
                     height:40,
                     marginRight:16,
                    }}
                  />
                    <Image
                    source={require('../../assets/icons_genGMI/basuraPublish.png')}
                     style={{
                     width:40,
                     height:40,
                     marginRight:16,
                    }}
                  />
             </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
           nombreInflu:'Sophia Lindsey',
           paisInflu:'Luxembourg',
           fotoGrande:require('../../assets/influencers/KalaTempo/kala6.jpg'),
          
   
          dia:21,
         mes:'DEC',
        texto1:'My FIRST God of War experience!',
        texto2:'Games',
          direccion:'Live from New York, at 18:30 pm',


          //CAJA DE TIEMPOS 
          attendes:'60 attendees',
          time:'12:00 - 14:00 (2 hours)',
          price:20,
          earn:'1.200',

          //PARA VENTANA MODAL
          modalVisible: false,
      
      }
      
      }// fin de consttructor


    //PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}


  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
      leftMod='7%'
    }else if(screenHeight<=678){ // mi movil
      leftMod='7%'
   }else if(screenHeight<=685){ //1080 *1920
    leftMod='9%'
   }else if(screenHeight<=775){
    leftMod='9%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    leftMod='9%'
   }else{
    leftMod='7%'
   }
    return (

      <View style={[{flex: 1},this.state.fondoPrincipal]}>
       <Modal
          transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => this.toggleModal(!this.state.modalVisible)}
              >
          
                  <View style = {styles.modal}>
             
               {/*    <Text style = {styles.text}>Modal is open!</Text>
                 
                 <TouchableOpacity onPress = {() => {
                    this.toggleModal(!this.state.modalVisible)}}>
                    
                    <Text style = {styles.text}>Close Modal</Text>
                 </TouchableOpacity>  */}
                 </View> 



                 <View style={{backgroundColor:'white',borderRadius:20,
                          position:'absolute',left:leftMod,
                          top:'30%',marginHorizontal:'5%',paddingHorizontal:'10%',
                       paddingVertical:'10%'}}> 

                      <View style={{alignItems:'center',marginTop:10}}>
                           <Image  
                                source={require("../../assets/influencers/spffiele.png")}
                               style={{ width:60,height:60 ,borderRadius:30}}
                              />

                            <Text style={{
                                     color:'#677183',fontSize:17,fontWeight:'bold'
                                   }} >Private meeting sent!</Text>

                                   <Text style={{ textAlign:'center',
                                             color:"gray",  fontSize: 14, marginLeft:3,
                                             marginRight:3, fontWeight: "normal",
                                              marginVertical: '3%',}}>
                                         Your follower has received a{'\n'}
                                         private link to buy tickets for ot</Text>


                         <View style={ styles.containerbuttonModal }>
                <Button 
                 onPress = { () =>  {
                  this.toggleModal(!this.state.modalVisible);
                  this.props.navigation.navigate("requesPendin")
                  this.setState({
                    fondoPrincipal:''
                  })
                }}
                style={{color:'white',fontSize:17}}
               >Continue</Button>      
              </View> 

                                          </View>










                 </View>

        
           </Modal>
      
    <View  style={{flex:9}}>

        
    <ScrollView>     
    <View style={{flex:8,flexDirection:'column',
            paddingBottom:20}}>
      
            <View style={{backgroundColor:'#f6f6f6',paddingBottom:7}}>

                  <View style={{borderRadius:10,
                           width:Platform.OS === 'ios' ? '100%':'100%',
                           height:200}} >
                        <Image source={this.state.fotoGrande} 
                       style={{ zIndex:1,width:'100%',height:'100%'}}
                       />
                   </View>  

 </View>  
 {/*   final de bicardview */}
 <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>
 <View style={{}}>
<TouchableOpacity
        onPress={() => this.props.navigation.navigate("reviewDos")}
        >
                     <Image source={require('../../assets/influencers/dos.png')} 
                          style={{ width:50,height:50,borderRadius:10}}
                         />
                   
</TouchableOpacity>
</View>

<View style={{flex:3,flexDirection:'column',paddingLeft:10 }}>
      <View>
         <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
          ,marginTop:3}}>{this.state.nombreInflu}</Text>
     </View>
      <View style={{flexDirection:'row'}}>
        <View style={{ width:10,height:10,marginTop:5}}>
                <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                 style={{borderRadius:Platform.OS === 'ios' ? 5:10  ,width:'100%',height:'100%'}}
                 />
            </View>
         <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.paisInflu}</Text>
     </View>
 
</View>

   <View style={{flex:3,alignItems:'flex-end',
       justifyContent:'center'}}>
   </View>

  </View>
  
  
   {/* cajita fecha*/}
   <View style={{borderRadius:10,marginTop:-9,
                   marginLeft:  Platform.OS === 'ios' ? 6:8,
               marginRight:  Platform.OS === 'ios' ? 11:8,
               flexDirection:'row',
               backgroundColor:'#f6f6f6'}}>
        <View style={{ flex:1, 
      backgroundColor:'white',flexDirection:'column',
       paddingTop:20,alignItems:'center'
           }}>
             <Text style={{ fontSize:28,fontWeight:'bold'}}>
              {this.state.dia}</Text>
             <Text style={{color:'#ff5a60'}}>{this.state.mes}</Text>
             </View>
        <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
             paddingTop:20}}>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
             fontWeight:'bold',color:'#312f3d'}}>
                 {this.state.texto1}</Text>
              <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
              fontWeight:'bold',color:'#ff5a60'}} >{this.state.texto2}</Text>
              
              <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                style={{ width:15,height:15,marginTop:4,marginRight:5}}
                />  

              <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
              fontWeight:'bold',color:'#677183',
               paddingVertical:4}}>{this.state.direccion}</Text>
              </View>
           
     </View>
    </View>  
{/* ----------live in description----------------*/} 

<View style={{ marginHorizontal:16,paddingBottom:10,paddingVertical:15 }}>

<Text style={{  color:'#312f3d',  fontSize:17,fontWeight:'500'
  }}>Live Event description</Text>         
</View>


<View style={{paddingBottom:10,marginHorizontal:16,
         paddingVertical:5,textAlign:'left'}}>

<Text style={{  color:'#312f3d',  fontSize:14,letterSpacing:0.32
  }}>Many people would say that it is absolute madness to keep on doing 
  the same thing, time after time, expecting to get a different result or
   for something different to happen.</Text>         
</View>


{/* LANGUAGE*/}

<View style={{marginHorizontal:16}}>
<Text style={{
  color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
}}>Language</Text>
<View style={{flexDirection:'row',paddingVertical:15}}>
<Image
         source={require('../../assets/banderasLenguaje/eeuu.png')}
          style={{
          width:17,
          height:17,
          marginRight:5,
          borderRadius:10,

          }}
       />
    <Text style={{
       color:'#677183',  fontSize:16,letterSpacing:0.32
    }}>English</Text>
</View>

</View> 

{/* TRENDING TAGS */}
<Text style={{
                    color:'#312f3d',
                  fontSize:16,
                  fontWeight:'500',
                 marginHorizontal:16,
               paddingVertical:20,
                }}
    
                 >Private information</Text>
{/*fin*/} 

{/*  seleccion de iconos*/}
<View style={{marginHorizontal:16,marginTop:10,flexDirection:'row'}}>


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
<Image source={require('../../assets/icons_genGMI/Time.png')} 
style={{ width:30,height:30}}
/>   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Time</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
{this.state.time}</Text>
</View>
</View>

<View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
<Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
style={{ width:30,height:30}}
/>   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Price per ticket</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
{this.state.price}</Text>
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
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Earn with soldout</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
$ {this.state.earn}</Text>
</View>
</View>

{/*  fin */}
<View style={{
   alignItems: 'center',justifyContent:'center',marginTop:30
}}>
 <Text style={{
      color:'#ff5a60'
 }}>Save as draft</Text>
</View>


</View>

</ScrollView>

    </View>

    
  
    <View style={{flex:1}}>
         <TouchableHighlight
         style={{
          flex:1,backgroundColor:'#ff5a60',
          alignItems:'center',justifyContent:'center'
         }}
        onPress = { () => this.toggleModal(true)}
      
      >
<Text style={{color:'white',fontSize:wp('4.5%'),letterSpacing:0.41 }}>
     Send Private Meeting</Text>
     </TouchableHighlight>   
</View>
 
   






   </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 //en target influ
estrellasTrending:{
  paddingTop:7,
 marginBottom:20,
  flexDirection:'row',

},
//*** TAGS DE TRENDING */
tagsTrending:{
  paddingVertical:8,
  borderColor:'#312f3d' ,
  borderWidth: 1,
  fontSize:13,
  borderRadius:20,
  paddingHorizontal:10,
  marginBottom: 5,
  marginLeft: 3,
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

});