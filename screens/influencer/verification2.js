import React, { Component } from 'react';
import { Platform,
  View,Text ,TextInput,ScrollView ,Dimensions,
  StyleSheet,KeyboardAvoidingView,
  Image,TouchableOpacity} from 'react-native';

  import Checkbox from 'react-native-modest-checkbox';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Verification2 extends Component {

    static navigationOptions = {
        headerTitle:'Verify Profile',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
  
          width: '90%',
            fontWeight:'500',
                letterSpacing:0.41,
               
                fontSize:wp('4%'),
                color:'#312f3d',
            
         },
         headerRight: ( 
            <View style={{alignItems:'center',marginRight:wp('4%')}}>
              <Text style={{color:'#ff5a60'}}>{' '}</Text>
     
            </View>
            ),   
          headerTintColor: '#ff5a60',
    };


    constructor(props){

        super(props);
      
         this.state={
       
            isChecked:true,
            value:'uno',
            isChecked2:false,
            value2:'dos',
            isChecked3:true,
            value3:'tres',
            isChecked4:false,
            value4:'cuatro',
            isChecked5:true,
            value5:'cinco',
            isChecked6:false,
            value5:'cinco',
        }
      
      }// fin de consttructor

  render() {
     //alert(this.state.textoLive)

     let screenHeight=Dimensions.get('window').height;
    
     


    return (

   

      <View style={{flex:1}}>
             <View style={{flex:9}}>
              <ScrollView showsVerticalScrollIndicator={false}> 
  
               <View style={{marginTop:hp('1.5%'),marginHorizontal:wp('4%')}}>
                    <Text  style={{
                               color:'black',
                               fontSize:wp('4.7%'),
                               fontWeight:'bold',
                               marginBottom:hp('1%')
                            }}>
                    Where are you based?
                    </Text>

                     {/* check box vertical */}  
  
  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked:true,
        isChecked2:false,
       })
     
   }}
   checked={this.state.isChecked}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'center'}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%')}}>I'm a USA person or corporation</Text>
   </View>
    
  </View>

  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked2:true,
        isChecked:false,
       })
     
   }}
   checked={this.state.isChecked2}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value2}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'center'}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%')}}>I'm a non-USA person or corporation</Text>
   </View>
    
  </View>
  </View>
       

{/*segundo bloque */}
              <View style={{marginTop:hp('2%'),marginHorizontal:wp('4%')}}>
                    <Text  style={{
                               color:'black',
                               fontSize:wp('4.7%'),
                               fontWeight:'bold',
                               marginBottom:hp('1%')
                            }}>
                    What are you?
                    </Text>

                     {/* check box vertical */}  
  
  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked3:true,
        isChecked4:false,
       })
     
   }}
   checked={this.state.isChecked3}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value3}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'center'}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%')}}>I'am an individual</Text>
   </View>
    
  </View>

  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked4:true,
        isChecked3:false,
       })
     
   }}
   checked={this.state.isChecked4}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value4}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'center'}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%')}}>I'm a corporation or represent a corporation</Text>
   </View>
    
  </View>
  </View>

{/*tercer bloque */}
              <View style={{marginTop:hp('2%'),marginHorizontal:wp('4%')}}>
                    <Text  style={{
                               color:'black',
                               fontSize:wp('4.7%'),
                               fontWeight:'bold',
                               marginBottom:hp('1%')
                            }}>
                    How would you like to get paid
                    </Text>

                     {/* check box vertical */}  
  
  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked5:true,
        isChecked6:false,
       })
     
   }}
   checked={this.state.isChecked5}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value5}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'flex-end',paddingTop:hp('1%')}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%'),fontWeight:'300'}}>Stripe Direct Deposit</Text>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('3.5%'),marginTop:hp('1%'),color:'#312f3d'}}>Fee is $0.25 per pauyot</Text>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('3.5%'),color:'#312f3d'}}>Manage Stripe Direct Deposit details</Text>
   </View>
    
  </View>

  <View style={{flexDirection: 'row'}}>
  <View style={{flex:0.8,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     
       this.setState({
         isChecked6:true,
        isChecked5:false,
       })
     
   }}
   checked={this.state.isChecked6}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value6}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>

   <View style={{flex:9.2,justifyContent:'flex-end',paddingTop:hp('1%')}}>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('4%'),fontWeight:'300' }}>Paypal</Text>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('3.5%'),color:'#312f3d',marginTop:hp('1%')}}>Fee is 1% of the trasferred amount,with a</Text>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('3.5%'),color:'#312f3d'}}>minimun of $0.25 and a maximum of $20</Text>
   <Text style={{marginLeft:wp('5%'),fontSize:wp('3.5%'),color:'#312f3d'}}>Manage Paypal details</Text>
   </View>
    
  </View>
  </View>

{/*   cuarto bloque*/}
   <View style={{marginTop:hp('2%'),marginHorizontal:wp('4%'),marginBottom:hp('4%')}}>
                    <Text  style={{
                               color:'black',
                               fontSize:wp('4.7%'),
                               fontWeight:'bold',
                               marginBottom:hp('1%')
                            }}>
                    TAX Information
                    </Text>
                    <View>
                        <Text style={{
                             color:'#312f3d',
                             fontSize:wp('3.5%'),
                            
                        }}>
                         Current tax year gross earnings $35{'\n'}gotmy requires W-9 forms for US-based influencers{'\n'}
                         who have earned above a certain amount of money{'\n'}from gotmy in a given tax year.This amount is $600 for{'\n'}
                         influencers who reside in Masschusetts or Vermont, and $20,000 elsewhere.{'\n\n'}Fill Out W-9 form{'\n'}
                         <Text style={{color:'#ff5a60'}}>https://www.irs.gov/pub/irs-pdf/fw9.pdf</Text>
                        </Text>
                    </View>

 </View>


               </ScrollView>

             </View>
             <View style={{flex:1 ,alignItems:'center'}}>
                   <TouchableOpacity style={{
                        backgroundColor: '#ff5a60',
                        width:'90%',
                        paddingVertical:13,
                        borderRadius:27,
                        alignItems:'center',
                        marginBottom:40,
                   }}
                     onPress={() => this.props.navigation.navigate("")}
                    > 
                      <Text style={{color:'white',fontSize:wp('4.5%')}}>
                          Continue </Text>      
                    </TouchableOpacity> 
             </View>
              
     
         </View>

        


      
 

   

     
    );
  }
 
}





const styles = StyleSheet.create({
  

});