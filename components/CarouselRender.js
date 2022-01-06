import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'



export default function CarouselRender() {
const cities = [
    {
    id: 1,
    city: "Mykonos",
    country: "Grecee",
    src: "https://i.imgur.com/2Lmfw4k.jpg",
    },
    {
    id: 2,
    city: "Cancun",
    country: "Mexico",
    src: "https://i.imgur.com/H0nk5Vh.jpg",
    },
    {
    id: 3,
    city: "Pamukkale",
    country: "Turkey",
    src: "https://i.imgur.com/tDUibZk.jpg",
    },
    {
    id: 4,
    city: "Abu Dhabi",
    country: "Arab Emirates",
    src: "https://i.imgur.com/YhoRL1Q.jpg",
    },
    {
    id: 5,
    city: "New York",
    country: "United States",
    src: "https://i.imgur.com/dCMCpw6.jpg",
    },
    {
    id: 6,
    city: "Barcelona",
    country: "Spain",    
    src: "https://i.imgur.com/szXgDUi.jpg",
    },
    {
    id: 7,
    city: "London",
    country: "England",
    src: "https://i.imgur.com/sXlWW7w.jpg",
    },
    {
    id: 8,
    city: "Hong Kong",
    country: "China",
    src: "https://i.imgur.com/Wx9RWN0.jpg",
    },
    {
    id: 9,
    city: "Machu Picchu",
    country: "Peru",
    src: "https://i.imgur.com/xAqJP8F.jpg",
    },
    {
    id: 10,
    city: "Isla de Pascua",
    country: "Chile",
    src: "https://i.imgur.com/fAI3vZz.jpg",
    },
    {
    id: 11,
    city: "Cairo",
    country: "Egypt",
    src: "https://i.imgur.com/Yjq1Pyz.jpg",
    },
    {
    id: 12,
    city: "Rome",
    country: "Italy",
    src: "https://i.imgur.com/TpTZCrX.jpg",
    }
]

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.slide} >
                <ImageBackground source={{uri: item.src }} style={styles.image} imageStyle={{borderRadius:15}} >
                    <Text style={styles.cityName}>{item.city}</Text>
                </ImageBackground>
            </View >
        )
    }
    return (
        <View style={styles.containerCarrusel}>
        <Text style={styles.carouselTitles}>POPULAR MYTINERARIES</Text>
        <Carousel
            data={cities}
            sliderWidth={900}
            itemWidth={450}
            renderItem={renderItem}
            layout={"default"}
            loop={true}
            autoplay={true}
        />

    </View>
    )
}


const styles = StyleSheet.create({

    image: {
        alignSelf:"center",
        resizeMode:"cover",
        justifyContent: "center",
        height: 400,
        width: 300,
    },
    cityName: {
        color: "whitesmoke",
        fontSize: 42,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    containerCarrusel: {
        width:"100%",
        marginBottom: 20,
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    slide:{
        width:"100%",
        backgroundColor: "#0000009a",
        paddingVertical: 20,
    },
    carouselTitles:{
        alignSelf:"center",
        padding:10,
        backgroundColor: "#0000009a",
        borderRadius: 10,
        marginBottom: 10,
        color:"#dad8d8",
        fontSize:25,
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:30
    }


})
