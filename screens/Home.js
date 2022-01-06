import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Image, Alert, ScrollView} from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import citysunset from '../assets/city_sunset.jpg'
import logo from '../assets/mytinerary_logo.png'
import CarouselRender from '../components/CarouselRender'

const Home = () => {
    
    const {container,
        title,
        imageBg,
        button,
        buttonText,
        slogan,
        heroStyles,
        callToActionText,
        callToAction,
        logoImg
    } = HomeStyles


    return (
        <ScrollView>
            <ImageBackground 
            source={citysunset} 
            resizeMode="cover" 
            style={imageBg}>
                <View style={container}>
                    <View style={heroStyles}>
                        <View>
                        <Image
                            style={logoImg}
                            source={logo}
                        />
                        </View>
                        <View>
                            <Text style={title}>
                                Welcome to MyTinerary
                            </Text>
                        </View>
                        <View >
                            <Text style={slogan}>
                                Find your perfect trip, designed by insiders who know and love their cities!
                            </Text>
                        </View>
                    </View>
                    <View>   
                        <View style={callToAction}>
                            <Text style={callToActionText}>
                                Choose your dreams trip! Discover all our trips
                            </Text>                             
                            <TouchableOpacity 
                            onPress={()=> Alert.alert('Hola')}
                            style={button}>
                                <Text style={buttonText}>
                                    Here
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <CarouselRender />
                    </View>
                </View> 
            </ImageBackground>
        </ScrollView>
    )
}


export default Home;
