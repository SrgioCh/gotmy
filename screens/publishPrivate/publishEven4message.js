import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

export default class PublishEven4message extends Component {


    static navigationOptions = {
        headerTitle:'Thank you message',
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

            
              //PRECIOS
               Benefit:'1,200',
               feesTicket:0.50,
               rebaja:2.9,
               resultado:1.59,

               //este sera el texto inicial 
               text:'You are amazing! 😍  Thank you so much for booking your especial Private Meeting',
           
      }
      
      }// fin de consttructor


  render() {
   
    /*var valorInput=this.state.text;
    alert(valorInput);*/
  
  
    return (

      <View style={{flex: 1}}>
      
        <View style={{flex:9}}>
          <View style={{marginTop:20,
                    marginHorizontal:60}}>
            
             <Text style={{
                color:'#312f3d',fontSize:20 ,fontWeight:'bold',
                letterSpacing:-0.32,marginBottom:10
             }}> Write a thank you message
            </Text>

            <Text style={{
                  color:'#677183',fontSize:13.5
                    }}> Will be shown on your thank you video 
                    and in the purchase confirmation email
            </Text>
          </View>
          
          <Text style={{marginTop:20,marginHorizontal:16,fontWeight:'300',
                color:'#677181',fontSize:12 }}>
           Your text message
          </Text>
           
           <View style={styles.textAreaContainer}>
         
           <TextInput
              
               underlineColorAndroid="transparent"
                placeholder="Type something"
              placeholderTextColor="grey"
             numberOfLines={6}
              multiline={true}
              onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                textAlignVertical='top'
         />
         </View>

       </View>
   {/*  fin de contenedor */}
          <View style={{flex:1,marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("previewLiveEvent")}
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
    textAreaContainer: {
        borderColor: '#f6f6f6',
        borderWidth: 2,
        padding: 5,
        borderRadius:10,
        marginHorizontal:16,
        marginTop:20,

      },
    

});