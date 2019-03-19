import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

  import  Modal  from "react-native-modal";

export default class PreviewLiveEvent extends Component {


    static navigationOptions = {
        headerTitle:'',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '80%',
            fontWeight:'500',
                letterSpacing:0.41,
                height:120,
                fontSize:16,
                color:'#312f3d',
                marginTop:  Platform.OS === 'ios' ? '45%':'43%',
    
        },
        headerRight: (
         
                  <View style={{
                flexDirection: 'row',
                  }}>
                
                  <Image
                    source={require('../../assets/icons_genGMI/lapizPublish.png')}
                     style={{
                     width:40,
                     height:40,
                     marginRight:16,
                    }}
                  />
                 
                    <Image
                    source={require('../../assets/icons_genGMI/basuraPublish.png')}
                     style={{
                     width:40,
                     height:40,
                     marginRight:16,
                    }}
                  />
             </View>
            ),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={

            //PARA VENTANA MODAL
            modalVisible: false,
            fondoPrincipal:'',
         
           nombreInflu:'Sophia Lindsey',
           paisInflu:'Luxembourg',
           fotoGrande:require('../../assets/influencers/KalaTempo/kala2.jpg'),
          
   
        //Caja debajo de la imagen
          dia:21,
         mes:'DEC',
        texto1:'My FIRST God of War experience!',
        texto2:'Games',
          direccion:'Live from New York, at 18:30 pm',


          //CAJA DE Private information
          attendes:'60 attendees',
          time:'12:00 - 14:00 (2 hours)',
          price:20,
          earn:'1.200'
      
      }
      
      }// fin de consttructor

//PARA VENTANA MODAL
setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };
  render() {

    return (

        <View style={[{flex:1},this.state.fondoPrincipal]}>
        
         <View style={{flex:9}}>
         <ScrollView>     
         <View style={{flex:8,flexDirection:'column',
                 paddingBottom:20}}>
           
                 <View style={{backgroundColor:'#f6f6f6',paddingBottom:7}}>

                       <View style={{borderRadius:10,
                                width:Platform.OS === 'ios' ? 339:'100%',
                                height:200}} >
                             <Image source={this.state.fotoGrande} 
                            style={{ zIndex:1,width:'100%',height:'100%'}}
                            />
                        </View>  
                        <Image source={require('../../assets/icons_genGMI/preview.png')} 
                            style={{ 
                                zIndex:2,position:'absolute',
                                right:'0.2%',bottom:'15%',
                                 }}
                            />

      </View>  
      {/*   final de bicardview */}
       
       
       
        {/* cajita fecha*/}
        <View style={{borderRadius:10,marginTop:-6,
                        marginLeft:  Platform.OS === 'ios' ? 6:8,
                    marginRight:  Platform.OS === 'ios' ? 11:8,
                    flexDirection:'row',
                    backgroundColor:'#f6f6f6'}}>
             <View style={{ flex:1, 
           backgroundColor:'white',flexDirection:'column',
            paddingTop:20,alignItems:'center'
                }}>
                  <Text style={{ fontSize:28,fontWeight:'bold'}}>
                   {this.state.dia}</Text>
                  <Text style={{color:'#ff5a60'}}>{this.state.mes}</Text>
                  </View>
             <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                  paddingTop:20}}>
               <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                  fontWeight:'bold',color:'#312f3d'}}>
                      {this.state.texto1}</Text>
                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                   fontWeight:'bold',color:'#ff5a60'}} >{this.state.texto2}</Text>
                   
                   <View style={{flexDirection:'row',padding:5}}>
                     <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                     style={{ width:15,height:15, marginRight:5}}
                     />  

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                   fontWeight:'bold',color:'#677183',
                    paddingVertical:4}}>{this.state.direccion}</Text>
                   </View>
                
          </View>
         </View>  
  {/* ----------live in description----------------*/} 

 <View style={{ marginHorizontal:16,paddingBottom:10,paddingVertical:15 }}>
     
     <Text style={{  color:'#312f3d',  fontSize:17,fontWeight:'500'
       }}>Live Event description</Text>         
</View>


<View style={{paddingBottom:10,marginHorizontal:16,
              paddingVertical:5,textAlign:'left'}}>
     
     <Text style={{  color:'#312f3d',  fontSize:14,letterSpacing:0.32
       }}>Many people would say that it is absolute madness to keep on doing 
       the same thing, time after time, expecting to get a different result or
        for something different to happen.</Text>         
</View>


{/* LANGUAGE*/}

<View style={{marginHorizontal:16}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Language</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../../assets/banderasLenguaje/eeuu.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
               borderRadius:10,
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>English</Text>
   </View>
     
  </View> 

  {/*    caja de los tags */}

    <Text  style={{
                   color:'#312f3d',
                       fontSize:16,
                       fontWeight:'500',
                      marginHorizontal:16,
                    paddingVertical:20,
                     }}>Related tags</Text>

  <View style={{
                              marginHorizontal:16,flexDirection:'row',
                            flexWrap:'wrap',paddingVertical:10}}>
             
                     <Text style={styles.tagsTrending}>#pokemon</Text>
                      <Text style={styles.tagsTrending}>#streaming</Text>
                      <Text style={styles.tagsTrending}>#community</Text>
                     
        </View>
  
     <Text style={{
                         color:'#312f3d',
                       fontSize:16,
                       fontWeight:'500',
                      marginHorizontal:16,
                    paddingVertical:20,
                     }}
         
                      >Private information</Text>
   {/*fin*/} 

   {/*  seleccion de iconos*/}
   <View style={{marginHorizontal:16,marginTop:10,flexDirection:'row'}}>

<View style={{flex:1}}>
<Image source={require('../../assets/icons_genGMI/User.png')} 
   style={{ width:30,height:30}}
   />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
         borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Attendess</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>{this.state.attendes}</Text>
</View>
</View>


<View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
    <Image source={require('../../assets/icons_genGMI/Time.png')} 
  style={{ width:30,height:30}}
   />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Time</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
{this.state.time}</Text>
</View>
</View>

<View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
    <Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
  style={{ width:30,height:30}}
   />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Price per ticket</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
{this.state.price}</Text>
</View>
</View>

<View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
    <Image source={require('../../assets/icons_genGMI/budget.png')} 
  style={{ width:30,height:30}}
   />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Earn with soldout</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
$ {this.state.earn}</Text>
</View>
</View>


<View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
    <Image source={require('../../assets/icons_genGMI/folDisco.png')} 
  style={{ width:30,height:30}}
   />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Followers discount</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
-10% Off</Text>
</View>
</View>

  {/*  fin */}
  <View style={{
        alignItems: 'center',justifyContent:'center',marginTop:30
  }}>
      <Text style={{
           color:'#ff5a60'
      }}>Save as draft</Text>
  </View>

 
</View>

 
     </ScrollView>


         </View>

       

      
  <View style={{flex:1,backgroundColor:'#ff5a60',
      alignItems:'center',justifyContent:'center'}}>
         <TouchableOpacity 
       onPress = {() => {
        this.setModalVisible(true);
        this.setState({
          fondoPrincipal:styles.transparentePrincipal
        })
        }   
       } >
       
     <Text style={{flex:1 , color:'white',marginTop:'5%', 
         fontSize:17,letterSpacing:0.41 }}>
          Publish Live Event</Text>
          </TouchableOpacity>
    </View>
      


     

      {/*   GENERACION DEL MODAL*/}
      <Modal
      style={{backgroundColor:"transparent",
      opacity:1,
               justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              borderRadius:20,
    
             }}
        animationType="fade"
      
        transparent={true}
        visible={this.state.modalVisible}
        onBackdropPress={() => {
          this.setModalVisible(!this.state.modalVisible);
          this.setState({
            fondoPrincipal:''
          })
        }}
         
         >

        <View style={{backgroundColor:'white',borderRadius:20,
                     marginHorizontal:'5%'}}>
          <View>
            <View style={{alignItems:'center',marginTop:'5%'}}>
             <Image  
            source={require("../../assets/influencers/influencer.png")}
              />
              </View>
            <Text style={styles.modalTitle} >Live Event published!</Text>

            <Text style={{ textAlign:'center',
                      color:"gray",  fontSize: 14, marginLeft:3,
                      marginRight:3, fontWeight: "normal",
                       marginVertical: '3%',}}>
               Your event is already available to{'\n'}
               the community</Text>
          
               <View style={{
                backgroundColor: '#ff5a60',
                width:'70%',
                padding:15,
                color:'white',
                borderRadius:27,
                textAlign:"center",
                marginTop:'3%',
                marginHorizontal:'15%'
             }}>
             <Button style={styles.textboton}
              title="View Live Event"
              onPress={() => {
           
               this.props.navigation.navigate("requesPendin");
          
                this.setModalVisible(!this.state.modalVisible);
                this.setState({
                  fondoPrincipal:''
                })
              }}
              type="clear"
              titleStyle={{ color: "#ffffff",
              position: "absolute",
              top: -5,
              right: Platform.OS === 'ios' ? '25%':null,
              }}
              >
            </Button>
            </View>
            <View style={{alignItems:'center',marginVertical:15}}>
            <Text style={{
             color:'#ff5a60',
             fontSize:15
            }}>It’s ok, continue</Text>
            </View>
          </View>
        </View>
      </Modal>

    
  
   </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 //en target influ
estrellasTrending:{
  paddingTop:7,
 marginBottom:20,
  flexDirection:'row',

},


//VENTANA MODAL
transparentePrincipal:{ //cuando se active el modal
    backgroundColor:'black',
    opacity:0.6
    },

    modalTitle: {
        textAlign:'center',
        color:"black",
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        marginTop:'5%',
      }, 

      textboton:{
         textAlign:'left',
        color:"white",
         marginTop:1,
        marginLeft:105,
        fontSize:17,
       },

  //*** TAGS DE TRENDING */
tagsTrending:{
  paddingVertical:8,
  borderColor:'#312f3d' ,
  borderWidth: 1,
  fontSize:13,
  borderRadius:20,
  paddingHorizontal:10,
  marginBottom: 5,
  marginLeft: 3,
},

});