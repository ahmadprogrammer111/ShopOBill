// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import Animated, { useSharedValue } from 'react-native-reanimated';

// const AnimButton = (props: any) => {

//     const navigation = useNavigation<any>()

//     console.log("props in anime button", props)

//     const isFocused = props.accessibilityState?.selected;
//     const height = useSharedValue(100);

//     const handlePress = () => {
//         height.value = height.value + 50;
//     };



//     return (
//         <TouchableOpacity onPress={() => {
//             navigation.navigate("HomeScreen")
//             handlePress()
//         }}>

//             <Animated.View
//                 style={{
//                     height,
//                     width: 100,
//                     backgroundColor: 'violet',
//                 }}
//             />



//         </TouchableOpacity>
//     )
// }

// export default AnimButton

// const styles = StyleSheet.create({})