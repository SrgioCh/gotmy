import React, { Component } from 'react';
import {Platform,Alert,Dimensions,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,TouchableOpacity,
  Image} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import SearchUsers from "./searchUsers"
import SearchEvents from "./searchevents";
import SearchContent from "./searchcontent";
 

numero=1;


export default class SearchOptions extends Component {
  static navigationOptions = {
    header: null ,
};

screenwidth=Dimensions.get('window').width;
screenheigth=Dimensions.get('window').height;

constructor(props) {
  super(props)


  this.state = { 

    tytexto:'',
    menu1:styles.menuelegido,
    textoUno:styles.textoElegido,
   
    menu2:styles.menunormal,
    textoDos:styles.textoNormal,
    

    menu3:styles.menunormal,
    textoTres:styles.textoNormal,
     
  }



}
/*
componentWillMount(){
    pagi = this.props.navigation.getParam('pagina');
    this.cambiarVista(pagi)
}

*/



recogeDeHijo(dato){
    
 this.props.navigation.navigate(dato)

 }




cambiarVista=(num)=>{

    if(num==1){
      this.refs.scrol.scrollTo({x:0, y:0, animated: true})  
        this.setState({
            menu1:styles.menuelegido,
            textoUno:styles.textoElegido,
             

            menu2:styles.menunormal,
            textoDos:styles.textoNormal,
            
  
            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
             
        })
    }else if(num==2){
      this.refs.scrol.scrollTo({x:this.screenwidth, y:0, animated: true})
        this.setState({
           
            menu1:styles.menunormal,
            textoUno:styles.textoNormal,
            

            menu2:styles.menuelegido,
            textoDos:styles.textoElegido,
            

            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
            
        })
    }else if(num==3){
      this.refs.scrol.scrollTo({x:this.screenwidth*2, y:0, animated: true})
        this.setState({
           
            menu1:styles.menunormal,
            textoUno:styles.textoNormal,
         

            menu2:styles.menunormal,
            textoDos:styles.textoNormal,
           

            menu3:styles.menuelegido,
            textoTres:styles.textoElegido,
            
        })
    }

}

 

transicion=(num)=>{

  // alert(num)
  if(num==1){
    
      this.setState({
          menu1:styles.menuelegido,
          textoUno:styles.textoElegido,
           menu2:styles.menunormal,
          textoDos:styles.textoNormal,
          menu3:styles.menunormal,
          textoTres:styles.textoNormal,
           
      })
  }else if(num==2){
     
      this.setState({
           menu1:styles.menunormal,
           textoUno:styles.textoNormal,
           menu2:styles.menuelegido,
           textoDos:styles.textoElegido,
            menu3:styles.menunormal,
            textoTres:styles.textoNormal,
          
      })
  }else if(num==3){
    
      this.setState({
         
          menu1:styles.menunormal,
          textoUno:styles.textoNormal,
       

          menu2:styles.menunormal,
          textoDos:styles.textoNormal,
         

          menu3:styles.menuelegido,
          textoTres:styles.textoElegido,
          
      })
  }

}



  render() {

    //datos que vendran desde discover

   
 

     
    return (
       <View style={{flex:1}}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex:2,marginTop:hp('3%')}}>
                
    
          {/* BUSCADOR*/}
              <View style={{ marginHorizontal:'4%',paddingVertical:15,flexDirection:'row' }}>
                <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
                      alignItems:'center',marginRight:5,borderRadius:10}}>
                      <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/icons_genGMI/lupa.jpg')} 
                          style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                      </View>
                    <TextInput
                        style={{
                    
                       height:42,
                       width:200,
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
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

        
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}
                              >
               <Text  style={{color:'#ff5a60',fontSize:16}}>
                 Cancel
              </Text>
               </TouchableOpacity>
              </View>
          
            </View>
             {/*  fin del buscador*/}
                
 {/* ----------------MENU ----------------*/}
 
<View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginTop:14}}>

        <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu1]}>
        
        <TouchableOpacity
                  onPress={() => this.cambiarVista(1)}
                 >
          <Text  style={this.state.textoUno}>
         Users
         </Text>
        </TouchableOpacity>
          </View>


         <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
           <TouchableOpacity
                  onPress={() => this.cambiarVista(2)}
                 >
               <Text  style={[this.state.textoDos,{marginLeft:3}]}>
               Live Eventes
              </Text>
            </TouchableOpacity>
         </View> 

             <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
              <TouchableOpacity
              onPress={() => this.cambiarVista(3)}
             >
        
        <Text  style={[this.state.textoTres,{marginLeft:10}]}>
               Content
                 </Text>
              </TouchableOpacity>
             </View>

      </View>

     </View> 
     </TouchableWithoutFeedback>
     
     {/*  FIN DE MENU HACIA ARRIBA */}
          
        
          <View style={{flex:8}}>
  
          <ScrollView  ref='scrol'
               horizontal={true} 
                pagingEnabled={true}
                onScroll={
                  //411.42
                  (event)=>{
                  pos=event.nativeEvent.contentOffset.x;
                 if(pos==0){
                      this.transicion(1);
                     
                    }else if(pos>=this.screenwidth-1 && pos<(this.screenwidth*2)-10){
                      this.transicion(2);
                    
                    }else if(pos>=(this.screenwidth*2)-10){
                      this.transicion(3);
                    
                    }
                  }
                }
               
              
                >
     
               <View  style={{
                   flex:1,
                   width:this.screenwidth,

                 }}>
                  <SearchUsers enviaAPadre={this.recogeDeHijo.bind(this)} /> 
 
 
               </View>
               <View  style={{
                
                   flex:1,
                   width:this.screenwidth,
                  

                 }}>
                <SearchEvents enviaAPadre={this.recogeDeHijo.bind(this)} /> 
               </View>
               <View  style={{
                  
                   flex:1,
                   width:this.screenwidth,
                  

                 }}>
              <SearchContent/>
               </View>

            </ScrollView>


 

          </View>
         
   </View>
     
    );
  }
 
}





const styles = StyleSheet.create({
 
menuelegido:{
  borderBottomWidth:1,
  borderBottomColor:'#ff5a60',
},

menunormal:{
  borderBottomWidth:1,
  borderBottomColor:'#e1e3e6',
},
textoElegido:{
    color:'#312f3d', fontSize:17,paddingVertical:14  
   },
   textoNormal:{
    color:'#697181',fontSize:17,paddingVertical:14  
   },


//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotone:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 18:17,

  
},
Textsinmarcar:{
  color:'white',
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:7,
  paddingHorizontal: Platform.OS === 'ios' ? 3:4,
  borderWidth:1,
  borderColor: '#312f3d',
}


});