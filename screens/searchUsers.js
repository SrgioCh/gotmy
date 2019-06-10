import React, { Component } from 'react';
import {Platform,Alert,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,TouchableOpacity,
  Image} from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SearchUsers extends Component {
  static navigationOptions = {
    header: null ,
};

constructor(props) {
  super(props)

  this.state = { 

    tytexto:'',
    menu1:styles.menuelegido,
    menu2:styles.menunormal,
    menu3:styles.menunormal,



    usu1:false,
    caja1: styles.socialBotone,
    marca1:styles.Textsinmarcar,
    texto1:'Follow',
  
    usu2:false,
    caja2: styles.socialBotone,
    marca2:styles.Textsinmarcar,
    texto2:'Follow',
     
    usu3:false,
    caja3: styles.socialBotone,
    marca3:styles.Textsinmarcar,
    texto3:'Follow',

    usu4:false,
    caja4: styles.socialBotone,
    marca4:styles.Textsinmarcar,
    texto4:'Follow',

    usu5:false,
    caja5: styles.socialBotone,
    marca5:styles.Textsinmarcar,
    texto5:'Follow',


    usu6:false,
    caja6: styles.socialBotone,
    marca6:styles.Textsinmarcar,
    texto6:'Follow',
 
    
  }
}


  render() {
    return (
             <ScrollView>
                       <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:hp('5%')}}>

                           <View style={{flex:2}}>
                                <TouchableOpacity
                            onPress={() => this.props.enviaAPadre("profile1")}
                              >
                            <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    
                          </TouchableOpacity>
                          </View>

                    <View style={{flex:3,flexDirection:'column',paddingLeft:10 ,
                      borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
                     <View>
                         <Text style={{fontSize:17,color:'#312f3d'}}>MandyJTV</Text>
                     </View>
                    <View style={{flexDirection:'row'}}>
                           <View style={{ width:10,height:10,marginTop:5}}>
                              <Image source={require('../assets/buscador/lupa.jpg')} 
                              style={{borderRadius:10 ,width:'100%',height:'100%'}}
                               />
                           </View>
                          <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Tajikistan</Text>
                     </View>
             </View>

              <View style={{flex:2, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
                    <View  style={styles.estrellasTrending}>
                               <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                        </View>
            </View>

          <View style={{flex:3,alignItems:'flex-end',
              justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
             
             <TouchableOpacity 
              onPress = { () => {
               if (this.state.usu1!==false)
              {
              this.setState({
                  caja1: styles.socialBotone,
                  marca1:styles.Textsinmarcar,
                  texto1:'Follow',
                  usu1:false,
                 })
              }
             else{
                this.setState({
                  usu1:true,
                  caja1: styles.socialBotonBlanco,
                  marca1:' ',
                  texto1:'✔ Friends',
               })
             }
           }}
           >

            <View style={this.state.caja1} >
                 <Text style={this.state.marca1}>
                   {this.state.texto1}
                </Text>
                </View>

            </TouchableOpacity>
        </View>
     </View>

     {/*  -----------------------------------------------------------------  */}

{/*---------------------------------------------- */} 

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>
     <TouchableOpacity style={{flex:2}}
             // onPress={() => this.props.navigation.navigate("profile4")} ESTO ESTA MAL PORQUE NO INVOCAMOS A ESTE
              //  COMPONENTE ATRAVES DE UN NAVIGATE
              onPress={() => this.props.enviaAPadre("profile4")}
             >
   

                      <Image source={require('../assets/influencers/dos.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    
   
   </TouchableOpacity>



 <View style={{flex:5,flexDirection:'column',paddingLeft:10,
    borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
    <View>
        <Text style={{fontSize:17,color:'#312f3d'}}>Sophia Lindsey</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{ width:10,height:10,marginTop:5}}>
            <Image source={require('../assets/buscador/lupa.jpg')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
        </View>
     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Micronesia</Text>
 </View>

</View>

<View style={{flex:3,alignItems:'flex-end',
        justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
      
      <TouchableOpacity 
              onPress = { () => {
               if (this.state.usu2!==false)
              {
              this.setState({
                  caja2: styles.socialBotone,
                  marca2:styles.Textsinmarcar,
                  texto2:'Follow',
                  usu2:false,
                 })
              }
             else{
                this.setState({
                  usu2:true,
                  caja2: styles.socialBotonBlanco,
                  marca2:' ',
                  texto2:'✔ Friends',
               })
             }
           }}
           >
      
                  <View style={this.state.caja2} >
                 <Text style={this.state.marca2}>
                   {this.state.texto2}
                </Text>
                </View>

      </TouchableOpacity>
  
</View>

</View>

{/*---------------------------------------------- */}



   
{/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:2}}>

                 <Image source={require('../assets/influencers/tres.png')} 
                      style={{ width:50,height:50,borderRadius:10}}
                     />
               
</View>

<View style={{flex:5,flexDirection:'column',paddingLeft:10 ,
    borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
    <View>
        <Text style={{fontSize:17,color:'#312f3d'}}>Manuel Cook</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{ width:10,height:10,marginTop:5}}>
            <Image source={require('../assets/buscador/lupa.jpg')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
        </View>
     <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Micronesia</Text>
 </View>

</View>

<View style={{flex:3,alignItems:'flex-end',
   justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
 
 <TouchableOpacity 
         onPress = { () => {
          if (this.state.usu3!==false)
         {
         this.setState({
             caja3: styles.socialBotone,
             marca3:styles.Textsinmarcar,
             texto3:'Follow',
             usu3:false,
            })
         }
        else{
           this.setState({
             usu3:true,
             caja3: styles.socialBotonBlanco,
             marca3:' ',
             texto3:'✔ Friends',
          })
        }
      }}
      >
 
             <View style={this.state.caja3} >
            <Text style={this.state.marca3}>
              {this.state.texto3}
           </Text>
           </View>

 </TouchableOpacity>

</View>

</View>

{/*---------------------------------------------- */}


{/*---------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/uno.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    
   </View>

   <View style={{flex:5,flexDirection:'column',paddingLeft:10 ,
         borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
         <View>
             <Text style={{fontSize:17,color:'#312f3d'}}>Harriett Fitzgerald</Text>
         </View>
         <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                 <Image source={require('../assets/buscador/lupa.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                  />
             </View>
          <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>New Zeland</Text>
      </View>
  
 </View>

 <View style={{flex:3,alignItems:'flex-end',
   justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
 
 <TouchableOpacity 
         onPress = { () => {
          if (this.state.usu4!==false)
         {
         this.setState({
             caja4: styles.socialBotone,
             marca4:styles.Textsinmarcar,
             texto4:'Follow',
             usu4:false,
            })
         }
        else{
           this.setState({
             usu4:true,
             caja4: styles.socialBotonBlanco,
             marca4:' ',
             texto4:'✔ Friends',
          })
        }
      }}
      >
 
             <View style={this.state.caja4} >
            <Text style={this.state.marca4}>
              {this.state.texto4}
           </Text>
           </View>

 </TouchableOpacity>

</View>
</View>

{/*---------------------------------------------- */}
 <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:2}}>
     <TouchableOpacity
 onPress={() => this.props.navigation.navigate("profile1")}
   >
 <Image source={require('../assets/influencers/influencer.png')} 
style={{ width:50,height:50,borderRadius:10}}
/>

</TouchableOpacity>
</View>

<View style={{flex:3,flexDirection:'column',paddingLeft:10 ,
borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
<View>
<Text style={{fontSize:17,color:'#312f3d'}}>MandyJTV</Text>
</View>
<View style={{flexDirection:'row'}}>
<View style={{ width:10,height:10,marginTop:5}}>
   <Image source={require('../assets/buscador/lupa.jpg')} 
   style={{borderRadius:10 ,width:'100%',height:'100%'}}
    />
</View>
<Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Tajikistan</Text>
</View>
</View>

<View style={{flex:2, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
<View  style={styles.estrellasTrending}>
    <Image source={require('../assets/Red.png')} 
    style={{ width:11,height:11,}}
    />
   <Image source={require('../assets/Red.png')} 
  style={{ width:11,height:11,marginLeft:2}}
  />
 <Image source={require('../assets/Red.png')} 
    style={{ width:11,height:11,marginLeft:2}}
   />
<Image source={require('../assets/Red.png')} 
 style={{ width:11,height:11,marginLeft:2}}
  />
 <Image source={require('../assets/Grey.png')} 
     style={{ width:11,height:11,marginLeft:2}}
 />
</View>
</View>

<View style={{flex:3,alignItems:'flex-end',
justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>

<TouchableOpacity 
onPress = { () => {
if (this.state.usu5!==false)
{
this.setState({
caja5: styles.socialBotone,
marca5:styles.Textsinmarcar,
texto5:'Follow',
usu5:false,
})
}
else{
this.setState({
usu5:true,
caja5: styles.socialBotonBlanco,
marca5:' ',
texto5:'✔ Friends',
})
}
}}
>

<View style={this.state.caja5} >
<Text style={this.state.marca5}>
{this.state.texto5}
</Text>
</View>

</TouchableOpacity>
</View>
</View>

{/*  -----------------------------------------------------------------  */}
 <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

<View style={{flex:2}}>
     <TouchableOpacity
 onPress={() => this.props.navigation.navigate("profile1")}
   >
 <Image source={require('../assets/influencers/dos.png')} 
style={{ width:50,height:50,borderRadius:10}}
/>

</TouchableOpacity>
</View>

<View style={{flex:3,flexDirection:'column',paddingLeft:10 ,
borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
<View>
<Text style={{fontSize:17,color:'#312f3d'}}>Innes Wong</Text>
</View>
<View style={{flexDirection:'row'}}>
<View style={{ width:10,height:10,marginTop:5}}>
   <Image source={require('../assets/buscador/lupa.jpg')} 
   style={{borderRadius:10 ,width:'100%',height:'100%'}}
    />
</View>
<Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Tajikistan</Text>
</View>
</View>

<View style={{flex:2, borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>
<View  style={styles.estrellasTrending}>
    <Image source={require('../assets/Red.png')} 
    style={{ width:11,height:11,}}
    />
   <Image source={require('../assets/Red.png')} 
  style={{ width:11,height:11,marginLeft:2}}
  />
 <Image source={require('../assets/Red.png')} 
    style={{ width:11,height:11,marginLeft:2}}
   />
<Image source={require('../assets/Red.png')} 
 style={{ width:11,height:11,marginLeft:2}}
  />
 <Image source={require('../assets/Grey.png')} 
     style={{ width:11,height:11,marginLeft:2}}
 />
</View>
</View>

<View style={{flex:3,alignItems:'flex-end',
justifyContent:'center',  borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}}>



<TouchableOpacity 
onPress = { () => {
if (this.state.usu6!==false)
{
this.setState({
caja6: styles.socialBotone,
marca6:styles.Textsinmarcar,
texto6:'Follow',
usu6:false,
})
}
else{
this.setState({
usu6:true,
caja6: styles.socialBotonBlanco,
marca6:' ',
texto6:'✔ Friends',
})
}
}}
>

<View style={this.state.caja6} >
<Text style={this.state.marca6}>
{this.state.texto6}
</Text>
</View>

</TouchableOpacity>
</View>
</View>

{/*  -----------------------------------------------------------------  */}

   </ScrollView>
    
    );
  }
 
}





const styles = StyleSheet.create({
 
menuelegido:{
  borderBottomWidth:1,
  borderBottomColor:'#ff5a60',
},

menunormal:{
  borderBottomWidth:1,
  borderBottomColor:'#e1e3e6',
},


//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotone:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 18:17,

  
},
Textsinmarcar:{
  color:'white',
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 3:4,
  borderWidth:1,
  borderColor: '#312f3d',
}


});