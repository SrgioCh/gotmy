import React from 'react';
import { Platform,StyleSheet,ScrollView, Text,TextInput, View, Image } from 'react-native';
import BicardView from './../components/bicardview'

const util = require("util");

export default class DiscoverCalendar extends React.Component {

  static navigationOptions = {
    headerTitle: "Live Events Calendar",
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
     headerRight: ( 
       <View style={{height:20,width:20,marginRight:16}}>
           <Image 
        source={require('../assets/icons_genGMI/Search.png')}
        style={{
          width:'100%',
          height:'100%',
      
        }}
       />

       </View>
       ),  
      
};


constructor(props) {
  super(props)


  this.state = { 

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


    fotoGrande2:require('../assets/influencers/chicarosa.jpg'),
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
}


  render() {
    return (
    <View style={{  marginHorizontal:16 }} >
    <ScrollView  showsVertical ScrollIndicator={false}>
         <View style={{    marginVertical:15,
                                width:Platform.OS === 'ios' ? 339:328,
                                height:300}} >
          <Image source={require('../assets/mixto/calendar.png')} 
                  style={{ width:'100%',height:'100%'}}
                   />  

          </View>
        <View>
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

        </View>
        </ScrollView>
      </View>
    );
  }
}




const styles = StyleSheet.create({
 
});