import React from "react";
import { Platform, Dimensions, Image } from "react-native"
import {
  createStackNavigator, createAppContainer, createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
//npm install react-navigation
//npm  install react-native-button
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// import EventContents from "./components/eventContents"

import Boorramos from "./screens/boorramos"

import SingUpInicio from "./screens/SinUp_inicio"


import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import CreateViewerProfile from "./screens/createViewerProfile";

//CREATE CHAT GROUP
import AddParticip1 from "./screens/publishPrivate/AddParticip1" //Addparticypi1 incluye addparticipe2
import CreateGroup from "./screens/publishPrivate/createGroup"
import ChatGroup from "./screens/publishPrivate/chatGroup"



import Activity1 from "./screens/Activity1"
import Activity2 from "./screens/influencer/Activity2"

import Become1 from "./screens/Become1";
import Become2 from "./screens/Become2";
import Become3 from "./screens/Become3";

import BecomeInfluencer7 from "./screens/BecomeInfluencer7"
import BecomeInfluencer5 from "./screens/becomeinfluencer5"


import BookingStats from "./screens/influencer/bookingStats"



import ConfirmEmail from "./screens/ConfirmEmail";
import ConfirmEmail2 from "./screens/ConfirmEmail2";
import CreateAcount from "./screens/CreateAcount";
import CreateInfluencerProfile from "./screens/createInfluencerProfile";
import AddPaymentMethod from "./screens/addPaymentMethod";
import ConfirMailInfluencer from "./screens/confirmemailInfluencer";

import Discover from "./screens/discover";
import DiscoverCategories from "./screens/discoverCategories"
import DiscoverCalendar from "./screens/discoverCalendar"
import DiscoverPreferences from "./screens/discoverPreferences"
import DiscoPrefeFecha from "./screens/discoPrefeFecha"
import DiscoPrefeLanguage from "./screens/discoPrefeLanguaje"


import Editinfluencerprofile from "./screens/editInfluencerProfile"

import InfluencerEstadisticas from "./screens/influencer/influencerEstadisticas"
import InfluencerMenu from "./screens/influencermenu"

import Search from "./screens/search";
import SearchEvents from "./screens/searchevents";
import SearchContent from "./screens/searchcontent";
import SearchCategories from "./screens/searchCategories"
import SearchOptions from "./screens/searchOptions"

import BookedEvUno from "./screens/bookedEventes1"
import BookedEvDos from "./screens/bookedEventes2"
import BookedEvTres from "./screens/bookedEventes3"
import BookedEventsPresentation from "./screens/bookedEventesPresentation"
import BookedEventsInformative from "./screens/bookedEventesInformative"

import LiveEventDetail from "./screens/liveEvents/liveEventDetail"
import LiveEventDetail2 from "./screens/liveEvents/liveEventDetail2"
import LiveEventDetail3 from "./screens/liveEvents/liveEventDetail3"
import LiveEventDetail4 from "./screens/liveEvents/liveEventDetail4"
import LiveEventStreaming from "./screens/liveEvents/liveEventStreaming"

import Mensaje1 from "./screens/mensaje1"
import Mensaje2 from "./screens/influencer/mensaje2"



import Profileinfluencer from "./screens/profileinfluencer"
//las de abajo faltan
import Profilemiinfluencer from "./screens/profileMIinfluencer"
import Profilemiviewer from "./screens/profileMiViewer"
import Profileviewer from "./screens/profileViewer"
//-------------------

import Reviews from "./screens/reviews"
import Reviewsreceived from "./screens/reviewsReceived"
import Reviewmy from "./screens/reviewMy"


import Friends from "./screens/Friends"
import Attendees from "./screens/Attendees"
import Following from "./screens/Following"

//------------
import Mediacontentsinfluencer from "./screens/mediaContentsInfluencer"
import Mediacontentsmy from "./screens/mediaContentsMy"
import Mediacontent from "./screens/mediaContents"

import MyLiveEvents from "./screens/influencer/myliveEvents"
import MyLiveEventsArticle from "./screens/influencer/myliveEventsArticle"

import Upcomingevents from "./screens/UpComingEvents"


import Paymentmethod from "./screens/paymentMethods"
import Payaddcreditcards from "./screens/payAddCreditcards"
import Paymentmethodsadded from "./screens/paymentMethodsAdded"

import PublishPri1 from "./screens/publishPrivate/publishPri1"
import PublishPri2 from "./screens/publishPrivate/publishPri2"
import PublishPri3 from "./screens/publishPrivate/publishPri3"
import PublishPri4 from "./screens/publishPrivate/publishPri4"
import PublishPri5 from "./screens/publishPrivate/publishPri5"
import PublishPri7 from "./screens/publishPrivate/publishPri7"
import PublishPri8 from "./screens/publishPrivate/publishPri8"
import PublishPri10 from "./screens/publishPrivate/publishPri10"

import PublishEven1 from "./screens/publishPrivate/publishEven1"
import PublishEven2 from "./screens/publishPrivate/publishEven2"
import PublishEven2Pricing from "./screens/publishPrivate/publishEven2Pricing"
import PublisEven2Cover from "./screens/publishPrivate/publishEven2Cover"
import PublishEven4message from "./screens/publishPrivate/publishEven4message"
import PreviewLiveEvent from "./screens/publishPrivate/previewLiveEvent"


import RecordVideo1 from "./screens/publishPrivate/recordVideo1"
import RecordVideo2 from "./screens/publishPrivate/recordVideo2"

import RequestPri4B from "./screens/publishPrivate/requestPri4B"
import RequestPri4 from "./screens/publishPrivate/requestPri4"
import RequestPri1 from "./screens/publishPrivate/requestPri1"
import RequestPri2 from "./screens/publishPrivate/requestPri2"
import RequestPri3 from "./screens/publishPrivate/requestPri3"

///**mirar esta nueva gotmy 1julio */
import RequesPrivMeting from "./screens/requesPrivMeting"
import PrivMetingProposal from "./screens/privMetingProposal"
import SelectCategory from "./screens/selectCategory"

import SubCategoryInfluencer from "./screens/subcategoryInfluencer"





import RequestPending from "./screens/influencer/RequestPending"
import RequestAcepted from "./screens/influencer/RequestAcepted"
import RequestRejected from "./screens/influencer/RequestRejected"
import RequestAcepted2 from "./screens/influencer/requestAcepted2"
import RequestDetail from "./screens/influencer/requestDetail"

import Vieweredit from "./screens/ViewerEdit"
import ViewerChat from "./screens/viewerChat"
import ViewerMenu from "./screens/viewermenu"

import Verification1 from "./screens/influencer/verification1"
import Verification2 from "./screens/influencer/verification2"


import MyWallet from "./screens/myWallet"
import Transactions from "./screens/transactions"
import TransferDetail from "./screens/transferDetail"


//Paginas Streaming

import CoachViewer from "./screens/streaming/coachViewer"
import Dos from "./screens/streaming/dos"

import CoachInfluencer from "./screens/streaming/coachInfluencer"
import ChooceModerator from "./screens/streaming/chooceModerator"
import ModoInfluencer from "./screens/streaming/modoInfluencer"

//ultimas vistas :





import PastStreaming from "./src/screens/PastStreaming"
import TypePrivateMeting from "./src/screens/TypePrivateMeting"
import Description from "./src/screens/Description"
import Estimation from "./src/screens/Estimation"
import Choose from "./src/screens/ChooseDate"
import MeetingProposal2 from "./src/screens/MeetingProposal2"
import MeetingProposal3 from "./src/screens/MeetingProposal3"
import MeetingProposal5 from "./src/screens/MeetingProposal5"
import MeetingProposalAcepted from "./src/screens/MeetingProposalAcepted"
import ChatInfluencer from "./src/screens/ChatInfluencer"
import MyWalletInfluencer from "./src/screens/MyWalletInfluencer"
import TransactionsInflu from "./src/screens/TransactionsInflu"
import TransactionDetaInflu from "./src/screens/TransactionDetaInflu"
import BecomeInfluencerStep6 from "./src/screens/BecomeInfluencerStep6"
import VerifyPhone from "./src/screens/VerifyPhone"
import VerifyCode from "./src/screens/Verifycode"
import VerificationStep3 from "./src/screens/VerificationStep3"
import VerificationStep4 from "./src/screens/VerificationStep4"
import Billing from "./src/screens/Billing"
import BillDetail from "./src/screens/BillDetail"
import Settings from "./src/screens/Settings"
import EditInfluencerCategories from "./src/screens/EditInfluencerCategories"
import TransferToMyAcountInflu from "./src/screens/TransferToMyAcountInflu"
import TransacStripe from "./src/screens/TransacStripe"
import TransacPaypal from "./src/screens/TransacPaypal"
//creacion de los tabs

const TabDiscover = createStackNavigator(
  {
    discover: {
      screen: Discover,
    }
  })

const TabSearch = createStackNavigator(
  {
    search: {
      screen: Search,
    }
  })


const TabLiveEvent = createStackNavigator(
  {
    boked1: {
      screen: BookedEvUno,
    }
  })


const TabMensaje = createStackNavigator(
  {
    mensa1: {
      screen: Mensaje1,
    }
  })

const TabActivi = createStackNavigator(
  {
    ActiOne: {
      screen: Activity1,
    }
  })


const DashboardTabRoutes = createBottomTabNavigator(
  {
    Discover: {
      screen: TabDiscover,

      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/discoE.jpg') : require('./assets/pentaicon/discoN.jpg');


          return <Image source={iconName}
            style={{ width: 20, height: 20 }} />;
        }
      })


    },
    Search: {
      screen: TabSearch,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/searchE.jpg') : require('./assets/pentaicon/searchN.jpg');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })
    },
    "Live Events": {
      screen: TabLiveEvent,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/eventE.jpg') : require('./assets/pentaicon/eventN.jpg');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })

    },
    Messages: {
      screen: TabMensaje,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/mesaE.jpg') : require('./assets/pentaicon/mesaN.jpg');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })


    },
    Activity: {
      screen: TabActivi,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/ActyE.jpg') : require('./assets/pentaicon/ActyN.jpg');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {

      activeTintColor: '#ff5a60',
      labelStyle: {
        fontSize: 12,

      },
      style: {
        backgroundColor: '#312f3d',
      },

    }

  }

)

//para TABS  de influencer
const TabMyliveEvents = createStackNavigator(
  {
    myLiveEvents: {
      screen: MyLiveEvents,
    }
  })

const TabInfluencerStats = createStackNavigator(
  {
    influencerEstadisticas: {
      screen: InfluencerEstadisticas,
    }
  })

const TabPending = createStackNavigator(
  {
    requesPendin: {
      screen: RequestPending,
    }
  })

const TabMessages = createStackNavigator(
  {
    mensa2: {
      screen: Mensaje2,
    },
  })

const TabActivity = createStackNavigator(
  {
    ActiToo: {
      screen: Activity2,
    }
  }

)







const DashboardTabInfluencer = createBottomTabNavigator(
  {
    "My Events": {
      screen: TabMyliveEvents,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/influe/eventsE.png') : require('./assets/pentaicon/influe/events.png');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })



    },
    "My Stats": {
      screen: TabInfluencerStats,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/influe/statsE.png') : require('./assets/pentaicon/influe/stats.png');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })

    },
    Request: {
      screen: TabPending,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/influe/requestSelec.png') : require('./assets/pentaicon/influe/request.png');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })
    },
    Messages: {
      screen: TabMessages,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/influe/mesageSelec.png') : require('./assets/pentaicon/influe/messages.png');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })
    },
    Activity: {
      screen: TabActivity,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {

          let iconName;
          iconName = focused ? require('./assets/pentaicon/influe/activityselec.png') : require('./assets/pentaicon/influe/activity.png');


          return <Image source={iconName}
            style={{ width: 25, height: 25 }} />;
        }
      })
    },
  },
  {


    initialRouteName: 'Request',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: "#CDCDCD",

      labelStyle: {
        fontSize: 12,

      },
      style: {
        backgroundColor: '#ff5a60',
      },

    }

  }


)



// DRAWER  VIEWER

const stackMyViewerProfile = createStackNavigator({
  profile3: Profilemiviewer,
})

const stackedit = createStackNavigator({
  vieweredit: Vieweredit,
})

const stackpaymen = createStackNavigator({
  paymetho1: Paymentmethod,
})


const drawMenu = createDrawerNavigator(
  {
    discover: {
      screen: DashboardTabRoutes,
    },
    profile3: {
      screen: stackMyViewerProfile,
    },
    vieweredit: {
      screen: stackedit,
    },
    vieweredit: {
      screen: stackedit,
    },
    paymetho1: {
      screen: stackpaymen,
    },

  }, {
    drawerWidth: wp('80%'),
    initialRouteName: 'discover',
    // drawerBackgroundColor:'#544DEB',
    contentComponent: ViewerMenu,
    contentOptions: {
      inactiveTintColor: 'white',
    },

  },


);

//DRAWER INFLUENCER 

const stackMyInfluencerProfile = createStackNavigator({
  profile2: Profilemiinfluencer,
})

const stackMyWalletInfluencer = createStackNavigator({
  myWalletInfluencer: MyWalletInfluencer,

})

const stackBilling = createStackNavigator({
  billing: Billing,

})

const stackSettings = createStackNavigator({
  settings: Settings,

})


const drawMenu2 = createDrawerNavigator(
  {
    requesPendin: {
      screen: DashboardTabInfluencer,
    },
    profile2: {
      screen: stackMyInfluencerProfile,
    },
    myWalletInfluencer: {
      screen: stackMyWalletInfluencer,
    },
    billing: {
      screen: stackBilling,
    },
    settings: {
      screen: stackSettings,
    }


  }, {
    drawerWidth: wp('80%'),
    initialRouteName: 'requesPendin',
    // drawerBackgroundColor:'#544DEB',
    contentComponent: InfluencerMenu,
    contentOptions: {
      inactiveTintColor: 'white',
    },

  },


);




const RootStack = createStackNavigator(
  {
    singUpInicio: {
      screen: SingUpInicio,
    },


    Log: {
      screen: Login,


    },
    forgotPass: {
      screen: ForgotPassword,
    },
    createViewerProfile: {
      screen: CreateViewerProfile,
    },

    ActiOne: {
      screen: Activity1,
    },
    ActiToo: {
      screen: Activity2,
    },
    Become1: {
      screen: Become1
    },
    Become2: {
      screen: Become2,
    },
    Become3: {
      screen: Become3,
    },
    becomeInfluencer5: {
      screen: BecomeInfluencer5,
    },

    becomeInfluencer7: {
      screen: BecomeInfluencer7,
    },
    bookingStats: {
      screen: BookingStats,
    },
    ConfirmEmail: {
      screen: ConfirmEmail,
    },
    ConfirmEmail2: {
      screen: ConfirmEmail2,
    },
    createAcu: {
      screen: CreateAcount,
    },
    createInfluProf: {
      screen: CreateInfluencerProfile, // seri el become4 en las nuevas vistas
    },
    addPayMet: {
      screen: AddPaymentMethod,
    },


    confirMailInflu: {
      screen: ConfirMailInfluencer,
    },
    discover: {

      screen: drawMenu,

      navigationOptions: {
        header: null,
      }
    },
    discoverCategori: {
      screen: DiscoverCategories,
    },
    discoverCalendar: {
      screen: DiscoverCalendar,
    },
    discoverPreferences: {
      screen: DiscoverPreferences,
    },
    discoPrefeFecha: {
      screen: DiscoPrefeFecha,
    },
    discoPrefeLanguage: {
      screen: DiscoPrefeLanguage,
    },
    editinfluencerprofile: {
      screen: Editinfluencerprofile,
    },
    influencerEstadisticas: {
      screen: InfluencerEstadisticas,
    },
    liveEventDetail: {
      screen: LiveEventDetail,
    },
    liveEventDetail2: {
      screen: LiveEventDetail2,
    },
    liveEventDetail3: {
      screen: LiveEventDetail3,
    },
    liveEventDetail4: {
      screen: LiveEventDetail4,
    },
    liveEventStreaming: {
      screen: LiveEventStreaming,
    },
    publishEven1: {
      screen: PublishEven1,
    },
    publishEven2: {
      screen: PublishEven2,
    },
    publishEven2Pricing: {
      screen: PublishEven2Pricing,
    },
    publisEven2Cover: {
      screen: PublisEven2Cover,
    },
    publishEven4message: {
      screen: PublishEven4message,
    },
    previewLiveEvent: {
      screen: PreviewLiveEvent,
    },
    publishPri1: {
      screen: PublishPri1,
    },
    publishPri2: {
      screen: PublishPri2,
    },
    publishPri3: {
      screen: PublishPri3,
    },
    publishPri4: {
      screen: PublishPri4,
    },
    publishPri5: {
      screen: PublishPri5,
    },
    publishPri7: {
      screen: PublishPri7,
    },
    publishPri8: {
      screen: PublishPri8,
    },
    publishPri10: {
      screen: PublishPri10,
    },
    recordVideo1: {
      screen: RecordVideo1,
    },
    recordVideo2: {
      screen: RecordVideo2,
    },
    requestPri4: {
      screen: RequestPri4,
    },
    requestPri4B: {
      screen: RequestPri4B,
    },
    requestPri1: {
      screen: RequestPri1, //requesmeting 1
    },
    requestPri2: {
      screen: RequestPri2,
    },
    requestPri3: {
      screen: RequestPri3,
    },
    requesPendin: {
      screen: drawMenu2,

      navigationOptions: {
        header: null
      }
    },
    requestAcepted: {
      screen: RequestAcepted,
    },
    requestAcepted2: {
      screen: RequestAcepted2,
    },
    requestRejected: {
      screen: RequestRejected,
    },
    RequestDetail: {
      screen: RequestDetail,
    },
    search: {
      screen: Search,
    },
    searchEvent: {
      screen: SearchEvents,
    },
    searchContent: {
      screen: SearchContent,
    },
    SearchCateg: {
      screen: SearchCategories,
    },
    searchOptions: {
      screen: SearchOptions,
    },
    subCategoryInfluencer: {
      screen: SubCategoryInfluencer,
    },
    //Live events
    boked1: {
      screen: BookedEvUno,
    },
    boked2: {
      screen: BookedEvDos,
    },
    boked3: {
      screen: BookedEvTres,
    },
    boked4: {
      screen: BookedEventsPresentation,
    },
    boked5: {
      screen: BookedEventsInformative,
    },
    mensa1: {
      screen: Mensaje1,
    },
    mensa2: {
      screen: Mensaje2,
    },
    addParticip1: {   // chat
      screen: AddParticip1,
    },
    createGroup: {
      screen: CreateGroup
    },
    chatGroup: {
      screen: ChatGroup
    },
    viewerChat: {
      screen: ViewerChat,
    },
    profile1: {
      screen: Profileinfluencer,
    },
    profile2: {
      screen: Profilemiinfluencer,
    },
    profile3: {
      screen: Profilemiviewer,
    },
    profile4: {
      screen: Profileviewer,
    },

    reviewUno: {
      screen: Reviews,
    },
    reviewDos: {
      screen: Reviewsreceived,
    },
    reviewTres: {
      screen: Reviewmy,
    },
    friends: {
      screen: Friends,
    },
    atends: {
      screen: Attendees,
    },

    followin: {
      screen: Following,
    },
    mediacontenInflu: {
      screen: Mediacontentsinfluencer,
    },
    mediacontent: {
      screen: Mediacontent,
    },
    mediacontentsmy: {
      screen: Mediacontentsmy,
    },
    myLiveEvents: {
      screen: MyLiveEvents,
    },
    myLiveEventsArticle: {
      screen: MyLiveEventsArticle,
    },
    upcoevent: {
      screen: Upcomingevents,
    },
    paymetho1: {
      screen: Paymentmethod,
    },
    paymetho2: {
      screen: Payaddcreditcards,
    },
    paymetho3: {
      screen: Paymentmethodsadded,
    },
    vieweredit: {
      screen: Vieweredit,
    },
    verification1: {
      screen: Verification1,
    },
    verification2: {
      screen: Verification2,
    },
    myWallet: {
      screen: MyWallet,
    }
    ,
    transactions: {
      screen: Transactions,
    },

    transferDetail: {
      screen: TransferDetail
    },

    boorramos: {
      screen: Boorramos
    },
    //*************** streamings ************
    coachViewer: {
      screen: CoachViewer,
    },
    dos: {
      screen: Dos,
    },
    coachInfluencer: {
      screen: CoachInfluencer,
    },
    chooceModerator: {
      screen: ChooceModerator,
    },
    modoInfluencer: {
      screen: ModoInfluencer,
    },
    /// cambiar gotmy 1julio
    requesPrivMeting: {
      screen: RequesPrivMeting,
    },
    privMetingProposal: {
      screen: PrivMetingProposal,
    },
    selectCategory: {
      screen: SelectCategory,
    },

    pastStreaming: {
      screen: PastStreaming,
    },
    typePrivateMeting: {
      screen: TypePrivateMeting,
    },
    description: {
      screen: Description,
    },
    estimation: {
      screen: Estimation,
    },
    meetingProposal2: {
      screen: MeetingProposal2,
    },
    meetingProposal3: {
      screen: MeetingProposal3,
    },
    meetingProposal5: {
      screen: MeetingProposal5,
    },
    meetingProposalAcepted: {
      screen: MeetingProposalAcepted,
    },
    chatInfluencer: {
      screen: ChatInfluencer,
    },
    transactionsInflu: {
      screen: TransactionsInflu,
    },
    transactionDetaInflu: {
      screen: TransactionDetaInflu,
    },
    becomeInfluencerStep6: {
      screen: BecomeInfluencerStep6,
    },
    verifyPhone: {
      screen: VerifyPhone,
    },
    verifyCode: {
      screen: VerifyCode,
    },
    verificationStep3: {
      screen: VerificationStep3,
    },
    verificationStep4: {
      screen: VerificationStep4,
    },
    billDetail: {
      screen: BillDetail,
    },
    editInfluencerCategories: {
      screen: EditInfluencerCategories,
    },
    transferToMyAcountInflu: {
      screen: TransferToMyAcountInflu,
    },
    transacStripe: {
      screen: TransacStripe,
    },
    transacPaypal: {
      screen: TransacPaypal,
    },
    choose: {
      screen: Choose,
    },
  },


  {
    initialRouteName: 'singUpInicio',

  }
);






const AppContainer = createAppContainer(RootStack);



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


