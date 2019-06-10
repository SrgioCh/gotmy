import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class CuerpoMenu extends Component {

    constructor(props) {
        super(props)

    }

  render() {

  
  return(
   
    <View style={[{flexDirection:'row',marginTop:hp('2.5%'),paddingHorizontal:wp('4%')},this.props.borde]}>

            <View style={{flex:1.5,justifyContent: 'center' }}>
                 <Image  
                         source={this.props.imagmenu}
                          style={styles.imagen}
                           />
            </View>
           
            <TouchableOpacity style={{
             flex:8.5,justifyContent:"center"
               }}
             /*  onPress={()=>
                this.setState({
                 seleccionado1:seleccionado,
                 seleccionado2:this.desSelec,
                 seleccionado3:this.desSelec,
                 seleccionado4:this.desSelec,
                 seleccionado5:this.desSelec,
                })
              }*/
         //   onPressOut={this.navigateToScreen(this.props.enlaceUno)}
         onPressOut={()=>this.props.enviaAPadre(this.props.enlace)}
         >
               <Text style={styles.menu}>
                {this.props.titu}
               </Text>
            </TouchableOpacity>

        </View>

  )
          
   
  }

}

const styles = StyleSheet.create({

  imagen:{
    width:wp('7%'),height:hp('3.5%')
  },
  menu:{marginLeft: wp('5%'),
     color:'#312f3d',fontSize:wp('4%') ,fontWeight: '500',
  },
 

})


export default CuerpoMenu ;