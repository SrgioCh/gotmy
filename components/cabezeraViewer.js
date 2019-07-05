import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class CabezeraViewer  extends React.Component {
   
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

   
    return (

<View  style={{flex: 1.3 ,justifyContent:'flex-end',marginHorizontal:'4%',
          paddingBottom:hp('1.5%')}}>
            
          <View style={{flexDirection:'row'}}>
           <TouchableOpacity
              style={{flex:1.5 ,justifyContent:'center'}}
              onPress={() => this.props.enviaAPadreMenu()} >
                 <Image source={this.props.imagViewer} 
                style={{ width:40,height:40,
                          borderRadius:10}}
                />
           </TouchableOpacity>
             <View style={{flex:6.5,flexDirection:'column' }}>
                 <View style={{}}>
                       <Text style={{
                       color:'#312f3d',
                       fontSize:wp('4%') ,letterSpacing:0.41
                        }}>{this.props.nombreView}</Text>
                      
                 </View>
                  
                  <Text style={{
                         color:'#677183',
                         fontSize:wp('3.5%') ,letterSpacing:0.08
                  }}>{this.props.correoView}</Text>
             </View>
             <View style={{flex:1,alignItems:'center'}}>
              <TouchableOpacity
                onPress={() =>  this.props.enviaAPadreIconoUno()}
           
              >
              <Image source={this.props.iconoUno} 
                        style={{width:30, height:30}}
                        />
                 </TouchableOpacity>
              </View>
            
              <View style={{flex:1,alignItems:'flex-end'  }}>
              <TouchableOpacity
                onPress={() =>  this.props.enviaAPadreIconoDos()}
              
              >
              <Image source={this.props.iconoDos} 
                        style={{width:30, height:30}}
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