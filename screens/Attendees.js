import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,TouchableOpacity ,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Attendees extends Component {

  constructor(props) {
    super(props)
  
  
    this.state = { 
   
      usu1:false,
      caja1: styles.socialBotone,
      marca1:styles.Textsinmarcar,
      texto1:'Be friends',

      usu2:false,
      caja2: styles.socialBotone,
      marca2:styles.Textsinmarcar,
      texto2:'Be friends',

      usu3:false,
      caja3: styles.socialBotone,
      marca3:styles.Textsinmarcar,
      texto3:'Be friends',

      usu4:false,
      caja4: styles.socialBotone,
      marca4:styles.Textsinmarcar,
      texto4:'Be friends',

      usu5:false,
      caja5: styles.socialBotone,
      marca5:styles.Textsinmarcar,
      texto5:'Be friends',

      usu6:false,
      caja6: styles.socialBotone,
      marca6:styles.Textsinmarcar,
      texto6:'Be friends',

    }
  }

  render() {
    return (
     
          <View style={{flex:1}}>
            <View style={{flex:2.2}}>
              {/* TITULO */}  
   
   <View style={{marginHorizontal:16}}>
       <Text style={{fontSize:28,color:'#312f3d',marginVertical:15,
              fontWeight: 'bold',}}>Attendees</Text>
   
   </View>
       
   {/* BUSCADOR*/}
    <View style={{ marginHorizontal:16,paddingTop:hp('1.5%'),flexDirection:'row', }}>
         <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
                 alignItems:'center',borderRadius:10}}>
                    <View style={{ width:30,height:30}}>
                        <Image source={require('../assets/buscador/lupa.jpg')} 
                         style={{borderRadius:10 ,width:'100%',height:'100%'}}
                         />
                    </View>
                    <TextInput
                       style={{
                       
                          height:42,
                          width:200,
                        
                          borderRadius:10,
                       
                       } }
                       placeholder="Search......"
                       editable={true} // con false , no podremos escribir nada
                       borderBottomColor = '#e2e7ee'
                       borderBottomWidth ={1}
                       paddingHorizontal={5}
                       onChangeText={
                         (text3)=>{
                           this.setState(()=> {
   
                                             return {
                                               tytexto:text3,
                                             }
                                  })
                         }
                         
   
                         }//fin de onchange
                    />
   
                </View>
   
           </View>

            </View>
            <View style={{flex:7.8 }}>

   <ScrollView style={{marginTop:hp('0.2%')}} >
   {/*  LISTA INFLUENCERRRSSSSSSSSSS */}
   
   
   <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
   
       <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
              paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/loganPa.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
                           
     </View>
      <View style={{flex:4.7,flexDirection:'column',paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
             </View>
         
        </View>
   
       <View style={{flex:3.8,alignItems:'flex-end',
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
           
             {/*     caja de cambio de boton */}
             <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu1!==false)
                 {
                 this.setState({
                     caja1: styles.socialBotone,
                     marca1:styles.Textsinmarcar,
                     texto1:'Be friends',
                     usu1:false,
                    })
                 }
                else{
                   this.setState({
                     usu1:true,
                     caja1: styles.socialBotonBlanco,
                     marca1:' ',
                     texto1:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja1} >
                    <Text style={this.state.marca1}>
                      {this.state.texto1}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
       </View>
   
   </View>
   
   {/*---------------------------------------------- */}
   {/*------------------------------------------------- */}
   
    <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14}}>
   
  <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/leroyGre.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
        </View>
     <View style={{flex:4.7,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Leroy Greene</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                          <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
             </View>
         </View>
    <View style={{flex:3.8,alignItems:'flex-end',
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
               paddingBottom:15}}>
              {/*     caja de cambio de boton */}
              <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu2!==false)
                 {
                 this.setState({
                     caja2: styles.socialBotone,
                     marca2:styles.Textsinmarcar,
                     texto2:'Be friends',
                     usu2:false,
                    })
                 }
                else{
                   this.setState({
                     usu2:true,
                     caja2: styles.socialBotonBlanco,
                     marca2:' ',
                     texto2:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja2} >
                    <Text style={this.state.marca2}>
                      {this.state.texto2}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
       </View>
   
   </View>
   {/*---------------------------------------------- */}
   
   <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14}}>
   
       <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
              paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/LoganPa2.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
                           
   
       </View>
     
       <View style={{flex:4.7,flexDirection:'column',paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
             </View>
         
        </View>
   
       <View style={{flex:3.8,alignItems:'flex-end',paddingBottom:15,
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
              {/*     caja de cambio de boton */}
              <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu3!==false)
                 {
                 this.setState({
                     caja3: styles.socialBotone,
                     marca3:styles.Textsinmarcar,
                     texto3:'Be friends',
                     usu3:false,
                    })
                 }
                else{
                   this.setState({
                     usu3:true,
                     caja3: styles.socialBotonBlanco,
                     marca3:' ',
                     texto3:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja3} >
                    <Text style={this.state.marca3}>
                      {this.state.texto3}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
       </View>
   
   </View>
   
   {/*---------------------------------------------- */}
   
   {/*------------------------------------------------- */}
   
   
   <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14}}>
   
       <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/rutheKJE.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
                           
   
       </View>
     
       <View style={{flex:4.7,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Ruth Jenkins</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                          <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
             </View>
         
        </View>
   
       <View style={{flex:3.8,alignItems:'flex-end',
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              {/*     caja de cambio de boton */}
              <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu4!==false)
                 {
                 this.setState({
                     caja4: styles.socialBotone,
                     marca4:styles.Textsinmarcar,
                     texto4:'Be friends',
                     usu4:false,
                    })
                 }
                else{
                   this.setState({
                     usu4:true,
                     caja4: styles.socialBotonBlanco,
                     marca4:' ',
                     texto4:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja4} >
                    <Text style={this.state.marca4}>
                      {this.state.texto4}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
       </View>
   
   </View>
   {/*---------------------------------------------- */}
   
   {/*------------------------------------------------- */}
   
   
   <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14}}>
   
       <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/Caleb.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
                           
   
       </View>
     
       <View style={{flex:4.7,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Caleb Pena</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                          <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
             </View>
         
        </View>
   
       <View style={{flex:3.8,alignItems:'flex-end',
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
                {/*     caja de cambio de boton */}
             <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu5!==false)
                 {
                 this.setState({
                     caja5: styles.socialBotone,
                     marca5:styles.Textsinmarcar,
                     texto5:'Be friends',
                     usu5:false,
                    })
                 }
                else{
                   this.setState({
                     usu5:true,
                     caja5: styles.socialBotonBlanco,
                     marca5:' ',
                     texto5:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja5} >
                    <Text style={this.state.marca5}>
                      {this.state.texto5}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
       </View>
   
   </View>
   {/*---------------------------------------------- */}
   
   
   <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14}}>
   
       <View style={{flex:1.5, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
              paddingBottom:15}}>
   
                             <Image source={require('../assets/friends/loganPa.png')} 
                                  style={{ width:40,height:40,borderRadius:10}}
                                 />
                           
   
       </View>
     
       <View style={{flex:4.7,flexDirection:'column',paddingLeft:18 ,
                 borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
              <View>
                 <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
             </View>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                  style={{ width:10,height:10,borderRadius:10}}
                                 />
                    </View>
                 <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
             </View>
         
        </View>
   
       <View style={{flex:3.8,alignItems:'flex-end',
               justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
             {/*     caja de cambio de boton */}
             <TouchableOpacity 
                 onPress = { () => {
                  if (this.state.usu6!==false)
                 {
                 this.setState({
                     caja6: styles.socialBotone,
                     marca6:styles.Textsinmarcar,
                     texto6:'Be friends',
                     usu6:false,
                    })
                 }
                else{
                   this.setState({
                     usu6:true,
                     caja6: styles.socialBotonBlanco,
                     marca6:' ',
                     texto6:'✔ Friends',
                  })
                }
              }}
              >
   
               <View style={this.state.caja6} >
                    <Text style={this.state.marca6}>
                      {this.state.texto6}
                   </Text>
                   </View>
   
               </TouchableOpacity>
         
          </View>
   
          </View>
   
       </ScrollView>






            </View>

          </View>

     
    );
  }
 
}





const styles = StyleSheet.create({
 
//para la cajita cambiantes
socialBotone:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'90%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 11:11,

  
},
Textsinmarcar:{
  color:'white',
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'90%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 11:11,
  borderWidth:1,
  borderColor: '#312f3d',
}



});