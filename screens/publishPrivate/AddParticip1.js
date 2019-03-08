import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import Checkbox from 'react-native-modest-checkbox';
  import { Button } from "react-native-elements";


export default class AddParticip1 extends Component {


  static navigationOptions = {
    headerTitle:'Participantes',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '90%',
        fontWeight:'500',
            letterSpacing:0.41,
            height:120,
            fontSize:16,
            color:'#312f3d',
            marginTop:  Platform.OS === 'ios' ? '45%':'43%',

    }, headerRight: (<View>
      <Text >{' '}</Text>
      </View>),  
      headerTintColor: '#ff5a60', 
    
};



    usuarios=[
      {
      nombre:'Christopher Vaughn',
      foto:require('../../assets/usuarios/cuatro.png'),
      ciudad:'Maldives'
     },
     {
       nombre:'Angel Green',
       foto:require('../../assets/usuarios/tres.png'),
       ciudad:'Peru'
      },
     {
       nombre:'Andrew Castillo',
       foto:require('../../assets/usuarios/dos.png'),
       ciudad:'guyana'
      },
      {
        nombre:'Helen Powers',
        foto:require('../../assets/usuarios/cinco.png'),
        ciudad:'Spain'
       },
       {
         nombre:'Jack adams',
         foto:require('../../assets/usuarios/seis.png'),
         ciudad:'Peru'
        },
       {
         nombre:'MandyJtv',
         foto:require('../../assets/usuarios/uno.png'),
         ciudad:'guyana'
        }
      
   ]


   original=this.usuarios; //para poder retornar a su valores iniciales

    constructor(props){
        lista2=[];//para contener los elementos  que esten chekeados
        marcado=[];// para establecer por cada componenet si esta checkeado:true o false
      
        original=[];

        super(props);
      
         this.state={
        
 
           elegidosNum:0,
           buscados:this.usuarios, //para que pueda cambiar de valor constantemente

     
          }
      
      } 

   
      elegidos=(dato)=>{

      
        this.setState({
          elegidosNum:this.state.elegidosNum+1,
        })

         elegido=this.usuarios.map((item,i)=>{
          if(dato==item.nombre){ 
            lista2.push(item);//metemos dentro del array el seleccionado
           }
         }
         );
      }



        noElegidos=(dato)=>{
          this.setState({
          elegidosNum:this.state.elegidosNum-1,
          })

            lista2.map((item,i)=>{
            if(dato==item.nombre){ 
                 lista2.splice(i, 1);//quitamos del array el seleccionado
              }
             }
           );
        
       
        }

         

  render() {
     
//CREAREMOS LAS CAJITAS CONTENEDORAS DE IMAGENES
 if(this.state.elegidosNum>0){

//con solo haber 1 elemento dentro de lista2  se mostrara el componente imagenes
   var imagenes=lista2.map((item,i)=> 
   
   <View  key={i} style={{flex:1,width:'25%',alignItems: 'center',marginRight:10,padding:3,
                         borderColor:'#e2e7ee',borderWidth:1  }}>
        <Image
          style={{width:30,height:30}}
          source={item.foto}
        />
        <Text style={{textAlign:'center'}}>
          {item.nombre}
        </Text>
     </View>
   )
 }else{
   lista2=[]; //ponemos nuestro listado vacio,por si algun valor
         // se quedo alamacenado

 }


//*************************************************************************** */
    return (
     <View style={{height:'100%'}}>
 

            <View style={{flexDirection:'row', marginHorizontal:'4%',
                           marginTop:10}}>
                         <Text style={{flex:8,fontSize:28,fontWeight:"700"}}>
                         Create Chat Group</Text>
                         <View style={{flex:2 ,width:40,height:40}}>
                         <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("createGroup",{datos:lista2})}
                               >
                             <Image source={require('../../assets/icons_genGMI/botoncrea.png')} 
                               style={{borderRadius:10 ,width:'100%',height:'100%'}}
                              />
                              </TouchableOpacity>
                         </View>

              </View>
              

     
       <View style={{marginHorizontal:'4%',paddingVertical:20,flexDirection:'row' }}>
             <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
                      alignItems:'center',marginRight:5,borderRadius:10}}>
                     
                     <Image source={require('../../assets/icons_genGMI/lupa.jpg')} 
                          style={{borderRadius:10 ,width:'10%',height:'50%'}}
                   />
                    
                  <TextInput
                        style={{
                    
                       height:42,
                       width:'80%',
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                            busqueda=[];
                           
 
                              text3=text3.toLowerCase();
                           
                                this.usuarios.map((item,i)=>{
         
                                     if(item.nombre.toLowerCase().search(text3)!=-1 ){ 
                                            
                                         busqueda.push(item);
                                       }
                                    }
                                   
                                  );
                                

                                  if(text3!=''){

                                    this.setState({
                                      buscados:busqueda //los que va encontrando
                                    })
                                }else{
                                    this.setState({
                                     buscados:this.original //los valores originales
                                    })
                                   }
                               
                                }
                      
                    
                      }
                   />

              </View>
 
          
        </View>
       
         {/* CAJA D EUSUARIOS SELECCIONADOS */}
         <View style={{}}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                      >
         <View style={{ marginBottom:20,padding:5,
                        flexDirection: 'row',marginHorizontal:16}}>
                      {imagenes}
          </View>
        </ScrollView>

         </View>
       


        <ScrollView>
  
       {/* DATOS INICIALES  */}
       <View style={{display:'flex'}}>
             
             { 
                  this.state.buscados.map((item,i)=> {
                   return(
                       <View key={i}>
                              
                              {/* creamos lass cajas y metemos los valores */}
                              <View style={{flex:1,flexDirection: 'row',marginBottom:10,
                                 marginHorizontal:'5%' }}>
        
                           <View style={{flex:1.5}}>
                                 <Image source={item.foto} 
                                    style={{ width:'90%',height:'90%',borderRadius:10}}
                                  />
                          </View>
        
                         <View style={{flex:6.5,flexDirection: 'column',marginLeft: 10,paddingBottom: 10,
                            borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                            <Text style={{fontSize:16,color:'#312f3d',marginTop:5,marginBottom:1,
                              fontWeight: '500'}}>{item.nombre}</Text>
          
                            <View style={{flexDirection:'row'}}>
                              <View style={{width:'5%',height:'100%'}}>
                              <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                                    style={{ width:'100%',height:'60%' }}
                                /> 
                             </View> 
                            <Text style={{marginLeft:'2%',
                                       color:'#677183',fontSize: 13,
                                         }}>
                               {item.ciudad}
                           </Text>
                       </View>
                   
                     
                   </View>

                      <View style={{flex:0.6,backgroundColor:'white',paddingTop:10,paddingBottom: 10,
                              borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                         <Checkbox
                    



                        onChange={() => {
                       
                          if(marcado[item.nombre]===true){
                            marcado[item.nombre]=false;
                        
                             {this.noElegidos(item.nombre)}
                        }else{
                           marcado[item.nombre]=true;//se pone de indece el nombre
                                                     //porque al enviar un nuevo array,si pongo numeros
                                                     //no coincidiria con la posicion y el usuario
                          
                             {this.elegidos(item.nombre)}
                          }
                   
                       }}
                        checked={marcado[item.nombre]}
                        containerStyle={{
                          backgroundColor:'white',
 
                        }}
                        checkboxStyle={{
                         paddingRight:-10,
                          backgroundColor:'white',
 
                        }}

                      
                       checkedImage={require('../../assets/icons_genGMI/check.png')}
                       uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

                                  />
                       </View>
                    </View>
    
                 </View>
                    
                     )
                  }
                )  }
           </View>
{/* -------------------------------------------------- */}  
     
    

        </ScrollView>
 </View>

    );
  }
 
}





const styles = StyleSheet.create({
  
   
   


});