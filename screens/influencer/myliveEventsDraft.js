import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class MyLiveEventsDraft extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={

        contenido:[
            {
                mensaje:'Know Why You are Creating A Video',
                name:'Claudia Mason',
                fech:'12 dec ,2018',
                imagIco:require('../../assets/influencers/dos.png'),
                img:require('../../assets/influencers/spffiele.png'),
                imagArticle:require('../../assets/mixto/imagLiveEvenArticle.png'),
                estrellas:4,
                tipoEstre:'peque',
            },
            {
                mensaje:'Ensure Quality And Consistency',
                name:'Adrian Stephens',
                fech:'12 dec ,2018',
                imagIco:require('../../assets/influencers/spffiele.png'),
                img:require('../../assets/influencers/chicarosa.jpg'),
                imagArticle:require('../../assets/mixto/imagLiveEvenArticle.png'),
                estrellas:3,
                tipoEstre:'peque',
            },
            {
                mensaje:'Trust The Human Factor',
                name:'Evan Reid',
                fech:'12 dec ,2018',
                imagIco:require('../../assets/usuarios/cuatro.png'),
                img:require('../../assets/influencers/MandyJTV/mandy3.png'),
                imagArticle:require('../../assets/mixto/imagLiveEvenArticle.png'),
                estrellas:1,
                tipoEstre:'peque',
            }
        ]

      }
  
  }// fin de consttructor

  render() {

    return (
 
   <ScrollView>
     
{/* ----------------------------------------------------------- */}
  <View style={{alignItems:'center',
                justifyContent:'center'}}>
       <View style={{marginTop:hp('4%')}}>
       
          <Image source={require('../../assets/mixto/myliveventsdraft.png')} 
                        
           />
                    
       </View>
       <View style={{marginTop:hp('3%')}}>
           <Text style={{
                fontSize:wp('6%'),
                color:'#312f3d',
                fontWeight:'500'
               }}>No events yet!</Text>
       </View>
       <View style={{marginTop:hp('1.5%')}}>
             <Text style={styles.textos}>
                 Here you can see your draft Live Events</Text>
            <View  style={{alignItems:'center',marginTop:hp('1%')}}>
                 <Text  style={{ fontSize:wp('3.5%'),
                               color:'#ff5a60'}}> 
                 create your first Live event</Text>
            </View>
           
       </View>
 </View>

 <View 
 
style={{flexDirection:'row',marginHorizontal:'4%',paddingVertical:hp('3%')}}>
               <View style={{flex:5}}>
                                 <Text style={{color:"#312f3d",
                                         fontSize:wp('4%'),
                                         fontWeight:'bold'}} > 
                                  Tips For Event Success
                                 </Text>
                    </View>
                                <View style={{flex:5,alignItems:'flex-end'}}>
                                <TouchableOpacity
                                style={{flexDirection:'row'}}
                                onPress={() => this.props.enviaAPadre2("click en ddraft")}
                                    > 
                                 
                                      <Text style={{
                                          marginTop:hp('0.3%'),
                                        color:"#ff5a60",
                                        fontSize:wp('3.5%'),
                                        fontWeight:'500'
                                         }}> Show all </Text>
                                        <View style={{}}>
                                        <Image
                                     source={require('../../assets/icons_genGMI/arrowred.png')}
                                     style={{}}
                                      />
                                      </View>
                                    </TouchableOpacity>
                                </View>
                                 
                        </View> 

       {/*  bloque de las cajas */}

 <View style={{marginBottom:hp('2%')}}>     
{

    this.state.contenido.map((item,i)=> {
  
 return(
      <View key={i} style={{paddingBottom:hp('1.5%'),borderBottomWidth:hp('0.1%'),borderBottomColor:'grey',
         marginTop:hp('1.5%'),flexDirection:'row',marginHorizontal:wp('4%')}}>

             <View style={{flex:5.7 ,}}>
                  <Text style={{color:"#312f3d",
                            fontSize:wp('5.5%'),
                          fontWeight:'bold'}}>
                      {item.mensaje}
                  </Text>



                  <View style={{flexDirection:'row',paddingTop:hp('1%')}}>
                  <TouchableOpacity
                                style={{flex:2.4}}
                                onPress={() => this.props.enviaAPadre3(item)}
                                    > 
                     
                             <Image
                                             source={item.imagIco}
                                                style={{
                                                   width:40,
                                                  height:40,
                                                   borderRadius:30,
                                               
                                                   }}
                                             />
                     </TouchableOpacity>
                      <View style={{flex:7.6}}>
                            <Text style={{color:"#312f3d",
                            fontSize:wp('3.5%'),
                          fontWeight:'bold'}}>
                                {item.name}
                            </Text>
                            <Text style={{
                                marginVertical:hp('0.5%'),
                                color:"#312f3d",
                            fontSize:wp('3%'),
                          fontWeight:'100'}} >
                                {item.fech}
                            </Text>
                      </View>
                  </View>
             </View>
             <View style={{flex:4.3,alignItems:'flex-end'}}>
                                 <Image
                                             source={item.img}
                                                style={{
                                                   width:wp('30%'),
                                                  height:hp('13.5%'),
                                                   borderRadius:15,
                                               
                                                   }}
                                             />
            </View>
      </View>
 )
      }
    )
}
</View> 


    </ScrollView>
 
    );
  }
 
}





const styles = StyleSheet.create({
 

pentaIcon:{
  color:'white',
  fontSize:13,
  
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
  
//textos debajo imagen
textos:{
    fontSize:wp('3.5%'),
    color:'#677183'
}



});