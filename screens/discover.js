import React, { Component } from 'react';
import { Platform, Alert,
  View,Text ,Dimensions,ImageBackground,
  StyleSheet,ScrollView,TouchableOpacity,
  Image} from 'react-native';

  
  import BicardView from './../components/bicardview'  
  import VidView from "./../components/vidView"  //components
  import CabezeraViewer from "./../components/cabezeraViewer"


import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Discover extends Component {

  static navigationOptions = {
    header: null ,
};

constructor(props) {
  super(props)


  this.state = { 
   // PARA LA CABEZERA
         imagViewer:require('../assets/reviews/kuskal.png'),
          nombreView:`Kurtis 'Kala' Lloyd`,
         correoView:'@kurtiskala',
        iconoUno:require('../assets/icons_genGMI/calendarRojo.png'),
        iconoDos:require('../assets/icons_genGMI/Filter.png'),

     // PARA BICARDVIEW
    fotoGrande:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
    fotoUser: require('../assets/influencers/influencer.png') ,
    usuario:'MandyJTV',
    num_segui:34,
    mensaje:'Only 2 tickets left',
    dia:21,
    mes:'DEC',
    texto1:'My FIRST God of War experience!',
    texto2:'Games',
    direccion:'Live from New York, at 18:30 pm',


     //PARA VIDvIEW
     usuarios:[
       {
        fotoIcon :require('../assets/influencers/influencer.png'),
        nombreUser:'MandyJTV',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
        imagVideo:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
        duraVid:'12:40',
        numEstrella:5,

       },
       {
        fotoIcon :require('../assets/influencers/uno.png'),
        nombreUser:'MandyJTV',
        descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
        imagVideo:require('../assets/influencers/chicarosa.jpg'),
        duraVid:'10:20',
        numEstrella:3,
       },
       {
        fotoIcon :require('../assets/influencers/tres.png'),
        nombreUser:'Randy Stanley',
        descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
        imagVideo:require('../assets/influencers/chicacorriendo.jpg'),
        duraVid:'08:30',
        numEstrella:5
       }

     ]
   
  }
}

recogeDeHijo(){
    
  this.props.navigation.navigate('discoverCalendar')
  //alert('uno')
  }
  recogeDeHijo2(){
 // alert('dos')
    this.props.navigation.navigate('discoverPreferences')
   
    }

  abrirMenu(){
    this.props.navigation.toggleDrawer() 
  }
 


  render() {

    let screenHeight=Dimensions.get('window').height;
    
  // alert(screenHeight)

    if(screenHeight<=592){//1080 * 1920  xxhdpi
      matop='50%';
      cajaVid=15;
      transBicard='95.7%'
    }else if(screenHeight<=605){ //mopvil de  david

      matop='50%';
      cajaVid=15;
      transBicard='95.6%'
  
  } else if(screenHeight<=678){ // mi movil
      matop='50%';
      cajaVid=15;
      transBicard='95.6%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    matop='42%';
    cajaVid=60
    transBicard='96.4%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    matop='50%';
    cajaVid=60;
    transBicard='96.4%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    matop='50%';
    cajaVid=15;
    transBicard='95.8%'
   }else{ // 800 = 480 * 800 mdpi
    matop='50%';
    cajaVid=180;
    transBicard='97%'
   }




  
    return (
<View style={{flex: 1}}>
    {/* aqui cabezera*/}

    <CabezeraViewer
       imagViewer={this.state.imagViewer}
       
       nombreView={this.state.nombreView}
       correoView={this.state.correoView}

       iconoUno={this.state.iconoUno}
       iconoDos={this.state.iconoDos}

      
       enviaAPadreIconoUno={this.recogeDeHijo.bind(this)}
       enviaAPadreIconoDos={this.recogeDeHijo2.bind(this)}

       enviaAPadreMenu={this.abrirMenu.bind(this)}
    
       />

    <View style={{flex: 8.7}}>
       <ScrollView style={{
marginTop:hp('2%'),
       }}>
            {/*   TITULOO   */}
            <View style={styles.contieneTitulo}>
                <Text style={styles.Titulo}>Discover</Text>
                <Text style={styles.subTitulo}>Live Events now</Text>
           </View>


             {/*  bloquee  NO CARDVIEW*/}

       <View style={{borderRadius:30,
         marginHorizontal:'4%',backgroundColor:'pink'
       }}>
       <View style={{borderRadius:30,
                    width:  Platform.OS === 'ios' ? '100%':'100%',
                      height:hp('30%')}}>
      <ImageBackground source={require('../assets/influencers/MandyJTV/download.jpg')} 
       style={{borderRadius:30,width:'100%',height:'100%'}}
      >
    <View style={{flex:6.5,flexDirection:'row',paddingTop:hp('2%')}}>
       <View style={{flex:1.5,alignItems:'center'}}>
             <Image source={require('../assets/influencers/influencer.png')} 
              style={{ width:40,height:40,borderRadius:10}}
              />  
       </View>
       <View style={{ flex:6.5 }}>
           <Text style={styles.textoLogo}> MandyJTV </Text>
           <View  style={styles.estrellasimagen}>
             <Image source={require('../assets/Red.png')} 
             style={{ width:11,height:11,}}
             />
           <Image source={require('../assets/Red.png')} 
             style={{ width:11,height:11,marginLeft:2}}
            />
            <Image source={require('../assets/Red.png')} 
             style={{ width:11,height:11,marginLeft:2}}
             />
            <Image source={require('../assets/Red.png')} 
              style={{ width:11,height:11,marginLeft:2}}
              />
            <Image source={require('../assets/Grey.png')} 
              style={{ width:11,height:11,marginLeft:2}}
               />
            </View>
       </View>
       <View style={{flex:2}}>
           <Image source={require('../assets/icons_genGMI/live.png')} 
              style={{ width:60,height:60}}
              />
       </View>

    </View>


     <View style={{flex:3.5,paddingLeft:wp('3%')}}>
        <Text style={styles.textoLogobajo}>
          Team Rocket vs Team Skull {'\n'}RAP BATTLE</Text>
         <Text style={[styles.textoLogobajo,{fontSize:wp('3%'),fontWeight:'normal',}]}>Entertaiment</Text> 
     </View>
    
    </ImageBackground>

       </View>
  </View>

           {/*  bloquee   TRENDING INFLUENCER */}

                <View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:9
                ,marginTop:10}}>
                 <View > 
                 <Text style={{color:"#312f3d",fontSize:17
                     ,fontWeight:'500'}}>Trending Influencers</Text>
                  </View>
                  <TouchableOpacity   
                onPress={() => this.props.navigation.navigate("searchOptions",{pagina:1})}
                > 
                   <View style={{flexDirection:'row'}} >
                 <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
               <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
                 </View>
                 </TouchableOpacity>
                </View>
   


{/* ---------------- SECCION IMAGEN DESPLAZABLE-----------*/}

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:5}} >
              <View style={{ flexDirection:'row',
              marginLeft : Platform.OS === 'ios' ? 10:0}}>
           
                <View style={{ paddingVertical:22,paddingHorizontal:10}}>
                <TouchableOpacity   
                onPress={() => this.props.navigation.navigate("profile1")}
                > 
               <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                    <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
                 <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
                       />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Grey.png')} 
                   style={{ width:11,height:11,marginLeft:2}}
                   />
                   </View>
                   </TouchableOpacity>
                 </View>

                 <View style={{ paddingVertical:22,paddingHorizontal:10}}>
                    <Image source={require('../assets/influencers/dos.png')} 
                  style={styles.imagentrending}
                 />
                   <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
                    <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
                       />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Grey.png')} 
                   style={{ width:11,height:11,marginLeft:2}}
                   />
                 </View>
              </View>

                <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/tres.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
               <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
                       />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Grey.png')} 
                   style={{ width:11,height:11,marginLeft:2}}
                   />
                   </View>
                </View>
         
                  <View style={{ paddingVertical:22,paddingHorizontal:10}}>
                    <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                  <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
                 <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
                       />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Red.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                    />
                    <Image source={require('../assets/Grey.png')} 
                    style={{ width:11,height:11,marginLeft:2}}
                       />
                   </View>
                 </View>

                  <View style={{ paddingVertical:22,paddingHorizontal:10}}>
                     <Image source={require('../assets/influencers/dos.png')} 
                        style={styles.imagentrending}
                       />
                      <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
                       <View  style={[styles.estrellasimagen2]}>
                       <Image source={require('../assets/Red.png')} 
                         style={{ width:11,height:11}}
                         />
                         <Image source={require('../assets/Red.png')} 
                         style={{ width:11,height:11,marginLeft:2}}
                          />
                          <Image source={require('../assets/Red.png')} 
                          style={{ width:11,height:11,marginLeft:2}}
                          />
                          <Image source={require('../assets/Red.png')} 
                         style={{ width:11,height:11,marginLeft:2}}
                         />
                         <Image source={require('../assets/Grey.png')} 
                        style={{ width:11,height:11,marginLeft:2}}
                        />
                      </View>
                   </View>

                       <View style={{ paddingVertical:22,paddingHorizontal:10}}>
                       <Image source={require('../assets/influencers/tres.png')} 
                       style={styles.imagentrending}
                          />
                        <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
                         <View  style={[styles.estrellasimagen2]}>
                          <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11}}
                           />
                     <Image source={require('../assets/Red.png')} 
                          style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Red.png')} 
                           style={{ width:11,height:11,marginLeft:2}}
                            />
                            <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                           />
                         <Image source={require('../assets/Grey.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                            />
                         </View>
                   </View>

                   </View>
             </ScrollView>

{/*  fin de imagenes horizontales */}

               {/*  bloquee   upcomign */}

            <View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:10}}>
               <View > 
                   <Text style={{color:"#312f3d",fontSize:17
                     ,fontWeight:'500'}}>Upcoming Live Events</Text>
               </View>
              <View style={{flexDirection:'row'}} >
                 <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("searchOptions",{pagina:2})}
                     >
                      <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
                      </TouchableOpacity>
                <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
              </View>
            </View>

             
{/* -----------------BICARDVIEW--------------*/}   
<TouchableOpacity 
                     onPress={() => this.props.navigation.navigate("liveEventDetail")}
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
         {/*  seccion trending media */}
    
          <View style={{flexDirection:'row',
                   justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:5}}>
              <View > 
                 <Text style={{color:"#312f3d",fontSize:17
                  ,fontWeight:'500'}}>Trending Videos</Text></View>

               <View style={{flexDirection:'row'}} >
               <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("searchOptions",{pagina:3})}
                     >
                  <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
               </TouchableOpacity>
                <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
             </View>
        </View>

         {/* CAJA DE LOS TRENDIGN*/}
    <View style={{marginBottom:hp('2%')}}>

  
         {
                     this.state.usuarios.map((item,i)=> {

                       
                       return ( 
                        <VidView key={i}
                        fotoIcon={item.fotoIcon}
                        nombreUser={item.nombreUser}
                        descripcion={item.descripcion} 
                        imagVideo={item.imagVideo}
                        duraVid={item.duraVid}
                        estrellas={item.numEstrella}
                         />

                       )
                     }
                     )

                    }
    </View>
                  
 </ScrollView>
    
  </View>



     </View>
 
    );
  }
 
}

const styles = StyleSheet.create({
 
  contieneTitulo:{
    marginBottom:20,
    marginLeft:16,
    paddingBottom:20,
    paddingHorizontal:16,
   },
   Titulo:{
     fontSize:34,
     marginLeft:-18,
     fontWeight:"700",
    
   },
   subTitulo:{
       marginTop:20,
       fontSize:17,
       marginLeft:-18,
       fontWeight:"500",
       marginBottom:-10,
   },


   estrellasimagen:{
   padding:3,
      flexDirection:'row',
   },
   estrellasimagen2:{
    padding:3,
    flexDirection:'row',
    zIndex:3,
    marginLeft:12,
  
   },

  textoLogo:{
  color:'white',
   fontSize:wp('4%'),
   fontWeight:'500',
  
  },

  textoLogo2:{ //para texto  imagen con transparencia
    padding:35,
    position:'absolute',
    zIndex:5,
    color:'white',
    top:160,
    fontSize:17,
    fontWeight:'500',
    textAlign:'left',
     left:'20%',
     backgroundColor:'yellow'
   },
   estrellasimagen3:{
 
    flexDirection:'row',
    zIndex:5,
    left:85,
    top:190,
   },// para  imagen con transparencia

  textoLogobajo:{
    color:'white',
    fontSize:wp('5%'),
    fontWeight:'bold',
    letterSpacing:1,

  },
  transparente:{
    width:317,
    height:54,
    position:'absolute',
    zIndex:3,
  
  left:17,
 bottom:0,
    fontWeight:'bold',
  
    backgroundColor:'black',
    opacity:0.5,
  },


  imagentrending:{
    width:100,
    height:100,
    
 
    
  },

  //TRENDING   **************
  estrellasTrending:{
    padding:3,
     flexDirection:'row',
   },
  textTren:{
   color:'#312f3d',
   fontSize:17,
  },

  pentaIcon:{
     color:'white',
     fontSize:13,
  },
  socialCategoria:{
    
    marginBottom:7,
     flexDirection: 'row',
   
   
    },
   
    textoprueba:{
     padding:5,
     position:'absolute',
     zIndex:3,
     color:'white',
     marginTop:43,
     fontWeight:'500',
     textAlign:'left',
    },
    textoprueba2:{
        padding:5,
        position:'absolute',
        zIndex:3,
        color:'white',
        marginTop:60,
        fontWeight:'500',
        textAlign:'left', 
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