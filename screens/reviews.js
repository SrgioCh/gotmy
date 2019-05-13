import React, { Component } from 'react';
import { AppRegistry, Alert, TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Reviews extends Component {
  static navigationOptions = {
    headerTitle:'',
    headerTintColor: '#ff5a60',
};

  render() {
    return (
     
    <ScrollView style={{marginTop:10}} >
        
{/*----------- TITULO----------------- */}
<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',marginVertical:15,
           fontWeight: 'bold',}}>Reviews</Text>
</View>


{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
              alignItems:'center',marginRight:5,borderRadius:10}}>
                 <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:200,
                     
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
 

{/*  LISTA INFLUENCERRRSSSSSSSSSS */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1.5}}>
    <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewDos")}
             >
                          <Image source={require('../assets/reviews/sophia.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        
 </TouchableOpacity>
    </View>
  
    <View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Sophia Lindsey</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Micronesia</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrending}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>
{/*---------------------------------------------- */}

{/* -------------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1.5}}>

                          <Image source={require('../assets/reviews/vanesa.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Vanessa Sánchez</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Spain</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center'}}>
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
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>
{/*---------------------------------------------- */}
<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:1.5}}>

                      <Image source={require('../assets/reviews/romina.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

</View>

<View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
       <View>
          <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
           ,marginTop:3}}>Romina Suárez</Text>
      </View>
       <View style={{flexDirection:'row'}}>
         <View style={{ width:10,height:10,marginTop:5}}>
                 <Image source={require('../assets/buscador/lupa.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                  />
             </View>
          <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mexico</Text>
      </View>
  
 </View>

<View style={{flex:3,alignItems:'flex-end',
        justifyContent:'center'}}>
         <View  style={styles.estrellasTrending}>
                               <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Grey.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                        </View>
  
</View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>
{/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1.5}}>

                          <Image source={require('../assets/reviews/arturo1.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Arturo Martínez</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Spain</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrending}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>
{/*---------------------------------------------- */}

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



});