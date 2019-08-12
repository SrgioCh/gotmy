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
import styles from "./EditInfluencerCategories.style"


export default class EditInfluencerCategories extends Component {

    static navigationOptions = {
        headerTitle: 'Edit your categories',
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
            source1: require('../../../assets/art-culture.jpg'),
            source2: require('../../../assets/business.jpg'),
            source3: require('../../../assets/celebrity.jpg'),
            source4: require('../../../assets/education.jpg'),
            source5: require('../../../assets/cooking.jpg'),
            source6: require('../../../assets/carft.jpg'),
            source7: require('../../../assets/manga.jpg'),
            source8: require('../../../assets/motor.jpg'),
            source9: require('../../../assets/nature.jpg'),
            source10: require('../../../assets/podcast.jpg'),
            source11: require('../../../assets/religion.jpg'),
            source12: require('../../../assets/tecnologia.jpg'),
            source13: require('../../../assets/sports.jpg'),
            source14: require('../../../assets/streamer.jpg'),
            source15: require('../../../assets/tiktok.jpg'),
            source16: require('../../../assets/fashion.jpg'),
            source17: require('../../../assets/youtuber.jpg'),
            source18: require('../../../assets/vblogger.jpg'),

        };


    }


    componentDidMount() {

    }


    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{ flex: 1.5, marginHorizontal: '4%', justifyContent: 'center', }}>
                    <Text style={{
                        color: '#312f3d',
                        fontSize: wp('5%'),
                        fontWeight: '500',
                        marginBottom: hp('1%')
                    }}>Category content
                    </Text>
                    <Text style={styles.texto}>
                        Choose maximum 2 master categories
                    </Text>
                    <Text style={styles.texto}>
                        with 3 subcategories for each
                    </Text>

                </View>
                <View style={{ flex: 7.5 }}>
                    <ScrollView contentContainerStyle={{ marginHorizontal: '4%' }}>

                        <View style={styles.filas}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={
                                    () => this.props.navigation.navigate("becomeInfluencer7") // ahy que cambiar esto por una pagina parecida
                                }
                            >
                                <Text style={styles.textoprueba}>
                                    Art and {'\n'}Culture
     </Text>
                                <Image source={this.state.source1}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source2 == require("../../../assets/business.jpg")) {
                                        this.setState({
                                            source2: require("../../../assets/1.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source2: require("../../../assets/business.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Business and{'\n'}Profesional
     </Text>
                                <Image source={this.state.source2}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source3 == require("../../../assets/celebrity.jpg")) {
                                        this.setState({
                                            source3: require("../../../assets/18.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source3: require("../../../assets/celebrity.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Celebrity
     </Text>
                                <Image source={this.state.source3}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*   fin de primera  fila */}
                        <View style={styles.filas}>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source4 == require("../../../assets/education.jpg")) {
                                        this.setState({
                                            source4: require("../../../assets/16.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source4: require("../../../assets/education.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Classes and{'\n'}Education
     </Text>
                                <Image source={this.state.source4}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source5 == require("../../../assets/cooking.jpg")) {
                                        this.setState({
                                            source5: require("../../../assets/17.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source5: require("../../../assets/cooking.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Cooking and{'\n'}Foot
     </Text>
                                <Image source={this.state.source5}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source6 == require("../../../assets/carft.jpg")) {
                                        this.setState({
                                            source6: require("../../../assets/19.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source6: require("../../../assets/carft.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Craft and DYI
     </Text>
                                <Image source={this.state.source6}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*   fin fila */}

                        <View style={styles.filas}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source7 == require("../../../assets/manga.jpg")) {
                                        this.setState({
                                            source7: require("../../../assets/13.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source7: require("../../../assets/manga.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Manga
         </Text>
                                <Image source={this.state.source7}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source8 == require("../../../assets/motor.jpg")) {
                                        this.setState({
                                            source8: require("../../../assets/12.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source8: require("../../../assets/motor.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Motor
       </Text>
                                <Image source={this.state.source8}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source9 == require("../../../assets/nature.jpg")) {
                                        this.setState({
                                            source9: require("../../../assets/11.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source9: require("../../../assets/nature.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Nature,{'\n'}Outdoors and {'\n'}Oets
       </Text>
                                <Image source={this.state.source9}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                        </View>
                        {/*   fin fila */}


                        <View style={styles.filas}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source10 == require("../../../assets/podcast.jpg")) {
                                        this.setState({
                                            source10: require("../../../assets/10.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source10: require("../../../assets/podcast.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Podcaster
       </Text>
                                <Image source={this.state.source10}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source11 == require("../../../assets/religion.jpg")) {
                                        this.setState({
                                            source11: require("../../../assets/9.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source11: require("../../../assets/religion.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Religion and{'\n'}Beliefs
       </Text>
                                <Image source={this.state.source11}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source12 == require("../../../assets/tecnologia.jpg")) {
                                        this.setState({
                                            source12: require("../../../assets/5.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source12: require("../../../assets/tecnologia.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Science and{'\n'}Technology
       </Text>
                                <Image source={this.state.source12}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*   fin fila */}

                        <View style={styles.filas}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source13 == require("../../../assets/sports.jpg")) {
                                        this.setState({
                                            source13: require("../../../assets/7.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source13: require("../../../assets/sports.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Sports
         </Text>
                                <Image source={this.state.source13}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source14 == require("../../../assets/streamer.jpg")) {
                                        this.setState({
                                            source14: require("../../../assets/6.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source14: require("../../../assets/streamer.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Streamer
       </Text>
                                <Image source={this.state.source14}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source15 == require("../../../assets/tiktok.jpg")) {
                                        this.setState({
                                            source15: require("../../../assets/4.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source15: require("../../../assets/tiktok.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Tik Tok{'\n'}influencer
       </Text>
                                <Image source={this.state.source15}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>


                        </View>
                        {/*   fin fila */}



                        <View style={[styles.filas, { marginBottom: hp('2%') }]}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source16 == require("../../../assets/fashion.jpg")) {
                                        this.setState({
                                            source16: require("../../../assets/15.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source16: require("../../../assets/fashion.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Fashion and{'\n'}Style
        </Text>
                                <Image source={this.state.source16}
                                    style={{ zIndex: 2, borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%'), marginHorizontal: hp('1.5%') }}
                                onPress={() => {
                                    if (this.state.source17 == require("../../../assets/youtuber.jpg")) {
                                        this.setState({
                                            source17: require("../../../assets/2.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source17: require("../../../assets/youtuber.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Youtuber
            </Text>
                                <Image source={this.state.source17}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, flex: 1, height: hp('15%') }}
                                onPress={() => {
                                    if (this.state.source18 == require("../../../assets/vblogger.jpg")) {
                                        this.setState({
                                            source18: require("../../../assets/3.png")
                                        })
                                    }
                                    else {
                                        this.setState({
                                            source18: require("../../../assets/vblogger.jpg")
                                        })
                                    }
                                }}
                            >
                                <Text style={styles.textoprueba}>
                                    Vlogger
      </Text>
                                <Image source={this.state.source18}
                                    style={{ borderRadius: 10, width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*   fin fila */}

                    </ScrollView>

                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            flex: 1, backgroundColor: '#ff5a60',
                            alignItems: 'center', justifyContent: 'center'
                        }}

                        onPress={() => this.props.navigation.navigate("verifyPhone")}
                    >

                        <Text style={{ color: 'white', fontSize: wp('4%'), letterSpacing: 0.41 }}>
                            Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
