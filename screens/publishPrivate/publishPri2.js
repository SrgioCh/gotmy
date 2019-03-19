import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

  import SwitchToggle from 'react-native-switch-toggle';

export default class PublishPri2 extends Component {


    static navigationOptions = {
        headerTitle:'Date and time',
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
        headerRight: (<View>
          <Text style={{
              color:'red',marginRight: 16,
          }}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
       //para toggle
             switchOn2: false,

           
      }
      
      }// fin de consttructor

      
      onPress2 = () => {
   
        if(this.state.switchOn2){
          this.setState({ switchOn2:false,
               elegido:'No elegido'  })
        }else{
          this.setState({ switchOn2: true,
                     elegido:'elegido'  })
    
        }
       
      }


  render() {
    
    return (

      <View style={{flex: 1}}>
        
        <View style={{flex:9}}>
          
    
    <View style={{marginHorizontal:16,alignItems: 'center',
                  }}>
      <Text style={{color:'#312f3d',marginVertical:15,
                   padding:10,fontSize:22,fontWeight:'bold'}}>
                    Choose a date and time</Text>
    </View>
     {/*FECHAS*/}
    <View style={styles.text}>
        <Text style={{color:'#697181',
                 fontSize:13}} >Live Event Date</Text>
       </View>
    
     <View style={{marginHorizontal:15,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee'}}>
   
   <View style={{flexDirection:'row',paddingVertical:10,paddingLeft: 10}}>
   <Image
              source={require('../../assets/icons_genGMI/calendarRojo.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
              
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>Thuersday, 21 jan 2018</Text>
   </View>
 
</View>
{/*localizacion*/}
    <View style={styles.text}>
        <Text style={{color:'#697181',
                 fontSize:13}} >Location</Text>
       </View>
    
     <View style={{marginHorizontal:15,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee'}}>
   
   <View style={{flexDirection:'row',paddingVertical:10,paddingLeft: 10}}>
   <Image
              source={require('../../assets/icons_genGMI/ubicacionrojo.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
            
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>Hong Kong </Text>
   </View>
 
</View>

<View style={{flexDirection: 'row',marginHorizontal:16,marginVertical:20}}>
      <View style={{flex:5,flexDirection:'column'}}>
         <Text style={{
             color:'#697181',
             fontSize:13
        }}>Start time</Text>
          <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                      width:'80%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingLeft: '10%'}}>
                <Image
              source={require('../../assets/icons_genGMI/TimeRed.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
               marginTop:3,
            
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32,marginLeft:'8%'
         }}>12:03 </Text>
            </View>
 
            </View>
        </View>
      <View style={{flex:5,flexDirection:'column'}}>
         <Text  style={{
             color:'#697181',
             fontSize:13
        }}>End time</Text>
          <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                      width:'80%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingLeft: '10%'}}>
                <Image
              source={require('../../assets/icons_genGMI/TimeRed.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
               marginTop:3,
            
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32,
            marginLeft:'8%'}}>14:15 </Text>
            </View>
 
    </View>
  </View>
  </View>
      <View style={{flexDirection:'row',marginHorizontal:16,marginTop:14,marginBottom: 5,}}>

                    <View style={{flex:1,marginTop:10}}>
                    <Image source={require('../../assets/icons_genGMI/Time.png')}
                         style={{ width:30,height:30,borderRadius:10}}
                        />
                
                    </View>

                <View style={{flex:4,flexDirection:'column',marginLeft:-10,
                    borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
                          <View>
                             <Text style={{fontSize:15,color:'#312f3d'}}>Open ticketing </Text> 
       
                         </View>
                         <View>
                       <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Sell tickets while you are live</Text>
                      </View>

                  </View>
                       <View style={{flex:1,justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
                       <SwitchToggle
                              backgroundColorOn='white'
                              backgroundColorOff='#ff5a60'
                              containerStyle={{
                                width: 40,
                                height: 24,
                                borderRadius: 25,
                                borderWidth:1,
                                padding: 5,
                             }}
                              circleStyle={{
                                width: 18,
                                height: 18,
                                borderRadius: 19,
                                backgroundColor: 'yellow', // rgb(102,134,205)
                              }}
                              switchOn={this.state.switchOn2}
                              onPress={this.onPress2} // funcion 
                              circleColorOff='white'
                              circleColorOn='#ff5a60'
                              duration={500}
                            />
                          
                  </View>
            </View>


   </View>
   
          <View style={{flex:1,marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("publishPri3")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          top: Platform.OS === 'ios' ? 8:5,
        }}
        />     

         </View>
   
 
    
    </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 
    
  text:{
       color:"gray",
      marginHorizontal:16,
      paddingVertical: 10,
     }, 
    input:{
      width:'91%',
      borderWidth:1,
      borderColor:'#e2e7ee',
      borderRadius:27,
      padding: Platform.OS === 'ios' ? 12:5,
      paddingLeft: 15,
      marginTop:5,
      marginBottom:8,
      marginLeft:15,
    },

});