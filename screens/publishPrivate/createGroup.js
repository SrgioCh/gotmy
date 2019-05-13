import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import { Button } from "react-native-elements";


export default class CreateGroup extends Component {


  static navigationOptions = {
    headerTitle:'Create Group',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '90%',
        fontWeight:'500',
            letterSpacing:0.41,
            height:120,
            fontSize:16,
            color:'#312f3d',
            marginTop:  Platform.OS === 'ios' ? '45%':'33%',

    }, headerRight: (<View>
      <Text >{' '}</Text>
      </View>),  
      headerTintColor: '#ff5a60', 
    
};







 

    constructor(props){
       




        super(props);
      
         this.state={
        
            textoenInput:'',

           elegidosNum:0,
           buscados:this.usuarios, //para que pueda cambiar de valor constantemente
 
          }
      
      } 

    
         

  render() {
    let screenHeight=Dimensions.get('window').height;
    
    
   if(screenHeight<=592){//1080 * 1920  xxhdpi
    widImFot='100%';
    heigImaFot='100%';
   }else if(screenHeight<=605){ //mopvil de  david
    widImFot='100%';
      heigImaFot='100%';
 } else if(screenHeight<=678){ // mi movil
  widImFot='85%';
  heigImaFot='75%';
  }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    widImFot='85%';
      heigImaFot='75%';
  }else if(screenHeight<=775){//1440 *2880 :560dpi
    widImFot='85%';
      heigImaFot='75%';
  }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    widImFot='85%';
      heigImaFot='75%';
  }else{
    widImFot='85%';
      heigImaFot='75%';
  }


    //mostrare en imagen a los elegidos :
    const elegidos = this.props.navigation.getParam('datos');
   
    var imagenes=elegidos.map((item,i)=> 
   
    <View  key={i} style={{width:'30%',alignItems: 'center',marginRight:10,paddingVertical:'3%',
                            marginVertical: 10,borderColor:'#e2e7ee',borderWidth:1  }}>
         <Image
           style={{width:30,height:30}}
           source={item.foto}
         />


         <Text style={{textAlign:'center'}}>
           {item.nombre}
         </Text>
      </View>
    )



//*************************************************************************** */
    return (
     <View style={{flex:1}}>
      <View style={{flex:9}}>

      <View style={{flexDirection:'row',marginTop:20,
                         marginHorizontal: '4%',}}>


               <View style={{flex:3,flexDirection:'row', padding:2}}>
                             <View style={{width:80,height:80}}>
                              <Image source={require('../../assets/mixto/chatgrouppaisaje.png')} 
                                    style={{ width:'100%',height:'100%',
                                     borderRadius: Platform.OS === 'ios' ? 40:100 }}
                                /> 
                             </View> 
                             <View style={{width:50,height:50,marginTop:'30%',
                                          marginLeft:Platform.OS === 'ios' ? '-35%':'-35%' 
                                    }}>
                              <Image source={require('../../assets/icons_genGMI/foto.png')} 
                                    style={{ width:widImFot,height:heigImaFot,
                                      borderRadius:Platform.OS === 'ios' ? 25:150 }}
                                /> 
                             </View> 
               </View>
               <View style={{flex:7}}>
                   
                   
                         <Text style={{ 
                           color:'#697181' ,
                           fontSize:13,
                          letterSpacing:-0.1,

                         }}>Group name</Text>
                      

                 


                <View style={{paddingVertical:15,flexDirection:'row' }}>
                <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
                      alignItems:'center',marginRight:5,borderRadius:10}}>
                  <TextInput
                        style={{
                    
                       height:42,
                       width:'80%',
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (texto)=>{
                           
                                    this.setState({
                                      textoenInput:texto//los que va encontrando
                                    })
                                
                               
                                }
                      
                    
                      }
                   />

                 </View>
 
          
                 </View>
            </View>

           </View>

           <Text style={{
               marginHorizontal:'4%',
              color:'#312f3d',
              fontSize:17 ,
              fontWeight:'bold'
              }}>Participants</Text>

           
            <View style={{marginBottom:20,padding:10,
                        flexDirection: 'row',flexWrap:'wrap',marginHorizontal:16}}>
                      {imagenes}
          </View>
              










      </View>
    
    <TouchableOpacity style={{flex:1,backgroundColor:'#ff5a60',
 alignItems:'center',justifyContent:'center'}}
   onPress={() => this.props.navigation.navigate("chatGroup",{
    datos:elegidos,
    nombreChat:this.state.textoenInput})}>
<Text style={{flex:1 , color:'white',marginTop:'5%',
    fontSize:17,letterSpacing:0.41 }}>
     Create Chat Group</Text>
     </TouchableOpacity>   


        
     </View>

    );
  }
 
}



const styles = StyleSheet.create({
  
   
   


});