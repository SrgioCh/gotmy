import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,KeyboardAvoidingView,
  StyleSheet,ScrollView,Dimensions,
  Image,TouchableOpacity} from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class PublishPri3 extends Component {

  static navigationOptions = {
    header: null ,
};


    constructor(props){

        
        super(props);
      
         this.state={
         
            nombreInflu:'Sophia Lindsey',
            ciudaInflu:'Luxembourg',
              // VALORES DE LOS INPUT
              ticMax: null,
              atends : null,
              discuent : null ,
            
              //PRECIOS
               Benefit:'1,200',
               feesTicket:0.50,
               rebaja:2.9,
               resultado:1.59,
           
         }
      
      }// fin de consttructor


  render() {
      /*
    valores=[];
    valores.push(this.state.ticMax);
    valores.push(this.state.atends);
    valores.push(this.state.discuent);

  alert(valores) */
  let screenHeight=Dimensions.get('window').height;
     
  if(screenHeight<=592){ //1080 * 1920  xxhdpi
    marBut=1
    fontM=14
    fontN=12
    promoTop=5
    marChoce=1
    marVerT=5
  }else if(screenHeight<=605){  //mopvil de  david
    marBut=50
    fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
} else if(screenHeight<=678){ // mi movil
marBut=50
fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
 }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
  marBut=50
  fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
 }else if(screenHeight<=775){//1440 *2880 :560dpi
  marBut=130
  fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
 }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  marBut=125
  fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
 }else{ // 800 = 480 * 800 mdpi
  marBut=125
  fontM=16
    fontN=14
    promoTop=20
    marChoce=20
    marVerT=15
 }

    
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

            <View style={{flex:1,
              marginTop:'5%'}}>
               <ScrollView showsVerticalScrollIndicator={false}> 
                    {/*  creamos la cabezera  */}
                    <View style={{flex: 1 ,flexDirection:'row', paddingBottom:'3%',
             borderBottomWidth: 2,borderBottomColor:'#C3C1C0'}}>
            <View style={{flex:1 , marginLeft:'4%',marginTop:'6%'}}>
            <TouchableOpacity
                       onPress={() => this.props.navigation.pop()}
                     >
                <Image
                  source={require('../../assets/icons_genGMI/Back.png')}
                  style={{
                                           
                        width:25,
                        height:25,
                        borderRadius:10,
                                 
                         }}
                       />
                 </TouchableOpacity>
               </View>
               <View style={{flex:7,marginTop:'6%',alignItems:'center'}}>
                 <Text style={{
                  marginLeft:'7%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>{''}{''}Pricing{''}{''}</Text>
               </View>
                <View style={{flex:2,marginTop:'6%',
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
              
                {/*  contenido  */}

                <View style={{marginHorizontal:16,alignItems: 'center',
                                marginTop:10}}>
                     <Text style={{color:'#312f3d',fontSize:22,fontWeight:'bold'}}>
                                Choose number of attendess </Text>
                    <Text style={{color:'#312f3d',fontSize:22,fontWeight:'bold'}}>and price per ticket</Text>
                 </View>

                 <View style={{flexDirection: 'row',marginHorizontal:16,marginVertical:20}}>
                         <View style={{flex:1,flexDirection:'column'}}>
                          <Text style={{
                              color:'#697181',
                              fontSize:13
                         }}>Tickets max.</Text>
                           <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                                       width:'95%'}}>

                              <View style={{flexDirection:'row',  paddingVertical:2}}>
                                 
                              <TextInput
                                   underlineColorAndroid='transparent'
                                   keyboardType='numeric'
                                    style={{
                                     width:'40%', 
                                     paddingLeft: Platform.OS === 'ios' ? 12:15,
                                     }}
                        
                                     onChangeText={
                                     (texto)=> this.setState({
                                      ticMax:texto//los que va encontrando
                                     })
                                               }  />

                              <Text style={{
                             color:'#677183',  fontSize:16,letterSpacing:0.32,marginLeft:'3%',
                                  marginTop:'2%'
                              }}>attendees</Text>
                             </View>

                          </View>
                         </View>
                         <View style={{flex:1,flexDirection:'column'}}>
                          <Text  style={{
                              color:'#697181',
                              fontSize:13
                         }}>Price by ticket</Text>
                           <View style={{marginTop:5,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee',
                                       width:'95%'}}>

                             <View style={{flexDirection:'row',paddingVertical:2,paddingHorizontal: 10}}>

                          <Text style={{
                             color:'#677183',  fontSize:16,letterSpacing:0.32,  marginTop:'2%'
                          }}>$</Text>
    
                             <TextInput
                                   underlineColorAndroid='transparent'
                                   keyboardType='numeric'
                                    style={{
                                     width:'40%', 
                                     paddingLeft: Platform.OS === 'ios' ? 12:5,
                                     }}
                                                 
                                     onChangeText={
                                     (texto2)=> this.setState({
                                      atends:texto2//los que va encontrando
                                     })
                                               }  />
                             </View>

                         </View>
                         </View>
                         </View>
                       {/* fin*/}                             

                      <View style={{marginVertical:marVerT, marginHorizontal:16,flexDirection:'row'}}>

                             <View style={{flex:1}}>
                             <Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
                             style={{ width:30,height:30}}
                             />   
                             </View>
                             <View style={{flex:8,flexDirection:'column',marginLeft:20,
                             borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                             <Text style={{color:'#312f3d',fontSize:fontM,marginTop:-7}}>Benefit with soldout</Text>
                             <Text style={{color:'#677183',fontSize:fontN,paddingBottom:8,paddingTop:4}}>
                             $ {this.state.Benefit}</Text>
                             </View>
                     </View>                             
                 
                     <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

                         <View style={{flex:1}}>
                         <Image source={require('../../assets/icons_genGMI/fice_detail3.png')} 
                         style={{ width:30,height:30}}
                         />   
                         </View>
                         <View style={{flex:8,flexDirection:'column',marginLeft:20,
                         borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                         <Text style={{color:'#312f3d',fontSize:fontM,marginTop:-7}}>GotMy fees by ticket</Text>
                         <Text style={{color:'#677183',fontSize:fontN,paddingBottom:8,paddingTop:4}}>
                         $ {this.state.feesTicket} + {this.state.rebaja} % = $ {this.state.resultado}</Text>
                         </View>
                         </View>               

                     {/* fin  */}
                      
                     <View style={{marginHorizontal:16,marginTop:promoTop=20}}>
                       <Text style={{color:'#312f3d', fontSize:17 ,fontWeight:'500',}}>
                       Promotional code
                       </Text>
                       <Text style={{marginVertical:10,color:'#677183', fontSize:fontN ,letterSpacing:-0.08}}>
                       Influencers can create a “Promo Code” and select a % discount to assign
                       to that code to share with viewers.
                       </Text>
                       <Text style={{color:'#697181', fontSize:fontN ,fontWeight:'300'}}>
                       Choose a discount %
                       </Text>
                       </View>
                       {/* fin */}

                     
                       <TextInput
                             underlineColorAndroid='transparent'
                               keyboardType='numeric'
                                style={styles.input2}

                                onChangeText={
                                    (texto3)=> this.setState({
                                     discuent:texto3//los que va encontrando
                                    })
                                }
                                    />

                          
    
   <View style={{ marginTop:marBut,alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
        onPress={() => this.props.navigation.navigate("publishPri4")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
         Continue </Text>      
      </TouchableOpacity> 
    </View>

 
              </ScrollView>
    
     </View>

     </KeyboardAvoidingView>
    );
  }
 
}





const styles = StyleSheet.create({
 
    
  text:{
       color:"gray",
      marginHorizontal:16,
      paddingVertical: 10,
     }, 
    input:{
      width:'91%',
      borderWidth:1,
      borderColor:'#e2e7ee',
      borderRadius:27,
      padding: Platform.OS === 'ios' ? 12:5,
      paddingLeft: 15,
      marginTop:5,
      marginBottom:8,
      marginLeft:15,
    },
    //INPUT
    input2:{
      width: Platform.OS === 'ios' ? '92%':'60%',
      borderWidth:1,
      borderColor:'#e2e7ee',
      borderRadius:27,
      padding: Platform.OS === 'ios' ? 12:5,
      paddingLeft: 15,
      marginTop:8,
      marginBottom:8,
      marginLeft:15,
     
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