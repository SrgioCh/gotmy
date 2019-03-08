import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,Dimensions,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class LiveEventStreaming extends Component {
    static navigationOptions = {
        header: null ,
    };


    //LO QUE VENDRIA DE UNA BASE DE DATOS
    
    usuarios=[
        {   nombre:'Sophia Lindsey',
            mensaje:'How many days do you think will take us to discover Paris?',
            foto:require('../../assets/usuarios/cinco.png'),
       },
       {
        nombre:'Ian Curtis',
        mensaje:'All the people new series!!!!!🌋',
        foto:require('../../assets/usuarios/cuatro.png'),
        },
       {
            nombre:'Marco Aurelio',
            mensaje:'master trainer battle 😂',
            foto:require('../../assets/usuarios/tres.png'),
        },
        {
            nombre:'Lian Newton',
            mensaje:'You still have to do kakuna 😅',
            foto:require('../../assets/usuarios/dos.png'),
         },
         {
            nombre:'Sophia Lindsey',
            mensaje:'How many days do you think will take us to discover Paris?',
            foto:require('../../assets/usuarios/cinco.png'),
          } 
        
     ]

    constructor(props){

        super(props);
      
         this.state={
         
           conectados:554,
          }
      
      }// fin de consttructor

 

  render() {
    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal

    return (



      <View style={{flex: 1 }}>
     
          <View style={{flex:4,backgroundColor:'yellow'}}>
         
            <Image
              source={require('../../assets/mixto/videojuego.jpg')}
               style={{
               width:screenWidth, //para imagen grande a la pantalla
               height:'100%',
               zIndex:1,
           
               }}
            />  
             <Image
              source={require('../../assets/usuarios/jugador.png')}
               style={{
               width:90,
               height:80,
               borderRadius:10,
               zIndex:3,
               position:'absolute',left:'5%',
               bottom:'10%'
               }}
            />  


         </View>
          <View style={{flex:5 ,backgroundColor:'#312f3d'}}>
          <ScrollView>
        
            <View style={{marginTop:10}}>
           {  this.usuarios.map((item,i)=>
            { 
                return(
                    <View  key={i} style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10 }}>
    
                    <View style={{flex:1,marginTop:5,marginRight:10}}>
    
                           <Image source={item.foto} 
                          style={{ width:50,height:50 ,borderRadius:Platform.OS === 'ios' ? 25:30 }}
                          />
                         
                     </View>
    
                  <View style={{flex:8,flexDirection:'column',
                             paddingBottom:10,marginLeft: 10,}}>
                 
               
                             <Text style={{
                                fontSize:12,
                             color:'#ff5a60'
                             }}>{item.nombre}</Text>
             
    
                     <View style={{flexDirection:'row',paddingVertical:3}}>
                       <View  style={{flex:6,flexWrap:'wrap',backgroundColor:'#4D4B4B',
                         paddingVertical:10,paddingLeft:6,borderRadius:30}}>
                 <Text style={{fontSize:14,
                        color:'white'}}>{item.mensaje}</Text>
                  </View>
          
                    <Text style={{flex:2}}> {' '}</Text>
            
                   </View>
                
                 </View>
           </View>
    
                )
            }
         )
        }
        </View>
      </ScrollView>
             
          </View>
   
        <View style={{flex:1 ,flexDirection:'row',marginHorizontal:'2%'}}>
              <View style={{flex:2,flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                       <Image source={require('../../assets/icons_genGMI/userblack.png')} 
                          style={{ width:20,height:20  }}
                          />
                          <Text style={{
                              color:'#312f3d',fontSize:22,fontWeight: 'bold',
                          }}>{this.state.conectados}</Text>
              </View>
              <View style={{flex:5,flexDirection:'row',
                    alignItems: 'center',justifyContent: 'center'}}>

                <Image source={require('../../assets/icons_genGMI/mensajex.png')} 
                          style={{ width:40,height:40  }}
                          />
                <Image source={require('../../assets/icons_genGMI/microfonOf.png')} 
                          style={{ width:40,height:40,marginHorizontal:'5%'  }}
                          />
                  <Image source={require('../../assets/icons_genGMI/videOf.png')} 
                          style={{ width:40,height:40  }}
                          />
          
              </View>
              <View style={{flex:3,flexDirection:'column',
                           }}>
              <Text style={{
                  color:'#312f3d',fontSize:13,marginTop:5
              }}>Total time</Text>
              <Text style={{
                   color:'#312f3d',fontSize:22,fontWeight: 'bold',
              }}>07:09:21</Text>

               </View>
          </View >
     
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
    

});