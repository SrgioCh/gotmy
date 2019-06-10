import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class BookedEventsPresentation extends Component {
    static navigationOptions = {
        header: null ,
    };

    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTV',
             ciudaInflu:'Luxembourg',
           
             precioTicket:20,

            // para barra  del footer
              time:'10 days, 23 min left',
              users:34,
              onlytickets:2,
      
          }
      
      }// fin de consttructor


       guardar(){
           alert('create Private metting');
       }

  render() {

    return (



      <View style={{flex: 1 }}>
         
          <View style={{flex:9}}>
               <TouchableOpacity
             onPress={() => this.props.navigation.navigate("boked5")}
             > 
            
              <ImageBackground source={require('../assets/influencers/MandyJTV/liveeventDetail.png')}
              style={{width: '100%', height: '100%'}}>
           
                
                <View style={{flex:7,flexDirection:'row',marginHorizontal:16,marginTop:hp('5%')}}>

                           <View style={{flex:1}}>
                                <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("profile1")}
                              >
                            <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    
                          </TouchableOpacity>
                          </View>

                    <View style={{flex:2,flexDirection:'column',paddingLeft:10 
                    ,marginTop:3,marginLeft:5}}>
                     <View>
                         <Text style={{fontSize:17,color:'white'}}>{this.state.nombreInflu}</Text>
                     </View>
                    <View style={{flexDirection:'row'}}>
                           <View style={{ width:12,height:12,marginTop:5}}>
                              <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius:Platform.OS === 'ios' ? 5:10 ,width:'100%',height:'100%'}}
                               />
                           </View>
                          <Text style={{fontSize:13,color:'white',marginLeft:4}}>{this.state.ciudaInflu}</Text>
                     </View>
             </View>

              <View style={{flex:2,marginRight:1}}>
                    <View  style={styles.estrellasTrending}>
                               <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                        </View>
                       
            </View>
            <View style={{flex:2,alignItems:'flex-end'}}>
            <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}
                              >
               <Text style={{color:'white',fontSize:16}}>
               Skip video
               </Text>
               </TouchableOpacity>
             </View>
           </View>
           <View style={{flex:2,marginHorizontal:16}}>
               <Text style={{color:'white',fontSize:28,fontWeight:'bold'}}>
               My FIRST God of War {'\n'}
               experience!
               </Text>
            </View>

   </ImageBackground>
   </TouchableOpacity>
        </View>
     
       
             <View style={{flex:1,backgroundColor:'#ff5a60' ,flexDirection:'row'
                     }}>
               
                    <View style={{flex:1, alignItems:'center',justifyContent: 'center',
                                  marginLeft:'4%'}}>
                           <Image source={require('../assets/icons_genGMI/tiempo.png')} 
                               style={{ width:30,height:30}}
                           />

                    </View>
                     <View style={{flex:5 ,justifyContent: 'center'}}>
                          <Text style={{
                              color:'#fff',fontSize:13,marginLeft:'4%'
                          }}>{this.state.time}</Text>
                     </View>
                     <View style={{flex:4,marginRight:'4%',marginTop:'4%'}}>
                         <View style={{flexDirection:'row',
                            justifyContent:'flex-end'}}>
                         <Image source={require('../assets/icons_genGMI/iconUs.png')} 
                             style={{ width:15,height:15}}
                         />
                         <Text style={{
                             color:'#fff',fontSize:13,
                         }}>{this.state.users}</Text>
                         </View>
                        <View style={{alignItems:'flex-end'}}>
                        <Text style={{
                              color:'#fff',fontSize:13,
                          }}>Only {this.state.onlytickets} tickets left</Text>
                        

                        </View>
                      
                        
                        </View>
            </View >
          
          
  
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
    estrellasTrending:{
        paddingTop:7,
        marginLeft:-6,
        flexDirection:'row',
      
      },

});