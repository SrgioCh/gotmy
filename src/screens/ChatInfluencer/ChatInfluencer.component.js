import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Keyboard,
    Text, TextInput, TouchableOpacity,
    View, Image, ScrollView

} from 'react-native';



import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./chatInfluencer.style"
import ChatOne from "./components/chatOne"
import ChatToo from "./components/chatToo"

export default class ChatInfluencer extends Component {

    static navigationOptions = {
        headerTitle: 'MandyJTV', // esto tendra que ser dinamico
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',

            width: '90%',
            fontWeight: '500',
            letterSpacing: 0.41,

            fontSize: wp('4%'),
            color: '#312f3d',

        },
        headerRight: (
            <View style={{
                alignItems: 'center',
                marginRight: wp('4%'),

            }}>
                <Text style={{ color: '#ff5a60' }}>Cancel</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);

        this.state = {
            teclado: 'none',
            padingInpuText: hp('0.1%'),


            fotoA: require(`../../../assets/influencers/uno.png`),
            mensajeA: 'How many days do you think will take us to discover Paris?',
            mensaFinal1: '10 min ago',
            mensajeB: 'OK, sounds great!  yeahhh ! I’ll start organising the flight tickets first. ✈️',
            mensaFinal2: '2 hours ago',

        };


    }


    componentDidMount() {

    }



    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <View style={{ flex: 9 }}>


                    <View style={{ height: hp('80%') }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />
                            {/* --------------- BLOQUE MENSAJE A-------------------- */}
                            <ChatOne
                                imag={this.state.fotoA}
                                mensaje={this.state.mensajeA}
                                mensaFinal={this.state.mensaFinal1}
                            />
                            {/* --------------- BLOQUE MENSAJE B-------------------- */}

                            <ChatToo
                                mensaje={this.state.mensajeB}
                                mensaFinal={this.state.mensaFinal2}
                            />

                        </ScrollView>


                    </View>




                </View>
                <View style={{ flex: 1, paddingVertical: this.state.padingInpuText, backgroundColor: 'white' }}>

                    <View style={{ flexDirection: 'row', }}>


                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ width: 35, height: 35 }}>
                                <Image source={require('../../../assets/icons_genGMI/foto.png')}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>


                        <View style={{ flex: 8, alignItems: 'center' }}>


                            <View style={{ marginHorizontal: 16, flexDirection: 'row' }}>
                                <View style={{
                                    flexDirection: 'row', flex: 5, backgroundColor: '#f6f6f6',
                                    alignItems: 'center', borderRadius: 10
                                }}>

                                    <TextInput
                                        style={{
                                            height: 42,
                                            width: '90%',

                                            borderRadius: 10,

                                        }}
                                        placeholder="Type a message here"
                                        editable={true} // con false , no podremos escribir nada
                                        borderBottomColor='#e2e7ee'
                                        borderBottomWidth={1}
                                        paddingHorizontal={5}
                                        onChangeText={
                                            (text3) => {
                                                this.setState(() => {

                                                    return {
                                                        tytexto: text3,

                                                    }
                                                })
                                            }
                                        }//fin de onchange
                                        onFocus={
                                            () => this.setState({
                                                teclado: 'flex',
                                                padingInpuText: hp('2%'),
                                            })
                                        }
                                        onEndEditing={
                                            () => this.setState({
                                                teclado: 'none',
                                                padingInpuText: hp('0.1%'),
                                            })
                                        }
                                        onSubmitEditing={
                                            () => this.setState({
                                                teclado: 'none',
                                                padingInpuText: hp('0.1%'),
                                            })

                                        }


                                    />

                                </View>

                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ width: 35, height: 35 }}>
                                <Image source={require('../../../assets/icons_genGMI/iconosChat.png')}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>
                    </View>

                </View>


                <View style={{ display: this.state.teclado, padding: 45, backgroundColor: 'white' }}>

                </View>



            </KeyboardAvoidingView>
        );
    }
}
