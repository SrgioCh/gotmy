import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Mediacontentsinfluencer extends Component {
  static navigationOptions = {
    headerTitle:'',
    headerTintColor: '#ff5a60',
};

  constructor(props){

    super(props);
  
     this.state={
      tytexto:'',
      menuelegido:styles.menuelegido,
      menusinmarcar:styles.menunormal,
     
      }
  
  }// fin de consttructor

  render() {
    return (
     
    <ScrollView >
        
{/*----------- TITULO----------------- */}
<View style={{marginTop:16,marginBottom:5,marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',
           fontWeight: 'bold',}}>Media Contents</Text>
</View>


{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
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
 

 {/* ------------- LISTA VIDEO ----------------------------*/}
  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Sports</Text>
                  </View>
         </View>        
        <View >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy3.png')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'black',
                        opacity:0.5,
                      
                       paddingHorizontal:25,
                       paddingVertical:7,
                       bottom:8,
                       right:4,
                       zIndex:4,
                       borderRadius:10,
                      }}></Text>
             <Text
              style={{
               position:'absolute',
               zIndex:6,
               bottom:9,
               right:10,
               color:'white',
   
              }}>04:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}
 {/* --------------------------- --------------------*/}
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature,Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy4.jpg')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'black',
                        opacity:0.5,
                      
                       paddingHorizontal:25,
                       paddingVertical:7,
                       bottom:8,
                       right:4,
                       zIndex:4,
                       borderRadius:10,
                      }}></Text>
             <Text
              style={{
               position:'absolute',
               zIndex:6,
               bottom:9,
               right:10,
               color:'white',
   
              }}>04:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}
{/* -----------------------------LISTA VIDEO ----------------------------*/}
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Instagram Influencer</Text>
                  </View>
         </View>        
        <View >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/maxresdefault-3.jpg')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'black',
                        opacity:0.5,
                      
                       paddingHorizontal:25,
                       paddingVertical:7,
                       bottom:8,
                       right:4,
                       zIndex:4,
                       borderRadius:10,
                      }}></Text>
             <Text
              style={{
               position:'absolute',
               zIndex:6,
               bottom:9,
               right:10,
               color:'white',
   
              }}>04:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Fashion & Style</Text>
                  </View>
         </View>        
        <View >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy5.jpg')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'black',
                        opacity:0.5,
                      
                       paddingHorizontal:25,
                       paddingVertical:7,
                       bottom:8,
                       right:4,
                       zIndex:4,
                       borderRadius:10,
                      }}></Text>
             <Text
              style={{
               position:'absolute',
               zIndex:6,
               bottom:9,
               right:10,
               color:'white',
   
              }}>04:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}



    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({

//en lista influencer
estrellasTrending:{
  paddingTop:7,
 marginBottom:20,
  flexDirection:'row',

},
textTren:{
    color:'#312f3d',
    fontSize:15,
    fontWeight:'500',
   }


});