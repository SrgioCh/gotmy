import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

export default class PublishPri1 extends Component {


    static navigationOptions = {
        headerTitle:'Create Private Meeting',
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

           
      }
      
      }// fin de consttructor


  render() {
    
    return (

      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:9}}>
        
        <View style={{flexDirection:'row',marginHorizontal:16,
                   marginTop:14,marginBottom:10}}>
                 <View style={{flex:2}}>
                 <Image source={require('../../assets/influencers/spffiele.png')} 
                 style={{ width:50,height:50,borderRadius:30}}
                 />   
                 </View>

               <View style={{flex:8,flexDirection:'column',paddingLeft:10 ,
                     }}>
                    <View>

                    <Text style={{fontSize:17,color:'#312f3d'
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
               <Text style={{fontSize:28,color:'#312f3d',marginVertical:8,
                 fontWeight: 'bold',}}>Just For Fun</Text>
         </View>

         <Text style={{fontSize:16,color:'#312f3d',marginTop:15,marginBottom: 19,
                 fontWeight: '500',marginHorizontal:16}}>Susprise for a friend</Text>
       
          

       <View style={styles.text}>
        <Text style={{color:'#697181',
                 fontSize:13}} >Live Event title, max 120 characters</Text>
       </View>
     <TextInput
         underlineColorAndroid='transparent'
         style={styles.input}
      />

{/* LANGUAGE*/}
    <View style={styles.text}>
        <Text style={{color:'#697181',
                 fontSize:13}} >Language</Text>
       </View>
    

<View style={{marginHorizontal:15,borderRadius:27 ,borderWidth:1,borderColor:'#e2e7ee'}}>
   
   <View style={{flexDirection:'row',paddingVertical:10,paddingLeft:10}}>
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
    

       <View style={styles.text}>
        <Text style={{color:'#697181',
                 fontSize:13}} >Private meeting description</Text>
       </View>
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
   </TouchableWithoutFeedback>
   
          <View style={{flex:1,marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("publishPri2")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          top: Platform.OS === 'ios' ? 8:5,
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
      paddingTop:5,
      paddingBottom: 10,
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
    textAreaContainer: {
      borderColor: '#f6f6f6',
      borderWidth: 2,
      padding: Platform.OS === 'ios' ? 40: 5,
      borderRadius:10,
      marginHorizontal:16,
     

    },

});