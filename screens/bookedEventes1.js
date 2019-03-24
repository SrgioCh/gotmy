import React, { Component } from 'react';
import {Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

import BookedEvDos from "./bookedEventes2"
import BookedEvTres from "./bookedEventes3"

export default class BookedEvUno extends Component {

  static navigationOptions = {
    header: null ,
};

BookedEvUno=(<ScrollView>
          
{/* -----------------BICARDVIEW--------------*/}  
  <TouchableOpacity 
            onPress = {() => this.props.navigation.navigate("boked4") } >     
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault-2.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  


<View>
<View style={{flexDirection:'row',
            marginHorizontal:16,marginVertical:14,
             position:'absolute',bottom:0,zIndex:4}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

      </View>

      <View style={{flex:3,flexDirection:'column'}}>
     
          <View>
          <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>Mabel Spencer</Text>
         </View>
      
     
             <View  style={styles.estrellasTrendingNuevo}>
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


<View style={{flex:4,alignItems:'flex-end',  justifyContent:'center'}}>
      <View >
            <Text style={{color:'white'}}>
              @ 34
            </Text>
      </View>
      <View >
            <Text style={{color:'white'}}>
              Only 2 tickets left
            </Text>
      </View>
  
    </View>

  </View>
  <Text style={styles.transparenteNuevo}></Text>
 </View>

 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#ff5a60'}} >Fashion</Text>
                      <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                style={{ width:11,height:11,marginLeft:2,marginTop:6}}
                            />
                        <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                      fontWeight:'bold',color:'#677183',
                              paddingVertical:4,marginLeft:5}}>Live from New York, at 18:30 pm</Text>
                       </View>
                     </View>
        </View>  
</View>  
</TouchableOpacity>
 {/* -------------------------------------------------------------------*/}
</ScrollView>);

  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          textoUno:styles.textoElegido,

          menu2:styles.menunormal,
          textoDos:styles.textoNormal,

          menu3:styles.menunormal,
          textoTres:styles.textoNormal,

           mostramos:this.BookedEvUno,               
          
              
      }
  
  }// fin de consttructor

  
  cambiarVista=(num)=>{

    if(num==1){
       
        this.setState({
            mostramos:this.BookedEvUno, 
            menu1:styles.menuelegido,
            textoUno:styles.textoElegido,
  
            menu2:styles.menunormal,
            textoDos:styles.textoNormal,
  
            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
        })
    }else if(num==2){
       
        this.setState({
            mostramos:<BookedEvDos/>,
            menu1:styles.menunormal,
            textoUno:styles.textoNormal,

            menu2:styles.menuelegido,
            textoDos:styles.textoElegido,

            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
        })
    }else if(num==3){
       
        this.setState({
            mostramos:<BookedEvTres enviaAPadre={this.recogeDeHijo.bind(this)}/>,
            menu1:styles.menunormal,
            textoUno:styles.textoNormal,

            menu2:styles.menunormal,
            textoDos:styles.textoNormal,

            menu3:styles.menuelegido,
            textoTres:styles.textoElegido,
        })
    }

}

recogeDeHijo(dato){
    
  this.props.navigation.navigate(dato)
 
  }
 

 
 
  render() {
    return (
      <View style={{flex: 1}}>
      <View  style={{flex: 1 ,marginTop:22,justifyContent:'center',
          borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6',
           marginHorizontal:'4%'}}>
            
          <View style={{flexDirection:'row'}}>
              <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/reviews/kuskal.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:4,flexDirection:'column',marginLeft:10,
                        marginRight:15}}>
                  <Text style={{
                       color:'#312f3d',
                       fontSize:17 ,letterSpacing:0.41
                  }}>Kurtis 'Kala' Lloyd</Text>
                  <Text style={{
                         color:'#677183',
                         fontSize:13 ,letterSpacing:0.08
                  }}>@kurtiskala</Text>
             </View>
             <View style={{flex:1,marginRight:5}}>
               
              </View>
              <View style={{flex:1}}>
                 <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../assets/icons_genGMI/calendarRojo.png')} 
                        style={{ width:30,height:30,
                                  borderRadius:10}}
                        />
                  </View>
              </View>
          </View>
  
      </View>
      <View style={{flex: 9}}>
        
                
            {/* ----------- TITULO ----------------*/} 

              <View style={{ marginHorizontal:16,paddingBottom:2  }}>
     
                  <Text style={{
                     color:'#312f3d',
                        fontSize:34,
                        fontWeight:'bold',
                        letterSpacing:0.41,
                }}>Live Events</Text>         
           </View>

        
  
 
          {/* ----------------MENU ----------------*/}
 
            <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginVertical:10}}>

                 <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu1]}>
                 <TouchableOpacity
               onPress={() => this.cambiarVista(1)}
             >
                 <Text  style={this.state.textoUno}>
                 Upcoming
                 </Text>
                 </TouchableOpacity>
               </View>



           <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
           <TouchableOpacity
               onPress={() => this.cambiarVista(2)}
             >
            <Text  style={[this.state.textoDos,{marginLeft:10}]}>
            Past Eventes
          </Text>
          </TouchableOpacity>
         </View>


        <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <TouchableOpacity
                 onPress={() => this.cambiarVista(3)}
             >
            <Text  style={[this.state.textoTres,{marginLeft:10}]}>
             Favorites
              </Text>
         </TouchableOpacity>
      </View>

     </View>

 {/* ------------------------*/} 
     {this.state.mostramos}




  </View>
  
  
       </View>

     
    );
  }
 
}





const styles = StyleSheet.create({
 
  /* PARA TRANSPARENCIA */
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
transparente:{
  width:313,
  height:60,
  position:'absolute',
  zIndex:1,
  backgroundColor:'black',
  opacity:0.5,
 bottom:-4,
 
},


  

 //   MENUS
 menuelegido:{
   borderBottomWidth:1,
   borderBottomColor:'#ff5a60',
 },
 
 menunormal:{
   borderBottomWidth:1,
   borderBottomColor:'#e1e3e6',
 },
 textoElegido:{
  color:'#312f3d', fontSize:17,paddingVertical:14  
 },
 textoNormal:{
  color:'#697181',fontSize:17,paddingVertical:14  
 },
 
 //TABS PENTA ICON

 pentaIcon:{
  color:'white',
  fontSize:13,
},
estrellasTrendingNuevo:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',
  marginTop:-5,

},
transparenteNuevo:{
  width:  Platform.OS === 'ios' ? 325:315,
  height:60,
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.5,
  marginHorizontal:7,
  bottom:6,
 
},




});