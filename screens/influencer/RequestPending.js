import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import  RequestAcepted from "./RequestAcepted"
import  RequestRejected from "./RequestRejected"

import Cabezera from "./component/cabezera"

export default class RequestPending extends Component {


  static navigationOptions = {
    header: null ,
};

rPending=(<ScrollView>
     
  {/* ----------------------------------------------------------- */}
  
  <View style={{flex:1,marginHorizontal:16,flexDirection:'row',
            marginTop:10,marginBottom:10,
                }}>
  
    <View style={{flex:2}}>
          <Image source={require(`../../assets/influencers/spffiele.png`)} 
                          style={{ width:50,height:50,
                                    borderRadius:30}}
                          />
    </View>
  
    <View style={{flex:8,flexDirection:'column',
                   paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
          <View  style={{flexDirection:'row'}}>
  
  
           <View style={{
                    width:15,
                    height:15, 
                    marginRight:5,
                    marginTop:3,
                     }}>
               <Image
                   source={require('../../assets/icons_genGMI/relojMesage.png')}
                    style={{
                    width:'100%',
                    height:'100%',
                   }}
                 />
           </View>
              <Text style={{flex:6,fontSize:14,
                        color:'#312f3d',fontWeight:'500'
              
                             }}>Birthday surprise</Text> 
              <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                  color:'#677183'}}>2 day ago</Text> 
          </View>



          <View style={{flexDirection:'row',paddingVertical:3}}>
             <Text style={{flex:7,fontSize:14,
                        color:'#312f3d'}}>Sophia Lindsey</Text>
            
            <TouchableOpacity
              
              onPress={() => this.props.navigation.navigate("RequestDetail")}
               > 
            <View style={{alignItems:'flex-end'}}>
             <Image
                source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                style={{
                    width:25,
                    height:25,
                    flex:1
                }}
              />
  
            </View>
            </TouchableOpacity>
          </View>
          <View style={{}}>
              <Text style={{
                  fontSize:12,
                  color:'#677183'
              }}>Can you help us surprise our friend?</Text>
         </View>
  
   </View>
  
  
  </View>
  {/* ----------------------------------------------------------- */}
  
  </ScrollView>)

screenwidth=Dimensions.get('window').width;
screenheigth=Dimensions.get('window').height;

  constructor(props){

    super(props);
  
     this.state={

      imagInflu:require('../../assets/influencers/influencer.png'),
      influencer:'Kala | Tempo',
     // fotoInflu:'influencer.png',
      correoInflu:'@kalatempo',
      imagMasco:require('../../assets/influencers/KalaTempo/mascotaKala.png'),
      icono:require('../../assets/icons_genGMI/requestDetail.png'),
      haciaPag:'publishEven1',

       opaciNo:null,
       opaciSi:0.5,

       

 

    //menus
 

    menu1:styles.menuelegido,
    textoUno:styles.textoElegido,

    menu2:styles.menunormal,
    textoDos:styles.textoNormal,

    menu3:styles.menunormal,
    textoTres:styles.textoNormal,


      }
  
  }// fin de consttructor

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


recogeDeHijo(dato){
    
  this.props.navigation.navigate(dato)
 
  }

  abrirMenu(){
    this.props.navigation.toggleDrawer() 
  }
 

  
transicion=(num)=>{

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

    return (

      <View style={{flex: 1}}>
     

        <Cabezera
       imagInflu={this.state.imagInflu}
       influencer={this.state.influencer}
  
       correoInflu={this.state.correoInflu}
       imagMasco={this.state.imagMasco}
       icono={this.state.icono}

       haciaPag={this.state.haciaPag}
       enviaAPadre={this.recogeDeHijo.bind(this)}
       enviaAPadreMenu={this.abrirMenu.bind(this)}
       abreMenu={true} // para poner la foto con touch o no
       />




      <View style={{flex: 8.7}}>
     
{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:hp('2%'),
           fontWeight: 'bold',}}>Requests</Text>

</View>
  {/* ----------------MENU ----------------*/}
 
  <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginBottom:10}}>

                 <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu1]}>
                 <TouchableOpacity
               onPress={() => this.cambiarVista(1)}
              >
                 
                 <Text  style={this.state.textoUno}>
                 Pending
                 </Text>
               </TouchableOpacity>
               </View>



           <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
           <TouchableOpacity
               onPress={() => this.cambiarVista(2)}
             >
            <Text  style={this.state.textoDos}>
           Accepted
          </Text>
          </TouchableOpacity>
         </View>


        <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <TouchableOpacity
                 onPress={() => this.cambiarVista(3)}
             >
            <Text  style={[this.state.textoTres,{marginLeft:10}]}>
             Rejected
              </Text>
         </TouchableOpacity>
      </View>

     </View>

 {/* ------------------------*/} 

 <ScrollView  ref='scrol'
               horizontal={true} 
                pagingEnabled={true}
                onScroll={
                  (event)=>{
                    pos=event.nativeEvent.contentOffset.x;
                    if(pos==0){
                      this.transicion(1);
                     
                    }else if(pos==this.screenwidth && pos<this.screenwidth*2){
                      this.transicion(2);
                    
                    }else if(pos>=this.screenwidth*2){
                      this.transicion(3);
                    
                    }
                  }
                }
               
              
                >
     
               <View  style={{
                   flex:1,
                   width:this.screenwidth,

                 }}>
                 {this.rPending}
 
 
               </View>
               <View  style={{
                
                   flex:1,
                   width:this.screenwidth,
                  

                 }}>
               <RequestAcepted  enviaAPadre={this.recogeDeHijo.bind(this)} />
               </View>
               <View  style={{
                  
                   flex:1,
                   width:this.screenwidth,
                  

                 }}>
              <RequestRejected/>
               </View>

            </ScrollView>
   
    </View>
  
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 

pentaIcon:{
  color:'white',
  fontSize:13,
  
},

//   MENUS
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




});