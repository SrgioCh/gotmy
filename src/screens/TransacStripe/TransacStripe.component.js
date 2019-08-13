import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet,
    Image, TouchableOpacity
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

import Block from "./components/Block"
import styles from "./TransacStripe.style"

export default class TransacStripe extends Component {

    static navigationOptions = {
        headerTitle: 'Transaction Detail',
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
                marginRight: wp('4%')
            }}>
                <Text style={{ color: '#ff5a60' }}>{' '}</Text>

            </View>
        ),
        headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);

        this.state = {

            money: null
        }
    }

    componentDidMount() {
        const mon = this.props.navigation.getParam("money");
        this.setState({
            money: mon
        })
    }


    render() {




        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 3 }}>
                    <View style={{
                        flex: 4,
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/mixto/stripe.png')}
                            style={{
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Text style={styles.textMin}>Amount</Text>
                    </View>
                    <View style={{ flex: 4, alignItems: 'center' }}>
                        <Text style={styles.textMax} >
                            $ {this.state.money}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 5, marginHorizontal: '4%' }}>

                    <View style={styles.block}>
                        <Block
                            imag={require('../../../assets/icons_genGMI/transaccionB.png')}
                            textOne="Transaction ID"
                            textToo={768483732}
                        />
                    </View>
                    <View style={styles.block}>
                        <Block
                            imag={require('../../../assets/icons_genGMI/Time.png')}
                            textOne="Transaction status"
                            textToo='Succes'
                        />
                    </View>

                    <View style={styles.block}>
                        <Block
                            imag={require('../../../assets/icons_genGMI/CalendarGrey.png')}
                            textOne="Date"
                            textToo='12/01/2019 - 12:45 PM'
                        />
                    </View>
                    <View style={styles.block}>
                        <Block
                            imag={require('../../../assets/icons_genGMI/load.png')}
                            textOne="Full name"
                            textToo='gotmy'
                        />
                    </View>

                </View>

                <View style={{
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={styles.button}

                    >
                        <Text style={styles.textButton}>
                            Download invoice</Text>
                    </TouchableOpacity>

                </View>

            </View>


        );
    }

}