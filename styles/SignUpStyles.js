import { StyleSheet } from 'react-native';

const SignUpStyles = StyleSheet.create({
    inputStyle: {
        padding: 10, 
        borderRadius: 8,
        marginBottom: 10,
        fontSize: 16,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    pickerStyle: {
        width: 250, 
        marginBottom: 10,
        borderRadius: 5, 
        padding: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1bd3b1',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    or: {
        fontWeight: 'bold', 
        fontSize: 16, 
        alignSelf: 'center', 
        color: '#292929', 
        margin: 10
    },
    
  });

export default SignUpStyles
