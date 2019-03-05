import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

export default class PublishEven2Pricing extends Component {


    static navigationOptions = {
        headerTitle:'Pricing',
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
          <Text style={{
              color:'red',marginRight: 16,
          }}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
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
    
    return (

      <View style={{flex: 1}}>
        
        <View style={{flex:9}}>
          
     <View style={{marginHorizontal:16,alignItems: 'center',
                   marginTop:10}}>
      <Text style={{color:'#312f3d',fontSize:22,fontWeight:'bold'}}>
                   Choose number of attendess </Text>
            </View>
          <View style={{marginHorizontal:16,alignItems: 'center',
                  }}>        
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
   <View style={{marginVertical:15, marginHorizontal:16,flexDirection:'row'}}>

<View style={{flex:1}}>
<Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
   style={{ width:30,height:30}}
  />   
</View>
<View style={{flex:8,flexDirection:'column',marginLeft:20,
        borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Benefit with soldout</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
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
<Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>GotMy fees by ticket</Text>
<Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
$ {this.state.feesTicket} + {this.state.rebaja} % = $ {this.state.resultado}</Text>
</View>
</View>               

{/* fin  */}
<View style={{marginHorizontal:16,marginTop:20}}>
<Text style={{color:'#312f3d', fontSize:17 ,fontWeight:'500',}}>
Promotional code
</Text>
<Text style={{marginVertical:10,color:'#677183', fontSize:13 ,letterSpacing:-0.08}}>
Influencers can create a “Promo Code” and select a % discount to assign
 to that code to share with viewers.
</Text>
<Text style={{color:'#697181', fontSize:13 ,fontWeight:'300'}}>
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

    
   </View>
   {/*  fin de contenedor */}
          <View style={{flex:1,marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("publisEven2Cover")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          left: Platform.OS === 'ios' ? 15:null,
        }}
        />     

         </View>
   
 
    
    </View>
   

     
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

});