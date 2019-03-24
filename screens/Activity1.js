import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class Activity1 extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
      userIcon1:require('../assets/activity/una.png'),
      user1:'Lisa smith',
      mensaje1:'started following you',
      tiempo1:'2 min ago',
      evento1:<View style={{backgroundColor:'#ff5a60',paddingHorizontal:10 ,
                  paddingVertical:4 ,borderRadius:20  }}>
                 <Text style={{color:'white',fontSize:12}}>Follow</Text>
              </View>,

     userIcon2:require('../assets/activity/dos.png'),
     user2:'Jhon Terry',
     mensaje2:'approved a Private Meeting',
     tiempo2:'5 min ago',
     evento2:null,
    


     userIcon3:require('../assets/activity/tres.png'),
     user3:'Melisa Everson',
     mensaje3:'booked your event Showcase Gaming 2019',
     tiempo3:'10 min ago',
     evento3: <Image source={require('../assets/OnBoard/motor.jpg')} 
                  style={{ width:50,height:50,borderRadius:5}}
                   />,

      }
  
  }// fin de consttructor

  render() {

    return (

      <View style={{flex: 1}}>
     
      <View  style={{flex: 1 ,marginTop:22,justifyContent:'center',
          borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
              <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("profile3")}
             >
          <View style={{flexDirection:'row',paddingHorizontal:'4%'}}>
        
              <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/reviews/kuskal.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:4,flexDirection:'column',marginLeft:10,
                        marginRight:15}}>
                  <Text style={{
                       color:'#312f3d',
                       fontSize:17 ,letterSpacing:0.41
                  }}>Kurtis 'Kala' Lloyd</Text>
                  <Text style={{
                         color:'#677183',
                         fontSize:13 ,letterSpacing:0.08
                  }}>@kurtiskala</Text>
             </View>
             <View style={{flex:1,marginRight:5}}>
              </View>
              <View style={{flex:1}}>
                 
              </View>
          </View>
          </TouchableOpacity>
  
      </View>
      
      <View style={{flex: 9}}>
     


{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:15,
           fontWeight: 'bold',}}>Activity</Text>

</View>

<ScrollView style={{marginTop:10}} >

<View style={{flexDirection:'row',marginHorizontal:16,marginTop:14,marginBottom: 5,}}>

      <View style={{flex:1,paddingBottom:15}}>
                          <Image source={this.state.userIcon1} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                      
       </View>
  
      <View style={{flex:4,flexDirection:'column',marginLeft:-10,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:15,color:'#312f3d'}}>
              <Text style={{fontWeight:'bold'}}>{this.state.user1}</Text> 
              {' '}{this.state.mensaje1}</Text>
           </View>
          <View>
            <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo1}</Text>
          </View>
      
     </View>
     <View style={{flex:1,justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
       {this.state.evento1}
     </View>
</View>


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:5}}>

    <View style={{flex:1,paddingBottom:15}}>
                    <Image source={this.state.userIcon2} 
                         style={{ width:40,height:40,borderRadius:10}}
                        />
                
    </View>

    <View style={{flex:4,flexDirection:'column',marginLeft:-10,
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
         <View>
        <Text style={{fontSize:15,color:'#312f3d'}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user2}</Text> 
        {' '}{this.state.mensaje2}</Text>
        </View>
     <View>
      <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo2}</Text>
    </View>

    </View>
          <View style={{flex:1,
              justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
          {this.state.evento2}
        </View>

</View>
{/*-----------------------------------------*/}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:5}}>

<View style={{flex:1,paddingBottom:15}}>
                    <Image source={this.state.userIcon3} 
                         style={{ width:40,height:40,borderRadius:10}}
                        />
                
 </View>

<View style={{flex:4,flexDirection:'column',marginLeft:-10,
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
     <View>
        <Text style={{fontSize:15,color:'#312f3d'}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user3}</Text> 
        {' '}{this.state.mensaje3}</Text>
     </View>
    <View>
      <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo3}</Text>
    </View>

</View>
<View style={{flex:1,justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
 {this.state.evento3}
</View>


</View>


 
    </ScrollView>
    
    </View>
  
  </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotonRojo:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:6,

  
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:5,
  borderWidth:1,
  borderColor: '#312f3d',
},
pentaIcon:{
  color:'white',
  fontSize:13,
},

});