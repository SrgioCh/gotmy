import React from 'react';
import {Platform,TouchableOpacity,StyleSheet,Text, View, Image } from 'react-native';


export default class Barra_DiscoverPreferences extends React.Component {

    constructor(props) {
        super(props)

    }

  render() {
    
    return (
   
      <View style={{paddingVertical:13,
                      borderBottomWidth:0.5,borderBottomColor:'#697181'}}>
    
        <View style={{ flexDirection:'row'}} >
              
                 <Text style={{flex:7,top:'1.2%',
                        color:'#312f3d',fontSize:15,letterSpacing:0.41
                          ,fontWeight:'500'  }}>{this.props.texto1}</Text>
                  <View style={{alignItems:'center',top:'1.2%'}}>
                      <Text  style={{flex:4,color:'#312f3d',
                           fontSize:14,letterSpacing:0.32}}>{this.props.texto2}</Text>
                  </View>
           
                   <View style={{flex:1,  alignItems:'flex-end' }}>
                      <TouchableOpacity
                    
                    >
                      <Image
                           source={require('../assets/icons_genGMI/ArrowGrey.png')}
                             style={{marginTop:3}}
                     />
                    </TouchableOpacity>
               </View>
          </View>
             
    </View>  
    );
  }
}

const styles = StyleSheet.create({

    estrellasTrendingNuevo:{
        paddingTop:7,
        marginLeft:-6,
        flexDirection:'row',
        marginTop:-5,
      
      },
      transparenteNuevo:{
        width:  Platform.OS === 'ios' ? 325:315,
        height:60,
        position:'absolute',
        zIndex:3,
        backgroundColor:'black',
        opacity:0.5,
        marginHorizontal:7,
        bottom:6,
       
      },
     

  })