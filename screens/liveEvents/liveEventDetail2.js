import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class LiveEventDetail2 extends Component {


    static navigationOptions = {
        headerTitle:'Live Event Detail',
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
          <Text>{}</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
           nombreInflu:'MandyJTV',
           paisInflu:'Singapur',
           fotoGrande:require('../../assets/influencers/MandyJTV/maxresdefault-2.jpg'),
          
   
          dia:21,
         mes:'DEC',
        texto1:'My FIRST God of War experience!',
        texto2:'Games',
          direccion:'Live from New York, at 18:30 pm',

       //  SEGUIDORES

         willatend: 306 ,
         interested: 1264,

         
         usu3:false,
         caja3: styles.socialBotone,
          marca3:styles.Textsinmarcar,
         texto3:'Invite',
        
        //PAGAR
        precioTicket:20,
      }
      
      }// fin de consttructor


  render() {

    return (

      <View style={{flex: 1}}>
        <ScrollView>     
         <View style={{flex:8,flexDirection:'column',
                 paddingBottom:70}}>
           
                 <View style={{backgroundColor:'#f6f6f6',paddingBottom:7}}>

                       <View style={{borderRadius:10,
                                width:Platform.OS === 'ios' ? '100%':'100%',
                                height:200}} >
                             <Image source={this.state.fotoGrande} 
                            style={{ zIndex:1,width:'100%',height:'100%'}}
                            />
                        </View>  

                     <View  style={{
                            width:50,
                          height:50,
                         borderRadius:30,
                         backgroundColor:'#312f3d',
                         opacity:0.8,
                         zIndex:9,
                          position:'absolute',
                         right:15,
                         top:35,
                         alignItems:'center',
                          justifyContent:'center',

                           }}>
                            <Image source={require('../../assets/icons_genGMI/Like/corazongris.png')} 
                            style={{  width:30,height:30,
                              zIndex:10}}
                      />  
            
             </View>

        {/* cajita fecha*/}
        <View style={{borderRadius:10,marginTop:  Platform.OS === 'ios' ? null:-9,
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
      </View>  
      {/*   final de bicardview */}
      <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>
      <View style={{}}>
    <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewDos")}
             >
                          <Image source={require('../../assets/influencers/uno.png')} 
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
                      style={{borderRadius: Platform.OS === 'ios' ? 5:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.paisInflu}</Text>
          </View>
      
     </View>

        <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center'}}>
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
       
  {/* ----------live in description----------------*/} 

 <View style={{ marginHorizontal:16,paddingBottom:10,paddingVertical:15 }}>
     
     <Text style={{  color:'#312f3d',  fontSize:17,fontWeight:'500'
       }}>Live Event description</Text>         
</View>


<View style={{paddingBottom:10,marginHorizontal:16,
              paddingVertical:5,textAlign:'left'}}>
     
     <Text style={{  color:'#312f3d',  fontSize:16,letterSpacing:0.32
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
         
                      >Related tags</Text>

                   <View style={{
                              marginHorizontal:16,flexDirection:'row',
                            flexWrap:'wrap',paddingVertical:10}}>
             
                     <Text style={styles.tagsTrending}>#pokemon</Text>
                      <Text style={styles.tagsTrending}>#streaming</Text>
                      <Text style={styles.tagsTrending}>#comunity</Text>
                     
                 </View> 
                 {/*fin*/}

{/* FOLLOW  REDES SOCIALES */}

<View style={{marginHorizontal:16,marginVertical:15}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Share Live Event</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../../assets/icons_genGMI/Social/Linkedin.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
       <Image
              source={require('../../assets/icons_genGMI/Social/Twitch.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../../assets/icons_genGMI/Social/Twitter.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../../assets/icons_genGMI/Social/Youtube.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
            
            <Image
              source={require('../../assets/icons_genGMI/Social/insta.png')}
               style={{
               width:50,
               height:50,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
   </View>
     
</View>
{/*fin*/}

{/* SEGUIDORES*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',marginHorizontal:16
                ,marginTop:30,marginBottom:20}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:15,fontWeight:'500'}}>
        {this.state.willatend} will attend · {this.state.interested} interested</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("atends")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
       
         </View>
  </View>
  {/*fin*/}
     
{/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:2}}>

                 <Image source={require('../../assets/influencers/dos.png')} 
                      style={{ width:50,height:50,borderRadius:10}}
                     />
               
</View>

<View style={{flex:5,flexDirection:'column',paddingLeft:10 ,
    borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom: 10,}}>
    <View>
        <Text style={{fontSize:17,color:'#312f3d'}}>Mable Little</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{ width:10,height:10,marginTop:5}}>
            <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
        </View>
     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Bouvet Island (Bouvetoya)</Text>
 </View>

</View>

<View style={{flex:3,alignItems:'flex-end',
   justifyContent:'center', paddingBottom: 10, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
 
 <TouchableOpacity 
         onPress = { () => { Alert.alert('la invitaste .....')   }}
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

    {/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:2}}>

                 <Image source={require('../../assets/influencers/spffiele.png')} 
                      style={{ width:50,height:50,borderRadius:20}}
                     />
               
</View>

<View style={{flex:5,flexDirection:'column',paddingLeft:10 ,
    borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom: 10,}}>
    <View>
        <Text style={{fontSize:17,color:'#312f3d'}}>Linnie Elliott</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{ width:10,height:10,marginTop:5}}>
            <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
        </View>
     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Austria</Text>
 </View>

</View>

<View style={{flex:3,alignItems:'flex-end',
   justifyContent:'center', paddingBottom: 10, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
 
 <TouchableOpacity 
         onPress = { () => { Alert.alert('la invitaste .....')   }}
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
</View>
<TouchableOpacity 
       onPress = {() => this.props.navigation.navigate("liveEventDetail3") } >
  <View style={{flex:1,backgroundColor:'#ff5a60',padding:'5%',
      alignItems:'center',justifyContent:'center'}}>
       
     <Text style={{flex:1 , color:'white', 
         fontSize:17,letterSpacing:0.41 }}>
          Buys ticket for $ {this.state.precioTicket}</Text>
     
    </View>
    </TouchableOpacity>    
    
  
    
     </ScrollView>
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

//SEGUIDORES
socialBotone:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 18:17,

  
},
Textsinmarcar:{
  color:'white',
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 3:4,
  borderWidth:1,
  borderColor: '#312f3d',
}

});