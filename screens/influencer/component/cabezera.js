import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Cabezera  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
  
 
  }

}

    render() {
  
    screenHeight=Dimensions.get('window').height;

   //alert(this.props.abreMenu)

   if(this.props.abreMenu){

      imagen= <TouchableOpacity
              style={{flex:1.5 ,alignItems:'center',justifyContent:'center'}}
              onPress={() => this.props.enviaAPadreMenu()} >
                 <Image source={this.props.imagInflu} 
                style={{ width:40,height:40,
                          borderRadius:10}}
                />
           </TouchableOpacity>
   }else{
    imagen= <View style={{flex:1.5 ,alignItems:'center',justifyContent:'center'}}>
    <Image source={this.props.imagInflu} 
   style={{ width:40,height:40,
             borderRadius:10}}
   />
</View>
   }

    return (

<View  style={{flex: 1.3 ,justifyContent:'flex-end',
          paddingBottom:hp('1.5%'), borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
            
          <View style={{flexDirection:'row',paddingHorizontal:'4%'}}>
             {imagen}
             <View style={{flex:7.5,flexDirection:'column' }}>
                 <View style={{flexDirection:'row'}}>
                       <Text style={{
                       color:'#312f3d',
                       fontSize:wp('4%') ,letterSpacing:0.41
                        }}>{this.props.influencer}</Text>
                       <Image source={this.props.imagMasco} 
                        style={{ marginLeft:wp('2%'), width:20,height:20 }}
                        />
                 </View>
                  
                  <Text style={{
                         color:'#677183',
                         fontSize:wp('3.5%') ,letterSpacing:0.08
                  }}>{this.props.correoInflu}</Text>
             </View>
            
              <View style={{flex:1,alignItems:'flex-end'}}>
              <TouchableOpacity
                onPress={() =>  this.props.enviaAPadre(this.props.haciaPag)}
            // onPress={() => this.props.navigation.navigate("publishEven1")}
              >
              <Image source={this.props.icono} 
                        style={{width:40, height:40}}
                        />
                 </TouchableOpacity>
              </View>
          </View>
  
      </View>


  
   
   );
}
}




const styles = StyleSheet.create({

 

});