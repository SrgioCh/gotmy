import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Keyboard,
    Text, TextInput, TouchableOpacity,
    View, Image, ScrollView

} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//importamos componentes
import styles from "./Choose.style"



export default class Choose extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Choose date',
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
                <TouchableOpacity onPress={() => navigation.navigate("")}

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

            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
        this.cad = '';

    }


    componentDidMount() {

    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }


    render() {
        //dentro de stardate  estara la seleccion de la fecha
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        //por las  primeras 3 letras devueltas estableceremos la cadena de devolucion
        switch (startDate.substring(0, 3)) {
            case 'Sun': this.cad = 'Sunday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Mon': this.cad = 'Monday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Tue': this.cad = 'Tuesday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Wed': this.cad = 'Wednesday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Thu': this.cad = 'Thursday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Fri': this.cad = 'Friday,' + startDate.substring(3, startDate.length - 17)
                break;
            case 'Sat': this.cad = 'Saturday,' + startDate.substring(3, startDate.length - 17)
                break;

            default:
                break;
        }

        console.log(this.cad)
        return (
            <View behavior="padding" style={{
                flex: 1, marginHorizontal: '4%'
            }}>
                <View style={{ flex: 8 }}>
                    <View style={styles.container}>
                        <CalendarPicker
                            onDateChange={this.onDateChange}
                        />
                    </View>
                </View>


                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.containerbutton}
                        onPress={() => this.props.navigation.push("publishEven2", { date: this.cad })}

                    >
                        <Text style={{ color: 'white', fontSize: wp('4.5%') }}>
                            Save date</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
