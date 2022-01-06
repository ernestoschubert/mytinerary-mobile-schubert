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
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        width: 100,
        // marginTop: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
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
        height: 600,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    callToActionText: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 18,
        width: 250
    },
    callToAction: {
        backgroundColor: '#0000009a',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginBottom: 100
    },
    logoImg: {
        width: 100,
        height: 100
    }
  });

export default HomeStyles
