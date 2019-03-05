import React, { Component } from 'react';
import { AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Upcomingevents extends Component {


  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          menu2:styles.menunormal,
          menu3:styles.menunormal,
     
      }
  
  }// fin de consttructor

  
 //  *** DECLARACION DE FUNCIONES **************

seleccion1=() =>{
   
  if(this.state.menu1!==styles.menuelegido){
      
     }
      
   } //  fin dela funcion

 
 



  render() {
    return (
     
    <ScrollView style={{marginTop:30 }} >


  {/* ----------- TITULO ----------------*/} 

 <View style={{ marginHorizontal:19,paddingBottom:2  }}>
     
     <Text style={{
         color:'#312f3d',
         fontSize:34,

     }}>Upcoming Events</Text>         

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
        

 
{/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,width:328,height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault-2.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  



  <View style={{zIndex:4,flexDirection:'row',
            marginLeft:8,marginRight:14,bottom:100,
             position:'absolute',}}>


             <View style={{flex:2,zIndex:4,alignItems:'center'}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

                </View>

                <View style={{flex:4,zIndex:4,flexDirection:'column'}}>
                     <View>
                     <Text style={{fontSize:17,color:'white',marginTop:7}}>
                      Influencer</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                       <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/buscador/lupa.jpg')} 
                         style={{borderRadius:10 ,width:'100%',height:'100%'}}
                         />
                       </View>
                        <Text style={{fontSize:13,color:'white',marginLeft:4}}>Country</Text>
                    </View>
  
              </View>

              <View style={{flex:1}}>
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
            <View style={{flex:2,alignItems:'flex-end',zIndex:4,
                justifyContent:'center'}}>
              <View>
                <Text style={{color:'white',bottom:-5}}>
                   @ 34
                </Text>
            </View>
          <View >
                <Text style={{color:'white' ,marginLeft:-40,marginTop:3}}>
                  Only 2 tickets left
                </Text>
           </View>
   </View>
       
  <Text style={styles.transparente}></Text>
 </View>


 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,marginHorizontal:10,flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'#ff5a60'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize:17,fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:16,fontWeight:'bold',color:'#ff5a60'}} >Games</Text>
                      <Text style={{ fontSize:13,fontWeight:'bold',color:'#677183',
                              paddingVertical:4}}> *  Live from New York, at 18:30 pm</Text>
                     </View>
   </View>  
</View>  
 {/* -------------------------------------------------------------------*/}


 
{/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,width:328,height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  



  <View style={{zIndex:4,flexDirection:'row',
            marginLeft:8,marginRight:14,bottom:100,
             position:'absolute',}}>


             <View style={{flex:2,zIndex:4,alignItems:'center'}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

                </View>

                <View style={{flex:4,zIndex:4,flexDirection:'column'}}>
                     <View>
                     <Text style={{fontSize:17,color:'white',marginTop:7}}>
                      Influencer</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                       <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/buscador/lupa.jpg')} 
                         style={{borderRadius:10 ,width:'100%',height:'100%'}}
                         />
                       </View>
                        <Text style={{fontSize:13,color:'white',marginLeft:4}}>Country</Text>
                    </View>
  
              </View>

              <View style={{flex:1}}>
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
            <View style={{flex:2,alignItems:'flex-end',zIndex:4,
                justifyContent:'center'}}>
              <View>
                <Text style={{color:'white',bottom:-5}}>
                   @ 34
                </Text>
            </View>
          <View >
                <Text style={{color:'white' ,marginLeft:-40,marginTop:3}}>
                  Only 2 tickets left
                </Text>
           </View>
   </View>
       
  <Text style={styles.transparente}></Text>
 </View>


 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,marginHorizontal:10,flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'#ff5a60'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize:17,fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:16,fontWeight:'bold',color:'#ff5a60'}} >Games</Text>
                      <Text style={{ fontSize:13,fontWeight:'bold',color:'#677183',
                              paddingVertical:4}}> *  Live from New York, at 18:30 pm</Text>
                     </View>
   </View>  
</View>  
 {/* -------------------------------------------------------------------*/}








    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
  /* PARA TRANSPARENCIA */
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
transparente:{
  width:313,
  height:60,
  position:'absolute',
  zIndex:1,
  backgroundColor:'black',
  opacity:0.5,
 bottom:-4,
 
},




});