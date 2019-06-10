import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import EstrellasPrincipal from "./estrellasPrincipal";



class CabezeraMenu extends Component {

    constructor(props) {
        super(props)

    }

  render() {

if(!this.props.influencer){
 cambiara=<View style={{flex:5,marginHorizontal:'6%',justifyContent:'flex-end'}}>
          <View style={{marginBottom:'6.5%'}}>
                 <Text style={{
                   color:'white',fontSize:wp('5.5%') ,fontWeight: '500', 
                  }}>{this.props.nombre}</Text>
                  <Text style={{
                    color:'white',fontSize:wp('4%') ,fontWeight: '100', 
                   }}>{this.props.email}</Text>
 
                 </View>
           </View>
}else{

  cambiara=<View style={{flex:5,marginHorizontal:'6%',justifyContent:'flex-end'}}>
  <View style={{marginBottom:'6.5%',flexDirection:'row'}}>
       <View style={{flex:7}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{
                color:'white',fontSize:wp('5.5%') ,fontWeight: '500', 
                  }}>{this.props.nombre}</Text>
                 <View  style={{paddingLeft:'4%' }}>
                     <Image  
                      source={this.props.mascota}
                       style={{
                          width:wp('5%'),height:hp('4%'),borderRadius:10
                           }} />
                 </View>
                  

            </View>
             
          <Text style={{
            color:'white',fontSize:wp('4%') ,fontWeight: '100', 
           }}>{this.props.email}</Text>
       </View>
       <View style={{flex:3,justifyContent:'flex-end'}}>
         <EstrellasPrincipal  
           estrellas={this.props.estrellas}   />
       </View>
        

         </View>
   </View>

}

  return(
    <ImageBackground source={this.props.imagViewer}
     style={{flex:3.6 }}>

<View style={{flex:5}}>

<View style={{marginTop:hp('4.5%'),width:'75%',marginHorizontal:'4%',
 borderRadius: hp('5%'),backgroundColor:'#312f3d',opacity:0.5,
 height:'40%',position:'absolute'
}} />

<TouchableOpacity 
style={{flexDirection:'row', marginTop:hp('5%'),marginHorizontal:'6%'}}
onPress={()=>this.props.enviaAPadre(this.props.cambiar)}>

   <View style={{flex:2.2 }}>
   <Image  
          source={this.props.imagInflu}
           style={{
            width:47,height:45,borderRadius:25
           }}
           />
   </View>
   <View style={{flex:7.8, justifyContent:'center'}}>
        <Text style={{color:'white', fontSize:wp('4%'),fontWeight:'500'}}>{this.props.textSup}</Text>
   </View>
   
</TouchableOpacity>
</View>
 {
   cambiara
 }

 
  </ImageBackground>    

  )
   
  }

}


export default CabezeraMenu;