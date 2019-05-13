import React, { Component } from 'react';
import { AppRegistry,Platform, View,Text ,Dimensions,
    StyleSheet,ScrollView,Image,ImageBackground,url, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class DiscoverCategories  extends Component {

    static navigationOptions = ({ navigation }) => {
        return {

        title: "Choose favorite Categories",
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
              fontWeight:'500',
                  letterSpacing:0.41,
                  height:120,
                  fontSize:16,
                  color:'#312f3d',
                  marginTop:Platform.OS === 'ios' ? '45%':'41%',
                  marginLeft:-2,
    
          },

          headerRight: (<View>
               <TouchableOpacity onPress={() => navigation.navigate("discover")} >
            <Text style={{
                color:'#ff5a60',marginRight:15,fontSize:16
            }}>Cancel</Text>
            </TouchableOpacity>
            </View>),  
            headerTintColor: '#ff5a60',
    };
    
    }

  constructor(props) {
    super(props)
    this.state = { 
        source1: require('../assets/art-culture.jpg'),
        source2: require('../assets/business.jpg'),
        source3: require('../assets/celebrity.jpg'),
        source4: require('../assets/education.jpg'),
        source5: require('../assets/cooking.jpg'),
        source6: require('../assets/carft.jpg'),
        source7: require('../assets/manga.jpg'),
        source8: require('../assets/motor.jpg'),
        source9: require('../assets/nature.jpg'),
        source10: require('../assets/podcast.jpg'),
        source11: require('../assets/religion.jpg'),
        source12: require('../assets/tecnologia.jpg'),
        source13: require('../assets/sports.jpg'),
        source14: require('../assets/streamer.jpg'),
        source15: require('../assets/tiktok.jpg'),
        source16: require('../assets/fashion.jpg'),
        source17: require('../assets/youtuber.jpg'),
        source18: require('../assets/vblogger.jpg'),
    }
}

guardar(){

    
}



  render() {

    let screenHeight=Dimensions.get('window').height;
    
   
   

   if(screenHeight<=592){//1080 * 1920  xxhdpi
  
  }else if(screenHeight<=605){ //mopvil de  david


} else if(screenHeight<=678){ // mi movil
  
 }else if(screenHeight<=685){//1080 *1920 420dpi  --- 1440 *2560 :560 dpi
   
 }else if(screenHeight<=775){
   
 }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  
 }else{
  
 }

    return (
        <View style={{flex: 1}}>
     <View  style={{flex: 9,marginHorizontal:'4%',}}>
<ScrollView contentContainerStyle={styles.contentContainer}>
    
     <View style={styles.filas}>
     <TouchableOpacity 
     style={{borderRadius:10,flex:1,height:hp('15%')}}
       onPress = { () => {
     if (this.state.source1 == require("../assets/art-culture.jpg") )
     {
         this.setState({
             source1: require("../assets/20.png")
         })
     }
     else{
         this.setState({
             source1: require("../assets/art-culture.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Art and {'\n'}Culture
      </Text>
   <Image source={this.state.source1} 
     style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
      />
   </TouchableOpacity>  
   
 
      <TouchableOpacity 
        style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
   onPress = { () => {
     if (this.state.source2 == require("../assets/business.jpg") )
     {
         this.setState({
             source2: require("../assets/1.png")
         })
     }
     else{
         this.setState({
             source2: require("../assets/business.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Business and{'\n'}Profesional
      </Text>
    <Image source={this.state.source2} 
      style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
      />
   </TouchableOpacity>  
    
  <TouchableOpacity 
  style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source3 == require("../assets/celebrity.jpg") )
     {
         this.setState({
             source3: require("../assets/18.png")
         })
     }
     else{
         this.setState({
             source3: require("../assets/celebrity.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Celebrity
      </Text>
   <Image source={this.state.source3} 
    style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
   />
   </TouchableOpacity>  
</View>
{/*   fin de primera  fila */}
<View style={styles.filas}>

 <TouchableOpacity 
 style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source4 == require("../assets/education.jpg") )
     {
         this.setState({
             source4: require("../assets/16.png")
         })
     }
     else{
         this.setState({
             source4: require("../assets/education.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Classes and{'\n'}Education
      </Text>
   <Image source={this.state.source4} 
     style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
      />
   </TouchableOpacity>  
   

   <TouchableOpacity 
    style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
   onPress = { () => {
     if (this.state.source5 == require("../assets/cooking.jpg") )
     {
         this.setState({
             source5: require("../assets/17.png")
         })
     }
     else{
         this.setState({
             source5: require("../assets/cooking.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Cooking and{'\n'}Foot
      </Text>
   <Image source={this.state.source5} 
     style={{borderRadius:10,width:'100%', height:'100%'}}
      />
   </TouchableOpacity>  


  <TouchableOpacity 
  style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source6 == require("../assets/carft.jpg") )
     {
         this.setState({
             source6: require("../assets/19.png")
         })
     }
     else{
         this.setState({
             source6: require("../assets/carft.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
      Craft and DYI
      </Text>
   <Image source={this.state.source6} 
     style={{borderRadius:10,width:'100%', height:'100%'}}
     />
   </TouchableOpacity>      
</View>
{/*   fin fila */}

<View style={styles.filas}>
<TouchableOpacity 
  style={{borderRadius:10,flex:1,height:hp('15%')}}
     onPress = { () => {
       if (this.state.source7 == require("../assets/manga.jpg") )
       {
           this.setState({
               source7: require("../assets/13.png")
           })
       }
       else{
           this.setState({
               source7: require("../assets/manga.jpg")
           })
       }
   }}
     >
     <Text style={styles.textoprueba}>
             Manga
          </Text>
     <Image source={this.state.source7} 
            style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
              />
     </TouchableOpacity>  
          

        <TouchableOpacity 
      style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}    
     onPress = { () => {
       if (this.state.source8 == require("../assets/motor.jpg") )
       {
           this.setState({
               source8: require("../assets/12.png")
           })
       }
       else{
           this.setState({
               source8: require("../assets/motor.jpg")
           })
       }
   }}
     >
      <Text style={styles.textoprueba}>
        Motor
        </Text>
     <Image source={this.state.source8} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
        />
     </TouchableOpacity>  
       
    <TouchableOpacity 
      style={{borderRadius:10,flex:1,height:hp('15%')}}
     onPress = { () => {
       if (this.state.source9 == require("../assets/nature.jpg") )
       {
           this.setState({
               source9: require("../assets/11.png")
           })
       }
       else{
           this.setState({
               source9: require("../assets/nature.jpg")
           })
       }
   }}
     >
     <Text style={styles.textoprueba}>
        Nature,{'\n'}Outdoors and {'\n'}Oets
        </Text>
     <Image source={this.state.source9} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
       />
     </TouchableOpacity>  
 
</View>
{/*   fin fila */}


<View style={styles.filas}>
<TouchableOpacity 
 style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source10 == require("../assets/podcast.jpg") )
     {
         this.setState({
             source10: require("../assets/10.png")
         })
     }
     else{
         this.setState({
             source10: require("../assets/podcast.jpg")
         })
     }
 }}
   >
    <Text style={styles.textoprueba}>
        Podcaster
        </Text>
   <Image source={this.state.source10} 
       style={{ zIndex:2,borderRadius:10,width:'100%' ,height:'100%'}}
        />
   </TouchableOpacity>  
 
  <TouchableOpacity 
   style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
   onPress = { () => {
     if (this.state.source11 == require("../assets/religion.jpg") )
     {
         this.setState({
             source11: require("../assets/9.png")
         })
     }
     else{
         this.setState({
             source11: require("../assets/religion.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
        Religion and{'\n'}Beliefs
        </Text>
   <Image source={this.state.source11} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
        />
   </TouchableOpacity>  
       
  <TouchableOpacity 
   style={{borderRadius:10,flex:1,height:hp('15%') }}
   onPress = { () => {
     if (this.state.source12 == require("../assets/tecnologia.jpg") )
     {
         this.setState({
             source12: require("../assets/5.png")
         })
     }
     else{
         this.setState({
             source12: require("../assets/tecnologia.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
        Science and{'\n'}Technology
        </Text>
   <Image source={this.state.source12} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
       />
   </TouchableOpacity>        
</View>
{/*   fin fila */}

<View style={styles.filas}>
 <TouchableOpacity 
  style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source13 == require("../assets/sports.jpg") )
     {
         this.setState({
             source13: require("../assets/7.png")
         })
     }
     else{
         this.setState({
             source13: require("../assets/sports.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
             Sports
          </Text>
   <Image source={this.state.source13} 
            style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
              />
   </TouchableOpacity>  
     <TouchableOpacity 
      style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
   onPress = { () => {
     if (this.state.source14 == require("../assets/streamer.jpg") )
     {
         this.setState({
             source14: require("../assets/6.png")
         })
     }
     else{
         this.setState({
             source14: require("../assets/streamer.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
        Streamer
        </Text>
   <Image source={this.state.source14} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
        />
   </TouchableOpacity> 

  <TouchableOpacity 
   style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source15 == require("../assets/tiktok.jpg") )
     {
         this.setState({
             source15: require("../assets/4.png")
         })
     }
     else{
         this.setState({
             source15: require("../assets/tiktok.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
        Tik Tok{'\n'}influencer
        </Text>
    <Image source={this.state.source15} 
       style={{borderRadius:10,width:'100%', height:'100%'}}
       />
   </TouchableOpacity>  
      

</View>
{/*   fin fila */}



<View style={[styles.filas,{marginBottom:hp('2%')}]}>
 <TouchableOpacity 
  style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source16 == require("../assets/fashion.jpg") )
     {
         this.setState({
             source16: require("../assets/15.png")
         })
     }
     else{
         this.setState({
             source16: require("../assets/fashion.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
            Fashion and{'\n'}Style
         </Text>
   <Image source={this.state.source16} 
            style={{ zIndex:2,borderRadius:10,width:'100%', height:'100%'}}
      />
   </TouchableOpacity>  
      
   <TouchableOpacity 
    style={{borderRadius:10,flex:1,height:hp('15%'),marginHorizontal:hp('1.5%')}}
   onPress = { () => {
     if (this.state.source17 == require("../assets/youtuber.jpg") )
     {
         this.setState({
             source17: require("../assets/2.png")
         })
     }
     else{
         this.setState({
             source17: require("../assets/youtuber.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
                  Youtuber
             </Text>
   <Image source={this.state.source17} 
             style={{borderRadius:10,width:'100%', height:'100%'}}
             />
   </TouchableOpacity> 

      <TouchableOpacity 
       style={{borderRadius:10,flex:1,height:hp('15%')}}
   onPress = { () => {
     if (this.state.source18 == require("../assets/vblogger.jpg") )
     {
         this.setState({
             source18: require("../assets/3.png")
         })
     }
     else{
         this.setState({
             source18: require("../assets/vblogger.jpg")
         })
     }
 }}
   >
   <Text style={styles.textoprueba}>
             Vlogger
       </Text>
    <Image source={this.state.source18} 
                   style={{borderRadius:10,width:'100%', height:'100%'}}
             />
   </TouchableOpacity>  
</View>
{/*   fin fila */}
 
</ScrollView>

            
             </View>
             <View  style={{flex: 1 ,}}>
             <TouchableOpacity 
             style={{flex:1,backgroundColor:'#ff5a60',
          alignItems:'center',justifyContent:'center'}}
                   onPress = { this.guardar.bind(this) } >
              
                        
                    <Text style={{color:'white', 
                         fontSize:wp('4%'),letterSpacing:0.41 }}>Save Changes</Text>
                         
                   
                   </TouchableOpacity>
             </View>
  </View>
    )

}

}
const styles = StyleSheet.create({
  filas: {
    flex: 1, 
    flexDirection: 'row',
    marginTop:hp('1.5%'),
  },
  
  textoprueba:{
    position:'absolute',
    zIndex:3,
    color:'white',
    fontWeight:'500',
    textAlign:'left',
    bottom:hp('2%'),
    left:wp('2%')
   },

     
  
   
});
