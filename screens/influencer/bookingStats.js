import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,
   ScrollView, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import EventContents from "../../components/eventContents"; //para las cajas con video

  import PureChart from 'react-native-pure-chart';

export default class BookingStats extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
  
      //PARA VIDvIEW
   usuarios:[
    {
     fecha:'Monday, 19/12/2018',
     descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
     imagVideo:require('../../assets/influencers/MandyJTV/mandy5.jpg'),
     duraVid:'12:40',
     tipo:'Naturs,Outdoors & Chefs',
      dinero:840,
      datos: [
                 {
                seriesName: 'series4',
                 data: [
                          {x: 'sold', y: 48},
                           {x: 'Unsold', y: 18},
                           ],
                color: '#ff5a60'
                 },
             ]
    },
    {
      fecha:'Monday, 19/12/2018',
     descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
     imagVideo:require('../../assets/influencers/KalaTempo/kala3.png'),
     duraVid:'12:40',
     tipo:'Naturs,Outdoors & Chefs',
     dinero:12.345,
     datos: [
      {
       seriesName: 'series4',
           data: [
            {x: 'sold', y: 48},
            {x: 'Unsold', y: 18},
                ],
            color: '#ff5a60'
           },
        ]
    },
  ]
  }

}

recogeDeHijo(dato){
    
  this.props.navigation.navigate(dato)
 
  }
 

    render() {

    screenHeight=Dimensions.get('window').height;


    return (
        <View style={{flex: 1,marginHorizontal:wp('4%')}}>
           <TouchableOpacity style={{ flex:1,justifyContent:'flex-end'}}
             onPress={() => this.props.navigation.goBack()}
            >
                  <Image source={require('../../assets/icons_genGMI/Back.png')} 
                        style={{ width:20,height:20 }}
                        /> 
           </TouchableOpacity>
           <View style={{ flex:2 }}>
 
                 <View style={{flex:1,justifyContent:'center'}}>
                      <Text style={{
                        color:'#312f3d' , fontSize:wp('8%') , fontWeight:'500'   
                      }}>My Event stats</Text>
                 </View>
                 <View style={{flex:1}}>
                         {/* BUSCADOR*/}
      <View style={{paddingVertical:5,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>

                 <View style={{ width:30,height:30}}>
                     <Image source={require('../../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:'90%',
                     
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

{/* ------------------------------ fin de buscadorr------------*/}
                 </View>
            </View>
            <View style={{ flex:7 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
         
              <View style={{marginBottom:hp('2.5%')}}>
                  {
                   this.state.usuarios.map((item,i)=> {
                        
                        return(
                       <View  key={i} style={{  borderBottomWidth:wp('0.3%'),borderBottomColor:'#CCCACA'  
                       }}>
                           <EventContents
                        fecha={item.fecha}
                        descripcion={item.descripcion}
                        imagVideo={item.imagVideo}
                        duraVid={item.duraVid}
                        tipo={item.tipo}
                     
                        />
                       <View style={{marginVertical:hp('1%') }}>
                           <Text style={{color:'#312f3d' , fontSize:wp('10%') , fontWeight:'500' }}>
                           $ {item.dinero}</Text>
                       </View>
                    
                               
                       <View style={{marginVertical:hp('1.5%'),paddingVertical:hp('0.5%'),flexDirection:'row'}}>
       
                                <View style={{flex:5 ,justifyContent:'center'}}>
                                       <View>
                                         <Text style={{fontSize:wp('4%'),fontWeight: 'bold'}}>Sold Tickets</Text>
                                         <Text style={{marginVertical:hp('1.5%'),fontSize:wp('4%'),
                                           fontWeight: 'bold',  }}>Unsold Tickets</Text>
                                      </View>
            
                                 </View>
       
                                <View style={{flex:5,alignItems:'flex-end',padding:hp('0.7%')}}>
                                    <PureChart data={item.datos} type='bar' defaultColumnWidth={18} />
                                 </View>
                            </View>
                        </View>
                 

                            )
                          }
                         )

                  }
              </View>
            </ScrollView>
            </View>
        
   </View>
 
 
      
   
   );
}
}




const styles = StyleSheet.create({

 

});