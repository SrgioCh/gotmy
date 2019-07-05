import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,ScrollView,
  TextInput,TouchableOpacity, View, Image,ImageBackground } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Modales extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
  
 
  }
   num=1;//nos ayudara a controlar las cajas de medio
}

    render() {

    screenHeight=Dimensions.get('window').height;
    

   console.log(this.props.selec)

    return (
    <View style={{flex:1 ,marginHorizontal:wp('4%') ,zIndex:3 }}>
          <View  style={{flexDirection:'row',paddingVertical:hp('2%')}}>
                <View style={{flex:1.2,paddingLeft:wp('2%')}}>
                       <Image source={this.props.icon} 
                              style={{width:30,height:30 }}          
                                /> 
                </View>
                <View style={{flex:8.8,paddingLeft:wp('3%')}}>
                     <Text style={{
                          color:'white',
                          fontSize:wp('4%'),
                          fontWeight:'200'
                     }}>{this.props.tit}</Text>
                </View>
         </View>

         
         <ScrollView style={{marginBottom:20}} >

            <View   style={{flexWrap:'wrap' ,flexDirection:'row',alignItems:'center'}}>

           
             {
                     this.props.selec.map((item,i)=>{

                     
                    
                      //  
                        return(

                  <TouchableOpacity 
                  key={i} style={{height:hp('20%'),width:wp('30.6%'),
                  marginVertical:hp('0.5%'),alignItems:'center'}}
                   onPress={() => this.props.enviaAPadre(item)}
                  >  

                           
                               
                               <View    style={{ borderRadius:hp('1%'),width:wp('27%'),height:hp('19.5%')}}      >
                                   <Image source={item.foto} 
                                   style={{width:'100%',height:'100%', borderRadius:hp('1%')}}          
                                  /> 
                                  <View style={{
                                      position:'absolute',
                                      width:'70%',
                                      left:wp('1%'),
                                      bottom:hp('1%'),
                                 
                                  }}>
                                  <Text style={{
                                     color:'white',
                                     fontSize:wp('4%'),
                                     fontWeight:'200'   
                                  }}>{item.nick}</Text>
                                  </View>
                                 
                               
                               </View>
                          </TouchableOpacity>   
                           
                          )
                        
                      
                    
                        

                       }
                       
                     )
                    }
             
             </View>

             </ScrollView>
 

    </View>
   
   );
}
}




const styles = StyleSheet.create({

 

});