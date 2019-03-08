import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import Checkbox from 'react-native-modest-checkbox';
  import { Button } from "react-native-elements";

export default class RequestPri3 extends Component {


    static navigationOptions = {
        headerTitle:'Request Private Meeting',
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
        headerRight: (<View style={{marginRight: 16}}>
           <Text style={{color:'red'}}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
            
           

          }
      
      }// fin de consttructor


 
presiona=()=>{

  let elegidos=[];
  if(this.state.isChecked===true){
    elegidos.push(this.state.value);
  }
  

  if(this.state.isChecked===true)
  {
    alert("se agregaron :  "+elegidos)
  }else{
    alert('no marcaste nada');
  }

}



  render() {

    return (
      <View style={{flexDirection:'column',paddingBottom :20}}>
           
      <ScrollView>

      <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:8}}>
            <View style={{flex:2}}>
            <Image source={require('../../assets/influencers/uno.png')} 
            style={{ width:50,height:50,borderRadius:30}}
            />   
            </View>

          <View style={{flex:8,flexDirection:'column',paddingLeft:2 ,
                }}>
               <View>

               <Text style={{fontSize:17,color:'#312f3d'
                   ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
               </View>
              
               <View  style={styles.estrellasTrending}>
                              <Image source={require('../../assets/Red.png')} 
                              style={{ width:11,height:11,}}
                              />
                             <Image source={require('../../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                              style={{ width:11,height:11,marginLeft:2}}
                             />
                          <Image source={require('../../assets/Grey.png')} 
                           style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                           />
                       </View>
          </View>
     </View>
     
     {/* TITULO */}  
  

  <View style={{marginHorizontal:16}}>
      
           <Text style={{fontSize:20,color:'#312f3d',marginBottom: 10,
            fontWeight: '500'}}>Pick up options to estimation</Text>
 
  </View>
  {/* precio */}
  <View style={{flexDirection: 'row',marginHorizontal:16,marginVertical:20}}>
      <View style={{flex:1,flexDirection:'column'}}>
         <Text style={{
             color:'#697181',
             fontSize:13
        }}>Number attendess</Text>
          <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                      width:'95%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingLeft: 10}}>
                
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>60 attendees</Text>
            </View>
 
         </View>
        </View>
      <View style={{flex:1,flexDirection:'column'}}>
         <Text  style={{
             color:'#697181',
             fontSize:13
        }}>Your budget</Text>
          <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                      width:'95%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingHorizontal: 10}}>
               
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>$ 2,000</Text>
            </View>
 
    </View>
  </View>
  </View>
  {/* fin */}
  <View style={{ marginHorizontal:16,
      paddingVertical: 10,}}>
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
{/*  fin */}
<View style={{flexDirection: 'row',marginHorizontal:16,marginVertical:20}}>
      <View style={{flex:2,flexDirection:'column'}}>
         <Text style={{
             color:'#697181',
             fontSize:13
        }}>Start time</Text>
          <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                      width:'95%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingLeft: 10}}>
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
            color:'#677183',  fontSize:16,letterSpacing:0.32
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
                      width:'40%'}}>
   
            <View style={{flexDirection:'row',paddingVertical:6,paddingHorizontal: 10}}>
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
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>14:15 </Text>
            </View>
 
    </View>
  </View>
  </View>
  {/*   fin  */}
  <View style={{marginHorizontal:16}}>
      
      <Text style={{fontSize:17,color:'#312f3d',marginBottom: 10,
       fontWeight: '500'}}>Estimated Budget</Text>
      <Text style={{
         color:'#677183',fontSize: 13,
      }}>
      Influencer sets suggested budget for their time
      </Text>
  
</View>
{/* fin */}
 <View style={{marginVertical:20, marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
<Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
   style={{ width:30,height:30}}
  />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
        borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:14,marginTop:-7}}>Your budget is below influencer estimation</Text>
<Text style={{color:'#677183',fontSize:12,paddingBottom:8,paddingTop:4}}>
$ 2,200</Text>
</View>
</View>


<View style={{ backgroundColor:'#ff5a60',marginTop:20,paddingVertical:8,
                borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button   
          title="Send private request"
          onPress={() => this.props.navigation.navigate("requestPri4")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          
        }}
        />     

      </View>
   </ScrollView>
 </View>

    );
  }
 
}





const styles = StyleSheet.create({
  
  estrellasTrending:{
    paddingTop:7,
   marginBottom:20,
    flexDirection:'row',
  
  },

 
    textAreaContainer: {
        borderColor: '#f6f6f6',
        borderWidth: 2,
        padding: 5,
        borderRadius:10,
        marginHorizontal:16,
        marginTop:20,

      },


});