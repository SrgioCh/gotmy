import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,Modal,Dimensions,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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

             //PARA VENTANA MODAL
             modalVisible: false,

             //DATOS A MOSTRAR 
             use1:'Barry Moody',
             use1Fot:require("../../assets/influencers/influencer.png"),
             tipo1:'Change Moderator',

             use2:'Nelle Casey',
             use2Fot:require("../../assets/influencers/spffiele.jpg"),
             tipo2:'Change Moderator',

             //DATOS DE CAJAS
             timeSlow:'01:00',
             coments:46,
             banUs:3,
             timeout:'05:00',
          }
      
      }// fin de consttructor

 //PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}

  render() {
    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
     
    }else if(screenHeight<=678){ // mi movil
     
   }else if(screenHeight<=685){ //1080 *1920
    
   }else if(screenHeight<=775){//1440 *2880 :560dpi
   
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    
  }else{
    
   }

    return (



      <View style={{flex: 1 }}>
        <Modal
          transparent = {false}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
                  </View> 

                 <View style={{flex:7.5,backgroundColor:'#312f3d',paddingHorizontal:wp('5%')}}> 
               <View style={{flex:6.5}}>
               <View style={{alignItems:'center',justifyContent:'flex-start' ,marginTop:hp('-4%')}}>
                        <Text style={{
                          color:'grey',fontSize:wp('10%'),fontWeight:'bold'
                        }}>___</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}>
                        <Text style={ styles.titulos}>Chat settings</Text>
                    </View>
                  
                   <View style={{flexDirection:'row',marginTop:hp('1.5%')}}>
                     <View  style={{flex:1.5}}>
                         <Image  
                           source={this.state.use1Fot}
                          style={{ width:wp('9%'),height:hp('5%'),borderRadius:hp('4%')}}
                           />
                     </View>
                     
                     <View style={{flex:8.5 ,alignItems:'flex-start',justifyContent:'center'}}>
                     <Text style={styles.modalname} >{this.state.use1}</Text>
                     <Text style={ styles.modalTipo}>{this.state.tipo1}</Text>  
                     </View>
                    
                 </View>
                 <View style={{flexDirection:'row',marginTop:hp('2.5%')}}>
                      
                      <View style={styles.cajasImagen}>
                         <Image  
                           source={require("../../assets/streamingIcon/slow.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>Slow mode</Text>
                           <Text style={styles.numCaj}>{this.state.timeSlow}</Text>
                      </View>
                      <View style={[styles.cajasImagen,{marginHorizontal:wp('1.5%')}]}>
                      <Image  
                           source={require("../../assets/streamingIcon/coments.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>Comments</Text>
                           <Text style={styles.numCaj}>{this.state.coments}</Text>
                      </View>
                      <View style={[styles.cajasImagen,{marginRight:wp('1.5%')}]}>
                      <Image  
                           source={require("../../assets/streamingIcon/ban.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>Ban Users</Text>
                           <Text style={styles.numCaj}>{this.state.banUs}</Text>  
                      </View>
                      <View style={styles.cajasImagen}>
                      <Image  
                           source={require("../../assets/streamingIcon/timeFot.png")}
                          style={{ width:wp('10.3%'),height:hp('6%'),borderRadius:hp('5%') }}
                           />
                           <Text style={styles.titucaj}>Time Out</Text>
                           <Text style={styles.numCaj}>{this.state.timeout}</Text>   
                      </View>
                   </View>
                    
                  <View style={{marginTop:hp('2%')}}>
                        <Text style={ styles.titulos}>
                        Voice, Video and Screen share</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:hp('1.5%')}}>
                     <View  style={{flex:1.5 }}>
                         <Image  
                           source={this.state.use2Fot}
                          style={{ width:wp('9%'),height:hp('5%'),borderRadius:hp('4%') }}
                           />
                     </View>
                     
                     <View style={{flex:8.5 ,alignItems:'flex-start',justifyContent:'center'}}>
                     <Text style={styles.modalname} >{this.state.use2}</Text>
                     <Text style={ styles.modalTipo}>{this.state.tipo2}</Text>  
                     </View>
                    
                 </View>
                 <View style={{flexDirection:'row',marginTop:hp('2.5%')}}>
                      
                      <View style={styles.cajasImagen}>
                         <Image  
                           source={require("../../assets/streamingIcon/slow.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>OpenMode</Text>
                      </View>
                      <View style={[styles.cajasImagen,{marginHorizontal:wp('1.5%')}]}>
                      <Image  
                           source={require("../../assets/streamingIcon/coments.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>Mic Mode</Text>
                         
                      </View>
                      <View style={[styles.cajasImagen,{marginRight:wp('1.5%')}]}>
                      <Image  
                           source={require("../../assets/streamingIcon/ban.png")}
                          style={{ width:wp('10.3%'),height:hp('6%') }}
                           />
                           <Text style={styles.titucaj}>Spotlight</Text>
                          
                      </View>
                      <View style={{flex:2.3}}>
                          <Text style={styles.titucaj}>{' '}</Text>   
                      </View>
                   </View>

            </View>
             <View style={{flex:1, alignItems:'center',}}>
              
        <TouchableOpacity onPress = {() => {
                    this.toggleModal(!this.state.modalVisible);
                    this.props.navigation.navigate("");
                    }}
              style={{
                alignItems:'center',justifyContent:'center',width:wp('90%'),
                padding:hp('2%'),backgroundColor:'#ff5a60',borderRadius:hp('6%')
              }}
                    >
        <Text style={{
         color:'#fff',
         fontSize:hp('2.3%')
        }}>Stop streaming</Text>
        </TouchableOpacity>
        </View>
               
     </View>

            
               

     
           </Modal>

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
                <TouchableOpacity
                   onPress = { () => this.toggleModal(true)} >
                <Image source={require('../../assets/icons_genGMI/mensajex.png')} 
                          style={{ width:40,height:40  }}
                          />
                </TouchableOpacity>
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

  //Estilos Ventana Modal
  modal: {
    flex:2.5,
    backgroundColor: 'black',
    opacity:0.5,
   
  },
 titulos:{
  color:'white',fontSize:wp('3.7%'),fontWeight:'500'
 },
  modalname:{
    color:'white',fontSize:wp('3.2%'),fontWeight:'500'
  },
  modalTipo:{
    color:'grey',fontSize:wp('3%'),fontWeight:'500'
  },
  cajasImagen:{
    flex:2.3,borderColor:'#ff5a60',borderWidth:hp('0.2%'),
    borderRadius:hp('1.5%'),padding:hp('1%') ,alignItems:'center',justifyContent:'center'     
  },
  titucaj:{marginTop:hp('1%'),
    color:'white',fontSize:wp('3%'),fontWeight:'500'
  },
  numCaj:{
    color:'white',fontSize:wp('5%'),fontWeight:'500'
  }
 //------------------------------------
});