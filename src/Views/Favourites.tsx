import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../Hooks/hooks'

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'
import { addFav, delFav } from '../redux/slices/FavSlice'


const Favourites = () => {


   const fav = useAppSelector((state) => state.Favourites.value)

   const dispatch = useAppDispatch()


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


      const isFav = fav.some((f) => f.title === item.title)

      return (
         <TouchableOpacity
            style={{
               backgroundColor: "white",
               // height: "70%",
               width: 150,
               // alignItems: 'center',
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











   return (


      <View style={styles.container}>
         <View style={styles.subView}>
            <FlatList
               data={fav}
               renderItem={renderItem}
               numColumns={2}
            />
         </View>
      </View>


   )
}

export default Favourites

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   subView: {
      marginVertical: "8%",
   }
})