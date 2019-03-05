import React from 'react';
import {Platform,StyleSheet,Text, View, Image } from 'react-native';


export default class BicardView extends React.Component {

    constructor(props) {
        super(props)

    }

  render() {
    
    return (
   
      <View style={{backgroundColor:'#f6f6f6',paddingBottom:7,
                   marginVertical:1, borderRadius:10}}>

                    <View style={{borderRadius:10,
                                width:Platform.OS === 'ios' ? 339:328,
                                height:200,padding:7}} >
                             <Image source={this.props.fotoGrande} 
                            style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                            />
                    </View>  


                    <View>
                        <View style={{flexDirection:'row',
                            marginHorizontal:16,marginVertical:14,
                            position:'absolute',bottom:0,zIndex:4}}>

                        <View style={{flex:2}}>

                              <Image source={this.props.fotoUser} 
                                style={{ width:50,height:50,borderRadius:10}}
                           />
                  </View>

                <View style={{flex:3,flexDirection:'column'}}>

                <View>
                    <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>
                  {this.props.usuario}</Text>
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
            <View style={{flexDirection:'row'}}>
                 <Image source={require('../assets/icons_genGMI/User.png')} 
                  style={{ width:15,height:15,marginRight:5}}
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
            <Text style={styles.transparenteNuevo}></Text>
            <View  style={{
              width:50,
              height:50,
              borderRadius:30,
              backgroundColor:'#312f3d',
              opacity:0.8,
              zIndex:9,
              position:'absolute',
              right:15,
              bottom:135,
              alignItems:'center',
              justifyContent:'center',

            }}>
                <Image source={require('../assets/icons_genGMI/Like/corazongris.png')} 
                  style={{  width:30,height:30,
                            zIndex:10}}
                   />  
            </View>
          

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
                   {this.props.dia}</Text>
                  <Text style={{color:'red'}}>{this.props.mes}</Text>
                  </View>
             <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                  paddingTop:20}}>
               <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                  fontWeight:'bold',color:'#312f3d'}}>
                      {this.props.texto1}</Text>
                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                   fontWeight:'bold',color:'#677183'}} >{this.props.texto2}</Text>
                   
                   <View style={{flexDirection:'row'}}>
                     <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                     style={{ width:15,height:15,marginTop:4,marginRight:5}}
                     />  

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                   fontWeight:'bold',color:'#677183',
                    paddingVertical:4}}>{this.props.direccion}</Text>
                   </View>
                
          </View>
</View>  
</View>  
    );
  }
}

const styles = StyleSheet.create({

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
     

  })