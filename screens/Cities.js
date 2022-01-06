import React, { useEffect } from 'react';
import { Text, View, TextInput, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import CitiesStyles from '../styles/CitiesStyles';

const Cities = (props) => {
    
    const {
        container, 
        title, 
        cityImg, 
        heroCities, 
        citiesCont, 
        contCity, 
        cityName, 
        inputSearch, 
        citiesTitle
    } = CitiesStyles
    
    const worldmap = require('../assets/worldmap.jpg') 

    const {cities, citiesFiltered} = props   
    const loading = <Text>Loading...</Text>
    useEffect(() => {
        props.getCities()
    }, [])
    
    return (
        
        <ScrollView>
            <View style={{backgroundColor: '#292929', height: '100%'}}>
                <ImageBackground
                style={{width: '100%', height: 400}}
                source={worldmap} 
                resizeMode="cover">
                    <View style={heroCities}>
                        <Text style={citiesTitle}>MyTinerary Trips</Text>
                        <TextInput placeholder="Search a city" 
                            style={inputSearch} 
                            onChange={(e) => props.getFiltered(cities , e.nativeEvent.text)}
                        />
                    </View>
                </ImageBackground>
                <View>
                    <View style={citiesCont}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18, margin: 10}}>Cities</Text>
                            {   
                                cities.length === 0 ? loading
                                : 
                                citiesFiltered.length > 0 
                                ?
                                citiesFiltered.map((item, index) => {
                                    const { _id, city, country, src } = item
                                    return (
                                            <View key={_id} style={contCity}>
                                                <TouchableOpacity>
                                                    <ImageBackground 
                                                    source={{uri: src}}
                                                    resizeMode="cover"
                                                    style={cityImg}
                                                    imageStyle={{ 
                                                        borderRadius: 10,
                                                        shadowColor: '#171717',
                                                        shadowOffset: {width: -2, height: 0.5},
                                                        shadowOpacity: 0.2,
                                                        shadowRadius: 3, }}>
                                                        <View>
                                                            <Text style={cityName}>
                                                                {city + " - " + country}
                                                            </Text>
                                                        </View>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            </View>
                                    )
                                    })
                                :
                                <View>
                                    <Text>City not found</Text>
                                </View>
                            }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        citiesFiltered: state.cities.citiesFiltered,
        cities: state.cities.citiesArray
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getFiltered: citiesActions.getFiltered
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)
