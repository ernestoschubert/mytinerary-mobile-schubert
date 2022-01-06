import { StyleSheet } from 'react-native';

const CitiesStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#292929',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: '#fff'
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 15
    },
    buttonText: {
        color: '#000',
    },
    cityImg: {
        width: 300,
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15,
    },
    heroCities: {
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    citiesCont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contCity: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityName: {
        color: '#ffffff',
        backgroundColor: '#0000008a',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    inputSearch: {
        backgroundColor: '#fff', 
        width: 200,
        borderRadius: 10, 
        padding: 10, 
        marginTop: 30,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    citiesTitle: {
        fontSize: 24, 
        color: '#fff', 
        fontWeight: 'bold',
        backgroundColor: '#0000009a',
        padding: 10,
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
  });

export default CitiesStyles
