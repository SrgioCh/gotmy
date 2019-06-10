import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import Checkbox from 'react-native-modest-checkbox';
  import Button from 'react-native-button'; 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class RequestPri1 extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title:'Request Private Meeting',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '80%',
            fontWeight:'500',
                letterSpacing:0.41,
                height:Platform.OS === 'ios' ? 180:120,
                fontSize:16,
                color:'#312f3d',
                marginTop:  Platform.OS === 'ios' ? '63%':'43%',
    
        },
        headerRight: (<View style={{marginRight: 16}}>
        <TouchableOpacity onPress={() => navigation.navigate("profile1")} >
           <Text style={{color:'red'}}>Cancel</Text>
           </TouchableOpacity>
          </View>),  
          headerTintColor: '#ff5a60',
    };
  }

    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
            
             isChecked:false,
             value:'uno',
             isChecked2:false,
             value2:'uno',
             isChecked3:false,
             value2:'uno',
             isChecked4:false,
             value2:'uno',
             isChecked5:true,
             value2:'uno',
                   
             isCheckedA:false,
             valueA:'uno',
             isCheckedB:false,
             valueB:'uno',
             isCheckedC:false,
             valueC:'uno',

                 tytexto: 'surprise a friend',

          }
      
      }// fin de consttructor


 
presiona=()=>{

  let elegidos=[];
  if(this.state.isChecked===true){
    elegidos.push(this.state.value);
  }
  

  if(this.state.isChecked===true)
  {
    alert("se agregaron :  "+elegidos)
  }else{
    alert('no marcaste nada');
  }

}



  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){//1080 * 1920  xxhdpi
      topBut=40
      butBo=10
    }else if(screenHeight<=605){ //mopvil de  david
      topBut='5%'
      butBo='5%'
  } else if(screenHeight<=678){ // mi movil
    topBut='5%'
    butBo='5%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='5%'
    butBo='5%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='2.5%'
    butBo='5%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='5%'
    butBo='5%'
   }else{
    topBut='5%'
    butBo='5%'
   }
  

    return (
      <View style={{flexDirection:'column'}}>
           
      <ScrollView>

      <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:8}}>
            <View style={{flex:2}}>
            <Image source={require('../../assets/influencers/uno.png')} 
            style={{ width:50,height:50,borderRadius:30}}
            />   
            </View>

          <View style={{flex:8,flexDirection:'column',paddingLeft:2 ,
                }}>
               <View>

               <Text style={{fontSize:17,color:'#312f3d'
                   ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
               </View>
              
               <View  style={styles.estrellasTrending}>
                              <Image source={require('../../assets/Red.png')} 
                              style={{ width:11,height:11,}}
                              />
                             <Image source={require('../../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                              style={{ width:11,height:11,marginLeft:2}}
                             />
                          <Image source={require('../../assets/Grey.png')} 
                           style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                           />
                       </View>
          </View>
     </View>
     
     {/* TITULO */}  
   <View style={{marginHorizontal:16}}>
          <Text style={{fontSize:22,color:'#312f3d',marginBottom:8,
            fontWeight: 'bold',}}>Choose type private meeting</Text>
    </View>


  <View style={{flexDirection: 'row',marginHorizontal:16}}>
       <View style={{flex:8,flexDirection: 'column'}}>
           <Text style={{fontSize:16,color:'#312f3d',marginTop:5,marginBottom: 10,
            fontWeight: '500'}}>Just For Fun</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
           I would like to have a good time with you
           </Text>
       </View>

       <View style={{flex:0.8,backgroundColor:'white',paddingTop:10}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isChecked==true){
       this.setState({
         isChecked:false,
         
       })
       
       
     }else{
       this.setState({
         isChecked:true,
      
       })
     }
   }}
   checked={this.state.isChecked}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.value1}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>
  </View>

  {/* check box vertical */}  
  
  <View style={{flexDirection: 'row',marginHorizontal:16}}>
  <View style={{flex:0.9,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isChecked2==true){
       this.setState({
         isChecked2:false,
         
       })
       
       
     }else{
       this.setState({
         isChecked2:true,
      
       })
     }
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

   <View style={{flex:9,paddingVertical:10}}>
   <Text style={{marginLeft:20,marginTop:5}}>Party Appearance</Text>
   </View>
    
  </View>
    
{/* fin */}
<View style={{flexDirection: 'row',marginHorizontal:16}}>
  <View style={{flex:0.9,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isChecked3==true){
       this.setState({
         isChecked3:false,
         
       })
       
       
     }else{
       this.setState({
         isChecked3:true,
      
       })
     }
   }}
   checked={this.state.isChecked3}
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

   <View style={{flex:9,paddingVertical:10}}>
   <Text style={{marginLeft:20,marginTop:5}}>Playing Games</Text>
   </View>
    
  </View>
    
{/* fin */}
<View style={{flexDirection: 'row',marginHorizontal:16}}>
  <View style={{flex:0.9,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isChecked4==true){
       this.setState({
         isChecked4:false,
         
       })
       
       
     }else{
       this.setState({
         isChecked4:true,
      
       })
     }
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

   <View style={{flex:9,paddingVertical:10}}>
   <Text style={{marginLeft:20,marginTop:5}}>Hangout</Text>
   </View>
    
  </View>
    
{/* fin */}
<View style={{flexDirection: 'row',marginHorizontal:16}}>
  <View style={{flex:0.9,backgroundColor:'white',paddingVertical:5}}>
       <Checkbox
       label=' '
       onChange={() => {
        if(this.state.isChecked5==true){
       this.setState({
         isChecked5:false,
         
       })
       
       
     }else{
       this.setState({
         isChecked5:true,
      
       })
     }
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

   <View style={{flex:9,paddingVertical:10}}>
   <Text style={{marginLeft:20,marginTop:5}}>Other reason</Text>
   </View>
    
  </View>
    
{/* fin */}
<View style={{marginHorizontal:40,padding:10,borderRadius:10,
              borderWidth:1,     borderColor: '#e2e7ee',}}>
<TextInput
                        style={{
                    
                       height:42,
                       width:200,
                       borderRadius:10,
                    
                    } }

                    placeholder="Surprise a friend..."
                    editable={true} // con false , no podremos escribir nada
                   
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
   {/*   fin*/}

   <View style={{flexDirection: 'row',marginHorizontal:16,marginTop:10}}>
       <View style={{flex:8,flexDirection: 'column'}}>
           <Text style={{fontSize:16,color:'#312f3d',marginTop:5,marginBottom: 10,
            fontWeight: '500'}}>Business</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
           I have a business proposal for you
           </Text>
       </View>

       <View style={{flex:0.8,backgroundColor:'white',paddingTop:10}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isCheckedA==true){
       this.setState({
         isCheckedA:false,
         
       })
       
       
     }else{
       this.setState({
         isCheckedA:true,
      
       })
     }
   }}
   checked={this.state.isCheckedA}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.valueA}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>
  </View>

  <View style={{flexDirection: 'row',marginHorizontal:16,marginTop:10}}>
       <View style={{flex:8,flexDirection: 'column'}}>
           <Text style={{fontSize:16,color:'#312f3d',marginTop:5,marginBottom: 10,
            fontWeight: '500'}}>Education</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
           I would like to learn from you
           </Text>
       </View>

       <View style={{flex:0.8,backgroundColor:'white',paddingTop:10}}>
       <Checkbox
        label=' '
  
   onChange={() => {
     if(this.state.isCheckedB==true){
       this.setState({
         isCheckedB:false,
         
       })
       
       
     }else{
       this.setState({
         isCheckedB:true,
      
       })
     }
   }}
   checked={this.state.isCheckedB}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.valueB}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>
  </View>




  <View style={{flexDirection: 'row',marginHorizontal:16,marginTop:10}}>
       <View style={{flex:8,flexDirection: 'column'}}>
           <Text style={{fontSize:16,color:'#312f3d',marginTop:5,marginBottom: 10,
            fontWeight: '500'}}>Other reason</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
            I have a special request
           </Text>
       </View>

       <View style={{flex:0.8,backgroundColor:'white',paddingTop:10}}>
       <Checkbox
        
        label=' '
   onChange={() => {
     if(this.state.isCheckedC==true){
       this.setState({
         isCheckedC:false,
         
       })
       
       
     }else{
       this.setState({
         isCheckedC:true,
      
       })
     }
   }}
   checked={this.state.isCheckedC}
   containerStyle={{
     backgroundColor:'white',
    
   }}
   checkboxStyle={{
    paddingRight:-10,
     backgroundColor:'white',
    
   }}

   value={this.state.valueC}
   checkedImage={require('../../assets/icons_genGMI/check.png')}
   uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

             />
       </View>
  </View>

{/* FIN */}

        <View style={{marginTop:hp(topBut) ,marginBottom:hp(butBo),alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
          onPress={() => this.props.navigation.navigate("requestPri2")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
         Continue </Text>      
      </TouchableOpacity> 
    </View>



     </ScrollView>
 </View>

         

     
    );
  }
 
}





const styles = StyleSheet.create({
  
  estrellasTrending:{
    paddingTop:7,
   marginBottom:20,
    flexDirection:'row',
  
  },
  containerbutton:{
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    alignItems:'center',
    marginBottom:40,

  },



});