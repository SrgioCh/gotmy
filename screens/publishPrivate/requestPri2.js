import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import Checkbox from 'react-native-modest-checkbox';
  import { Button } from "react-native-elements";

export default class RequestPri2 extends Component {


    static navigationOptions = {
        headerTitle:'Request Private Meeting',
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
        headerRight: (<View style={{marginRight: 16}}>
           <Text style={{color:'red'}}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
            
             isChecked:false,
             value:'uno',
             isChecked2:false,
             value2:'uno',
             isChecked3:false,
             value2:'uno',
             isChecked4:false,
             value2:'uno',
             isChecked5:true,
             value2:'uno',
                   
             isCheckedA:false,
             valueA:'uno',
             isCheckedB:false,
             valueB:'uno',
             isCheckedC:false,
             valueC:'uno',

                 tytexto: 'surprise a friend',

          }
      
      }// fin de consttructor


 
presiona=()=>{

  let elegidos=[];
  if(this.state.isChecked===true){
    elegidos.push(this.state.value);
  }
  

  if(this.state.isChecked===true)
  {
    alert("se agregaron :  "+elegidos)
  }else{
    alert('no marcaste nada');
  }

}



  render() {

    return (
      <View style={{flexDirection:'column',paddingBottom :20}}>
           
      <ScrollView>

      <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:8}}>
            <View style={{flex:2}}>
            <Image source={require('../../assets/influencers/uno.png')} 
            style={{ width:50,height:50,borderRadius:30}}
            />   
            </View>

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
      
           <Text style={{fontSize:20,color:'#312f3d',marginBottom: 10,
            fontWeight: '500'}}>Tell me about your objetives</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
           200 Characters Min - 1000 Characters Max. (TBD)
           </Text>
       
   </View>
   <View style={styles.textAreaContainer}>
         
         <TextInput
            
             underlineColorAndroid="transparent"
           
            placeholderTextColor="grey"
           numberOfLines={11}
            multiline={true}
            onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              textAlignVertical='top'
       />
       </View>

       <View style={{ backgroundColor:'#ff5a60',marginTop:20,
                borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button   
          title="Continue"
          onPress={() => this.props.navigation.navigate("requestPri3")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          left: Platform.OS === 'ios' ? 15:null,
        }}
        />     

      </View>


     </ScrollView>
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

 
    textAreaContainer: {
        borderColor: '#f6f6f6',
        borderWidth: 2,
        padding: 5,
        borderRadius:10,
        marginHorizontal:16,
        marginTop:20,

      },


});