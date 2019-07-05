import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,ImageBackground,
  Image,TouchableOpacity} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class  SelectCategory extends Component {
    
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

    img:require('../assets/OnBoard/art-culture.jpg'),
    tipo:'Art & Culture'
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
                                width:20,
                               height:20,
                                  }}
                                             />
                 </TouchableOpacity>
                 </View>
                
                 <View style={{flex:7.7,justifyContent:'flex-end',paddingBottom:hp('2%'),
                     marginHorizontal:wp('4%'),zIndex:4}}>
                    <Text style={{
                         fontSize:wp('8%'),
                         color:'white',
                         fontWeight:'500'
                    }}>{this.state.tipo}</Text>
                 </View>
                 <View style={{zIndex:2}}>
                     <Text style={{ width:  Platform.OS === 'ios' ? '100%':'100%',
                                    paddingVertical:'100%',
                                    position:'absolute',
                                    zIndex:2,
                                   backgroundColor:'black',
                                opacity:0.5,
                               bottom:0,
                      }}></Text>
                  </View>
               </ImageBackground>
        
           <View style={{flex:6.5,marginHorizontal:wp('4%')}}>
               <View style={{marginTop:hp('2.5%'),marginBottom:hp('1%')}}>
                   <Text style={{
                      fontSize:wp('4.5%'),
                      color:'#312f3d',
                      fontWeight:'bold'  
                   }}>
                    Select 3 categories maximum
                   </Text>
               </View>
               <ScrollView >
                   <View style={{flexDirection:'row',}}>
                         <View style={{flex:0.8, paddingBottom:10}}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedA==true){
                        this.setState({
                          isCheckedA:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedA:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedA}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}



                    value={this.state.valueA}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedB==true){
                        this.setState({
                          isCheckedB:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedB:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedB}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueB}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>

                 <View style={{flexDirection:'row'}}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedC==true){
                        this.setState({
                          isCheckedC:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedC:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedC}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueC}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
             {/* ------------------------------------------- */}
             <View style={{flexDirection:'row' }}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedD==true){
                        this.setState({
                          isCheckedD:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedD:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedD}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueD}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
             {/* ------------------------------------------- */}
             <View style={{flexDirection:'row' }}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedE==true){
                        this.setState({
                          isCheckedE:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedE:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedE}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueE}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
             {/* ------------------------------------------- */}

              {/* ------------------------------------------- */}
              <View style={{flexDirection:'row' }}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedF==true){
                        this.setState({
                          isCheckedF:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedF:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedF}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueF}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
             {/* ------------------------------------------- */}
              {/* ------------------------------------------- */}
              <View style={{flexDirection:'row'}}>
                         <View style={{flex:0.8, paddingBottom:10,
                           }}>
                   <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedG==true){
                        this.setState({
                          isCheckedG:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedG:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedG}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueG}
                    checkedImage={require('../assets/icons_genGMI/boxred.png')}
                    uncheckedImage={require('../assets/icons_genGMI/boxwhite.png')}

                              />
                           </View>

                        <View style={{flex:9.2,justifyContent:'center',paddingLeft:wp('2%')}}>
                             <Text style={{fontSize:wp('3.5%'),color:'black',fontWeight:'500'}}>Subcategory</Text>
                        </View>
                 </View>
             {/* ------------------------------------------- */}
          </ScrollView>
           </View>
         
        
          
   </View>

     
    );
  }
 
}


const styles = StyleSheet.create({
 
   
});