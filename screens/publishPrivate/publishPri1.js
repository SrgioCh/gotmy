import React, { Component } from 'react';
import { Platform,
  View,Text ,TextInput,ScrollView ,Dimensions,
  StyleSheet,KeyboardAvoidingView,
  Image,TouchableOpacity} from 'react-native';

  import Button from 'react-native-button'; 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class PublishPri1 extends Component {

  static navigationOptions = {
    header: null ,
};

    constructor(props){

        super(props);
      
         this.state={
         
            nombreInflu:'Sophia Lindsey',
            ciudaInflu:'Luxembourg',

           
      }
      
      }// fin de consttructor


  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){//1080 * 1920  xxhdpi
      imaWi=35
      imaHei=35
      topCabe='6%'
      botTop=20
      botMar=40
      titu=22
      dubtitu=16
    }else if(screenHeight<=605){ //mopvil de  david
      imaWi=30
      imaHei=30
      topCabe='6%'
      botTop=20
      botMar=60
      titu=26
      dubtitu=20
  } else if(screenHeight<=678){ // mi movil
    imaWi=50
      imaHei=50
    topCabe='10%'
    botTop='10%'
    botMar='25%'
    titu=26
    dubtitu=20
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    imaWi=50
      imaHei=50
    topCabe='10%'
    botTop='8%'
    botMar='25%'
    titu=26
    dubtitu=20
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    imaWi=50
      imaHei=50
    topCabe='6%'
    botTop='20%'
    botMar=60
    titu=26
    dubtitu=20
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    imaWi=50
      imaHei=50
    topCabe='6%'
    botTop='22%'
    botMar=60
    titu=26
    dubtitu=20
   }else{
    imaWi=50
    imaHei=50
    topCabe='6%'
    botTop='22%'
    botMar=60
    titu=26
    dubtitu=20
   }
  
    return (

      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

      <View style={{flex:1,
              marginTop:Platform.OS === 'ios' ? hp('5%'):'5%'}}>
              <ScrollView showsVerticalScrollIndicator={false}> 


        <View style={{flex: 1 ,flexDirection:'row', paddingBottom:Platform.OS === 'ios' ? hp('4%'):'3%',
         borderBottomWidth: 2,borderBottomColor:'#C3C1C0'}}>
            <View style={{flex:1 , marginLeft:'4%',marginTop:topCabe}}>
            <TouchableOpacity
                     onPress={() => this.props.navigation.pop()}
                     >
            <Image
                  source={require('../../assets/icons_genGMI/Back.png')}
                  style={{
                                           
                        width:20,
                        height:20,
                        borderRadius:10,
                                 
                         }}
                       />
           </TouchableOpacity>
            </View>
            <View style={{flex:7,marginTop:topCabe,alignItems:'center'}}>
                 <Text style={{
                  marginLeft:'7%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>Create Private Meeting</Text>
            </View>
            <View style={{flex:2,marginTop:topCabe,
            marginRight:'4%',alignItems:'flex-end'}}>
              <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("requestAcepted")}
                     >
            <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'500'
                 }}>cancel</Text>
                 </TouchableOpacity>
            </View>
        </View>
       
        <View style={{flexDirection:'row',marginHorizontal:16,
                   marginTop:14,marginBottom:10}}>
                 <View style={{flex:2}}>
                 <Image source={require('../../assets/influencers/spffiele.png')} 
                 style={{  width:imaWi,
                  height:imaHei,borderRadius:30}}
                 />   
                 </View>

               <View style={{flex:8,flexDirection:'column',paddingLeft:10 ,
                     }}>
                    <View>

                    <Text style={{fontSize:15,color:'#312f3d'
                        ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ width:10,height:10,marginTop:5}}>
                          <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius:10 ,width:'100%',height:'100%'}}
                              />
                        </View>
                     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>
                     {this.state.ciudaInflu}</Text>
                   </View>
               </View>
          </View>

  {/* TITULO */}  
  <View style={{marginHorizontal:16}}>
               <Text style={{fontSize:titu,color:'#312f3d', 
                 fontWeight: 'bold',}}>Just For Fun</Text>
         </View>

         <Text style={{fontSize:dubtitu,color:'#312f3d',marginTop:5,marginBottom:5,
                 fontWeight: '500',marginHorizontal:16}}>Susprise for a friend</Text>
       
        {/*  cajas de inputs*/}
               <View style={{marginHorizontal:'4%'}}>
               <Text style={{color:'#697181',marginTop:'2%',
                      fontSize:13}} >Live Event title, max 120 characters</Text>
                      <TextInput
                       underlineColorAndroid='transparent'
                       style={styles.input}
                         onChangeText={
                             (texto)=> this.setState({
                                             textoLive:texto,//los que va encontrando
                                              input:'none'
                                            })
                          }  />
 
    
{/* LANGUAGE*/}
        <View >
           <Text style={{color:'#697181',
             fontSize:13}} >Language</Text>
        </View>


           <View style={{borderRadius:27 ,borderWidth:1
                            ,marginTop:'2%' ,borderColor:'#e2e7ee'}}>

              <View style={{flexDirection:'row',padding:'3%'}}>
                    <View style={{ flex:1,}}>
                    <Image
                            source={require('../../assets/banderasLenguaje/eeuu.png')}
                             style={{
                          
                            width:17,
                             height:17,
                             marginRight:5,
                             borderRadius:10,
                
                             }}
                          />

                    </View>
                      <View style={{flex:8}}>
                      <Text style={{
                           color:'#677183',  fontSize:16,letterSpacing:0.32
                         }}>English</Text>

                      </View>
                     
                         <View style={{flex:1,alignItems:'center'}}>
                              <Image
                            source={require('../../assets/icons_genGMI/arrowDown.png')}
                             style={{
                          
                               width:17,
                               height:17,
                               marginRight:5,
                               borderRadius:10,
                
                                }}
                             />
                         </View>


                 </View>

              </View>

        {/* ----------------------- */}
                      
        <Text style={{color:'#697181',marginTop:'4%',marginBottom:'2%',
                 fontSize:13}} >Private meeting description</Text>
    
       <View style={styles.textAreaContainer}>
         
           <TextInput
              
               underlineColorAndroid="transparent"
                placeholder="Type something"
              placeholderTextColor="grey"
             numberOfLines={7}
              multiline={true}
              onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                textAlignVertical='top'
         />
         </View>


                  </View>
               


       

        <View style={{ marginTop:hp(botTop),marginBottom:hp(botMar),alignItems:'center'}}>
       
        <TouchableOpacity style={styles.containerbutton}
        onPress={() => this.props.navigation.navigate("publishPri2")}
        > 
        <Text style={{color:'white',fontSize:wp('4.5%')}}>
          Continue </Text>      
       </TouchableOpacity> 
     </View>
 
     </ScrollView>
        {/*  abajo final de view -flex9*/}
         </View>

        


      
 
    
</KeyboardAvoidingView>
   

     
    );
   
  }
 
}





const styles = StyleSheet.create({
 
    
  text:{
       color:"gray",
      marginHorizontal:16,
      paddingTop:5,
      paddingBottom: 10,
     }, 
    input:{
      width:'100%',
      borderWidth:1,
      borderColor:'#e2e7ee',
      borderRadius:27,
      padding: Platform.OS === 'ios' ? 12:5,
      paddingLeft: 15,
      marginTop:5,
      marginBottom:8,
      
    },
    textAreaContainer: {
      borderColor: '#f6f6f6',
      borderWidth: 2,
      padding: Platform.OS === 'ios' ? 40: 5,
      borderRadius:10,
     
     

    },
    containerbutton:{
      
        backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        alignItems:'center',
        marginBottom:40,
    },

});