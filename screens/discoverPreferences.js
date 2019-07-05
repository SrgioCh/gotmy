import React from 'react';
import { Platform,StyleSheet,ScrollView, Text,Alert,
    TouchableOpacity, View, Image } from 'react-native';

import Barra_DiscoverPreferences  from './../components/barra_discoverPreferences'
import ViewAll from "./../components/viewAll"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const util = require("util");

export default class DiscoverPreferences extends React.Component {

  static navigationOptions = {
    headerTitle: "Preferences",
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '70%',
        fontWeight:'500',
            letterSpacing:0.41,
          
            fontSize:16,
            color:'#312f3d',
            
           

       },
       headerTintColor: '#ff5a60',
      
};


constructor(props) {
  super(props)


  this.state = { 
         textoA:'Date and time range',
         textoB:'From 12:30,Today..',

         textoA2:'Influencers',
         textoB2:'All influencers',

         textoA3:'Sort by',
         textoB3:'Most popular',

         textoA4:'Price by ticket',
         textoB4:'From $10 to 90$',

         textoA5:'Language',
         textoB5:'English, Spanish',
    

   
       source1: require('../assets/OnBoard/art-culture.jpg'),
       source2: require('../assets/OnBoard/business.jpg'),

       source3: require('../assets/OnBoard/celebrity.jpg'),
       source4: require('../assets/OnBoard/education.jpg'),
       source5: require('../assets/OnBoard/cooking.jpg'),
    }
}

mostrarCategorias(){
//alert('mostraremos categorias');
this.props.navigation.navigate("discoverCategori");
}


  render() {
    return (
    <View style={{  marginHorizontal:'4%' ,flex:1}} >
    <ScrollView  showsVerticalScrollIndicator={false}>
    <TouchableOpacity 
                    style={{}}
                  onPress = { () => { this.props.navigation.navigate("discoPrefeFecha")}}>
         <Barra_DiscoverPreferences  texto1={this.state.textoA} texto2={this.state.textoB}
         />
      </TouchableOpacity>
         <Barra_DiscoverPreferences  texto1={this.state.textoA2} texto2={this.state.textoB2}
         />
         <Barra_DiscoverPreferences  texto1={this.state.textoA3} texto2={this.state.textoB3}
         />
         <Barra_DiscoverPreferences  texto1={this.state.textoA4} texto2={this.state.textoB4}
         />
         <TouchableOpacity 
                    style={{}}
                  onPress = { () => { this.props.navigation.navigate("discoPrefeLanguage")}}>
         <Barra_DiscoverPreferences  texto1={this.state.textoA5} texto2={this.state.textoB5}
         />
         </TouchableOpacity>

        <View  style={{ marginTop:15,marginBottom:10}} >
            <ViewAll titulo='Selected Categories' selecciona={this.mostrarCategorias.bind(this)}
                     all='View all'/>
         </View>

        
         <View style={{ flexDirection:'row'}}>
                     
                   <TouchableOpacity 
                    style={{borderRadius:10,flex:1,height:hp('15%')}}

                  onPress = { () => {
                        if (this.state.source1 == require("../assets/OnBoard/art-culture.jpg") )
                          {
                           this.setState({
                              source1: require("../assets/20.png")
                                  })
                          }
                      else{
                        this.setState({
                              source1: require("../assets/OnBoard/art-culture.jpg")
                                    })
                           }
                        }}
                      >
                  <Text style={styles.textoprueba}>
                  Art and {'\n'}Culture
                 </Text>
                 <Image source={this.state.source1} 
                   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                     />
                  </TouchableOpacity>  
   
           
             
              
               <TouchableOpacity 
                    style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
                  onPress = { () => {
                        if (this.state.source2 == require("../assets/OnBoard/business.jpg") )
                          {
                           this.setState({
                            source2: require("../assets/1.png")
                                  })
                          }
                      else{
                        this.setState({
                              source2: require("../assets/OnBoard/business.jpg")
                                    })
                           }
                        }}
                      >
                  <Text style={styles.textoprueba}>
                  Business &{'\n'}Professional
                 </Text>
                 <Image source={this.state.source2} 
                   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                     />
                  </TouchableOpacity>  
               

               <TouchableOpacity 
          
              style={{borderRadius:10,flex:1,height:hp('15%')}}
                  onPress = { () => {
                        if (this.state.source3 == require("../assets/OnBoard/celebrity.jpg") )
                          {
                           this.setState({
                            source3: require("../assets/18.png")
                                  })
                          }
                      else{
                        this.setState({
                              source3: require("../assets/OnBoard/celebrity.jpg")
                                    })
                           }
                        }}
                      >
                  <Text style={styles.textoprueba}>
                  {' '}{'\n'}Fashion
                 </Text>
                 <Image source={this.state.source3} 
                   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                     />
                  </TouchableOpacity>  
           
     </View>

     <View style={{ flexDirection:'row',marginTop:hp('1.5%')}}>
     
     <TouchableOpacity 
                    style={{borderRadius:10,flex:1,height:hp('15%')}}
                  onPress = { () => {
                        if (this.state.source4 == require("../assets/OnBoard/education.jpg") )
                          {
                           this.setState({
                            source4: require("../assets/16.png")
                                  })
                          }
                      else{
                        this.setState({
                              source4: require("../assets/OnBoard/education.jpg")
                                    })
                           }
                        }}
                      >
                  <Text style={styles.textoprueba}>
                  Classes &{'\n'}Education
                 </Text>
                 <Image source={this.state.source4} 
                   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                     />
                  </TouchableOpacity>  
            

                  <TouchableOpacity 
                    style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
                  onPress = { () => {
                        if (this.state.source5 == require("../assets/OnBoard/cooking.jpg") )
                          {
                           this.setState({
                            source5: require("../assets/17.png")
                                  })
                          }
                      else{
                        this.setState({
                              source5: require("../assets/OnBoard/cooking.jpg")
                                    })
                           }
                        }}
                      >
                  <Text style={styles.textoprueba}>
                  Classes &{'\n'}Education
                 </Text>
                 <Image source={this.state.source5} 
                   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                     />
                  </TouchableOpacity>  
                 <View  style={{borderRadius:10,flex:1,height:hp('15%')}}>
                 </View>

     </View>
      
        </ScrollView>
      </View>
    );
  }
}




const styles = StyleSheet.create({
    ImagInfluence:{
        width:30,
        height:30,
        borderRadius: Platform.OS === 'ios' ? 15:30,
        marginLeft: 5,
      
      },
      //PARA LAS IMAGENES
   textoprueba:{
      position:'absolute',
      zIndex:3,
      color:'white',
      fontWeight:'500',
      textAlign:'left',
      bottom:hp('2%'),
      left:wp('2%')
     },
});
