import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ProductScreen from './ProductScreen'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'


import { SearchBar } from 'react-native-screens'
import { useAppDispatch, useAppSelector } from '../Hooks/hooks'
import { addFav, delFav, FavSlice } from '../redux/slices/FavSlice'
import Favourites from './Favourites'


const HomeScreen = () => {

    const dispatch = useAppDispatch()

    const fav = useAppSelector((state) => state.Favourites.value)

    const [search, setSearch] = useState("")




    // const [newItem, setNewItem] = useState([])






    const Items = [
        { title: "food apple", price: '5$' },
        { title: "lead pencil", price: '50$' },
        { title: "bag personal", price: '35$' },
        { title: "bottle soda classic", price: '5$' },
        { title: "lead pencil", price: '15$' },
        { title: "lead pencil", price: '500$' }
    ]
    const Categories = [
        { id: "1", title: "Eatables", icon: "food-apple", color: "#ff3535", c2: "#ffd3d0" },
        { id: "2", title: "Stationery", icon: "lead-pencil", color: '#e86900', c2: "#fecfab" },
        { id: "3", title: "Goods", icon: "bag-personal", color: '#d7de5b', c2: "#fff2c8" },
        { id: "4", title: "Drinks", icon: "bottle-soda-classic", color: '#e8004d', c2: "#ffd3d0" },
        { id: "5", title: "e", icon: "lead-pencil", color: 'red', c2: "#ffd3d0" },
        { id: "6", title: "f", icon: "lead-pencil", color: 'red', c2: "#ffd3d0" }
    ]

    const renderCate = ({ item }: any) => {
        return (
            <TouchableOpacity key="id" style={styles.renderCate}>
                <View style={{ height: 55, width: 55, backgroundColor: item.c2, alignItems: 'center', justifyContent: 'center', borderRadius: 35, }}>
                    <Icon2 name={item.icon} size={30} color={item.color} style={{}} />
                </View>
                <Text style={{ marginTop: 18, fontFamily: 'VarelaRound-Regular', fontSize: 10 }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }


    // const [isPressed, setIsPressed] = useState<Boolean | null>(false)


    interface Product {
        title: string,
        price: string,
    }

    const handlePress = (item: Product) => {

        const exists = fav.some((element) => element.title === item.title)
        if (exists) {
            dispatch(delFav(item))
        } else {
            dispatch(addFav(item))
        }
    }

    const renderItem = ({ item }: any) => {

        const isFav = fav.some((f) => f.title == item.title)
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: "white",
                    height: "70%",
                    width: 150,
                    // marginVertical: 10,
                    marginHorizontal: 14,
                    justifyContent: "space-between"
                }}
            >
                <Pressable onPress={() => handlePress(item)}>
                    {isFav ?
                        <Icon2 name='cards-heart' size={20} color='#ff2525' style={{ alignSelf: "flex-end", margin: 10, }} />
                        : <Icon2 name='cards-heart-outline' size={20} color='#838383' style={{ alignSelf: "flex-end", margin: 10, }} />

                    }
                </Pressable>
                <Image source={require("./../Assets/Images/p2.png")}
                    resizeMode='cover'
                    style={{ height: "35%", width: "50%", alignSelf: 'center' }}
                />
                <Text style={{ textAlign: "center", fontFamily: "Baloo2-Bold", color: "#a45ae0" }}>{item.price}</Text>
                <Text style={{ textAlign: "center", fontFamily: "Baloo2-SemiBold", fontSize: 18 }}>{item.title}</Text>

                <View style={{ backgroundColor: '#e8e8e8', height: 1.5 }} />
                <TouchableOpacity style={{ paddingTop: 8, flexDirection: "row", justifyContent: 'center', gap: 6, marginBottom: 8 }}>
                    <Icon3 name='handbag' size={20} color="#ac52f5" />
                    <Text style={{ textAlign: "center", fontFamily: "Baloo2-Medium", fontSize: 15, }}>Add to Cart</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }


    const navigation = useNavigation<any>()


    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <Icon name="search" size={20} color="#9a9a9a" style={styles.searchIcon} />
                <TextInput value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.searchInput}
                    placeholder='Search keywords'
                />
            </View>

            <View style={{ height: "3%" }} />

            <View style={{ backgroundColor: "red", height: "33%" }}>
                <Image source={require("./../Assets/Images/grocery.png")}
                    resizeMode="stretch"
                    style={styles.imageMain}
                />
            </View>

            <View style={{ height: "3%" }} />

            <LinearGradient colors={["#FFFFFF", "#f1f1f1", "#e8e8e8",]}
                style={styles.subContainer}
            >

                <TouchableOpacity style={styles.categoriesContainer}>
                    <Text style={styles.categories}>Categories</Text>
                    <Icon1 name='chevron-right' color="#a9a9a9" size={25} />
                </TouchableOpacity>




                <View style={{ height: "28%" }} >
                    <FlatList
                        data={Categories}
                        renderItem={renderCate}
                        horizontal={true}
                        style={{ height: 1 }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>



                <TouchableOpacity style={styles.categoriesContainer}>
                    <Text style={styles.categories}>Featured</Text>
                    <Icon1 name='chevron-right' color="#a9a9a9" size={25} />
                </TouchableOpacity>


                <View style={{ height: "4%" }} />
                <View style={{ height: "68%" }}>
                    <FlatList
                        data={Items}
                        renderItem={renderItem}
                        horizontal={true}
                    />
                </View>


            </LinearGradient>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    subContainer: {
        // flex: 1
        height: '60%'
    },
    searchBar: {
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "space-between",
        borderRadius: 5,
        height: "5.5%"
    },
    searchIcon: {
        margin: 10,
    },
    searchInput: {
        // backgroundColor: 'red',
        color: '#676767',
        width: "80%",
        marginBottom: -5,
        fontFamily: 'Baloo2-Regular',
        fontSize: 17,
    },
    imageMain: {
        height: "100%",
        width: "100%",
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: "1.2%",
    },
    categories: {
        fontSize: 20,
        fontFamily: "Baloo2-Medium"
    },
    renderCate: {
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: 15,
        // backgroundColor: 'red'
    },


})