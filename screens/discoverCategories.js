import React, { Component } from 'react';
import { AppRegistry, View,Text ,StyleSheet,ScrollView,Image,ImageBackground,url, TouchableOpacity} from 'react-native';

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
                  marginTop:'41%',
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

    alert("Se guardaron los Cambios");
}



  render() {

    return (
        <View style={{flex: 1}}>
              <View  style={{flex: 10}}>
              <ScrollView contentContainerStyle={styles.contentContainer}>
    

    <View style={styles.social}>
   
 
  
   
   <View style={{borderRadius:10,width:'100%', height:'100%'}} >
   
   <TouchableOpacity 
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
     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
   
   </View>
   

     <Text >
     {" "} {" "} </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
     
      <TouchableOpacity 
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
     style={{borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
    
     </View>

     <Text >
     {" "} {" "}  
           </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
     
      <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
      Celebrity
      </Text>
   <Image source={this.state.source3} 
   style={{borderRadius:10,width: '100%', height: '100%'}}
   />
   </TouchableOpacity>  
     
     </View>
  </View> 
  <View style={styles.social}>
    
  <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
   
      
      <TouchableOpacity 
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
     style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
   
   </View>
   

     <Text >
     {" "} {" "} </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
     
      <TouchableOpacity 
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
     style={{borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
     
     </View>

     <Text >
     {" "} {" "}  
           </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
     
      <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
      Craft and DYI
      </Text>
   <Image source={this.state.source6} 
     style={{borderRadius:10,width: '100%', height: '100%'}}
     />
   </TouchableOpacity>  
     
     </View>

</View>
     <View style={styles.social}>  

        <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
          
        <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
           Manga
        </Text>
   <Image source={this.state.source7} 
          style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
            />
   </TouchableOpacity>  
        
      </View>
   

     <Text >
     {" "} {" "} </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
    
      <TouchableOpacity 
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
    <Text style={styles.textoprueba2}>
      Motor
      </Text>
   <Image source={this.state.source8} 
     style={{borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
     
     </View>

     <Text >
     {" "} {" "}  
           </Text>
     <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
     
      <TouchableOpacity 
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
   <Text style={styles.textoprueba3}>
      Nature,{'\n'}Outdoors and {'\n'}Oets
      </Text>
   <Image source={this.state.source9} 
     style={{borderRadius:10,width: '100%', height: '100%'}}
     />
   </TouchableOpacity>  
     
     </View>
  </View>
 
  <View style={styles.social}>
    
    <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
    
        <TouchableOpacity 
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
    <Text style={styles.textoprueba2}>
        Podcaster
        </Text>
   <Image source={this.state.source10} 
       style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
        />
   </TouchableOpacity>  
     
     </View>
     
  
       <Text >
       {" "} {" "} </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
       
        <TouchableOpacity 
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
       style={{borderRadius:10,width: '100%', height: '100%'}}
        />
   </TouchableOpacity>  
       
       </View>

       <Text >
       {" "} {" "}  
             </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
       
        <TouchableOpacity 
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
       style={{borderRadius:10,width: '100%', height: '100%'}}
       />
   </TouchableOpacity>  
       
       </View>

</View>
       <View style={styles.social}>  

          <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
            
          <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
             Sports
          </Text>
   <Image source={this.state.source13} 
            style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
              />
   </TouchableOpacity>  
          
        </View>
     
  
       <Text >
       {" "} {" "} </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
       
        <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
        Streamer
        </Text>
   <Image source={this.state.source14} 
       style={{borderRadius:10,width: '100%', height: '100%'}}
        />
   </TouchableOpacity>  
       
       </View>

       <Text >
       {" "} {" "}  
             </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
       
        <TouchableOpacity 
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
       style={{borderRadius:10,width: '100%', height: '100%'}}
       />
   </TouchableOpacity>  
      
       </View>
    </View>

    <View style={styles.social}>  

       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
         
         <TouchableOpacity 
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
            style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
      />
   </TouchableOpacity>  
      
     </View>


             <Text >
                   {" "} {" "} </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
             
             <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
                  Youtuber
             </Text>
   <Image source={this.state.source17} 
             style={{borderRadius:10,width: '100%', height: '100%'}}
             />
   </TouchableOpacity>  
       
       </View>

       <Text >
             {" "} {" "}  
          </Text>
       <View style={{borderRadius:10,width:'100%', height:'100%'}} onPress={this.onPressTitle}>
       
       <TouchableOpacity 
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
   <Text style={styles.textoprueba2}>
             Vlogger
       </Text>
    <Image source={this.state.source18} 
                   style={{borderRadius:10,width: '100%', height: '100%'}}
             />
   </TouchableOpacity>  
            
       </View>
</View>

</ScrollView>

            
             </View>
             <View  style={{flex: 1 ,}}>
              
                <View style={{flex:1,backgroundColor:'#ff5a60',padding:13,
  
                        alignItems:'center',justifyContent:'center'}}>
                          <TouchableOpacity 
                   onPress = { this.guardar.bind(this) } >
                    <Text style={{flex:1 , color:'white', 
                         fontSize:17,letterSpacing:0.41 }}>Save Changes</Text>
                         </TouchableOpacity>
                   </View>
             
             </View>
  </View>
    )

}

}
const styles = StyleSheet.create({
  fila: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: 'powderblue',
  },

  textoprueba:{
   padding:5,
   position:'absolute',
   zIndex:3,
   color:'white',
   marginTop:43,
   fontWeight:'500',
   textAlign:'left',
  },
  textoprueba2:{
      padding:5,
      position:'absolute',
      zIndex:3,
      color:'white',
      marginTop:60,
      fontWeight:'500',
      textAlign:'left', 
  },
  textoprueba3:{
      padding:5,
      position:'absolute',
      zIndex:3,
      color:'white',
      marginTop:27,
      fontWeight:'500',
      textAlign:'left', 
  },

  contieneTitulo:{
   margin:20,
   padding:20,
  },
  Titulo:{
    fontSize:34,
    marginLeft:-20,
    fontWeight:"700",
  },
  subTitulo:{
      marginTop:20,
      fontSize:17,
      marginLeft:-20,
      fontWeight:"500",
      marginBottom:-20,
  },
  //*****  scroll */
  contentContainer: {
    paddingVertical:20,
  },
  
  social:{
    
    height:104,
    width:104,
    marginLeft:15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems:'center',
    paddingTop:15,
  
   },
   imagenSocial:{
  
  },
  
  socialTextoBut:{
    borderBottomWidth: 1,
    borderBottomColor:'#e2e7ee',
  
   flexDirection:'row',
   alignItems:'center',
  // paddingBottom:10,
   paddingVertical:10,

  },
  socialTexto:{
     marginLeft:15, 
    
  },
  socialBoton:{
    marginLeft:110,
    backgroundColor: '#ff5a60',
    paddingVertical:4,
    paddingHorizontal:30,
    color:'white',
    borderRadius:27,
  },
  socialBotonBlanco:{
    marginLeft:110,
    backgroundColor: 'white',
    paddingVertical:4,
    paddingHorizontal:20,
    color:'black',
    borderRadius:27,
    borderWidth:1,
    borderColor:'black',

  },
  containerBoton:{
     backgroundColor:'red',
     width:'90%',
     padding:15,
     color:'white',
     borderRadius:27,
     textAlign:"center",
     marginTop:60,
     marginLeft:15,
     
  },


  textboton:{
    textAlign:'left',
    color:"white",
    marginTop:1,
    marginLeft:105,
    fontSize:17,
  
  }

});
