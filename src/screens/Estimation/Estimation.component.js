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
import styles from "./Estimation.style"
import BlockPending from "./components/pendingConfirm"
import EstrellasSlim from "../../../components/estrellasSlim"
import Block from "./components/Block"


export default class PastStreaming extends Component {

    static navigationOptions = {
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
            <View style={{
                alignItems: 'center',
                marginRight: wp('4%'),

            }}>
                <Text style={{ color: '#ff5a60' }}>{' '}</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);

        this.state = {
            pendingImag: require('../../../assets/icons_genGMI/relojMesage.png'),
            //datos del influencer
            imagInflu: require('../../../assets/influencers/MandyJTV/manyfot.png'),
            nameInflu: 'MandyJTV',
            estrellas: 4,

            coment: "Commentary implies issuing an evaluative judgment, different from an opinion or publication. A comment is an appreciation or writing about anything put into analysis. Commentary implies issuing an evaluative judgment, which implies that it is totally different from an opinion or publication",
            jusFor: 'Surprise reason',
            imagOne: require('../../../assets/icons_genGMI/justFun.png'),

            atendes: 23,
            imagToo: require('../../../assets/icons_genGMI/User.png'),


            price: '20.00',
            imagTree: require('../../../assets/icons_genGMI/budget.png'),

            date: 'January,2019, From 12:00 to 14:00',
            imagFor: require('../../../assets/icons_genGMI/CalendarGrey.png'),

            time: 2,
            imagfive: require('../../../assets/icons_genGMI/Time.png'),

        };
    }


    componentDidMount() {

    }



    render() {
        return (
            <View behavior="padding" style={{
                flex: 1, marginHorizontal: '4%'
            }}>

                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={styles.margin}>
                        <BlockPending imag={this.state.pendingImag} />
                    </View>
                    <View style={styles.margin}>
                        <Text style={{
                            color: 'black',
                            fontSize: wp('4%'),
                        }}>Private Meeting with</Text>
                    </View>
                    <View style={[styles.margin, { flex: 1, flexDirection: 'row' }]}>
                        <View style={{
                            flex: 2.5,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    padding: hp('0.5%'), borderWidth: wp('0.5%'), borderRadius: 60,
                                    borderColor: 'grey'
                                }}>
                                    <Image source={this.state.imagInflu}
                                        style={{ width: 60, height: 60, borderRadius: 30 }}
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
                            flex: 7.5
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
                    <View style={styles.margin}>
                        <View style={styles.block}>
                            <Block
                                imag={this.state.imagOne}
                                textOne="Just for fun"
                                textToo={this.state.jusFor}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <View style={styles.block}>
                            <Block
                                imag={this.state.imagToo}
                                textOne="Attendes"
                                textToo={this.state.atendes}
                                textRight="attendees"
                                textLeft={null}
                            />
                        </View>
                    </View>


                    <View style={styles.margin}>
                        <View style={styles.block}>
                            <Block
                                imag={this.state.imagTree}
                                textOne="Price per ticket"
                                textToo={this.state.price}
                                textRight={null}
                                textLeft="$ "
                            />
                        </View>
                    </View>

                    <View style={styles.margin}>
                        <View style={styles.block}>
                            <Block
                                imag={this.state.imagFor}
                                textOne="Date and time"
                                textToo={this.state.date}
                                textRight={null}
                                textLeft={null}
                            />
                        </View>
                    </View>

                    <View style={styles.margin}>
                        <View style={styles.block}>
                            <Block
                                imag={this.state.imagfive}
                                textOne="Time estimated"
                                textToo={this.state.time}
                                textRight="hours"
                                textLeft={null}
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
                            <Text style={{ color: '#ff5a60', fontSize: wp('4.5%') }}>
                                Cancel request</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
