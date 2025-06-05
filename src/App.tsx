import { ImageComponent, Platform, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Views/HomeScreen';
import ProductScreen from './Views/ProductScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourites from './Views/Favourites';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Profile from './Views/Profile';
import CartScreen from './Views/CartScreen';
import CartButton from './Components/CartButton';
import { store } from './redux/store'
import { Provider } from 'react-redux'
// import AnimButton from './Components/AnimButton';
const App = () => {


  // const tabBarButton = (props: any) => {
  //   return (
  //     <TouchableWithoutFeedback {...props}>
  //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{props.children}</View>
  //     </TouchableWithoutFeedback>)
  // }


  // const BottomStack = createBottomTabNavigator({

  //   screens: {
  //     HomeScreen: { screen: HomeScreen, options: { tabBarIcon: ({ color }) => <Icon name='home' size={20} color={color} /> } },
  //     Favourites: { screen: Favourites, options: { tabBarIcon: ({ color }) => <Icon name='hearto' size={20} color={color} /> } },
  //     Profile: { screen: Profile, options: { tabBarIcon: ({ color }) => <Icon2 name='person-circle' size={25} color={color} /> } },
  //     CartScreen: { screen: CartScreen, options: { tabBarIcon: ({ color }) => <CartButton color={color} /> } }
  //   },
  //   screenOptions: {
  //     headerShown: false,
  //     tabBarShowLabel: false,
  //     tabBarActiveTintColor: '#FFD700',
  //     tabBarButton: tabBarButton

  //   }
  // })



  // const tabBarButton = (props: any) => {
  //   return (
  //     <TouchableWithoutFeedback {...props}>
  //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{props.children}</View>
  //     </TouchableWithoutFeedback>)
  // }


  const BottomStack = createBottomTabNavigator({

    screens: {
      HomeScreen: { screen: HomeScreen, options: { tabBarIcon: ({ color }) => <Icon name='home' size={20} color={color} />, 
      // tabBarButton: (props) => <AnimButton {...props} iconName="home" label="Home" />
     }},
      Favourites: { screen: Favourites, options: { tabBarIcon: ({ color }) => <Icon name='hearto' size={20} color={color} /> } },
      Profile: { screen: Profile, options: { tabBarIcon: ({ color }) => <Icon2 name='person-circle' size={25} color={color} /> } },
      CartScreen: { screen: CartScreen, options: { tabBarIcon: ({ color }) => <Icon1 name='shopping-bag' size={25} color={color} /> } }
    },
    screenOptions: {
      tabBarStyle: {
        backgroundColor: "#ac52f5"
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFD700',
      tabBarInactiveTintColor: "#ffffff"
    },

  })


  const NativeStack = createNativeStackNavigator({
    screens: {
      HomeScreen: HomeScreen,
      ProductScreen: ProductScreen
    },
    screenOptions: {
      headerShown: false
    }
  })


  const Navigation = createStaticNavigation(BottomStack)
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </Provider>

  )
}

export default App

