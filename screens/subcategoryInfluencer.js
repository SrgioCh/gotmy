import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,ImageBackground,
  Image,TouchableOpacity} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class  SubCategoryInfluencer extends Component {
    
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
    isCheckedA:false,
    valueA:'',
    isCheckedB:false,
    valueB:'',
    isCheckedC:false,
    valueC:'',
    isCheckedD:false,
    valueD:'',
    isCheckedE:false,
    valueE:'',
    isCheckedF:false,
    valueF:'',
    isCheckedG:false,
    valueG:'',

    img:require('../assets/OnBoard/tecnologia.jpg'),
    tipo:'Youtuber'
  }

}
     






  render() {
  
    return (

        <View  style={{flex:1}}>
          
               <ImageBackground style={{flex:3.5,zIndex:1, }}
                source={this.state.img}>
                 <View style={{flex:2.3,justifyContent:'flex-end', zIndex:4, marginHorizontal:wp('4%')}}>
                 <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
             style={{zIndex:4,}}>
             <Image
                         source={require("../assets/icons_genGMI/Backwhitebk.png")}
                             style={{ zIndex:4,
                                width:30,
                               height:30,
                                  }}
                                             />
                 </TouchableOpacity>
                 </View>
                
                 <View style={{flex:7.7,justifyContent:'flex-end',paddingBottom:hp('2%'),
                     marginHorizontal:wp('4%'),zIndex:4}}>
                    <Text style={{
                         fontSize:wp('10%'),
                         color:'white',
                         fontWeight:'500'
                    }}>{this.state.tipo}</Text>
                 </View>
                 <View style={{zIndex:2}}>
                     <Text style={{ width:  Platform.OS === 'ios' ? '100%':'100%',
                                    paddingVertical:'100%',
                                    position:'absolute',
                                    zIndex:2,
                                   backgroundColor:'blue',
                                opacity:0.3,
                               bottom:0,
                      }}></Text>
                  </View>
               </ImageBackground>
        
           <View style={{flex:6.5,marginHorizontal:wp('4%')}}>
              
               <ScrollView >
            <View>
             
               <View 
 
             style={{flexDirection:'row',paddingVertical:hp('4%')}}>
               <View style={{flex:5}}>
                                 <Text style={{color:"#312f3d",
                                         fontSize:wp('4%'),
                                         fontWeight:'bold'}} > 
                                  Subcategory 1
                                 </Text>
                    </View>
                                <View style={{flex:5,alignItems:'flex-end'}}>
                                   
                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{
                                     color:"#ff5a60",
                                        fontSize:wp('4%'),
                                        fontWeight:'500'
                                         }}> View influencers </Text>
                                        <View style={{}}>
                                        <Image
                                     source={require('../assets/icons_genGMI/arrowred.png')}
                                     style={{}}
                                      />
                                        </View>
                                      
                                    </View>
                                    
                                </View>
                                 
                        </View> 


                        <View style={{
                             flexDirection:'row',
                            flexWrap:'wrap'}}>
             
                            <Text style={styles.tagsTrending}>especialidad 1</Text>
                            <Text style={styles.tagsTrending}>especialidad 2</Text>
                            <Text style={styles.tagsTrending}>especialidad 3</Text>
                          
                 </View>

         </View> 
         {/*   SEGUNDO BLOQUE */}
         <View>
             
             <View 

           style={{flexDirection:'row',paddingVertical:hp('4%')}}>
             <View style={{flex:5}}>
                               <Text style={{color:"#312f3d",
                                       fontSize:wp('4%'),
                                       fontWeight:'bold'}} > 
                                Subcategory 2
                               </Text>
                  </View>
                              <View style={{flex:5,alignItems:'flex-end'}}>
                                 
                                  <View style={{flexDirection:'row'}}>
                                    <Text style={{
                                   color:"#ff5a60",
                                      fontSize:wp('4%'),
                                      fontWeight:'500'
                                       }}> View influencers </Text>
                                      <View style={{}}>
                                      <Image
                                   source={require('../assets/icons_genGMI/arrowred.png')}
                                   style={{}}
                                    />
                                      </View>
                                    
                                  </View>
                                  
                              </View>
                               
                      </View> 


                      <View style={{
                           flexDirection:'row',
                          flexWrap:'wrap'}}>
           
                          <Text style={styles.tagsTrending}>especialidad 1</Text>
                          <Text style={styles.tagsTrending}>especialidad 2</Text>
                          <Text style={styles.tagsTrending}>especialidad 3</Text>
                          <Text style={styles.tagsTrending}>especialidad 4</Text>
                          <Text style={styles.tagsTrending}>especialidad 5</Text>
                        
               </View>

       </View> 

       {/*  TERCVER BLOQUE*/}
       <View>
             
             <View 

           style={{flexDirection:'row',paddingVertical:hp('4%')}}>
             <View style={{flex:5}}>
                               <Text style={{color:"#312f3d",
                                       fontSize:wp('4%'),
                                       fontWeight:'bold'}} > 
                                Subcategory 3
                               </Text>
                  </View>
                              <View style={{flex:5,alignItems:'flex-end'}}>
                                 
                                  <View style={{flexDirection:'row'}}>
                                    <Text style={{
                                   color:"#ff5a60",
                                      fontSize:wp('4%'),
                                      fontWeight:'500'
                                       }}> View influencers </Text>
                                      <View style={{}}>
                                      <Image
                                   source={require('../assets/icons_genGMI/arrowred.png')}
                                   style={{}}
                                    />
                                      </View>
                                    
                                  </View>
                                  
                              </View>
                               
                      </View> 


                      <View style={{
                           flexDirection:'row',
                          flexWrap:'wrap'}}>
           
                          <Text style={styles.tagsTrending}>especialidad 1</Text>
                          <Text style={styles.tagsTrending}>especialidad 2</Text>
                          <Text style={styles.tagsTrending}>especialidad 3</Text>
                        
               </View>

       </View> 

          </ScrollView>
 </View>
         
        
          
   </View>

     
    );
  }
 
}


const styles = StyleSheet.create({
   //*** TAGS DE TRENDING */
tagsTrending:{
    paddingVertical:8,
    borderColor:'#312f3d' ,
    borderWidth: 1,
    fontSize:13,
    borderRadius:20,
    paddingHorizontal:10,
    marginBottom: 5,
    marginLeft: 5,
  },
   
});