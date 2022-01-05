import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    imageBg: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        // marginTop: 15
    },
    buttonText: {
        color: '#fff',
    },
    slogan : {
        color: 'white',
        backgroundColor: 'rgba(0, 0 , 0, 0.5)',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10
    },
    heroStyles: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    callToActionText: {
        color: '#fff',
        textAlign: 'center',
    },
    logoImg: {
        width: 100,
        height: 100
    }
  });

export default HomeStyles
