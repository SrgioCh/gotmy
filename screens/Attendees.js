import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Attendees extends Component {



  render() {
    return (
     
    <ScrollView style={{marginTop:10}} >


{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',marginVertical:15,
           fontWeight: 'bold',}}>Attendees</Text>

</View>
    
{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:20,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
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

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
           paddingBottom:15}}>

                          <Image source={require('../assets/friends/loganPa.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
          <View style={styles.socialBotonBlanco}>
                <Text style={{color:'#312f3d'}}>
                ✔{''}Friends
                </Text>
          </View>
      
    </View>

</View>

{/*---------------------------------------------- */}
{/*------------------------------------------------- */}


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>

                          <Image source={require('../assets/friends/leroyGre.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Leroy Greene</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                       <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
          <View style={styles.socialBotonRojo}>
                <Text style={{color:'white'}}>
                 Be friends
                </Text>
          </View>
      
    </View>

</View>
{/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
           paddingBottom:15}}>

                          <Image source={require('../assets/friends/LoganPa2.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
          <View style={styles.socialBotonBlanco}>
                <Text style={{color:'#312f3d'}}>
                ✔{''}Friends
                </Text>
          </View>
      
    </View>

</View>

{/*---------------------------------------------- */}

{/*------------------------------------------------- */}


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>

                          <Image source={require('../assets/friends/rutheKJE.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Ruth Jenkins</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                       <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
          <View style={styles.socialBotonRojo}>
                <Text style={{color:'white'}}>
                 Be friends
                </Text>
          </View>
      
    </View>

</View>
{/*---------------------------------------------- */}

{/*------------------------------------------------- */}


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>

                          <Image source={require('../assets/friends/Caleb.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Caleb Pena</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                       <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
          <View style={styles.socialBotonRojo}>
                <Text style={{color:'white'}}>
                 Be friends
                </Text>
          </View>
      
    </View>

</View>
{/*---------------------------------------------- */}


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',
           paddingBottom:15}}>

                          <Image source={require('../assets/friends/loganPa.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Logan Patrick</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Guadeloupe</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
          <View style={styles.socialBotonBlanco}>
                <Text style={{color:'#312f3d'}}>
                ✔{''}Friends
                </Text>
          </View>
      
    </View>

</View>

{/*---------------------------------------------- */}
{/*------------------------------------------------- */}


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>

                          <Image source={require('../assets/friends/leroyGre.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5,flexDirection:'column',paddingLeft:10 ,paddingLeft:18 ,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d'}}>Leroy Greene</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                       <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                               style={{ width:10,height:10,borderRadius:10}}
                              />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Mauritania</Text>
          </View>
      
     </View>

    <View style={{flex:3,alignItems:'flex-end',
            justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
          <View style={styles.socialBotonRojo}>
                <Text style={{color:'white'}}>
                 Be friends
                </Text>
          </View>
      
    </View>

</View>
{/*---------------------------------------------- */}
    </ScrollView>


     
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
}


});