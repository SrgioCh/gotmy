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
import styles from "./Description.style"


export default class PastStreaming extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Request Private Meeting',
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
                <TouchableOpacity onPress={() => navigation.navigate("profile1")}

                    style={{
                        alignItems: 'center',
                        marginRight: wp('4%'),

                    }}>
                    <Text style={{ color: '#ff5a60' }}>cancel</Text>

                </TouchableOpacity>
            ),
            headerTintColor: '#ff5a60',
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            teclado: 'none',
            fecha: 'Thuersday, 21 jan 2018',

            //checkbox woud you like
            checkOne: false,
            checkImagOne: require('../../../assets/icons_genGMI/checkNo.png'),
            checkToo: false,
            checkImagToo: require('../../../assets/icons_genGMI/checkNo.png'),

        };


    }


    componentDidMount() {

    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        this.setState({
            teclado: 'flex'
        })
    }

    _keyboardDidHide = () => {
        this.setState({
            teclado: 'none'
        })
    }

    render() {
        return (
            <View behavior="padding" style={{
                flex: 1, marginHorizontal: '4%'
            }}>
                <KeyboardAvoidingView behavior="padding" style={{
                    flex: 1,
                }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: hp('2%') }}>

                        <View style={{
                            marginVertical: hp('1.5%')
                        }}>
                            <Text style={styles.titulo}>
                                Explain  your purpose for meeting
                    </Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.subText}>
                                Limit is 1000 characters
                    </Text>
                            <Text style={styles.subText}>
                                You can add external links using http://gotmy.es
                    </Text>
                        </View>

                        <View style={{ paddingVertical: hp('2%'), alignItems: 'center' }}>
                            <View style={styles.contInput}>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    placeholder="Explain yout purpose..."
                                    style={{ width: '90%', fontSize: wp('4%') }}
                                    placeholderTextColor="grey"
                                    numberOfLines={8}
                                    multiline={true}
                                    onChangeText={
                                        (explain) => this.setState({
                                            explain: explain
                                        })
                                    }
                                    textAlignVertical='top'
                                />

                            </View>

                        </View>

                        <View style={{
                            marginVertical: hp('1.5%')
                        }}>
                            <Text style={styles.titulo}>
                                How many people do you want the private meeting for ?
                        </Text>
                        </View>


                        <View style={{
                            flex: 1, flexDirection: 'row',

                        }}>
                            <View style={{
                                flex: 5,

                            }}>
                                <Text style={styles.subtext}>Number attendes</Text>
                                <View style={{ marginVertical: hp('1%') }}>
                                    <View style={styles.contInputmanyPeople}>
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            placeholder="12 attendees"
                                            style={{ width: '60%', fontSize: wp('3%'), textAlign: 'center' }}
                                            onChangeText={
                                                (number) => this.setState({
                                                    number: number//los que va encontrando
                                                })
                                            } />

                                    </View>

                                </View>

                            </View>
                            <View style={{
                                flex: 5
                            }}>
                                <Text style={styles.subtext}>Max. price per ticket</Text>
                                <View style={{ marginVertical: hp('1%') }}>
                                    <View style={styles.contInputmanyPeople}>
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            placeholder="$ 20.00"
                                            style={{ width: '60%', fontSize: wp('3%'), textAlign: 'center' }}
                                            onChangeText={
                                                (number) => this.setState({
                                                    number: number//los que va encontrando
                                                })
                                            } />

                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{
                            marginVertical: hp('1.5%')
                        }}>
                            <Text style={styles.titulo}>
                                When would you like the meeting ?
                        </Text>
                        </View>

                        <View style={{
                            marginVertical: hp('1%')
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                    <View onTouchStart={() => {
                                        if (this.state.checkOne == true) {
                                            this.setState({
                                                checkOne: false,
                                                checkImagOne: require('../../../assets/icons_genGMI/checkNo.png'),

                                            })
                                        } else {
                                            this.setState({
                                                checkOne: true,
                                                checkImagOne: require('../../../assets/icons_genGMI/check.png'),
                                            })
                                        }
                                    }
                                    }>
                                        <Image
                                            source={this.state.checkImagOne}
                                            style={styles.icon}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 8.5, justifyContent: 'center' }}>
                                    <Text style={styles.textCheck}>Party Appearance</Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                    <View onTouchStart={() => {
                                        if (this.state.checkToo == true) {
                                            this.setState({
                                                checkToo: false,
                                                checkImagToo: require('../../../assets/icons_genGMI/checkNo.png'),

                                            })
                                        } else {
                                            this.setState({
                                                checkToo: true,
                                                checkImagToo: require('../../../assets/icons_genGMI/check.png'),
                                            })
                                        }
                                    }
                                    }>
                                        <Image
                                            source={this.state.checkImagToo}
                                            style={styles.icon}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 8.5, justifyContent: 'center' }}>
                                    <Text style={styles.textCheck}>Playing Games</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginVertical: hp('1%') }}>
                            <Text style={styles.subtext}>Live Event Date</Text>
                        </View>


                        <View style={{ marginVertical: hp('1%') }}>
                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: hp('5%'), borderRadius: hp('3%'), borderWidth: 1, borderColor: '#e2e7ee' }}>


                                <View style={{
                                    flex: 1.5, alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Image
                                        source={require('../../../assets/icons_genGMI/calendarRojo.png')}
                                        style={styles.calendar}
                                    />
                                </View>
                                <View style={{ flex: 8.5, justifyContent: 'center' }}>
                                    <Text style={{
                                        color: '#677183', fontSize: wp('4%'), letterSpacing: 0.32
                                    }}>{this.state.fecha}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ flex: 1, marginVertical: hp('2%'), flexDirection: 'row' }}>
                            <View style={{ flex: 4 }}>
                                <View style={{ flex: 4, justifyContent: 'center', marginBottom: hp('2%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#312f3d', marginLeft: '4%' }}>
                                        Start time</Text>
                                </View>
                                <View style={{ flex: 6, justifyContent: 'center' }}>
                                    <View style={{
                                        borderRadius: 27, borderWidth: 1, borderColor: '#e2e7ee', paddingVertical: hp('1%'),
                                        width: '95%', flexDirection: 'row', paddingLeft: 10,
                                    }}>

                                        <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                            <Image source={require('../../../assets/icons_genGMI/TimeRed.png')}
                                                style={{ width: 30, height: 30 }}
                                            />
                                        </View>



                                        <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                placeholder='00'
                                                maxLength={2}
                                                keyboardType='numeric'
                                                style={{
                                                }}

                                                onChangeText={
                                                    (texto) => this.setState({
                                                        horaStar: texto//los que va encontrando
                                                    })
                                                } />

                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{

                                                fontSize: wp('5%'), color: 'grey', fontWeight: '500'
                                            }}>
                                                :</Text>

                                        </View>
                                        <View style={{ flex: 3.5, justifyContent: 'center' }}>
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                placeholder='00'
                                                maxLength={2}
                                                keyboardType='numeric'
                                                style={{


                                                }}

                                                onChangeText={
                                                    (texto2) => this.setState({
                                                        minStar: texto2//los que va encontrando
                                                    })
                                                } />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 6, paddingLeft: '4%' }}>
                                <View style={{ flex: 4, justifyContent: 'center', marginBottom: hp('2%') }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#312f3d' }}>
                                        End time</Text>
                                </View>
                                <View style={{ flex: 6, justifyContent: 'center' }}>
                                    <View style={{
                                        borderRadius: 27, borderWidth: 1, borderColor: '#e2e7ee', paddingVertical: hp('1%'),
                                        width: '60%', flexDirection: 'row', paddingLeft: 10
                                    }}>

                                        <View style={{ flex: 3, alignItems: 'flex-end', paddingRight: 5, marginTop: 3 }}>
                                            <Image source={require('../../../assets/icons_genGMI/Time.png')}
                                                style={{ width: 22, height: 22 }}
                                            />
                                        </View>



                                        <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                placeholder='00'
                                                maxLength={2}
                                                keyboardType='numeric'
                                                style={{
                                                }}

                                                onChangeText={
                                                    (texto) => this.setState({
                                                        horaStar: texto//los que va encontrando
                                                    })
                                                } />

                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{

                                                fontSize: wp('5%'), color: 'grey', fontWeight: '500'
                                            }}>
                                                :</Text>

                                        </View>
                                        <View style={{ flex: 3.5, justifyContent: 'center' }}>
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                placeholder='00'
                                                maxLength={2}
                                                keyboardType='numeric'
                                                style={{


                                                }}

                                                onChangeText={
                                                    (texto2) => this.setState({
                                                        minStar: texto2//los que va encontrando
                                                    })
                                                } />
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{
                            height: hp('10%'), marginTop: hp('3%'), marginBottom: '2%',
                            justifyContent: 'center', alignItems: 'center',
                        }}>
                            <TouchableOpacity style={styles.containerbutton}
                                onPress={() => this.props.navigation.navigate("estimation")}

                            >
                                <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                                    Send request</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                    <View style={{ display: this.state.teclado, padding: 60 }}>

                    </View>


                </KeyboardAvoidingView>

            </View>
        );
    }
}
