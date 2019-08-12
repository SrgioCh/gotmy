import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Keyboard,
    Text, TextInput, TouchableOpacity,
    View, Image, ScrollView

} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./Settings.style"
import Bloque from "./components/Bloque"

export default class Settings extends Component {

    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            arrowBack: require('../../../assets/icons_genGMI/atrasito.png'),
            emailOne: 'info@gotmy.com',
            emailToo: 'gotmy.com',

            //para togles
            switchOne: false,
            switchToo: false,
            switchTree: false,
            switchFour: false,
        };
    }


    componentDidMount() {

    }


    onPress = (number) => {

        switch (number) {
            case 'uno': if (this.state.switchOne) {
                this.setState({
                    switchOne: false,
                    elegidoOne: 'No elegido'
                })
            } else {
                this.setState({
                    switchOne: true,
                    elegidoOne: 'elegido'
                })

            }

                break;
            case 'dos': if (this.state.switchToo) {
                this.setState({
                    switchToo: false,
                    elegidoToo: 'No elegido'
                })
            } else {
                this.setState({
                    switchToo: true,
                    elegidoToo: 'elegido'
                })

            }

                break;
            case 'tres': if (this.state.switchTree) {
                this.setState({
                    switchTree: false,
                    elegidoTree: 'No elegido'
                })
            } else {
                this.setState({
                    switchTree: true,
                    elegidoTree: 'elegido'
                })

            }

                break;
            case 'cuatro': if (this.state.switchFour) {
                this.setState({
                    switchFour: false,
                    elegidoFour: 'No elegido'
                })
            } else {
                this.setState({
                    switchFour: true,
                    elegidoFour: 'elegido'
                })

            }

                break;

        }



    }


    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    borderBottomColor: 'grey', borderBottomWidth: 0.5
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: '3%' }}>
                        <View style={{ flex: 4, justifyContent: 'center', marginLeft: '4%' }}>
                            <View
                                onTouchEnd={() => this.props.navigation.toggleDrawer()}
                            >
                                <Image
                                    source={this.state.arrowBack}
                                    style={{
                                        width: 30, height: 30,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold' }}>
                                Settings
                           </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 5, marginHorizontal: '4%' }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Text style={{ fontSize: wp('3.5%'), fontWeight: 'bold' }}>
                            Configure your experience
                           </Text>
                    </View>
                    <View style={{ flex: 8, }}>
                        <View style={{ flexDirection: 'row', marginTop: hp('1.5%') }}>

                            <View style={{ flex: 1.5, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Image source={require('../../../assets/icons_genGMI/notifications.png')}
                                    style={{ width: 20, height: 24, }}
                                />

                            </View>

                            <View style={{
                                flex: 7, flexDirection: 'column',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6', paddingBottom: 15
                            }}>
                                <View >
                                    <Text style={{ fontSize: wp('4%'), color: '#312f3d' }}>Notifications</Text>
                                </View>
                                <View style={{ marginTop: hp('0.5%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#697181' }}>
                                        Keep up to date with all the news
                                        </Text>
                                </View>

                            </View>
                            <View style={{
                                flex: 1.5, justifyContent: 'center', alignItems: 'flex-end',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6'
                            }} >
                                {/* meteremos el toogle aqui*/}
                                <SwitchToggle
                                    backgroundColorOn='white'
                                    backgroundColorOff='#ff5a60'
                                    containerStyle={{
                                        width: 40,
                                        height: 24,
                                        borderRadius: 25,
                                        borderWidth: 1,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 19,
                                        backgroundColor: 'yellow', // rgb(102,134,205)
                                    }}
                                    switchOn={this.state.switchOne}
                                    onPress={() => this.onPress('uno')} // funcion 
                                    circleColorOff='white'
                                    circleColorOn='#ff5a60'
                                    duration={500}
                                />

                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: hp('1.5%') }}>

                            <View style={{ flex: 1.5, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Image source={require('../../../assets/icons_genGMI/Language.png')}
                                    style={{ width: 24, height: 26, }}
                                />

                            </View>

                            <View style={{
                                flex: 7, flexDirection: 'column',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6', paddingBottom: 15
                            }}>
                                <View >
                                    <Text style={{ fontSize: wp('4%'), color: '#312f3d' }}>Private Messages</Text>
                                </View>
                                <View style={{ marginTop: hp('0.5%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#697181' }}>
                                        Opt-out
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                flex: 1.5, justifyContent: 'center', alignItems: 'flex-end',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6'
                            }} >
                                {/* meteremos el toogle aqui*/}
                                <SwitchToggle
                                    backgroundColorOn='white'
                                    backgroundColorOff='#ff5a60'
                                    containerStyle={{
                                        width: 40,
                                        height: 24,
                                        borderRadius: 25,
                                        borderWidth: 1,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 19,
                                        backgroundColor: 'yellow', // rgb(102,134,205)
                                    }}
                                    switchOn={this.state.switchToo}
                                    onPress={() => this.onPress('dos')} // funcion 
                                    circleColorOff='white'
                                    circleColorOn='#ff5a60'
                                    duration={500}
                                />

                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: hp('1.5%') }}>

                            <View style={{ flex: 1.5, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Image source={require('../../../assets/icons_genGMI/CalendarGrey.png')}
                                    style={{ width: 25, height: 27, }}
                                />

                            </View>

                            <View style={{
                                flex: 7, flexDirection: 'column',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6', paddingBottom: 15
                            }}>
                                <View >
                                    <Text style={{ fontSize: wp('4%'), color: '#312f3d' }}>Private Meetings</Text>
                                </View>
                                <View style={{ marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#697181' }}>
                                        Opt-out to incoming
                                  </Text>
                                </View>

                            </View>
                            <View style={{
                                flex: 1.5, justifyContent: 'center', alignItems: 'flex-end',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6'
                            }} >
                                {/* meteremos el toogle aqui*/}
                                <SwitchToggle
                                    backgroundColorOn='white'
                                    backgroundColorOff='#ff5a60'
                                    containerStyle={{
                                        width: 40,
                                        height: 24,
                                        borderRadius: 25,
                                        borderWidth: 1,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 19,
                                        backgroundColor: 'yellow', // rgb(102,134,205)
                                    }}
                                    switchOn={this.state.switchTree}
                                    onPress={() => this.onPress('tres')} // funcion 
                                    circleColorOff='white'
                                    circleColorOn='#ff5a60'
                                    duration={500}
                                />

                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: hp('1.5%') }}>

                            <View style={{ flex: 1.5, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Image source={require('../../../assets/icons_genGMI/ViewsGrey.png')}
                                    style={{ width: 22, height: 25, }}
                                />

                            </View>

                            <View style={{
                                flex: 7, flexDirection: 'column',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6', paddingBottom: 15
                            }}>
                                <View >
                                    <Text style={{ fontSize: wp('4%'), color: '#312f3d' }}>Browse in private mode</Text>
                                </View>
                                <View style={{ marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#697181' }}>
                                        Opt-out to incoming
                             </Text>
                                </View>

                            </View>
                            <View style={{
                                flex: 1.5, justifyContent: 'center', alignItems: 'flex-end',
                                borderBottomWidth: 1, borderBottomColor: '#e1e3e6'
                            }} >
                                {/* meteremos el toogle aqui*/}
                                <SwitchToggle
                                    backgroundColorOn='white'
                                    backgroundColorOff='#ff5a60'
                                    containerStyle={{
                                        width: 40,
                                        height: 24,
                                        borderRadius: 25,
                                        borderWidth: 1,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 19,
                                        backgroundColor: 'yellow', // rgb(102,134,205)
                                    }}
                                    switchOn={this.state.switchFour}
                                    onPress={() => this.onPress('cuatro')} // funcion 
                                    circleColorOff='white'
                                    circleColorOn='#ff5a60'
                                    duration={500}
                                />

                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 2 }}>
                    <Bloque
                        texOne="Contact us"
                        email={this.state.emailOne}
                    />

                    <Bloque
                        texOne="Wesbite"
                        email={this.state.emailToo}
                    />
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => this.props.navigation.navigate(" ")}

                    >
                        <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                            Delete my accunt</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ color: '#697181', fontSize: wp('3.5%') }}>
                        gotmy is owned and operated by Got My Idol, Inc</Text>

                </View>

            </View>
        );
    }
}
