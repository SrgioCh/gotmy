import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import  Modal  from "react-native-modal";
  import { Button } from "react-native-elements";

export default class RequestPri4 extends Component {


    static navigationOptions = {
        headerTitle:'Pending Response',
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
        headerRight: (<View>
         <Image
                 source={require('../../assets/icons_genGMI/Time.png')}
                  style={{
                  width:20,
                  height:20,
                  marginRight:16,
                 }}
               />
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
       
             attendes:'23 attendees',
             dates:'12 Jan, 2019',
             timess:'12:00 - 14:00 (2 hours)',
             budgess:'1,200',

             modalVisible: true,
             fondoPrincipal:styles.transparentePrincipal
          }
      
      }// fin de consttructor

      setModalVisible(visible) {
        this.setState({modalVisible: visible,
                           fondoPrincipal:''});
      };

      
  render() {

    return (


          <View style={[{flexDirection:'column' },this.state.fondoPrincipal]}>
           
           <ScrollView>

               <View style={{flexDirection:'row',marginHorizontal:16,marginTop:8,marginBottom:2}}>
               <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("profile1")}
                     >
                 <View style={{flex:2}}>
                 <Image source={require('../../assets/influencers/uno.png')} 
                 style={{ width:50,height:50,borderRadius:30}}
                 />   
                 </View>
                </TouchableOpacity>
               <View style={{flex:8,flexDirection:'column',paddingLeft:2 ,
                     }}>
                    <View>

                    <Text style={{fontSize:17,color:'#312f3d'
                        ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
                    </View>
                   
                    <View  style={styles.estrellasTrending}>
                                   <Image source={require('../../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
               </View>
          </View>
          
          {/* TITULO */}  
        <View style={{marginHorizontal:16}}>
               <Text style={{fontSize:28,color:'#312f3d',
                 fontWeight: 'bold',}}>Birthday surprise</Text>
         </View>

         <Text style={{fontSize:16,color:'#312f3d',marginTop:2,marginBottom: 20,
                 fontWeight: '500',marginHorizontal:16}}>Private meeting details</Text>
       
         
          <View style={{marginHorizontal:16,flexDirection:'row'}}>

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
                  <Image source={require('../../assets/icons_genGMI/CalendarGrey.png')} 
                style={{ width:30,height:30}}
                 />   
            </View>
            <View style={{flex:8,flexDirection:'column',marginLeft:20,
                 borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Date</Text>
             <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
             {this.state.dates}</Text>
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
             {this.state.timess}</Text>
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
              <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Budget</Text>
             <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
             $ {this.state.budgess}</Text>
             </View>
          </View>


          <Text style={{fontSize:16,color:'#312f3d',marginTop:15,marginBottom: 15,
                 fontWeight: '500',marginHorizontal:16}}>Request description</Text>

         <Text style={{fontSize:14,color:'#312f3d',marginHorizontal:16,paddingBottom: 20}}>
                 Many people would say that it is absolute madness{'\n'} to keep on doing the
                  same thing, time after time,{'\n'} expecting to get a different result or
                   for something {'\n'}different to happen.
                 </Text>

                 <View style={{ backgroundColor:'#e2e7ee',paddingVertical:8,marginBottom:20,
                borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button   
          title="Cancel Request"
          onPress={() => this.props.navigation.navigate("requestPri1")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          left: Platform.OS === 'ios' ? null:null,
        }}
        />     

      </View>
      </ScrollView>


        {/*   GENERACION DEL MODAL*/}
       
        
        <Modal
        style={{backgroundColor:"transparent",
        opacity:0.99,
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
                       marginHorizontal:'5%',paddingHorizontal:'10%',
                       paddingVertical:'5%'}}>
            <View style={{alignItems:'center'}}>
              <View style={{alignItems:'center',marginTop:'5%'}}>
               <Image  
              source={require("../../assets/influencers/influencer.png")}
                />
                </View>
              <Text style={styles.modalTitle} >Request received!</Text>

              <Text style={{ textAlign:'center',
                        color:"gray",  fontSize: 14, marginLeft:3,
                        marginRight:3, fontWeight: "normal",
                         marginVertical: '3%',}}>
			              I will response you as soon as{'\n'}
                         possible</Text>
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
                title="Continue"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.setState({
                    fondoPrincipal:''
                  })
                }}
                type="clear"
                titleStyle={{ color: "#ffffff",
                position: "absolute",
                top: -5,
                left: Platform.OS === 'ios' ? -45:null,
                }}
                >
              </Button>
              </View>
              
            </View>
          </View>
        </Modal>
 </View>
 
              
   

   
     
    );
  }
 
}





const styles = StyleSheet.create({
 
    estrellasTrending:{
        paddingTop:7,
       marginBottom:20,
        flexDirection:'row',
      
      },
      transparentePrincipal:{
        backgroundColor:'black',
        opacity:0.5
        },
});