import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import EventContents from "./../components/eventContents"

export default class Reviewmy extends Component {

  static navigationOptions = {
    headerTitle:'',
    headerTintColor: '#ff5a60',
};

constructor(props){

  super(props);

   this.state={
      //PARA VIDvIEW
   usuarios:[
    {
     fecha:'Monday, 19/12/2018',
     descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
     imagVideo:require('../assets/influencers/chicarosa.jpg'),
     duraVid:'12:40',
     tipo:'Naturs,Outdoors & Chefs'

    },
    {
      fecha:'Monday, 19/12/2018',
     descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
     imagVideo:require('../assets/influencers/chicacorriendo.jpg'),
     duraVid:'12:40',
     tipo:'Naturs,Outdoors & Chefs'
    },
  ]
}
}

  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
      
      cajaVid=15;
    }else if(screenHeight<=678){ // mi movil
      
      cajaVid=15;
   }else if(screenHeight<=685){ //1080 *1920
    
    cajaVid=60
   }else if(screenHeight<=775){
   
    cajaVid=60;
   }else{
    
    cajaVid=15;
   }
    return (
     
    <ScrollView style={{marginTop:10}} >
        
{/*----------- TITULO----------------- */}
<View style={{marginTop:16,marginBottom:5,marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',
           fontWeight: 'bold',}}>My Reviews</Text>
</View>


{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>
                 <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:215,
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {

                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      

                 }//fin de onchange
              />

        </View>
</View>
 

{/*  LISTA INFLUENCERRRSSSSSSSSSS--------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1.5}}>

                          <Image source={require('../assets/reviews/kuskal.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Kurtis 'Kala' Lloyd</Text>
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
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrending}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
          paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>

           {/* caja imagen de video*/}
           <View  style={{marginHorizontal:'4%'}}>
           <EventContents 
fecha={this.state.usuarios[0].fecha}
descripcion={this.state.usuarios[0].descripcion}
imagVideo={this.state.usuarios[0].imagVideo}
duraVid={this.state.usuarios[0].duraVid}
tipo={this.state.usuarios[0].tipo}
/>
</View>
{/*-------------------------------------------------------------------------------- */}

{/* ------------------------------------------------------------------------------ */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1.5}}>

                          <Image source={require('../assets/reviews/kuskal.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:5.5,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Kurtis 'Kala' Lloyd</Text>
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
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrending}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
          paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>

           {/* caja imagen de video*/}
           <View  style={{marginHorizontal:'4%'}}>
           <EventContents 
fecha={this.state.usuarios[1].fecha}
descripcion={this.state.usuarios[1].descripcion}
imagVideo={this.state.usuarios[1].imagVideo}
duraVid={this.state.usuarios[1].duraVid}
tipo={this.state.usuarios[1].tipo}
/>
{/*-------------------------------------------------------------------------------- */}
</View>
    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({

//en lista influencer
estrellasTrending:{
  paddingTop:7,
 marginBottom:20,
  flexDirection:'row',

},
textTren:{
    color:'#312f3d',
    fontSize:15,
    fontWeight:'500',
   }


});