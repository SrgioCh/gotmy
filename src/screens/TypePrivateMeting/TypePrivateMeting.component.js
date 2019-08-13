import React, { Component } from 'react';
import {
    View, Text,
    TextInput, TouchableOpacity,
    Image, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

import styles from './TypePivateMeting.style';

export default class TypePrivateMeting extends Component {

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
            // primer checkbox :
            check: false,
            checkImag: require('../../../assets/icons_genGMI/checkNo.png'),
            //Bloque 1 de check
            checkOne: false,
            checkImagOne: require('../../../assets/icons_genGMI/checkNo.png'),
            checkToo: false,
            checkImagToo: require('../../../assets/icons_genGMI/checkNo.png'),
            checkTree: false,
            checkImagTree: require('../../../assets/icons_genGMI/checkNo.png'),
            checkFor: false,
            checkImagFor: require('../../../assets/icons_genGMI/checkNo.png'),
            //segundo bloque de check
            checkA: false,
            checkImagA: require('../../../assets/icons_genGMI/checkNo.png'),
            checkB: false,
            checkImagB: require('../../../assets/icons_genGMI/checkNo.png'),
            checkC: false,
            checkImagC: require('../../../assets/icons_genGMI/checkNo.png'),



        }
    }

    componentDidMount() {

    }

    render() {




        return (

            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, marginHorizontal: '4%' }}>

                <View style={{
                    flex: 1,
                    paddingRight: '3%',
                    justifyContent: 'flex-end',

                }}>
                    <Text style={styles.titulo}>What Kind of private event do you want? </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 9, justifyContent: 'flex-end' }}>
                        <Text style={styles.textOne}>
                            Just For Fun
                          </Text>
                        <Text style={styles.textToo}>
                            I would like to have a good  time with you?
                          </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View onTouchStart={() => {
                            if (this.state.check == true) {
                                this.setState({
                                    check: false,
                                    checkImag: require('../../../assets/icons_genGMI/checkNo.png'),

                                })
                            } else {
                                this.setState({
                                    check: true,
                                    checkImag: require('../../../assets/icons_genGMI/check.png'),
                                })
                            }
                        }
                        }>
                            <Image
                                source={this.state.checkImag}
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View behavior="padding" style={{ flex: 3, }}>
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

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                <View onTouchStart={() => {
                                    if (this.state.checkTree == true) {
                                        this.setState({
                                            checkTree: false,
                                            checkImagTree: require('../../../assets/icons_genGMI/checkNo.png'),

                                        })
                                    } else {
                                        this.setState({
                                            checkTree: true,
                                            checkImagTree: require('../../../assets/icons_genGMI/check.png'),
                                        })
                                    }
                                }
                                }>
                                    <Image
                                        source={this.state.checkImagTree}
                                        style={styles.icon}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 8.5, justifyContent: 'center' }}>
                                <Text style={styles.textCheck}>Hangout</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('1%') }}>
                            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                <View onTouchStart={() => {
                                    if (this.state.checkFor == true) {
                                        this.setState({
                                            checkFor: false,
                                            checkImagFor: require('../../../assets/icons_genGMI/checkNo.png'),

                                        })
                                    } else {
                                        this.setState({
                                            checkFor: true,
                                            checkImagFor: require('../../../assets/icons_genGMI/check.png'),
                                        })
                                    }
                                }
                                }>
                                    <Image
                                        source={this.state.checkImagFor}
                                        style={styles.icon}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 8.5, justifyContent: 'center' }}>
                                <Text style={styles.textCheck}>Other reason</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.contInput}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="write the reason here..."
                            style={{ width: '70%', fontSize: wp('5%') }}
                            onChangeText={
                                (reason) => this.setState({
                                    reason: reason
                                })
                            } />

                    </View>
                </View>
                <View style={{ flex: 3, }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('0.7%') }}>
                        <View style={{ flex: 9, justifyContent: 'flex-end' }}>
                            <Text style={styles.textOne}>
                                Business
                          </Text>
                            <Text style={styles.textToo}>
                                I have a business proposal for you
                          </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View onTouchStart={() => {
                                if (this.state.checkA == true) {
                                    this.setState({
                                        checkA: false,
                                        checkImagA: require('../../../assets/icons_genGMI/checkNo.png'),

                                    })
                                } else {
                                    this.setState({
                                        checkA: true,
                                        checkImagA: require('../../../assets/icons_genGMI/check.png'),
                                    })
                                }
                            }
                            }>
                                <Image
                                    source={this.state.checkImagA}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('0.7%') }}>
                        <View style={{ flex: 9, justifyContent: 'flex-end' }}>
                            <Text style={styles.textOne}>
                                Education
                          </Text>
                            <Text style={styles.textToo}>
                                I would like to learn from you
                          </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View onTouchStart={() => {
                                if (this.state.checkB == true) {
                                    this.setState({
                                        checkB: false,
                                        checkImagB: require('../../../assets/icons_genGMI/checkNo.png'),

                                    })
                                } else {
                                    this.setState({
                                        checkB: true,
                                        checkImagB: require('../../../assets/icons_genGMI/check.png'),
                                    })
                                }
                            }
                            }>
                                <Image
                                    source={this.state.checkImagB}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('0.7%') }}>
                        <View style={{ flex: 9, justifyContent: 'flex-end' }}>
                            <Text style={styles.textOne}>
                                Other reason
                          </Text>
                            <Text style={styles.textToo}>
                                I have a special request
                          </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View onTouchStart={() => {
                                if (this.state.checkC == true) {
                                    this.setState({
                                        checkC: false,
                                        checkImagC: require('../../../assets/icons_genGMI/checkNo.png'),

                                    })
                                } else {
                                    this.setState({
                                        checkC: true,
                                        checkImagC: require('../../../assets/icons_genGMI/check.png'),
                                    })
                                }
                            }
                            }>
                                <Image
                                    source={this.state.checkImagC}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => this.props.navigation.navigate("description")}

                    >
                        <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                            Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>


        );
    }

}