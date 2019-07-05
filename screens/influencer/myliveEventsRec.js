import React, { Component } from 'react';


import { AppRegistry, Alert,Platform,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import  MyLiveEventsPast from "./myliveEventsPast" 
import  MyLiveEventsDraft from "./myliveEventsDraft"

import Cabezera from "./component/cabezera"
import BicardViewDos  from "./component/bicardview2"


export default class MyLiveEvents extends Component {


  static navigationOptions = {
    header: null ,
};

 

screenwidth=Dimensions.get('window').width;
screenheigth=Dimensions.get('window').height;

  constructor(props){

    super(props);
  
     this.state={

      imagInflu:require('../../assets/influencers/influencer.png'),
      influencer:'Kala | Tempo',
     // fotoInflu:'influencer.png',
      correoInflu:'@kalatempo',
      imagMasco:require('../../assets/influencers/KalaTempo/mascotaKala.png'),
      icono:require('../../assets/icons_genGMI/requestDetail.png'),
      haciaPag:'publishEven1',

       opaciNo:null,
       opaciSi:0.5,

       //para controla al scroll principal y no afecte al scroll hijo horixzontal
       scrolPrinci:true,
       mostrarB:'flex',
       mostrarC:'flex',


    user:{

      fotoGrande:require('../../assets/influencers/KalaTempo/kalafiesta.jpg'),
      iconoRed: require('../../assets/icons_genGMI/timeredLive.png') ,
       men1:'Your stream start at 18:30',
       men2:'30 min left',
       num_segui:34,
       dia:18,
      mes:'DEC',
      texto1:'Behold the power of the Dark Nexus!',
      texto2:'Show Event',
      direccion:'Live from Hong Kong, at 12:30 pm',
       tipo:'red',
    
    },





       usuarios:[
        {

      fotoGrande:require('../../assets/influencers/MandyJTV/maxresdefault.jpg'),
      icon: require('../../assets/icons_genGMI/timeredLive.png') ,
      mensa:'10 days,23 min left',
      num_segui:34,
      mensaje:'Only 2 tickets left',
      dia:21,
      mes:'DEC',
      texto1:"Kala's community Coaching !",
      texto2:'Show Event',
      direccion:'Hong Kong, at 12:30 pm',
      tipo:'white',
      },
      {

        fotoGrande:require('../../assets/influencers/MandyJTV/maxresdefault-1.jpg'),
        fotoUser: require('../../assets/influencers/influencer.png') ,
        mensa:'10 days,23 min left',
        num_segui:34,
        mensaje:'Only 2 tickets left',
        dia:21,
        mes:'DEC',
        texto1:"Kala's community Coaching !",
        texto2:'Games',
        direccion:'Live from New York, at 18:30 pm',
        tipo:'white',
        },
    ],

 

    //menus
 

    menu1:styles.menuelegido,
    textoUno:styles.textoElegido,

    menu2:styles.menunormal,
    textoDos:styles.textoNormal,

    menu3:styles.menunormal,
    textoTres:styles.textoNormal,


      }
  
  }// fin de consttructor

  cambiarVista=(num)=>{

    if(num==1){
      this.refs.scrol.scrollTo({x:0, y:0, animated: true})  
        this.setState({
           
            menu1:styles.menuelegido,
            textoUno:styles.textoElegido,
  
            menu2:styles.menunormal,
            textoDos:styles.textoNormal,
  
            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
        })
    }else if(num==2){
      this.refs.scrol.scrollTo({x:this.screenwidth, y:0, animated: true})
        this.setState({

            menu1:styles.menunormal,
            textoUno:styles.textoNormal,

            menu2:styles.menuelegido,
            textoDos:styles.textoElegido,

            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
        })
    }else if(num==3){
      this.refs.scrol.scrollTo({x:this.screenwidth*2, y:0, animated: true})
        this.setState({
          
            menu1:styles.menunormal,
            textoUno:styles.textoNormal,

            menu2:styles.menunormal,
            textoDos:styles.textoNormal,

            menu3:styles.menuelegido,
            textoTres:styles.textoElegido,
        })
    }

}


recogeDeHijo(dato){
    
  console.log('my live event past dato -> '+dato)
 
  }
  recogeDeHijo2(dato){
    
    console.log('my live event Draft dato -> '+dato)
   
    }
    recogeDeHijo3(dato){
    
      this.props.navigation.navigate("myLiveEventsArticle",{datosDraft:dato})
     
      }


  abrirMenu(){
    this.props.navigation.toggleDrawer() 
  }
 

  
transicion=(num)=>{

  if(num==1){
    
      this.setState({
          menu1:styles.menuelegido,
          textoUno:styles.textoElegido,
           menu2:styles.menunormal,
          textoDos:styles.textoNormal,
          menu3:styles.menunormal,
          textoTres:styles.textoNormal,
           
      })
  }else if(num==2){
     
      this.setState({
           menu1:styles.menunormal,
           textoUno:styles.textoNormal,
           menu2:styles.menuelegido,
           textoDos:styles.textoElegido,
            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
          
      })
  }else if(num==3){
    
      this.setState({
         
          menu1:styles.menunormal,
          textoUno:styles.textoNormal,
       

          menu2:styles.menunormal,
          textoDos:styles.textoNormal,
         

          menu3:styles.menuelegido,
          textoTres:styles.textoElegido,
          
      })
  }

}

  render() {

    return (

      <View style={{flex: 1}}>
     

        <Cabezera
       imagInflu={this.state.imagInflu}
       influencer={this.state.influencer}
  
       correoInflu={this.state.correoInflu}
       imagMasco={this.state.imagMasco}
       icono={this.state.icono}

       haciaPag={this.state.haciaPag}
       enviaAPadre={this.recogeDeHijo.bind(this)}
       enviaAPadreMenu={this.abrirMenu.bind(this)}
       abreMenu={true} // para poner la foto con touch o no
       />




      <View style={{flex: 8.7}}>
     
{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:hp('2%'),
           fontWeight: 'bold',}}>My Events</Text>

</View>
  {/* ----------------MENU ----------------*/}
 
  <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginBottom:10}}>

                 <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu1]}>
                 <TouchableOpacity
               onPress={() => this.cambiarVista(1)}
              >
                 
                 <Text  style={this.state.textoUno}>
                 Upcoming
                 </Text>
               </TouchableOpacity>
               </View>



           <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
           <TouchableOpacity
               onPress={() => {

                this.setState({
                  scrolPrinci:true,
                  mostrarB:'flex',
                  mostrarC:'flex'
                })
                    this.cambiarVista(2)
               }
              }
             >
            <Text  style={this.state.textoDos}>
           Past Events
          </Text>
          </TouchableOpacity>
         </View>


        <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <TouchableOpacity
                 onPress={() => {

                  this.setState({
                    scrolPrinci:true,
                    mostrarB:'flex',
                    mostrarC:'flex'
                  })

                   this.cambiarVista(3)
                  }
                 }
             >
            <Text  style={[this.state.textoTres,{marginLeft:10}]}>
             Drafts
              </Text>
         </TouchableOpacity>
      </View>

     </View>

 {/* ------------------------*/} 

 <ScrollView  ref='scrol'
               horizontal={this.state.scrolPrinci} 
                pagingEnabled={true}
                onScroll={
                  (event)=>{
                    pos=event.nativeEvent.contentOffset.x;
                    if(pos==0){
                      this.transicion(1);
                     
                    }else if(pos==this.screenwidth && pos<this.screenwidth*2){
                      this.transicion(2);
                    
                    }else if(pos>=this.screenwidth*2){
                      this.transicion(3);
                    
                    }
                  }
                }
               
              
                >
     
               <View  style={{
                   flex:1,
                   width:this.screenwidth,

                 }}>
  <ScrollView>
   <View onTouchStart={
    ()=>{
      this.setState({
    scrolPrinci:true,
    mostrarB:'flex',
    mostrarC:'flex'
  })
   }
}   >
       <BicardViewDos 
fotoGrande={this.state.user.fotoGrande}
iconoRed={this.state.user.iconoRed}
men1={this.state.user.men1}
men2={this.state.user.men2}
num_segui={this.state.user.num_segui}
 
dia={this.state.user.dia}
mes={this.state.user.mes}
texto1={this.state.user.texto1}
 texto2={this.state.user.texto2}
 direccion={this.state.user.direccion}
 tipo={this.state.user.tipo}
/>

</View>
<View 
onTouchStart={
  ()=>this.setState({
    scrolPrinci:true,
    mostrarB:'flex',
    mostrarC:'flex'
  })
}  

style={{flexDirection:'row',marginHorizontal:'4%',paddingVertical:hp('4%')}}>
               <View style={{flex:5}}>
                                 <Text style={{color:"#312f3d",
                                         fontSize:wp('4%'),
                                         fontWeight:'bold'}} > 
                                  Public Liv Eventes
                                 </Text>
                    </View>
                                <View style={{flex:5,alignItems:'flex-end'}}>
                                   
                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{
                                        marginTop:hp('0.3%'),
                                        color:"#ff5a60",
                                        fontSize:wp('3.5%'),
                                        fontWeight:'500'
                                         }}> View Calendar </Text>
                                        <View style={{}}>
                                        <Image
                                     source={require('../../assets/icons_genGMI/arrowred.png')}
                                     style={{}}
                                      />
                                        </View>
                                      
                                    </View>
                                    
                                </View>
                                 
                        </View> 

{/* -----------------BICARDVIEW--------------*/}   
<View
  style={{marginBottom:hp('3%')}}
 /*onTouchStart={
 // ()=>console.log('responder move')
 ()=>this.setState({
   scrolPrinci:false,
   mostrarB:'none',
   mostrarC:'none'
 })}*/
>
<ScrollView horizontal showsHorizontalScrollIndicator={false}  onMomentumScrollEnd={
    console.log('dejo de moverse')
}
onMomentumScrollBegin={
  console.log('inicia')
}
 pagingEnabled={false} style={{ }} >
   
{
  this.state.usuarios.map((item,i)=> {

                     
                     return ( 
                      <View key={i} style={{marginLeft:wp('3%')}}>


                 <View style={{backgroundColor:'#f6f6f6',borderRadius:hp('2.5%'),height:Platform.OS === 'ios'? hp('39%'):hp('40.5%')}}>

                         <View style={{padding:hp('1%')}} >
                               <Image source={item.fotoGrande} 
                               style={{ zIndex:1 ,width:this.screenwidth-50,height:hp('30%'),borderTopLeftRadius:hp('2.5%'),borderTopRightRadius:hp('2.5%'),}}
                                />
                        </View>  

                        

                       <View>
                             <View style={{flexDirection:'row',
                                             marginHorizontal:wp('4%'),
                                             position:'absolute',bottom:hp('1.5%'),zIndex:4}}>
                 
                                  <View style={{flex:1,justifyContent:'center'}}>

                                        <Image source={item.icon} 
                                                 style={{ width:30,height:30,borderRadius:10}}
                                            />
                                        </View>

                                 <View style={{flex:4.5,flexDirection:'column',
                                 justifyContent:'center'}}>

                                 <View style={{}}>
                                     <Text style={{fontSize:wp('4%'),color:'white'}}>
                                   {item.mensa}</Text>
                                 </View>


                               </View>


                         <View style={{flex:4.5,alignItems:'flex-end',  justifyContent:'center',paddingRight:wp('1%')}}>
                             <View style={{flexDirection:'row'}}>
                             <Image source={require('../../assets/icons_genGMI/User.png')} 
                                   style={{ width:15,height:15,marginRight:wp('1%')}}
                                    />  
                                <Text style={{color:'white'}}>{item.num_segui}</Text>
                           </View>
                            <View >
                             <Text style={{color:'white'}}>
                                {item.mensaje}
                             </Text>
                          </View>

                         </View>

                         </View>
                         <View style={{paddingHorizontal:wp('1.9%'),alignItems:'center',zIndex:3}}>
                         <Text style={[styles.transparenteNuevo,{ width:  Platform.OS === 'ios' ? this.screenwidth-50:this.screenwidth-50}]}></Text>
                         </View>
         
           
                         </View>

                            {/* cajita fecha*/}
        <View style={{marginTop:hp('-1.5%'),marginHorizontal:wp('2%'),
                  /*      marginLeft:  Platform.OS === 'ios' ? 6:8,
                    marginRight:  Platform.OS === 'ios' ? 11:8,*/
                    flexDirection:'row'}}>
             <View style={{ flex:1.5,borderBottomLeftRadius: hp('2.5%'),flexDirection:'column',
                  alignItems:'center',justifyContent:'center',backgroundColor:'white'
                }}>
                  <Text style={{ fontSize:wp('8%'),fontWeight:'bold'}}>
                   {item.dia}</Text>
                  <Text style={{color:'#ff5a60'}}>{item.mes}</Text>
              </View>
              <View style={{ flex:8.5, flexDirection:'column',backgroundColor:'white',paddingBottom:hp('2%'),borderBottomEndRadius:hp('2.5%')}}>
                        <Text style={{ fontSize: Platform.OS === 'ios' ? 15:wp('4%'),
                            fontWeight:'bold',color:'#312f3d',marginTop:hp('1%')}}>
                         {item.texto1}</Text>

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:wp('3.3%'),
                   fontWeight:'bold',color:'#ff5a60'}} >{item.texto2}</Text>
                   
                   <View style={{flexDirection:'row',paddingTop:hp('0.5%')}}>
                     <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                     style={{ width:15,height:15}}
                     />  

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:wp('3%') ,
                   fontWeight:'bold',color:'#677183',marginLeft:wp('1%'),
                    }}>{item.direccion}</Text>
                   </View>
                
                        </View>
                    </View>  
                </View>
                      
                </View>
                     )
                    }
                   )
   }



     </ScrollView>
     </View>
 
     </ScrollView>
 </View>
               <View  style={{
                
                   flex:1,
                   width:this.screenwidth,
                  display:this.state.mostrarB,

                 }}>
               <MyLiveEventsPast  enviaAPadre={this.recogeDeHijo.bind(this)} />
               </View>
               <View  style={{
                  
                   flex:1,
                   width:this.screenwidth,
                   display:this.state.mostrarC,

                 }}>
              <MyLiveEventsDraft  enviaAPadre2={this.recogeDeHijo2.bind(this)} enviaAPadre3={this.recogeDeHijo3.bind(this)} />
               </View>

            </ScrollView>
   
    </View>
  
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 

pentaIcon:{
  color:'white',
  fontSize:13,
  
},

//   MENUS
menuelegido:{
  borderBottomWidth:1,
  borderBottomColor:'#ff5a60',
},

menunormal:{
  borderBottomWidth:1,
  borderBottomColor:'#e1e3e6',
},
textoElegido:{
 color:'#312f3d', fontSize:17,paddingVertical:14  
},
textoNormal:{
 color:'#697181',fontSize:17,paddingVertical:14  
},

transparenteNuevo:{
       
  height:hp('8%'),
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.9,

  bottom:hp('1%')
 
},


});