import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,
   ScrollView, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import Cabezera from './component/cabezera';
   import Estrellas from "./component/estrellas"
   import PureChart from 'react-native-pure-chart';
   
export default class InfluencerEstadisticas  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
    screenwidth=Dimensions.get('window').width;
    screenheigth=Dimensions.get('window').height;

constructor(props) {
  super(props);

this.state = {
  
  //PARA CABEZERA
    imagInflu:require('../../assets/influencers/influencer.png'),
    influencer:'Kala | Tempo',
   // fotoInflu:'influencer.png',
    correoInflu:'@kalatempo',
    imagMasco:require('../../assets/influencers/KalaTempo/mascotaKala.png'),
    icono:require('../../assets/icons_genGMI/statsIcon.png'),
    haciaPag:'influencerEstadisticas',

  //PARA EL CUERPO

  usuarios:[
            { 
               foto:require("../../assets/usuarios/uno.png"),
               nombre:"Cristopher Patrick",
               ciudad: "Botswana",
               estrellas:2,
            },
            { 
             foto:require("../../assets/influencers/preciosa.jpg"),
              nombre:"Henrietta Stevens",
              ciudad:"Guyana",
              estrellas:3, 
           },
           { 
            foto:require("../../assets/usuarios/cuatro.png"),
            nombre:"Don Cannon",
            ciudad:"Mexico",
            estrellas:5,
         },


          ],
          //para cajon final profile views
          menu1:styles.menuelegido,
          textoUno:styles.textoElegido,

          menu2:styles.menunormal,
          textoDos:styles.textoNormal,

          menu3:styles.menunormal,
          textoTres:styles.textoNormal,
  }

}

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
abrirMenu(){
  this.props.navigation.toggleDrawer() 
}


 
 

    render() {

    screenHeight=Dimensions.get('window').height;

    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: '6/12', y: 30},
          {x: '7/12', y: 200},
          {x: '8/12', y: 170},
          {x: '9/12', y: 250},
          {x: '10/12', y: 10},
          {x: '11/12', y: 250},
          {x: '12/12', y: 10},
        ],
        color: '#ff5a60'
      },
      {
        seriesName: 'series2',
        data: [
          {x: '6/12', y: 20},
          {x: '7/12', y: 100},
          {x: '8/12', y: 140},
          {x: '9/12', y: 350},
          {x: '10/12', y: 40},
          {x: '11/12', y: 200},
          {x: '12/12', y: 40},
        ],
        color: '#D7D7D7'
      }
    ]

    let rating = [
       {
      seriesName: 'series4',
      data: [
        {x: '  Jan/  2019', y: 30},
        {x: '  Dic/  2018', y: 60},
        {x: '  Nov/  2018', y: 100},
    
       
      ],
      color: '#ff5a60'
    },
  ]

  // FOLLOWERS  AND VIEWERS

  let daily = [
    {
      seriesName: 'followers',
      data: [
        {x: '6/12', y: 30},
        {x: '7/12', y: 200},
        {x: '8/12', y: 170},
        {x: '9/12', y: 250},
        {x: '10/12', y: 10},
        {x: '11/12', y: 250},
        {x: '12/12', y: 10},
      ],
      color: '#ff5a60'
    },
    {
      seriesName: 'Viewers',
      data: [
        {x: '6/12', y: 20},
        {x: '7/12', y: 100},
        {x: '8/12', y: 140},
        {x: '9/12', y: 350},
        {x: '10/12', y: 40},
        {x: '11/12', y: 200},
        {x: '12/12', y: 40},
      ],
      color: '#D7D7D7'
    }
  ] ;


  let week= [
    {
      seriesName: 'followers',
      data: [
        {x: '6/12', y: 10},
        {x: '7/12', y: 100},
        {x: '8/12', y: 170},
        {x: '9/12', y: 250},
        {x: '10/12', y: 10},
        {x: '11/12', y: 250},
        {x: '12/12', y: 10},
      ],
      color: '#ff5a60'
    },
    {
      seriesName: 'Viewers',
      data: [
        {x: '6/12', y: 30},
        {x: '7/12', y: 200},
        {x: '8/12', y: 110},
        {x: '9/12', y: 350},
        {x: '10/12', y: 30},
        {x: '11/12', y: 300},
        {x: '12/12', y: 60},
      ],
      color: '#D7D7D7'
    }
  ];

  let month= [
    {
      seriesName: 'followers',
      data: [
        {x: '6/12', y: 10},
        {x: '7/12', y: 100},
        {x: '8/12', y: 170},
        {x: '9/12', y: 250},
        {x: '10/12', y: 10},
        {x: '11/12', y: 250},
        {x: '12/12', y: 10},
      ],
      color: '#ff5a60'
    },
    {
      seriesName: 'Viewers',
      data: [
        {x: '6/12', y: 30},
        {x: '7/12', y: 200},
        {x: '8/12', y: 110},
        {x: '9/12', y: 350},
        {x: '10/12', y: 30},
        {x: '11/12', y: 300},
        {x: '12/12', y: 60},
      ],
      color: '#D7D7D7'
    }
  ];

    return (
        <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
        <Cabezera
        imagInflu={this.state.imagInflu}
        influencer={this.state.influencer}
   
        correoInflu={this.state.correoInflu}
        imagMasco={this.state.imagMasco}
        icono={this.state.icono}
 
        haciaPag={this.state.haciaPag}
        enviaAPadre={this.recogeDeHijo.bind(this)}
        enviaAPadreMenu={this.abrirMenu.bind(this)}
        />
         
       </TouchableWithoutFeedback>
 <View style={{flex: 8.7}}>
      
 {/* TITULO */}  
 
 <View style={{marginHorizontal:'4%'}}>
 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     <Text style={{fontSize:34,color:'#312f3d',marginVertical:hp('1.5%'),
            fontWeight: 'bold',}}>My Stats</Text>
 </TouchableWithoutFeedback>
 </View>
 
 <ScrollView style={{marginHorizontal:'4%',}} showsVerticalScrollIndicator={false}>
      
<View  style={{ //borderColor:'#DCD6D5', borderWidth:wp('1%'), borderRadius:hp('2%'),marginTop:hp('0.5%')
marginTop:hp('0.5%')
}}>
   <View style={{flexDirection:'row'}}>
         <View style={{flex:5.5,paddingLeft:wp('3%')}}>
             <View>
                 <Text style={{ paddingVertical:hp('1%'),
                   color:'#312f3d' , fontSize:wp('5%') , fontWeight:'500'
                  }}>Total Balance</Text>
             </View>
               <Text style={{
                   color:'#677183' , fontSize:wp('3.5%') , fontWeight:'200'
                  }}>Since Nov,2018</Text>
         </View>
         <View style={{flex:4.5 ,justifyContent:'flex-end'}}>
            <Text  style={{
              color:'#312f3d' , fontSize:wp('8%') , fontWeight:'500'
            }}>
               $7,265.50
            </Text>
         </View>

   </View>
    <View style={{flexDirection:'row',paddingBottom:hp('1.5%')}}>
        <View style={{flex:7.8, alignItems:'flex-end'}}>
        <Image source={require('../../assets/icons_genGMI/stasMoney.png')} 
                        style={{ width:25,height:25}}
                        />
        </View>
        <View style={{flex:2.2,alignItems:'center',}}>
        <Text style={{
              color:'#70D25E' , fontSize:wp('5%') , fontWeight:'500'
            }}>45,2%</Text>
        </View>
         
    </View>
</View>

<View style={{flexDirection:'row',marginTop:hp('3%')}}>
     <View style={{flex:7}}>
         <Text style={{
          color:'#312f3d' , fontSize:wp('6%') , fontWeight:'500' 
         }}>Bookings</Text>
      </View>
      <TouchableOpacity   onPress={() => this.props.navigation.navigate("bookingStats")}
      style={{flex:2.3,justifyContent:'center', alignItems:'flex-end'}}>
      <Text style={{
          color:'#ff5a60' , fontSize:wp('4%') , fontWeight:'500' 
         }}>Show All</Text>
      </TouchableOpacity>
      <View style={{flex:0.7,justifyContent:'center',alignItems:'flex-end'}}>
      <Image source={require('../../assets/icons_genGMI/Red.png')} 
                        style={{ width:20,height:20 }}
                        />
      </View>
</View>

<View style={{marginVertical:hp('1%') }}>
     <Text style={{color:'#312f3d' , fontSize:wp('15%') , fontWeight:'500' }}>
       146</Text>
</View>
<View style={{flexDirection:'row'}}>
    
     <View style={{flex:1,alignItems:'center'}}>
       <Image source={require('../../assets/icons_genGMI/arrowUpGreen.png')} 
                        style={{ width:25,height:25 }}
                        />
      </View>
      <View style={{flex:9}}>
       <Text style={{ color:'#70D25E' , fontSize:wp('5%') , fontWeight:'500' }}>
      45,2%</Text>
      </View>
</View>
   
  
  <View style={{marginVertical:hp('2%'),padding:hp('0.7%')}}>
    <View style={{alignItems:'center'}}>
        <PureChart data={sampleData} type='line' />
    </View>
    
    <View style={{flexDirection:'row',marginTop:hp('1.5%')}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent: 'center',}}>
                 <Text style={{
                    borderRadius:10,
                    borderColor:'#ff5a60',borderWidth:wp('0.5%'),height:12,width:12
                 }}>{' '}</Text>
         </View>
         <View style={{flex:3}}>
                <Text>Sold tickets</Text>
         </View>
         <View style={{flex:1.5,alignItems:'center',justifyContent: 'center',}}>
                 <Text style={{
                    borderRadius:10,
                    borderColor:'#D7D7D7',borderWidth:wp('0.5%'),height:12,width:12
                 }}>{' '}</Text>
         </View>
         <View style={{flex:4}}>
               <Text>Unsold tickets</Text>
         </View>
    </View>
 </View>

  <View style={{flexDirection:'row',marginTop:hp('2%')}}>
     <View style={{flex:7}}>
         <Text style={{
          color:'#312f3d' , fontSize:wp('6%') , fontWeight:'500' 
         }}>Ratings</Text>
      </View>
      <TouchableOpacity  
       onPress={() => this.props.navigation.navigate("reviewDos")}
      style={{flex:3 ,flexDirection:'row'}}>
      <View style={{flex:2.3,justifyContent:'center', alignItems:'flex-end'}}>
      <Text style={{
          color:'#ff5a60' , fontSize:wp('4%') , fontWeight:'500' 
         }}>Show All</Text>
      </View>
      <View style={{flex:0.7,justifyContent:'center',alignItems:'flex-end'}}>
      <Image source={require('../../assets/icons_genGMI/Red.png')} 
                        style={{ width:20,height:20 }}
                        />
      </View>

      </TouchableOpacity>
      
</View>

<View style={{marginVertical:hp('1.5%'),paddingVertical:hp('0.5%'),flexDirection:'row'}}>
       
       <View style={{flex:5 ,justifyContent:'center'}}>
             <View>
                  <Text style={{fontSize:wp('4%'),fontWeight: 'bold'}}>January,2019</Text>
                  <Text style={{marginVertical:hp('1.5%'),fontSize:wp('4%'),
                    fontWeight: 'bold',  }}>December,2018</Text>
                   <Text style={{fontSize:wp('4%'),fontWeight: 'bold'}} >November,2018</Text>
             </View>
            
       </View>
       
       <View style={{flex:5,alignItems: 'flex-end'}}>
          <PureChart data={rating} type='bar' defaultColumnWidth={18} />
       </View>

       
  </View>

<View style={{marginTop:hp('2%'),borderBottomWidth:wp('0.3%') 
                ,borderBottomColor:'#CCCACA'}}>
{

    this.state.usuarios.map((item,i)=> {

return(
<View key={i} style={{flexDirection:'row',marginBottom:hp('2%')}}>
     <View style={{flex:1.5 }}>
     <Image source={item.foto} 
                        style={{ width:48,height:45,borderRadius:Platform.OS === 'ios' ? 25:45}}
                        />
     </View>
     <View style={{flex:5.5}}>
       <Text style={{
          color:'#312f3d' , fontSize:wp('4.5%') , fontWeight:'500'  
       }}>{item.nombre}</Text>
        <View style={{flexDirection:'row',paddingTop:hp('0.5%')}}>
            <View style={{ flex:1}}>
                 <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                        style={{ width:14,height:14 }}
                        />
            </View>
            <View style={{flex:9}}>
              <Text   style={{
                           color:'#677183' , fontSize:wp('4%') , fontWeight:'500'  
                        }}>{item.ciudad}</Text>
            </View>
        </View>
     </View>
     <View style={{flex:3,alignItems:'flex-end'}}>
        <Estrellas 
         estrellas={item.estrellas}
        />
     </View>
</View>
  
      ) }
    )
   }
</View>

<View style={{marginTop:Platform.OS === 'ios' ? hp('3%'):'3%',
             }}>
         <Text style={{
          color:'#312f3d' , fontSize:wp('6%') , fontWeight:'500' 
         }}>Profile views</Text>
         <Text>{" "}</Text>
</View>
<View style={{marginVertical:hp('1.5%')}}>
     <View style={{flexDirection:'row' ,marginHorizontal:'12%'}}>

             <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu1]}>
                 <TouchableOpacity
               onPress={() => this.cambiarVista(1)}
             >
                 <Text  style={this.state.textoUno}>
                 Daily
                 </Text>
                 </TouchableOpacity>
               </View>



           <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
           <TouchableOpacity
               onPress={() => this.cambiarVista(2)}
             >
            <Text  style={[this.state.textoDos,{marginLeft:10}]}>
            Week
          </Text>
          </TouchableOpacity>
         </View>


        <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <TouchableOpacity
                 onPress={() => this.cambiarVista(3)}
             >
            <Text  style={[this.state.textoTres,{marginLeft:10}]}>
             Month
              </Text>
         </TouchableOpacity>
      </View>

        </View>

        <ScrollView  ref='scrol'
               horizontal={true} 
              //  pagingEnabled={true}
              scrollEnabled={false}
               >
     
               <View  style={{
                  
                   width:this.screenwidth,
                   paddingVertical:hp('4%'),
                   paddingHorizontal:wp('2%'),
                   alignItems:'center'
                 }}>
                 <PureChart data={daily} type='line' />
 
 
               </View>
               <View  style={{
                   
                     width:this.screenwidth,
                     paddingVertical:hp('4%'),
                     paddingHorizontal:wp('2%'),
                     alignItems:'center'
                    }}>
                   <PureChart data={week} type='line' />
               </View>
               <View  style={{
                  
                    width:this.screenwidth,
                    paddingVertical:hp('4%'),
                    paddingHorizontal:wp('2%'),
                    alignItems:'center'
                   }}>
                   <PureChart data={month} type='line' />
               </View>

            </ScrollView>



     </View>
     <View style={{marginBottom:hp('2%'),padding:hp('0.5%')}}>
       <View style={{flexDirection:'row'}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent: 'center',}}>
                 <Text style={{
                    borderRadius:10,
                    borderColor:'#ff5a60',borderWidth:wp('0.5%'),height:12,width:12
                 }}>{' '}</Text>
          </View>
         <View style={{flex:3}}>
                <Text>Followers</Text>
           </View>
           <View style={{flex:1.5,alignItems:'center',justifyContent: 'center',}}>
                 <Text style={{
                    borderRadius:10,
                    borderColor:'#D7D7D7',borderWidth:wp('0.5%'),height:12,width:12
                 }}>{' '}</Text>
             </View>
              <View style={{flex:4}}>
                <Text>Viewers</Text>
            </View>
        </View>
         </View>
     </ScrollView>
     
     </View>
   
 </View>
 
 
      
   
   );
}
}


const styles = StyleSheet.create({

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