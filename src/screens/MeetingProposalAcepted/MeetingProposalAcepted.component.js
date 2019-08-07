import React, { Component } from 'react';
import {
    View, Text, ScrollView,
    TextInput, TouchableOpacity,
    Image, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

import styles from './MeetingProposalAcepted.style';
import EstrellasSlim from "../../../components/estrellasSlim"

export default class MeetingProposalAcepted extends Component {

    static navigationOptions = {
        headerTitle: 'Private Meeting Proposal',
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
                <Text style={{ color: '#ff5a60' }}>cancel</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);

        this.state = {
            imagInflu: require('../../../assets/influencers/MandyJTV/manyfot.png'),
            nameInflu: 'MandyJTV',

            coment: "Commentary implies issuing an evaluative judgment, different from an opinion or publication. A comment is an appreciation or writing about anything put into analysis. Commentary implies issuing an evaluative judgment, which implies that it is totally different from an opinion or publication",
            estrellas: 4,

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
                        <View style={styles.margin}>
                            <Text style={{
                                color: 'black',
                                fontSize: wp('4%'),
                            }}>Private Meeting with</Text>
                        </View>
                        <View style={[styles.margin, { flex: 1, flexDirection: 'row' }]}>
                            <View style={{
                                flex: 2,
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        padding: hp('0.5%'), borderWidth: wp('0.5%'), borderRadius: 60,
                                        borderColor: 'grey'
                                    }}>
                                        <Image source={this.state.imagInflu}
                                            style={{ width: 50, height: 50, borderRadius: 25 }}
                                        />
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', marginLeft: wp('-6%') }}>
                                        <Image source={require('../../../assets/icons_genGMI/raiceOf.png')}
                                            style={{ width: 25, height: 25, borderRadius: 13 }}
                                        />
                                    </View>

                                </View>

                            </View>
                            <View style={{
                                flex: 8
                            }}>
                                <View style={{ flex: 4 }}>
                                    <Text style={styles.name}>{this.state.nameInflu}</Text>
                                </View>
                                <View style={{ flex: 6, }}>
                                    <EstrellasSlim estrellas={this.state.estrellas} />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: hp('1%') }}>
                            <Text style={styles.comentInflu}>
                                {this.state.coment} </Text>
                        </View>

                        <View style={{
                            marginVertical: hp('1.5%')
                        }}>
                            <Text style={styles.titulo}>
                                Attendes and Pricing
                        </Text>
                        </View>

                        <View style={{
                            flex: 1, flexDirection: 'row',

                        }}>
                            <View style={{
                                flex: 5,

                            }}>
                                <Text style={styles.textGrey}>Number attendes</Text>
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
                                <Text style={styles.textGrey}>Max. price per ticket</Text>
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
                                Data and time
                        </Text>
                        </View>

                        <View style={{
                            marginVertical: hp('1%')
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                                <View style={{ flex: 1.5, justifyContent: 'flex-start' }}>
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
                                    <Text style={styles.textCheck}>Saturday, 23 dec 2018</Text>
                                    <Text style={styles.textCheck}>From 12:00 to 14:00</Text>
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
                                    <Text style={styles.textCheck}>I'd like a specific date and time</Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.margin}>
                            <Text style={styles.textGrey}>
                                Live Event Data
                             </Text>
                        </View>


                        <View style={{ marginVertical: hp('2%') }}>
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
                                <View style={{ flex: 4, justifyContent: 'center' }}>
                                    <Text style={[styles.textGrey, { marginLeft: '4%' }]}>
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
                                <View style={{ flex: 4, justifyContent: 'center' }}>
                                    <Text style={styles.textGrey}>
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
                            marginVertical: hp('1.5%')
                        }}>
                            <Text style={styles.titulo}>
                                Explain  your purpose for meeting
                    </Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.textGrey}>
                                Limit is 1000 characters
                    </Text>
                            <Text style={styles.textGrey}>
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
                            height: hp('10%'), marginTop: hp('3%'), marginBottom: '2%',
                            justifyContent: 'center', alignItems: 'center',
                        }}>
                            <TouchableOpacity style={styles.containerbutton}
                                onPress={() => this.props.navigation.navigate("")}

                            >
                                <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                                    Send private meeting proposal</Text>
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
