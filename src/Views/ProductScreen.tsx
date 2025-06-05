import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductScreen = () => {

    const navigation = useNavigation()



    return (
        <View style={{ flex: 1, backgroundColor: "#f48686", alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Text>To HomeScreen</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ProductScreen

const styles = StyleSheet.create({})