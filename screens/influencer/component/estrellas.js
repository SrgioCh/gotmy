import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Estrellas  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
    estre1:'',
    estre2:'',
    estre3:'',
    estre4:'',
    estre5:'',
 
  }

}

    render() {

    screenHeight=Dimensions.get('window').height;
    

    switch (this.props.estrellas) {
        case 1:
                estre1=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre2=require('../../../assets/icons_genGMI/Rating/Grey.png');
                estre3=require('../../../assets/icons_genGMI/Rating/Grey.png');
                estre4=require('../../../assets/icons_genGMI/Rating/Grey.png');
                estre5=require('../../../assets/icons_genGMI/Rating/Grey.png');
            break;
        
        case 2:
                    estre1=require('../../../assets/icons_genGMI/Rating/Red.png');
                    estre2=require('../../../assets/icons_genGMI/Rating/Red.png');
                    estre3=require('../../../assets/icons_genGMI/Rating/Grey.png');
                    estre4=require('../../../assets/icons_genGMI/Rating/Grey.png');
                    estre5=require('../../../assets/icons_genGMI/Rating/Grey.png');
                  
            
                break;
        case 3:
             
                    estre1=require('../../../assets/icons_genGMI/Rating/Red.png');
                    estre2=require('../../../assets/icons_genGMI/Rating/Red.png');
                    estre3=require('../../../assets/icons_genGMI/Rating/Red.png');
                    estre4=require('../../../assets/icons_genGMI/Rating/Grey.png');
                    estre5=require('../../../assets/icons_genGMI/Rating/Grey.png');
                  
               break;
        case 4:
                estre1=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre2=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre3=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre4=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre5=require('../../../assets/icons_genGMI/Rating/Grey.png');
               
              break;
        case 5:
                estre1=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre2=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre3=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre4=require('../../../assets/icons_genGMI/Rating/Red.png');
                estre5=require('../../../assets/icons_genGMI/Rating/Red.png');
            break;
    }



if(this.props.tipoEstre!='peque'){
  return (

    <View  style={styles.estrellasTrending}>
    <Image source={estre1} 
    style={{ width:15,height:15,}}
    />
   <Image source={estre2} 
  style={{ width:15,height:15,marginLeft:2}}
  />
 <Image source={estre3} 
    style={{width:15,height:15,marginLeft:2}}
   />
<Image source={estre4} 
 style={{ width:15,height:15,marginLeft:2}}
  />
 <Image source={estre5} 
     style={{ width:15,height:15,marginLeft:2}}
 />
</View>
)
}else{
  return (

    <View  style={{ flexDirection:'row'}}>
    <Image source={estre1} 
    style={{ width:10,height:10,}}
    />
   <Image source={estre2} 
  style={{ width:10,height:10,marginLeft:2}}
  />
 <Image source={estre3} 
    style={{width:10,height:10,marginLeft:2}}
   />
<Image source={estre4} 
 style={{width:10,height:10,marginLeft:2}}
  />
 <Image source={estre5} 
     style={{ width:10,height:10,marginLeft:2}}
 />
</View>



);

}

   
}
}




const styles = StyleSheet.create({
//en lista influencer
estrellasTrending:{
    paddingTop:7,
   marginBottom:20,
    flexDirection:'row',
  
  },
 

});