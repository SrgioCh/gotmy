import React, { Component } from 'react';
import { Platform,Keyboard,Dimensions,
  View,Text ,TextInput,TouchableOpacity,TouchableWithoutFeedback,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import CabezeraViewer from "./../components/cabezeraViewer"
 

export default class Search extends Component {

  static navigationOptions = {
    header: null ,
};

constructor(props) {
  super(props)


  this.state = { 
      
 // PARA LA CABEZERA
 imagViewer:require('../assets/reviews/kuskal.png'),
 nombreView:`Kurtis 'Kala' Lloyd`,
correoView:'@kurtiskala',
iconoUno:null,
iconoDos:require('../assets/icons_genGMI/Filter.png'),



    source1: require('../assets/OnBoard/art-culture.jpg'),
    source2: require('../assets/OnBoard/business.jpg'),
    source3: require('../assets/OnBoard/celebrity.jpg'),
    source4: require('../assets/OnBoard/education.jpg'),
    source5: require('../assets/OnBoard/cooking.jpg'),
    source6: require('../assets/OnBoard/carft.jpg'),
    source18: require('../assets/OnBoard/vblogger.jpg'),
    }
}

recogeDeHijo(){
 console.log('no existe')
   }

  recogeDeHijo2(){
   alert(' abrira una pagina')
   
   
    }

  abrirMenu(){
    this.props.navigation.toggleDrawer() 
  }
 

  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
        wiFot='29%'
    }else if(screenHeight<=678){ // mi movil
        wiFot='29%'
   }else if(screenHeight<=685){ //1080 *1920
    wiFot='29.3%'
   }else if(screenHeight<=775){
    wiFot='29%'
   }else{
    wiFot='29%'
   }







    return (
     
<View style={{flex: 1}}>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
<CabezeraViewer
       imagViewer={this.state.imagViewer}
       
       nombreView={this.state.nombreView}
       correoView={this.state.correoView}

       iconoUno={this.state.iconoUno}
       iconoDos={this.state.iconoDos}

      
       enviaAPadreIconoUno={this.recogeDeHijo.bind(this)}
       enviaAPadreIconoDos={this.recogeDeHijo2.bind(this)}

       enviaAPadreMenu={this.abrirMenu.bind(this)}
    
       />
   
   </TouchableWithoutFeedback>
            <View style={{flex: 8.7}}>
    
           
                       
                     {/*  TITULOOO */}
                     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                       <View style={{ marginHorizontal:16,marginTop:hp('2%'),}}>
                         <Text style={{fontSize:34,fontWeight:"700"}}>
                         Search</Text>
                      </View>
                      </TouchableWithoutFeedback>
      
                         {/* BUSCADOR*/}
                   <View style={{ marginHorizontal:16,paddingVertical:9 }}>

                       <TextInput
                           style={{
                              height:42,
           
                          borderRadius:10,
          
                                } }
                           placeholder="Search live events,influencer...."
                          editable={true} // con false , no podremos escribir nada
                         borderBottomColor = '#e2e7ee'
                          borderBottomWidth ={1}
                       paddingHorizontal={30}
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
            {/*-----------------------------------------*/}

           <ScrollView>
             {/* MOSTRAR EL TEXTO DEL INPUT -esta oculto 
              <Text style={{display:'none'}}>en input : {this.state.tytexto}</Text>
              */}
         
                  {/* TRENDING TAGS */}
                 <Text style={{
                         color:'#312f3d',
                       fontSize:wp('4.2%'),
                       fontWeight:'bold',
                       marginHorizontal:'4%',
                       paddingVertical:20,
                       fontWeight:'bold'
                     }}
         
                      >Trending Tags</Text>

                   <View style={{
                              marginHorizontal:16,flexDirection:'row',
                            flexWrap:'wrap',paddingVertical:10}}>
             
                     <Text style={styles.tagsTrending}>#games</Text>
                      <Text style={styles.tagsTrending}>#fashion</Text>
                      <Text style={styles.tagsTrending}>#JustCause4</Text>
                      <Text style={styles.tagsTrending}>#stream</Text>
                      <Text style={styles.tagsTrending}>#godofwar</Text>
                      <Text style={styles.tagsTrending}>#showroom</Text>
                      <Text style={styles.tagsTrending}>#conemastream</Text>
                 </View>
    
                      {/* TRENDING CATEGORUIES */}

              <View style={{flexDirection:'row',
                    justifyContent: 'space-between',marginHorizontal:'4%'
                     ,marginTop:10}}>
                     <View > 
                         <Text style={{color:"#312f3d",fontSize:wp('4.2%'),
                       fontWeight:'bold',}}>Trending categories</Text>
                     </View>
                    <View style={{flexDirection:'row'}} >
                        <TouchableOpacity
                           onPress={() => this.props.navigation.navigate("SearchCateg")}
                          >
                        <Text style={{color:"#ff5a60",fontSize:wp('4.2%')}}>Show all</Text>
                         </TouchableOpacity>
                      <Text style={{color:"#ff5a60",fontSize:wp('4.2%'),fontWeight:'bold'}}> > </Text>

                      </View>
                </View>

              {/* TRENDING CATEGORIES*/}
          

         
              <View style={{ flex:1 ,flexDirection:'row',marginHorizontal:'4%', marginTop:hp('2%')}}>
                     
                     <TouchableOpacity 
                      style={{borderRadius:10,flex:1,height:hp('15%')}}
  
                    onPress = { () => {
                     
                          if (this.state.source1 === require("../assets/OnBoard/art-culture.jpg") )
                            {
                             this.setState({
                                source1: require("../assets/20.png")
                                    })
                            }
                        else{
                          this.setState({
                                source1: require("../assets/OnBoard/art-culture.jpg")
                                      })
                             }
                          }}
                        >
                    <Text style={styles.textoprueba}>
                    Art and {'\n'}Culture
                   </Text>
                   <Image source={this.state.source1} 
                     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                       />
                    </TouchableOpacity>  
     
             
               
                
                 <TouchableOpacity 
                      style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
                    onPress = { () => {
                          if (this.state.source2 == require("../assets/OnBoard/business.jpg") )
                            {
                             this.setState({
                              source2: require("../assets/1.png")
                                    })
                            }
                        else{
                          this.setState({
                                source2: require("../assets/OnBoard/business.jpg")
                                      })
                             }
                          }}
                        >
                    <Text style={styles.textoprueba}>
                    Business &{'\n'}Professional
                   </Text>
                   <Image source={this.state.source2} 
                     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                       />
                    </TouchableOpacity>  
                 
  
                 <TouchableOpacity 
            
                style={{borderRadius:10,flex:1,height:hp('15%')}}
                    onPress = { () => {
                          if (this.state.source3 == require("../assets/OnBoard/celebrity.jpg") )
                            {
                             this.setState({
                              source3: require("../assets/18.png")
                                    })
                            }
                        else{
                          this.setState({
                                source3: require("../assets/OnBoard/celebrity.jpg")
                                      })
                             }
                          }}
                        >
                    <Text style={styles.textoprueba}>
                    {' '}{'\n'}Fashion
                   </Text>
                   <Image source={this.state.source3} 
                     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                       />
                    </TouchableOpacity>  
             
       </View>
  
       <View style={{ flexDirection:'row',marginTop:hp('1.5%'),marginHorizontal:'4%',}}>
       
       <TouchableOpacity 
                      style={{borderRadius:10,flex:1,height:hp('15%')}}
                    onPress = { () => {
                          if (this.state.source4 == require("../assets/OnBoard/education.jpg") )
                            {
                             this.setState({
                              source4: require("../assets/16.png")
                                    })
                            }
                        else{
                          this.setState({
                                source4: require("../assets/OnBoard/education.jpg")
                                      })
                             }
                          }}
                        >
                    <Text style={styles.textoprueba}>
                    Classes &{'\n'}Education
                   </Text>
                   <Image source={this.state.source4} 
                     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                       />
                    </TouchableOpacity>  
              
  
                    <TouchableOpacity 
                      style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
                    onPress = { () => {
                          if (this.state.source5 == require("../assets/OnBoard/cooking.jpg") )
                            {
                             this.setState({
                              source5: require("../assets/17.png")
                                    })
                            }
                        else{
                          this.setState({
                                source5: require("../assets/OnBoard/cooking.jpg")
                                      })
                             }
                          }}
                        >
                    <Text style={styles.textoprueba}>
                    Classes &{'\n'}Education
                   </Text>
                   <Image source={this.state.source5} 
                     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                       />
                    </TouchableOpacity>  
        <TouchableOpacity 
       style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source18 == require("../assets/OnBoard/vblogger.jpg") )
     {
         this.setState({
             source18: require("../assets/3.png")
         })
     }
     else{
         this.setState({
             source18: require("../assets/OnBoard/vblogger.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
             Vlogger
       </Text>
    <Image source={this.state.source18} 
                   style={{borderRadius:10,width:'100%', height:'100%'}}
             />
   </TouchableOpacity>  
  
       </View>

            {/*  wanted influencers */}

           <View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:9
                ,marginTop:10}}>
                 <View > 
                 <Text style={{color:"#312f3d",fontSize:wp('4.2%'),
                       fontWeight:'bold', }}>Most wanted influencers</Text>
                  </View>
                  <TouchableOpacity   
                onPress={() => this.props.navigation.navigate("searchOptions",{pagina:1})}
                > 
                   <View style={{flexDirection:'row'}} >
                 <Text style={{color:"#ff5a60",fontSize:wp('4.2%')}}>Show all</Text>
               <Text style={{color:"#ff5a60",fontSize:wp('4.2%'),fontWeight:'bold'}}> > </Text>
                 </View>
                 </TouchableOpacity>
                </View>



{/* ---------------- SECCION IMAGEN DESPLAZABLE-----------*/}

<ScrollView horizontal showsHorizontalScrollIndicator={false}    style={{marginTop:-20}} >
          <View style={{ flexDirection:'row' ,
                marginLeft : Platform.OS === 'ios' ? 10:0}}>
           
           <View style={{ paddingVertical:22,paddingHorizontal:10}}>
           <TouchableOpacity
                           onPress={() => this.props.navigation.navigate("profile1")}
                          > 
               <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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
             </TouchableOpacity>
         </View>

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/dos.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/tres.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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
         
         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/dos.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/tres.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         </View>
      </ScrollView> 
  </ScrollView>

  </View>
 
 </View>

    );
  }
 
}





const styles = StyleSheet.create({
 
//*** TAGS DE TRENDING */
tagsTrending:{
  paddingVertical:8,
  borderColor:'#312f3d' ,
  borderWidth: 1,
  fontSize:13,
  borderRadius:20,
  paddingHorizontal:10,
  marginBottom: 5,
  marginLeft: 3,
},

//**** TRENDING CATEGORIES */
social:{
    

 marginBottom:7,
  flexDirection: 'row',


 },

 textoprueba:{
  position:'absolute',
  zIndex:3,
  color:'white',
  fontWeight:'500',
  textAlign:'left',
  bottom:hp('2%'),
  left:wp('2%')
 },
//most wanted influencer
 imagentrending:{
  width:100,
  height:100,
  
},
estrellasimagen2:{
  padding:3,
  flexDirection:'row',
  zIndex:3,
  marginLeft:12,

 },
 pentaIcon:{
  color:'white',
  fontSize:13,
}


});