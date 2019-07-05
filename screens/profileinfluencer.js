import React, { Component } from 'react';
import { Platform, Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import BicardView from './../components/bicardview'
  import EventContents from "./../components/eventContents"

import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Profileinfluencer extends Component {
   static navigationOptions = {
      header: null ,
  };
  
  constructor(props) {
    super(props)
  
  
    this.state = { 
  
      fotoGrande:require('../assets/influencers/MandyJTV/maxresdefault-2.jpg'),
      fotoUser: require('../assets/influencers/influencer.png') ,
      usuario:'MandyJTV',
      num_segui:34,
      mensaje:'Only 2 tickets left',
      dia:21,
      mes:'DEC',
      texto1:'My FIRST God of War experience!',
      texto2:'Games',
      direccion:'Live from New York, at 18:30 pm',

      usuarios:[
        {
         fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/MandyJTV/mandy4.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
    
        },
        {
          fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/MandyJTV/maxresdefault-3.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
        },
        {
          fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/MandyJTV/mandy5.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
        },
      ]
    }
  }



  render() {

    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal
    let screenHeight=Dimensions.get('window').height;
    
   

   if(screenHeight<=592){ //1080 * 1920  xxhdpi
 
    cajaVid=15;
    widtTrans='95.6%'
  }else if(screenHeight<=605){ //mopvil de  david

    cajaVid=15;
    widtTrans='100%'

} else if(screenHeight<=678){ // mi movil
  cajaVid=15;
  widtTrans='95.6%'
 }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
  cajaVid=60
  widtTrans='96.4%'
 }else if(screenHeight<=775){//1440 *2880 :560dpi
  cajaVid=60;
  widtTrans='96.4%'
 }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  cajaVid=15;
  widtTrans='95.6%'
 }else{ // 800 = 480 * 800 mdpi
  cajaVid=15;
  widtTrans='95.6%'
 }

    return (
  
            <View style={{flex:1}}>

              <View  style={{flex:9}}>
                    
    <ScrollView  >

{/*  CAJA DE IMAGEN CON SU TEXTO SUPERPUESTO*/}


     <Image
              source={require('../assets/influencers/MandyJTV/manycopia.jpg')}
               style={{
               width:screenWidth, //para imagen grande a la pantalla
               height:348,
           
               }}
            />


    <View style={{marginHorizontal:16,
          position:'absolute',top:210}}>
        <Text style={{fontSize:34,color:'white'}}>MandyJTV</Text>
        <Text style={{fontSize:20,color:'white'}}>@mandyJTV</Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("friends")}
             >

        <Text style={{fontSize:17,color:'white',paddingTop:20}}>12,342 Friends</Text>  
         </TouchableOpacity>
         <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("followin")}
             >
                 <Text style={{fontSize:17,color:'white',paddingTop:20,paddingLeft:10}}>984 Following</Text>
  </TouchableOpacity>
  </View>
    </View>
    
    <TouchableOpacity
      style={{
      
        position:'absolute',right:10,top:35,
        }}
            
            onPress={() => this.props.navigation.navigate("viewerChat")}
             >
    <Image
              source={require('../assets/icons_genGMI/mensaje2.png')}
               style={{
               width:40,
               height:40,
               borderRadius:20,
              
               }}
            />

</TouchableOpacity>
        
         <View style={{position:'absolute',left:'4%',top:'2.3%', zIndex:6}}>
         
          <TouchableOpacity 
              onPress={() => this.props.navigation.pop()}
            >
         <Ionicons name="md-arrow-round-back" size={38} color="white" />
         </TouchableOpacity>
        </View> 
        
      
    {/* numero grande de estadistica*/}

    <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewUno")}
             > 

   <View style={{flexDirection:'row',marginHorizontal:15}}>
       <View style={{flex:2,alignItems:'center'}} >
          <Text style={{
                  fontSize:55,color:'#312f3d'
          }}>4.1</Text>
       </View>

       
       <View style={{flex:4,flexDirection:'column',
           justifyContent:'center' }}>
             <View >
                
             <View  style={styles.estrellasTrendingProfile}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:14,height:14,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:14,height:14,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Red.png')} 
                               style={{ width:14,height:14,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Red.png')} 
                             style={{ width:14,height:14,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                            style={{ width:14,height:14,marginLeft:2}}
                                />
                </View>

           </View>

              <View style={{justifyContent:'center'}}>
              <Text style={{color:'#312f3d'}}>Based en 45 reviews</Text>
             </View>
       </View>
                <View style={{flexDirection:'row',flex:2,alignItems:'center',
                               marginTop:28}}>
                       <Image
              source={require('../assets/icons_genGMI/ViewsGrey.png')}
               style={{
               width:15,
               height:15,
            
               marginLeft:-6,
               marginRight:5,
  
               }}
            />
         <Text style={{color:'#677183'}}>27.551.803</Text>
         </View>
   </View>

{/*========================================================================= */}


<View style={{flexDirection:'row',marginHorizontal:16}}>  

     <View style={{flex:2 ,flexDirection:'row'}}>
     <Image
              source={require('../assets/influencers/KalaTempo/uno.jpg')}
               style={styles.ImagInfluence}
            />
            <Image
               source={require('../assets/influencers/KalaTempo/dos.jpg')}
              style={[{ marginLeft:-5 },styles.ImagInfluence]}
            />
            <Image
              source={require('../assets/OnBoard/podcast.jpg')}
              style={[{  marginLeft:-5  },styles.ImagInfluence]}
            />
     </View>
     <View style={{flex: 3,alignItems:'flex-start',justifyContent:'center'}}>
     <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("atends")}
             >
     <Text style={{color:'#697181',fontSize:16,
              marginLeft:-10}}>23 event attendees</Text>
      
      </TouchableOpacity>
       </View>
       <View style={{flex:1, justifyContent:'center',alignItems:'flex-end' }}>
       <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewUno")}
             >
       <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={styles.ImagInfluence}
            />
         </TouchableOpacity>
       </View>

</View>

</TouchableOpacity>
  {/* ----------biagraphy----------------*/} 

 <View style={{ marginHorizontal:16,paddingBottom:10,paddingVertical:15 }}>
     
     <Text style={{  color:'#312f3d',  fontSize:17,fontWeight:'500'
       }}>Biography</Text>         
</View>


<View style={{paddingBottom:10,marginHorizontal:15,
              paddingVertical:5,textAlign:'left'}}>
     
     <Text style={{  color:'#312f3d',  fontSize:16,letterSpacing:0.32
       }}>Many people would say that it is absolute madness to keep on doing the same
        thing, time after time, expecting to get a different result or for something
         different to happen.</Text>         
</View>

{/* LOCATION*/}
<View style={{marginHorizontal:15,marginVertical:20,paddingVertical:10}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Location</Text>
   <View style={{flexDirection:'row',paddingVertical:10}}>
   <Image
              source={require('../assets/icons_genGMI/ubicacion.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>Czeck Republic</Text>
   </View>
     
</View>

{/* LANGUAGE*/}

<View style={{marginHorizontal:15}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Language</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../assets/banderasLenguaje/eeuu.png')}
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

{/* categories*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between'
                ,marginTop:-10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17,fontWeight:'bold'}}>Categories</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("subCategoryInfluencer")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}

{/* FOLLOW  REDES SOCIALES */}

<View style={{marginHorizontal:15,marginVertical:15}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Follow me</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../assets/icons_genGMI/Social/Linkedin.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
       <Image
              source={require('../assets/icons_genGMI/Social/Twitch.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Twitter.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Youtube.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
            
            <Image
              source={require('../assets/icons_genGMI/Social/insta.png')}
               style={{
               width:50,
               height:50,
               marginRight:15,
               marginTop:-5,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
   </View>
     
</View>

{/* up coming elevent*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:-10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Upcoming Live Events</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("upcoevent")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}


             
{/* -----------------BICARDVIEW--------------*/}       
 <TouchableOpacity
             onPress={() => this.props.navigation.navigate("liveEventDetail2")}
             >
<BicardView 
          fotoGrande={this.state.fotoGrande}
          fotoUser={this.state.fotoUser}
          usuario={this.state.usuario}
          num_segui={this.state.num_segui}
          mensaje={this.state.mensaje}
          dia={this.state.dia}
          mes={this.state.mes}
          texto1={this.state.texto1}
           texto2={this.state.texto2}
           direccion={this.state.direccion}
       />

 
</TouchableOpacity>
 {/* -------------------------------------------------------------------*/}



{/* Past Live events*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Past Live Events</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("mediacontenInflu")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
  <View style={{marginBottom:hp('2%'),marginHorizontal:'4%'}}>

  
         {
                     this.state.usuarios.map((item,i)=> {

                       
                       return ( 
                        <EventContents  key={i}
                        fecha={item.fecha}
                        descripcion={item.descripcion}
                        imagVideo={item.imagVideo}
                        duraVid={item.duraVid}
                        tipo={item.tipo}
                        />

                       )
                     }
                     )

                    }
    </View>



    </ScrollView>


              </View>
              <View  style={{flex:1}}>
             <TouchableOpacity
                          style={{flex:1,backgroundColor:'#ff5a60',padding:13,
                          alignItems:'center',justifyContent:'center'}}
                                 onPress={() => this.props.navigation.navigate("requestPri1")}
                                 >
                       <Text style={{ color:'white', 
                         fontSize:wp ('5%'),letterSpacing:0.41 }}>Request Private Meeting</Text>
                         </TouchableOpacity>
                </View>


              </View>

     
    );
  }
 
}





const styles = StyleSheet.create({
 

estrellasTrendingProfile:{
  marginTop:6,
  paddingBottom:13,

  flexDirection:'row',
  zIndex:4,

},
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
/* imagenes pequenias superpuestas*/
ImagInfluence:{
  width:30,
  height:30,
  borderRadius: Platform.OS === 'ios' ? 15:30,
},
estrellasTrendingNuevo:{
   paddingTop:7,
   marginLeft:-6,
   flexDirection:'row',
   marginTop:-5,
 
 },
 transparenteNuevo:{
   
   height:60,
   position:'absolute',
   zIndex:3,
   backgroundColor:'black',
   opacity:0.5,
   marginHorizontal:7,
   bottom:6,
  
 },


});