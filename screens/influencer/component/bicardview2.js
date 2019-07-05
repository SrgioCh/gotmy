import React from 'react';
import {Platform,StyleSheet,Dimensions,Text, View, Image } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class BicardViewDos extends React.Component {

    constructor(props) {
        super(props)

    }

  render() {

     if(this.props.tipo=='red'){
      
      
      return (

    
        <View style={{marginHorizontal:'4%'}}>
   
   
         <View style={{backgroundColor:'#f6f6f6',borderRadius:hp('2.5%'),height:Platform.OS === 'ios'? hp('39%'):hp('40.5%')}}>
   
          <View style={{
                                   width:Platform.OS === 'ios' ? '100%':'100%',
                                   height:hp('30%'),padding:hp('1%')}} >
                                <Image source={this.props.fotoGrande} 
                               style={{ zIndex:1 ,width:'100%',height:'100%',borderTopLeftRadius:hp('2.5%'),borderTopRightRadius:hp('2.5%'),}}
                               />
         </View>  
   
   
   
      <View>
               <View style={{flexDirection:'row',
                               marginHorizontal:'4%',
                               position:'absolute',bottom:hp('2.5%'),zIndex:4}}>
   
                    <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
   
                          <Image source={this.props.iconoRed} 
                                   style={{ width:30,height:30,borderRadius:15}}
                              />
                          </View>
   
                   <View style={{flex:6.5,flexDirection:'column'}}>
   
                   <View style={{}}>
                       <Text style={{fontSize:wp('4%'),color:'#ff5a60'}}>
                       {this.props.men1}</Text>
                       <Text style={{fontSize:wp('3%'),color:'#ff5a60'}}>
                      {this.props.men2}</Text>
                   
                   </View>
   
   
           </View>
   
    <View style={{flex:2,alignItems:'flex-end',  justifyContent:'center',paddingRight:wp('1%')}}>
               <View style={{flexDirection:'row'}}>
               <Image source={require('../../../assets/icons_genGMI/User.png')} 
                     style={{ width:15,height:15,marginRight:wp('1%')}}
                      />  
                  <Text style={{color:'white'}}>{this.props.num_segui}</Text>
             </View>
              
   
           </View>
   
           </View>
           <View style={{paddingHorizontal:wp('1.9%'),alignItems:'center',zIndex:3}}>
           <Text style={[styles.transparenteNuevo,{ width:  Platform.OS === 'ios' ? '100%':'100%'}]}></Text>
           </View>
            
              
             
   
           </View>
   
           {/* cajita fecha*/}
           <View style={{marginTop:hp('-1.5%'),marginHorizontal:'2%',
                     /*      marginLeft:  Platform.OS === 'ios' ? 6:8,
                       marginRight:  Platform.OS === 'ios' ? 11:8,*/
                       flexDirection:'row'}}>
                <View style={{ flex:1.5,borderBottomLeftRadius: hp('2.5%'),flexDirection:'column',
                     alignItems:'center',justifyContent:'center',backgroundColor:'white'
                   }}>
                     <Text style={{ fontSize:wp('8%'),fontWeight:'bold'}}>
                      {this.props.dia}</Text>
                     <Text style={{color:'#ff5a60'}}>{this.props.mes}</Text>
                 </View>
                 <View style={{ flex:8.5, flexDirection:'column',backgroundColor:'white',paddingBottom:hp('2%'),borderBottomEndRadius:hp('2.5%')}}>
                           <Text style={{ fontSize: Platform.OS === 'ios' ? 15:wp('4%'),
                               fontWeight:'bold',color:'#312f3d',marginTop:hp('1%')}}>
                            {this.props.texto1}</Text>
   
                      <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:wp('3.3%'),
                      fontWeight:'bold',color:'#ff5a60'}} >{this.props.texto2}</Text>
                      
                      <View style={{flexDirection:'row',paddingTop:hp('0.5%')}}>
                        <Image source={require('../../../assets/icons_genGMI/ubicacion.png')} 
                        style={{ width:15,height:15}}
                        />  
   
                      <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:wp('3%') ,
                      fontWeight:'bold',color:'#677183',marginLeft:wp('1%'),
                       }}>{this.props.direccion}</Text>
                      </View>
                   
             </View>
   </View>  
   </View>  
   </View>
       );









     }
  else {
     
    return (

    
     <View style={{marginHorizontal:'4%'}}>


      <View style={{backgroundColor:'#f6f6f6',borderRadius:hp('2.5%'),height:Platform.OS === 'ios'? hp('39%'):hp('40.5%')}}>

       <View style={{
                                width:Platform.OS === 'ios' ? '100%':'100%',
                                height:hp('30%'),padding:hp('1%')}} >
                             <Image source={this.props.fotoGrande} 
                            style={{ zIndex:1 ,width:'100%',height:'100%',borderTopLeftRadius:hp('2.5%'),borderTopRightRadius:hp('2.5%'),}}
                            />
      </View>  





      <View>
            <View style={{flexDirection:'row',
                            marginHorizontal:'4%',
                            position:'absolute',bottom:hp('1.5%'),zIndex:4}}>

                 <View style={{flex:2}}>

                       <Image source={this.props.fotoUser} 
                                style={{ width:50,height:50,borderRadius:10}}
                           />
                       </View>

                <View style={{flex:3.5,flexDirection:'column'}}>

                <View style={{paddingTop:hp('1%'),}}>
                    <Text style={{fontSize:wp('4%'),color:'white'}}>
                  {this.props.usuario}</Text>
                </View>


              </View>


        <View style={{flex:4.5,alignItems:'flex-end',  justifyContent:'center',paddingRight:wp('1%')}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../../assets/icons_genGMI/User.png')} 
                  style={{ width:15,height:15,marginRight:wp('1%')}}
                   />  
               <Text style={{color:'white'}}>{this.props.num_segui}</Text>
          </View>
           <View >
            <Text style={{color:'white'}}>
               {this.props.mensaje}
            </Text>
         </View>

        </View>

        </View>
        <View style={{paddingHorizontal:wp('1.9%'),alignItems:'center',zIndex:3}}>
        <Text style={[styles.transparenteNuevo,{ width:  Platform.OS === 'ios' ? '100%':'100%'}]}></Text>
        </View>
         
           
          

        </View>

        {/* cajita fecha*/}
        <View style={{marginTop:hp('-1.5%'),marginHorizontal:'2%',
                  /*      marginLeft:  Platform.OS === 'ios' ? 6:8,
                    marginRight:  Platform.OS === 'ios' ? 11:8,*/
                    flexDirection:'row'}}>
             <View style={{ flex:1.5,borderBottomLeftRadius: hp('2.5%'),flexDirection:'column',
                  alignItems:'center',justifyContent:'center',backgroundColor:'white'
                }}>
                  <Text style={{ fontSize:wp('8%'),fontWeight:'bold'}}>
                   {this.props.dia}</Text>
                  <Text style={{color:'red'}}>{this.props.mes}</Text>
              </View>
              <View style={{ flex:8.5, flexDirection:'column',backgroundColor:'white',paddingBottom:hp('2%'),borderBottomEndRadius:hp('2.5%')}}>
                        <Text style={{ fontSize: Platform.OS === 'ios' ? 15:wp('4%'),
                            fontWeight:'bold',color:'#312f3d',marginTop:hp('1%')}}>
                         {this.props.texto1}</Text>

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:wp('3.3%'),
                   fontWeight:'bold',color:'#ff5a60'}} >{this.props.texto2}</Text>
                   
                   <View style={{flexDirection:'row',paddingTop:hp('0.5%')}}>
                     <Image source={require('../../../assets/icons_genGMI/ubicacion.png')} 
                     style={{ width:15,height:15}}
                     />  

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:wp('3%') ,
                   fontWeight:'bold',color:'#677183',marginLeft:wp('1%'),
                    }}>{this.props.direccion}</Text>
                   </View>
                
          </View>
</View>  
</View>  
</View>
    );
   } //fin del else
  }
}

const styles = StyleSheet.create({

    estrellasTrendingNuevo:{
        
        flexDirection:'row',
       },
      transparenteNuevo:{
       
        height:hp('8%'),
        position:'absolute',
        zIndex:3,
        backgroundColor:'black',
        opacity:0.9,
    
        bottom:hp('1%')
       
      },
     

  })