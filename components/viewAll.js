
import React from 'react';
import {Platform,TouchableOpacity,StyleSheet,Text, View } from 'react-native';


export default class ViewAll extends React.Component {

    constructor(props) {
        super(props)

    }

  render() {
    
    return (
   
        <View style={{flexDirection:'row',
           justifyContent: 'space-between'
           ,marginTop:10}}>
                <View > 
                <Text style={{color:"#312f3d",fontSize:17}}>{this.props.titulo}</Text>
                </View>
                <View style={{flexDirection:'row'}} >
                        <TouchableOpacity
                            onPress={() => this.props.selecciona()}
                         >
                    <Text style={{color:"#ff5a60",fontSize:16}}>{this.props.all}</Text>
                        </TouchableOpacity>
                    <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
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






















