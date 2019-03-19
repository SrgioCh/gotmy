import React, { Component } from 'react';


import { Platform, AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class SearchEvents extends Component {
  static navigationOptions = {
    header: null ,
};


  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          menu2:styles.menunormal,
          menu3:styles.menunormal,
      }
  
  }// fin de consttructor



  render() {
    return (
     
      <View style={{flex:1}}>
      <View style={{flex:3,marginTop:20}}>

   {/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
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

        
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <Text  style={{color:'#ff5a60',fontSize:16}}>
           Cancel
         </Text>

      </View>
          
  
</View>
 
 {/* ----------------MENU ----------------*/}
 
<View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginTop:5}}>

      <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu2]}>
      
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("searchuser")}
             >
      
         <Text  style={{ color:'#312f3d', fontSize:17,paddingVertical:14  }}>
         Users
         </Text>
     </TouchableOpacity>
      </View>

      <View style={[this.state.menu1,{flex:1,alignItems:'center',justifyContent:'center'}]}>
      
         <Text  style={{color:'#697181',marginLeft:10,fontSize:17,paddingVertical:14  }}>
          Live Eventes
         </Text>
       
      </View>
      <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("searchContent")}
             >
         <Text  style={{color:'#697181',marginLeft:10,fontSize:17,paddingVertical:14 }}>
           Content
         </Text>
     </TouchableOpacity>
      </View>

</View>

</View>

<View style={{flex:8}}>
  <ScrollView style={{marginTop:-35}}>

         
{/* -----------------BICARDVIEW--------------*/}    
 <TouchableOpacity
             onPress={() => this.props.navigation.navigate("liveEventDetail")}
             >
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  


<View>
<View style={{flexDirection:'row',
            marginHorizontal:16,marginVertical:14,
             position:'absolute',bottom:0,zIndex:4}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

      </View>

      <View style={{flex:3,flexDirection:'column'}}>
     
          <View>
          <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>Mabel Spencer</Text>
         </View>
      
     
             <View  style={styles.estrellasTrendingNuevo}>
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


<View style={{flex:4,alignItems:'flex-end',  justifyContent:'center'}}>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              @ 34
            </Text>
      </View>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              Only 2 tickets left
            </Text>
      </View>
  
    </View>

  </View>
  <Text style={styles.transparenteNuevo}></Text>
 </View>

 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#ff5a60'}} >Fashion</Text>
                          <View style={{flexDirection:'row'}}>
                           <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                          style={{ width:13,height:13,marginTop:4,marginRight:5}}
                            />  

                           <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                           fontWeight:'bold',color:'#677183',
                           paddingVertical:4}}>Live from New York, at 18:30 pm</Text>
                           </View>
                     </View>
   </View>  
</View>  
</TouchableOpacity>
 {/* -------------------------------------------------------------------*/}

      {/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault-1.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  


<View>
<View style={{flexDirection:'row',
            marginHorizontal:16,marginVertical:14,
             position:'absolute',bottom:0,zIndex:4}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

      </View>

      <View style={{flex:3,flexDirection:'column'}}>
     
          <View>
          <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>Mabel Spencer</Text>
         </View>
      
     
             <View  style={styles.estrellasTrendingNuevo}>
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


<View style={{flex:4,alignItems:'flex-end',  justifyContent:'center'}}>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              @ 34
            </Text>
      </View>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              Only 2 tickets left
            </Text>
      </View>
  
    </View>

  </View>
  <Text style={styles.transparenteNuevo}></Text>
 </View>

 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#ff5a60'}} >Fashion</Text>
                        <View style={{flexDirection:'row'}}>
                           <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                          style={{ width:13,height:13,marginTop:4,marginRight:5}}
                            />  

                           <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                           fontWeight:'bold',color:'#677183',
                           paddingVertical:4}}>Live from New York, at 18:30 pm</Text>
                           </View>
                     </View>
             </View>  
</View>  
 {/* -------------------------------------------------------------------*/}
  

        
 </ScrollView>
  </View>
 </View>
     

     
    );
  }
 
}





const styles = StyleSheet.create({
 


 //   MENUS
 menuelegido:{
   borderBottomWidth:1,
   borderBottomColor:'#ff5a60',
 },
 
 menunormal:{
   borderBottomWidth:1,
   borderBottomColor:'#e1e3e6',
 },
 
 //PARA BICARDVIEW
 transparenteNuevo:{
  width:  Platform.OS === 'ios' ? 325:315,
  height:60,
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.5,
  marginHorizontal:7,
  bottom:6,
 
},

estrellasTrendingNuevo:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',
  marginTop:-5,

},




});