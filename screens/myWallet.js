import React, { Component } from 'react';
import { AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MyWallet extends Component {

    static navigationOptions = {
        header: null ,
    };
    

  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
        
     
      }
  
  }// fin de consttructor



  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      fotHei='105%';
      transHei='64.5%';
    }else if(screenHeight<=605){ //mopvil de  david
      fotHei='107%';
      transHei='67%';
  
  } else if(screenHeight<=678){ // mi movil
    fotHei='107%';
    transHei='67%';
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    fotHei='107%';
    transHei='67%';
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    fotHei='107%';
    transHei='67%';
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    fotHei='107%';
      transHei='67%';
   }else{ // 800 = 480 * 800 mdpi
    fotHei='107%';
      transHei='67%';
    
   }








     dineroPrincipal='7,265.50';
     total=150.9423;

   influ={
           influencer:'Kala | Tempo',
           fotoInflu:'influencer.png',
           correoInflu:'@kalatempo',
           }


    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal

 Todosdatos=[];
    datos=[{
            fecha:'12/01/2019',
            tipo:'Transaction Live Event Name',
            trans:'Craig Brooks',
            dinero:23.00,
            dineroTot:'$ 7,266.50',
        
          },
           {
            fecha:'12/01/2019',
            tipo:'gotmy draw out',
            trans:'Transfer to your credit card',
            dinero:-300.00,
            dineroTot:'$ 7,266.50',

         },
         {
            fecha:'12/01/2019',
            tipo:'Transaction Live Event Name',
            trans:'Max Welch',
            dinero:80.00,
            dineroTot:'$ 7,266.50',

         },
         {
          fecha:'12/02/2018',
          tipo:'Transaction Live Event Name',
          trans:'Craig Brooks',
          dinero:23.00,
          dineroTot:'$ 7,266.50',
        },
         {
          fecha:'12/02/2018',
          tipo:'gotmy draw out',
          trans:'Transfer to your credit card',
          dinero:-300.00,
          dineroTot:'$ 7,266.50',

       },
       {
          fecha:'12/02/2018',
          tipo:'Transaction Live Event Name',
          trans:'Max Welch',
          dinero:80.00,
          dineroTot:'$ 7,266.50',

       },
        
        ]


    Todosdatos=datos.map((item,i)=>{
        if(item.dinero>0){
           return ( 
                     <View key={i} style={{flex:1,flexDirection:'row',
                                              marginHorizontal:'4%',marginTop:5,borderBottomColor:'#e2e7ee',
                                              borderBottomWidth:1,}}>
                             <View style={{flex:7,paddingBottom:10,paddingTop:5}}>
                                 <Text style={styles.textoDatos1}>{item.fecha}</Text>
                                 <Text style={styles.textoDatos2}>{item.tipo}</Text>
                                 <Text style={styles.textoDatos1}>{item.trans}</Text>
                             </View>
                             <TouchableOpacity
                              onPress={() => this.props.navigation.navigate("transferDetail",{dinerillo:item.dinero})}
                              > 
                             <View style={{flex:3,alignItems:'flex-end',justifyContent:'center'}}>
                                <Text style={{
                                    color:'#312f3d',fontSize:20 ,fontWeight:'500' ,
                                 }}>$  {item.dinero}</Text>
                                <Text style={{
                                   color:'#677183',fontSize:13   
                                }}> {item.dineroTot}</Text>
                            </View>
                            </TouchableOpacity>
                     </View>
                  )
          }else{

             return(
            <View key={i} style={{flex:1,flexDirection:'row',
            marginHorizontal:'4%',marginTop:5,borderBottomColor:'#e2e7ee',
            borderBottomWidth:1,}}>
                    <View style={{flex:7,paddingBottom:10,paddingTop:5}}>
                    <Text style={styles.textoDatos1}>{item.fecha}</Text>
                    <Text style={{
                          color:'#ff5a60',fontSize:17 ,fontWeight:'500' ,
                    }}>{item.tipo}</Text>
                    <Text style={styles.textoDatos1}>{item.trans}</Text>
                    </View>
                    <View style={{flex:3,alignItems:'flex-end',justifyContent:'center'}}>
                    <Text style={{
                      color:'#ff5a60',fontSize:20 ,fontWeight:'500' ,
                    }}>$  {item.dinero}</Text>
                    <Text style={{
                     color:'#677183',fontSize:13   
                    }}> {item.dineroTot}</Text>
                    </View>
                    </View>
                    )
             }
         } 
          )


   // alert(Todosdatos);
    return (
     
 

<View style={{flex:1}}>

<View style={{flex:4}}>


{/*  CAJA DE IMAGEN CON SU TEXTO SUPERPUESTO*/}
     <Image
              source={require('../assets/influencers/KalaTempo/dos.jpg')}
               style={{
               width:screenWidth, //para imagen grande a la pantalla
               height:fotHei,
              zIndex:1,
           
               }}
            />
			
			 <View style={{
        zIndex:2,
        paddingLeft:screenWidth,
        paddingTop:transHei,
        backgroundColor:"black",
        opacity:0.7,
        position:'absolute'

    }}>

    </View>
  

{/* primera  icono con maskota*/}
 <View style={{zIndex:4,width:'100%', position:'absolute',top:hp('5%')}}>
 <View style={{flexDirection:'row'}}>
              <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/influencers/influencer.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:3,flexDirection:'column',marginLeft:10,
                        marginRight:15}}>
                  <Text   id={5}   style={{zIndex:4,
                       color:'white',
                       fontSize:17 ,letterSpacing:0.41,fontWeight:'500',marginTop:4,
                  }}>{influ.influencer}</Text>
                  {/*estrellas */}
                  <View  style={{ marginTop:6, paddingBottom:13,
                                    flexDirection:'row',  zIndex:4, }}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:9,height:9}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{width:9,height:9,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Red.png')} 
                               style={{width:9,height:9,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Red.png')} 
                             style={{width:9,height:9,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                            style={{width:9,height:9,marginLeft:2}}
                                />
                </View>
             </View>
             <View style={{flex:1,marginRight:'35%'}}>
                  <Image source={require('../assets/influencers/KalaTempo/mascotaKala.png')} 
                        style={{ width:20,height:20 ,marginLeft:-22,marginTop:4}}
                        />
              </View>
            </View>
 </View>
 

    <View style={{zIndex:3,alignItems:'center',
          position:'absolute',top:'25%' ,left:'21%'}}>
        <Text style={{fontWeight:'bold' ,fontSize:15,color:'white',marginBottom:-10}}>Current Balance</Text>
        <Text style={{fontWeight:'bold' ,fontSize:50,color:'white',padding:0,marginVertical:0}}>${dineroPrincipal}</Text>
        <Text style={{fontWeight:'bold' ,fontSize:11,color:'white'}}>
        $ {total}   total balance since 10/2018</Text>
    </View>
    
    <View style={{flex:1,zIndex:4, position:'absolute',bottom:'10%',right:'3%',backgroundColor:'yellow'}}>
                  <Image source={require('../assets/icons_genGMI/gotmy.png')} 
                        style={{ }}
                        />
     </View>
     {/*  fin de flex 4*/}
 </View>
 <View style={{flex:5}}>
       <ScrollView>
       <View style={{flexDirection:'row',
                    justifyContent: 'space-between',paddingVertical:10,marginHorizontal:'3%'
                     ,marginTop:hp('5%')}}>
                     <View > 
                         <Text style={{color:"#312f3d",fontSize:17,fontWeight:'500'}}>Latest transactions</Text>
                     </View>
                    <View style={{flexDirection:'row'}} >
                        <TouchableOpacity
                           onPress={() => this.props.navigation.navigate("transactions",{datos:datos})}
                          >
                        <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
                         </TouchableOpacity>
                      <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>

                      </View>
                </View>

                {/* LOS DATOSS*/}
             <View style={{marginBottom:10}}>
                   {Todosdatos}
             </View>
                
          
          </ScrollView>
      </View>

 {/* comienzo de  footeer */}

 <View style={{ flex:1}}>
 
 
       <TouchableOpacity
       style={{flex:1,backgroundColor:'#ff5a60',padding:'5%',
  
       alignItems:'center',justifyContent:'center'}}
        onPress={() => this.props.navigation.navigate("transferTomyAcount",{diner:dineroPrincipal})}
      > 
     <Text style={{flex:1 , color:'white', 
         fontSize:17,letterSpacing:0.41 }}>
         Transfer to my bank account</Text>
         </TouchableOpacity>
      
  </View>
 </View>
     
    );
  }
 
}





const styles = StyleSheet.create({
 
    textoDatos1:{
        color:'#677183',
        fontSize: 15,
      
    },
    textoDatos2:{
        color:'#312f3d',
        fontSize: 17,
        fontWeight: '500',
    }
 

});