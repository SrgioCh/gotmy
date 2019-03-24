import React, { Component } from 'react';
import { Platform,
  View,Text ,TextInput,ScrollView ,
  StyleSheet,KeyboardAvoidingView,
  Image,TouchableOpacity} from 'react-native';

  import Button from 'react-native-button'; 
  

export default class PublishEven1 extends Component {





  static navigationOptions = {
    header: null ,
};



    constructor(props){

        super(props);
      
         this.state={
           //LOS VALORES QUE SE INTRODUSCAN EN LAS CAJAS DE INPUTS SE ALAMACENARAN AQUI 
             textoLive:'',
             textoCate:'',
             textoDescrip:'',
             textoTags:'',

             input:'',
            
        }
      
      }// fin de consttructor

  render() {
     //alert(this.state.textoLive)
    return (

      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

      <View style={{flex:1,
              marginTop:'5%'}}>
              <ScrollView showsVerticalScrollIndicator={false}> 


        <View style={{flex: 1 ,flexDirection:'row', paddingBottom:'3%',
         borderBottomWidth: 2,borderBottomColor:'#C3C1C0'}}>
            <View style={{flex:1 , marginLeft:'4%',marginTop:'6%'}}>
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
            <View style={{flex:7,marginTop:'6%',alignItems:'center'}}>
                 <Text style={{
                  marginLeft:'7%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>Publish Live Event</Text>
            </View>
            <View style={{flex:2,marginTop:'6%',
            marginRight:'4%',alignItems:'flex-end'}}>
              <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("requesPendin")}
                     >
            <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'500'
                 }}>cancel</Text>
                 </TouchableOpacity>
            </View>
        </View>
       
              <View style={{alignItems: 'center', marginTop:20}}>
             <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>
                What event do you want to share </Text>
                    </View>
                  <View style={{alignItems: 'center', }}>        
                <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>
                with tour followers?</Text>
                </View>

              
               <View style={{marginHorizontal:'4%'}}>
               <Text style={{color:'#697181',marginTop:'4%',
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



{/* LANGUAGE*/}
        <View style={styles.text}>
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













                  </View>
               




         <View style={styles.containerbutton }>
                <Button 
                 onPress={() => this.props.navigation.navigate("publishEven2")}
                style={{color:'white',fontSize:17}}
               >Continue</Button>      
           </View> 


 


              </ScrollView>
        {/*  abajo final de view -flex9*/}
         </View>

        


      
 
    
</KeyboardAvoidingView>
   

     
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
      containerbutton:{
        backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        textAlign:"center",
        marginTop:20,
     marginBottom:40,
        marginHorizontal:'4%'
    
      },

});