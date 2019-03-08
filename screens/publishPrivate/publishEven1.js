import React, { Component } from 'react';
import { Platform,
  View,Text ,TextInput,
  StyleSheet,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";
  

export default class PublishEven1 extends Component {


    static navigationOptions = {
        headerTitle:'Publish Live Event',
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
           //LOS VALORES QUE SE INTRODUSCAN EN LAS CAJAS DE INPUTS SE ALAMACENARAN AQUI 
             textoLive:'',
             textoCate:'',
             textoDescrip:'',
             textoTags:'',

            
        }
      
      }// fin de consttructor


  render() {
     //alert(this.state.textoLive)
    return (

      <View style={{flex: 1}}>
         <View style={{flex:9 ,marginHorizontal:'4%',
              marginTop:'2%'}}>

                <View style={{alignItems: 'center', }}>
                 <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>
                 What event do you want to share </Text>
                 </View>
                <View style={{alignItems: 'center', }}>        
                <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>
                with tour followers?</Text>
                </View>
        
                <Text style={{color:'#697181',marginTop:'4%',
                 fontSize:13}} >Live Event title, max 120 characters</Text>
                 <TextInput
                  underlineColorAndroid='transparent'
                   style={styles.input}
                    onChangeText={
                        (texto)=> this.setState({
                                        textoLive:texto//los que va encontrando
                                      })
                     }  />

                  {/*----------------------------------------------- */}
                  <Text style={{color:'#697181',marginTop:'2%',
                 fontSize:13}} >Category</Text>
                 <TextInput
                  underlineColorAndroid='transparent'
                  
                   style={styles.input}
                    onChangeText={
                        (texto2)=> this.setState({
                                        textoCate:texto2//los que va encontrando
                                      })
                     }  />

                  {/*----------------------------------------------- */}
                  <Text style={{color:'#697181',marginTop:'2%',
                 fontSize:13}} >Description, max 200 characters</Text>
                 <TextInput
                  underlineColorAndroid='transparent'
                  numberOfLines={2}
                  multiline={true}

                   style={{   width:'100%',
                   borderWidth:1,
                   borderColor:'#e2e7ee',
                    padding: Platform.OS === 'ios' ? 12:20,
                   paddingLeft: 15,
                    marginTop:5,
                    marginBottom:8}}

                    onChangeText={
                        (texto3)=> this.setState({
                                        textoDescrip:texto3//los que va encontrando
                                      })
                     }  />

                  {/*----------------------------------------------- */}


                         {/* LANGUAGE*/}
                         <View style={styles.text}>
                            <Text style={{color:'#697181',
                              fontSize:13}} >Language</Text>
                         </View>
    

                            <View style={{borderRadius:27 ,borderWidth:1,
                                             marginTop:'2%' ,borderColor:'#e2e7ee'}}>
   
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
                         <Text style={{color:'#697181',marginTop:'3%',
                                  fontSize:13}} >Max 5 tags, separated by commas</Text>
                                 <TextInput
                                  underlineColorAndroid='transparent'
                                  style={styles.input}
                                  placeholder="games, stream, humor, koala"
                                   onChangeText={
                                        (texto4)=> this.setState({
                                         textoTags:texto4//los que va encontrando
                                      })
                              }  />

                  {/*----------------------------------------------- */}

        {/*  abajo final de view -flex9*/}
         </View>

        


         {/* abajp estara el footer */}
         <View style={{flex:1,marginTop:10,marginBottom:10, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:30,alignItems:'center'}}>
                  <Button 
          title="Continue"
          onPress={() => this.props.navigation.navigate("publishEven2")}
          type="clear"
          titleStyle={{ color: "#ffffff",
             left: Platform.OS === 'ios' ? null:null,
             top: Platform.OS === 'ios' ? '7%':'3%',
        }}
        />     

         </View>
      
 
    
    </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 
    //input live event title
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

});