import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class RequestAcepted2 extends Component {


    static navigationOptions = {
        headerTitle:'Acepted Request',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '80%',
            fontWeight:'500',
                letterSpacing:0.41,
                height:120,
                fontSize:16,
                color:'#312f3d',
                marginTop:  Platform.OS === 'ios' ? '45%':'40%',
    
        },
        headerRight: (<View>
         <Image
                 source={require('../../assets/icons_genGMI/checkRequest.png')}
                  style={{
                  width:30,
                  height:30,
                  marginRight:16,
                 }}
               />
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'Sophia Lindsey',
             ciudaInflu:'Luxembourg',

             attendes:'23 attendees',
             dates:'12 Jan, 2019',
             timess:'12:00 - 14:00 (2 hours)',
             budgess:'1,200'
          }
      
      }// fin de consttructor


       guardar(){
           alert('create Private metting');
       }

  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
 
     leftMod='8%'
     titu=24
     tituTop='0.2%'
     iconWidth=20
     iconheigh=20
     letraG=14
     letraM=12
     marginReqs=5
     padinBut=1
     fontEnd=12
    }else if(screenHeight<=605){ //mopvil de  david
     titu=28
     tituTop='2%'
     leftMod='8%'
     iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
  } else if(screenHeight<=678){ // mi movil
   titu=28
   tituTop='2%'
   leftMod='8%'
   iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
     titu=28
     tituTop='2%'
     leftMod='10%'
     iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
   }else if(screenHeight<=775){//1440 *2880 :560dpi
     titu=28
     tituTop='2%'
     leftMod='8%'
     iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
     titu=28
     tituTop='2%'
     leftMod='8%'
     iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
   }else{ // 800 = 480 * 800 mdpi
     titu=28
     tituTop='2%'
     leftMod='8%'
     iconWidth=30
     iconheigh=30
     letraG=16
     letraM=14
     marginReqs=15
     padinBut=20
     fontEnd=14
   }
  

    return (



      <View style={{flex: 1 }}>
     
          <View style={{flex:8,flexDirection:'column'}}>
            <ScrollView>

               <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:10}}>
                 <View style={{flex:2}}>
                 <Image source={require('../../assets/influencers/spffiele.png')} 
                 style={{ width:50,height:50,borderRadius:30}}
                 />   
                 </View>

               <View style={{flex:8,flexDirection:'column',paddingLeft:10 ,
                     }}>
                    <View>

                    <Text style={{fontSize:17,color:'#312f3d'
                        ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ width:10,height:10,marginTop:5}}>
                          <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius: Platform.OS === 'ios' ? 5:10 ,width:'100%',height:'100%'}}
                              />
                        </View>
                     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.ciudaInflu}</Text>
                   </View>
               </View>
          </View>
          
          {/* TITULO */}  
          <View style={{marginHorizontal:16}}>
               <Text style={{fontSize:titu,color:'#312f3d',marginTop:tituTop,
                 fontWeight: 'bold',}}>Just For Fun</Text>
         </View>

         <Text style={{fontSize:16,color:'#312f3d',marginTop:tituTop,marginBottom: '4%',
                 fontWeight: '500',marginHorizontal:16}}>Susprise for a friend</Text>
       
         
          <View style={{marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
              <Image source={require('../../assets/icons_genGMI/User.png')} 
                 style={{ width:iconWidth,height:iconheigh}}
                 />   
              </View>
              <View style={{flex:8,flexDirection:'column',marginLeft:20,
                       borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:letraG,marginTop:-7}}>Attendess</Text>
              <Text style={{color:'#677183',fontSize:letraM,paddingBottom:8,paddingTop:4}}>{this.state.attendes}</Text>
              </View>
          </View>
          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/CalendarGrey.png')} 
                style={{ width:iconWidth,height:iconheigh}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:letraG,marginTop:-7}}>Date</Text>
             <Text style={{color:'#677183',fontSize:letraM,paddingBottom:8,paddingTop:4}}>
             {this.state.dates}</Text>
             </View>
          </View>

          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/Time.png')} 
                style={{ width:iconWidth,height:iconheigh}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:letraG,marginTop:-7}}>Time</Text>
             <Text style={{color:'#677183',fontSize:letraM,paddingBottom:8,paddingTop:4}}>
             {this.state.timess}</Text>
             </View>
          </View>

          <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

              <View style={{flex:1}}>
                  <Image source={require('../../assets/icons_genGMI/budget.png')} 
                style={{ width:iconWidth,height:iconheigh}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:letraG,marginTop:-7}}>Budget</Text>
             <Text style={{color:'#677183',fontSize:letraM,paddingBottom:8,paddingTop:4}}>
             $ {this.state.budgess}</Text>
             </View>
          </View>


         <Text style={{fontSize:16,color:'#312f3d',marginVertical:marginReqs,
                 fontWeight: '500',marginHorizontal:16}}>Request description</Text>

         <Text style={{fontSize:fontEnd,color:'#312f3d',marginHorizontal:16,paddingBottom:padinBut}}>
                 Many people would say that it is absolute madness{'\n'} to keep on doing the
                  same thing, time after time,{'\n'} expecting to get a different result or
                   for something {'\n'}different to happen.
           </Text>
          </ScrollView>
        </View>
   
     <View  style={{flex: 1}}>
    
              <TouchableOpacity style={{flex:1,backgroundColor:'#ff5a60',padding:'5%',
  
                 alignItems:'center',justifyContent:'center'}}
                 onPress={() => this.props.navigation.navigate("publishPri1")} 
                >
                <Text style={{flex:1 , color:'white', 
                    fontSize:17,letterSpacing:0.41 }}>
                     Create Private Meeting</Text>
             </TouchableOpacity>
      
   </View>
  
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 

});