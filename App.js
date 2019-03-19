import React from "react";
import {Platform,Dimensions} from  "react-native"
import { createStackNavigator, createAppContainer ,
         createDrawerNavigator} from "react-navigation";
//npm install react-navigation
//npm  install react-native-button

import SingUpInicio from "./screens/SinUp_inicio"


import Login  from "./screens/Login";
import ForgotPassword  from "./screens/ForgotPassword";
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
import ConfirmEmail from "./screens/ConfirmEmail";
import ConfirmEmail2 from "./screens/ConfirmEmail2";
import CreateAcount from "./screens/CreateAcount";
import CreateInfluencerProfile  from "./screens/createInfluencerProfile";
import AddPaymentMethod from "./screens/addPaymentMethod";
import  ConfirMailInfluencer from "./screens/confirmemailInfluencer";

import Discover from "./screens/discover";
import DiscoverCategories from "./screens/discoverCategories"
import DiscoverCalendar from "./screens/discoverCalendar"
import DiscoverPreferences from "./screens/discoverPreferences"

import Editinfluencerprofile from "./screens/editInfluencerProfile"

import Search from "./screens/search";
import SearchUsers from "./screens/searchUsers"
import SearchEvents from "./screens/searchevents";
import SearchContent from "./screens/searchcontent";
import SearchCategories from "./screens/searchCategories"


import BookedEvUno  from  "./screens/bookedEventes1"
import BookedEvDos  from  "./screens/bookedEventes2"
import BookedEvTres  from  "./screens/bookedEventes3"
import BookedEventsPresentation from "./screens/bookedEventesPresentation"
import BookedEventsInformative from "./screens/bookedEventesInformative"

import LiveEventDetail from "./screens/liveEvents/liveEventDetail"
import LiveEventDetail2 from "./screens/liveEvents/liveEventDetail2"
import LiveEventDetail3 from "./screens/liveEvents/liveEventDetail3"
import LiveEventDetail4 from "./screens/liveEvents/liveEventDetail4"
import LiveEventStreaming from  "./screens/liveEvents/liveEventStreaming"

import Mensaje1 from "./screens/mensaje1"
import Mensaje2 from "./screens/influencer/mensaje2"



import Profileinfluencer  from  "./screens/profileinfluencer"
//las de abajo faltan
import Profilemiinfluencer  from  "./screens/profileMIinfluencer"
import Profilemiviewer from  "./screens/profileMiViewer"
import Profileviewer from  "./screens/profileViewer"
//-------------------

import Reviews  from "./screens/reviews"
import Reviewsreceived  from "./screens/reviewsReceived"
import Reviewmy  from "./screens/reviewMy"


import  Friends from "./screens/Friends"
import  Attendees from "./screens/Attendees"
import Following from "./screens/Following"

//------------
import Mediacontentsinfluencer from "./screens/mediaContentsInfluencer"
import Mediacontentsmy  from "./screens/mediaContentsMy"
import Mediacontent from "./screens/mediaContents"

import Upcomingevents from "./screens/UpComingEvents"


import  Paymentmethod from "./screens/paymentMethods"
import  Payaddcreditcards from "./screens/payAddCreditcards"
import  Paymentmethodsadded  from "./screens/paymentMethodsAdded"
 
import PublishPri1  from "./screens/publishPrivate/publishPri1"
import PublishPri2  from "./screens/publishPrivate/publishPri2"
import PublishPri3  from "./screens/publishPrivate/publishPri3"
import PublishPri4  from "./screens/publishPrivate/publishPri4"
import PublishPri7  from "./screens/publishPrivate/publishPri7"
import PublishPri10  from "./screens/publishPrivate/publishPri10"

import PublishEven1 from "./screens/publishPrivate/publishEven1"
import PublishEven2 from "./screens/publishPrivate/publishEven2"
import PublishEven2Pricing  from "./screens/publishPrivate/publishEven2Pricing"
import PublisEven2Cover from "./screens/publishPrivate/publishEven2Cover"
import PublishEven4message from "./screens/publishPrivate/publishEven4message"
import PreviewLiveEvent  from "./screens/publishPrivate/previewLiveEvent"

import RequestPri4B from "./screens/publishPrivate/requestPri4B"
import RequestPri4 from "./screens/publishPrivate/requestPri4"
import RequestPri1 from "./screens/publishPrivate/requestPri1"
import RequestPri2 from "./screens/publishPrivate/requestPri2"
import RequestPri3 from "./screens/publishPrivate/requestPri3"


 import RequestPending from "./screens/influencer/RequestPending"
 import RequestAcepted from "./screens/influencer/RequestAcepted"
  import RequestRejected  from "./screens/influencer/RequestRejected"
 import RequestAcepted2 from  "./screens/influencer/requestAcepted2"
 import RequestDetail from "./screens/influencer/requestDetail"

import Vieweredit from "./screens/ViewerEdit"
import ViewerChat from "./screens/viewerChat"

import MyWallet from "./screens/myWallet"
import Transactions from "./screens/transactions"
import TransferTomyAcount from "./screens/transferTomyAcount"
import TransferDetail from "./screens/transferDetail"

 


const RootStack = createStackNavigator(
  { 
    singUpInicio:{
           screen : SingUpInicio,
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

    ActiOne:{
      screen:Activity1,
    },
    ActiToo:{
      screen:Activity2,
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
      screen: CreateInfluencerProfile,
    },
    addPayMet:{
      screen: AddPaymentMethod,
    },


    confirMailInflu:{
      screen:ConfirMailInfluencer,
    },
    discover:{

      screen:Discover,
   
    },
    discoverCategori:{
      screen : DiscoverCategories,
    },
    discoverCalendar:{
     screen : DiscoverCalendar,
    },
    discoverPreferences:{
       screen : DiscoverPreferences,
    },
    editinfluencerprofile:{
      screen :  Editinfluencerprofile,
   },
     liveEventDetail:{
       screen:LiveEventDetail,
    },
    liveEventDetail2:{
      screen:LiveEventDetail2,
   },
   liveEventDetail3:{
    screen:LiveEventDetail3,
 },
 liveEventDetail4:{
  screen:LiveEventDetail4,    
},
liveEventStreaming:{
  screen:LiveEventStreaming,      
},
publishEven1:{
  screen:PublishEven1,
},
publishEven2:{
  screen:PublishEven2,
},
publishEven2Pricing:{
  screen:PublishEven2Pricing,
},
publisEven2Cover:{
  screen:PublisEven2Cover,
},
publishEven4message:{
  screen:PublishEven4message,
},
previewLiveEvent:{
  screen:PreviewLiveEvent,
},
publishPri1:{
  screen:PublishPri1,
},
publishPri2:{
  screen:PublishPri2,
},
publishPri3:{
  screen:PublishPri3,
},
publishPri4:{
  screen:PublishPri4,
},
publishPri7:{
  screen:PublishPri7,
},
publishPri10:{
  screen:PublishPri10,
},
requestPri4:{
  screen:RequestPri4,
},
requestPri4B:{
  screen:RequestPri4B,
},
requestPri1:{
  screen:RequestPri1,
},
requestPri2:{
  screen:RequestPri2,
},
requestPri3:{
  screen:RequestPri3,
},
   requesPendin:{
        screen:RequestPending,
    },
    requestAcepted:{
      screen:RequestAcepted,
    },
    requestAcepted2:{
      screen:RequestAcepted2,
    },
    requestRejected:{
      screen:RequestRejected ,
    },
    RequestDetail:{
      screen:RequestDetail ,
    },
    search:{
      screen:Search,
    },
    searchuser:{
      screen:SearchUsers,
    },
    searchEvent:{
      screen:SearchEvents,
    },
    searchContent:{
      screen:SearchContent,
    },
    SearchCateg:{
      screen:SearchCategories,
    },
  //Live events
    boked1:{ 
      screen:BookedEvUno,
    },
    boked2:{
      screen:BookedEvDos,
    },
    boked3:{
      screen:BookedEvTres,
    },
    boked4:{
      screen:BookedEventsPresentation,
    },
    boked5:{
      screen:BookedEventsInformative,
    },
    mensa1:{
     screen:Mensaje1,
    },
    mensa2:{
      screen:Mensaje2,
    },
    addParticip1:{
      screen:AddParticip1,
    },
    createGroup:{
      screen:CreateGroup
    },
    chatGroup:{
      screen:ChatGroup
    },
    viewerChat:{
       screen : ViewerChat,
    },
    profile1:{
      screen:Profileinfluencer,
    },
    profile2:{
      screen:Profilemiinfluencer ,
    },
    profile3:{
      screen:Profilemiviewer,
    },
    profile4:{
      screen:Profileviewer,
    },

    reviewUno:{
      screen:Reviews,
    },
    reviewDos:{
      screen:Reviewsreceived,
    },
    reviewTres:{
      screen:Reviewmy,
    },
     friends:{
      screen:Friends,
    },
    atends:{
      screen:Attendees,
    },

    followin:{
      screen:Following,
    },
    mediacontenInflu:{
      screen:Mediacontentsinfluencer,
    },
    mediacontent:{
      screen: Mediacontent,
    },
    mediacontentsmy:{
      screen: Mediacontentsmy,
    },
    upcoevent:{
      screen:Upcomingevents,
    },
    paymetho1:{
      screen:Paymentmethod,
    },
    paymetho2:{
      screen:Payaddcreditcards,
    },
    paymetho3:{
      screen:Paymentmethodsadded ,
    },
    vieweredit:{
       screen:Vieweredit,
    },
     myWallet:{
       screen:MyWallet,
    }
    ,
    transactions :{
       screen:Transactions , 
    } ,
    transferTomyAcount :{
       screen: TransferTomyAcount
    } ,
    transferDetail:{
       screen: TransferDetail
    }   
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