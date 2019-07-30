import React from 'react';
import {
  Platform, StyleSheet, Text, Dimensions, ScrollView,
  TextInput, TouchableOpacity, View, Image
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Estrellas from "./component/estrellas"


export default class MyLiveEventsArticle extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {

    screenHeight = Dimensions.get('window').height;
    screenwidth = Dimensions.get('window').width;


    user = this.props.navigation.getParam('datosDraft');
    //console.log(user.name)

    return (
      <View style={{ flex: 1, paddingTop: hp('5%') }}>
        <View style={{ flex: 0.8, flexDirection: 'row' }}>

          <TouchableOpacity
            onPress={() => this.props.navigation.pop()}
            style={{ flex: 1.5, justifyContent: "center", alignItems: 'center' }}>
            <Image
              source={require("../../assets/icons_genGMI/Back.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1.3, justifyContent: 'center' }}>
            <Image
              source={user.imagIco}
              style={{
                width: 35,
                height: 35,
                borderRadius: Platform.OS === 'ios' ? 18 : 25,
              }}
            />
          </View>
          <View style={{ flex: 7.2, justifyContent: 'center' }}>
            <Text style={{
              marginBottom: hp('0.5%'),
              color: "#312f3d",
              fontSize: wp('3.5%'),
              fontWeight: 'bold'
            }}>{user.name}</Text>
            <Estrellas estrellas={user.estrellas} tipoEstre={user.tipoEstre} />
          </View>

        </View>
        <View style={{ flex: 3.7 }}>

          <Image
            source={user.imagArticle}
            style={{
              width: '100%',
              height: '100%',

            }}
          />
        </View>
        <View style={{ flex: 5.5, marginHorizontal: wp('4%') }}>

          <View style={{ marginVertical: hp('2%') }}>
            <Text style={{
              color: "#312f3d",
              fontSize: wp('7.5%'),
              fontWeight: 'bold'
            }}>
              {user.mensaje}
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{}}>
              <Text style={{
                color: "#312f3d",
                fontSize: wp('3.5%'),
                fontWeight: 'bold'
              }}>para la conversion ,creamos(webpack.config.js), que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js),{'\n'}{'\n'} que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
                                                Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js), que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js),{'\n'}{'\n'}que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
                                                Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js), que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
                                                Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js), que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js),{'\n'}{'\n'}que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
                                                Estos archivos deben ir en la raiz del proyecto.para la conversion ,creamos(webpack.config.js), que le dira  a webpack que es lo que tiene que hacer . Ah babel tambien debemos configurarlo , creamos: .babelrc.
Estos archivos deben ir en la raiz del proyecto.</Text>
            </View>
          </ScrollView>
        </View>


      </View>




    );

  }


}





const styles = StyleSheet.create({
  //en lista influencer
  estrellasTrending: {
    paddingTop: 7,
    marginBottom: 20,
    flexDirection: 'row',

  },


});