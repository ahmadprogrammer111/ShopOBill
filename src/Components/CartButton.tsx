import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation, useNavigationContainerRef, useNavigationState } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'
import { useRoute } from '@react-navigation/native';

const CartButton = (Props: any) => {

    const { color } = Props


    const navigation = useNavigation<any>()


    const route = useRoute();

    const currentRouteName = useNavigationState((state) => {
        const route = state.routes[state.index];
        return route.name;
    });


    const isPressed = currentRouteName === "CartScreen"

    const handlePress = () => {

        if (!isPressed) {
            setTimeout(() => {
                navigation.navigate('CartScreen');
            }, 200);
        }
    }


    console.log(" pressing value", isPressed)
    console.log('Current route name:', currentRouteName);

    return (

        <View style={styles.rippleWrapper}>
            <Pressable
                onPress={() => { handlePress() }}
                style={[styles.cartView,
                { boxShadow: isPressed ? '0px 4px 6px #a5a5a5' : '0px 0px 0px #a5a5a5' }
                ]}
                android_ripple={{
                    color: '#a8a8a8',
                    borderless: false,
                }}
            >

                <Icon name='shopping-bag' size={25} color={isPressed ? color : "#ffffff"} />

            </Pressable>



        </View >
    )
}

export default CartButton

const styles = StyleSheet.create({


    rippleWrapper: {
        height: 70,
        width: 70,
        borderRadius: 35,
        overflow: 'hidden', //  Clipping done here
        position: 'absolute',
        bottom: '10%',
    },
    cartView: {
        backgroundColor: '#c57dff',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // cartView: {

    //     bottom: "10%",
    //     position: "absolute",
    //     backgroundColor: '#c57dff',
    //     height: 70,
    //     width: 70,
    //     borderRadius: 35,
    //     overflow: "hidden",
    //     alignItems: 'center',
    //     justifyContent: "center"
    // }
})