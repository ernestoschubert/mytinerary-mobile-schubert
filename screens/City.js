import React, { useEffect, useParams } from 'react';
// import Itineraries from '../components/Itineraries';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions';

const City = (props) => {    

    const id = useParams()

    useEffect(() => {
        props.getCities();
        props.getCity(id);
        props.getCityItineraries(id);
    }, [])
    

    const { cities, itinerary, city } = this.props
    
    return (   
        <ScrollView>
            <View className="d-flex justify-content-center align-center">
                <View className="hero-city" key={city._id} style={{backgroundImage: `URL(${city.src})`, backgroundSize: 'cover'}}>
                    <View className="place-cont">
                        <Text>{ city.city === undefined ? 'Loading...' : city.city }</Text>
                        <Text>{ city.country }</Text>
                    </View>
                </View>
                <Text className="itine-text italic-shadow mb-3">Itineraries</Text>

                {   cities.length === 0 ? 'Loading...' :
                    itinerary.length > 0 ?
                    itinerary.map((itine, index) => {
                        return (
                            <View key={index}>
                                {/* <Itineraries itinerary={itine}/> */}
                            </View>
                        )
                    })
                    :
                    <View className="no-itine">
                        <Text>There are no itineraries yet for {city.city}</Text>
                        {/* <Image source="/assets/comingsoon.png" alt ="coming soon"/> */}
                    </View>
                }

                {/* <Link to="/cities" className="mb-4 mt-4"><Button variant="warning">Go back Cities</Button></Link> */}
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.citiesArray,
        city: state.cities.city,
        itinerary: state.itineraries.itinerary
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getCity: citiesActions.getCity,
    getCityItineraries: itinerariesActions.getCityItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
