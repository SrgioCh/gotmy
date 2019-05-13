import React, { Component } from 'react';
import { AppRegistry, Alert,TouchableOpacity,Platform,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import BicardView from './../components/bicardview'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Upcomingevents extends Component {
  static navigationOptions = {
    headerTitle:'',
    headerTintColor: '#ff5a60',
};

  constructor(props){

    super(props);
  
     this.state={
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
  
  
      fotoGrande2:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
      fotoUser2: require('../assets/influencers/influencer.png') ,
      usuario2:'Mabel Spencer',
      num_segui2:44,
      mensaje2:'Only 4 tickets left',
      dia2:21,
      mes2:'DEC',
      texto1_2:'My FIRST God of War experience!',
      texto2_2:'Fashion',
      direccion2:'Live from Las Vegas, at 21:00 pm'
         
     
      }
  
  }// fin de consttructor

  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){//1080 * 1920  xxhdpi
      wiTrans=313
    }else if(screenHeight<=605){ //mopvil de  david

      wiTrans='96.4%'
  } else if(screenHeight<=678){ // mi movil
    wiTrans='102.3%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
 wiTrans='96.4%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    wiTrans='102%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    wiTrans='102%'
   }else{ // 800 = 480 * 800 mdpi
    wiTrans='102%'
   }
    return (
     
  <View style={{flex:1}} >


  {/* ----------- TITULO ----------------*/} 

 <View style={{ marginHorizontal:19,marginTop:hp('3%') }}>
     
     <Text style={{
         color:'#312f3d',
         fontSize:34,

     }}>Upcoming Events</Text>         

</View>

<View style={{ marginHorizontal:'4%',paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',backgroundColor:'#f6f6f6',width:'100%',
              alignItems:'center',borderRadius:10}}>
              <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:215,
                     
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
  
<ScrollView>
 
{/* -----------------BICARDVIEW--------------*/}       

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

 
{/* -----------------BICARDVIEW--------------*/}       

<BicardView
          fotoGrande={this.state.fotoGrande2}
          fotoUser={this.state.fotoUser2}
          usuario={this.state.usuario2}
          num_segui={this.state.num_segui2}
          mensaje={this.state.mensaje2}
          dia={this.state.dia2}
          mes={this.state.mes2}
          texto1={this.state.texto1_2}
           texto2={this.state.texto2_2}
           direccion={this.state.direccion2}
       />

    </ScrollView>

</View>
     
    );
  }
 
}





const styles = StyleSheet.create({
 

});