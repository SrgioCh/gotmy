import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CabezeraMenu from "../components/cabezeraMenu"
import CuerpoMenu from "../components/cuerpoMenu"


class InfluencerMenu extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

 

 desSelec=<Text style={{  display:'none' }}> </Text>;

  state={
      sombra1:'none',
      index1:1,
       seleccionado1:this.desSelec,
       seleccionado2:this.desSelec,
       seleccionado3:this.desSelec,
       seleccionado4:this.desSelec,
       seleccionado5:this.desSelec,
       tami:hp('2%'),


      //CABEZERA MENU
      
      imagViewer:require('../assets/influencers/KalaTempo/kalaInfluMenu.jpg'),
      imagInflu:require('../assets/influencers/KalaTempo/kalamenu.jpg'),
      textSup:'Go to Viewer Mode',
      nombre:"Kala | Tempo",
      email:'@kalatempo',
      cambiar:'discover',
      mascota:require('../assets/influencers/KalaTempo/mascotaKala.png'),
     estrellas:3,
      //menu Viewer

      menuViewer:[{
      enlace:'profile2',
      imagmenu:require('../assets/menu/influprofile.png'),
      titu:'My Influencer profile',
      borde:null,
      },
      {
      enlace:'editinfluencerprofile',
      imagmenu:require('../assets/menu/editvprofile.png'),
      titu:'Edit profile',
      borde:null,
      },
      {
        enlace:'profile2',
        imagmenu:require('../assets/menu/balance.png'),
        titu:'My Balance',
        borde:null,
        },
        {
          enlace:'requesPrivMeting', // es otra pagina aun no creada
          imagmenu:require('../assets/menu/billing.png'),
          titu:'Billing',
          borde:styles.bordeFinal,
          },
          {
            enlace:'profile2', // es otra pagina aun no creada
            imagmenu:require('../assets/menu/setings.png'),
            titu:'Settings',
            borde:null,
            }
            ,
        {
          enlace:'verification1', // es otra pagina aun no creada
          imagmenu:require('../assets/menu/sendback.png'),
          titu:'Send feedback',
          borde:null,
          }
          ,
        {
          enlace:'profile2',// es otra pagina aun no creada
          imagmenu:require('../assets/menu/help.png'),
          titu:'Help',
          borde:null,
          }

    ]
  }

   recogeDeHijo(dato){
    this.props.navigation.navigate(dato);
    this.props.navigation.closeDrawer();
   }
  
  render () {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
    
    if(screenHeight<=592){
   
    }else if(screenHeight<=678){
   
   }else if(screenHeight<=684){
  
   }else if(screenHeight<=775){
   
   }else{
  
   }
 
 
    return (
      <View style={{flex:1}}>

  <CabezeraMenu 
  
  imagViewer={this.state.imagViewer}
  imagInflu={this.state.imagInflu}
  textSup={this.state.textSup}
  nombre={this.state.nombre}
  email={this.state.email}
  cambiar={this.state.cambiar}
  enviaAPadre={this.recogeDeHijo.bind(this)}

  influencer={true}
  mascota={this.state.mascota}
  estrellas={this.state.estrellas}
  />

   <View style={{flex:5.4,
  
   }}>

     {
         this.state.menuViewer.map((item,i)=>{

          return(
            <CuerpoMenu key={i}
            enlace ={item.enlace}
            imagmenu ={item.imagmenu}
            titu={item.titu}
            borde={item.borde}

            enviaAPadre={this.recogeDeHijo.bind(this)}
           />
          )
         })
     }
      

     
    </View>   
    <View style={{ flex:1, paddingLeft:wp('5%'),justifyContent:'center'}}>
      <Text style={{color:'#ff5a60',fontSize:wp('3%'),fontWeight:'500'}}>
        Log out
      </Text>
    </View>  
   </View>
    );
  }
}

const styles = StyleSheet.create({


  bordeFinal:{
    paddingBottom: hp('1.5%'),
      borderBottomColor:'#E8E5E4',
      borderBottomWidth: wp('0.5%'),
    
  }

})


export default InfluencerMenu;