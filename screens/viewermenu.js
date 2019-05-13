import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ViewerMenu extends Component {

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


      //titulo en imagen

      nombre:"Kurtis 'Kala' Lloyd",
      email:'@kurtis',
 
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

<ImageBackground source={require('../assets/influencers/KalaTempo/kalamenu.jpg')}
     style={{flex:3.5 }}>

<View style={{flex:5}}>

<View style={{marginTop:hp('4.5%'),width:'75%',marginHorizontal:'6%',
 borderRadius: hp('5%'),backgroundColor:'#312f3d',opacity:0.5,
 height:'40%',position:'absolute'
}} />

<TouchableOpacity 
style={{flexDirection:'row', marginTop:hp('5%'),marginHorizontal:'8%'}}
onPress={this.navigateToScreen('requesPendin')}>

   <View style={{flex:2 }}>
   <Image  
          source={require('../assets/influencers/influencer.png')}
           style={{
            width:wp('11.2%'),height:hp('6%'),borderRadius:wp('5%')
           }}
           />
   </View>
   <View style={{flex:8, justifyContent:'center'}}>
        <Text style={{color:'white', fontSize:wp('4%'),fontWeight:'500'}}>Go to Influencer Mode</Text>
   </View>
   
</TouchableOpacity>
</View>
<View style={{flex:5,marginHorizontal:'6%',justifyContent:'flex-end'}}>
<View style={{marginBottom:'6.5%'}}>
  <Text style={{
  color:'white',fontSize:wp('5.5%') ,fontWeight: '500', 
 }}>{this.state.nombre}</Text>
 <Text style={{
  color:'white',fontSize:wp('4%') ,fontWeight: '100', 
 }}>{this.state.email}</Text>

 </View>
</View>

 
  </ImageBackground>    

   <View style={{flex:6.5,
     marginTop:hp('2.5%'),paddingHorizontal:wp('6%')
   }}>
        <View style={{flexDirection:'row'}}>

            <View style={{flex:1.5,justifyContent: 'center'}}>
                 <Image  
                         source={require('../assets/menu/viewerprofile.png')}
                          style={styles.imagen}
                           />
            </View>
           
            <TouchableOpacity style={{
             flex:8.5,justifyContent:"center"
               }}
             /*  onPress={()=>
                this.setState({
                 seleccionado1:seleccionado,
                 seleccionado2:this.desSelec,
                 seleccionado3:this.desSelec,
                 seleccionado4:this.desSelec,
                 seleccionado5:this.desSelec,
                })
              }*/
            onPressOut={this.navigateToScreen('vieweredit')}>
               <Text style={styles.menu}>
                My Viewer profile
               </Text>
            </TouchableOpacity>

        </View>
               
    </View>   

   </View>
    );
  }
}


const styles = StyleSheet.create({

  imagen:{
    width:wp('9%'),height:hp('5%')
  },
  menu:{marginLeft: wp('5%'),
     color:'#312f3d',fontSize:wp('3.5%') ,fontWeight: '500',
  }

})

ViewerMenu.propTypes = {
  navigation: PropTypes.object
};



export default ViewerMenu;