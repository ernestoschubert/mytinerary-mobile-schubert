import { useState } from 'react';
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SignIn = (props) => {

    const [logInUser, setLogInUser] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setLogInUser({
            ...logInUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let info = Object.values(logInUser).some(infoUser => infoUser === "")
        if(info) {
            Alert('error', 'There are fields incomplete, please complete them')
        } else {
            props.signInUser(logInUser)
            .then(response => {
                if(!response.data.success) {
                   Alert('error', 'Email or password incorrect')
                } else {
                    Alert('success', 'Welcome! You have been successfully logged')
                }
            })
            .catch(error => {
                console.log(error)
                Alert('error', 'Email or password incorrect')
            })
        }
    }

    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            google: true,
        }
        props.signInUser(googleUser)
        .then((response) => {
            if (response.data.success){
                Alert('success', 'Welcome! You have been successfully logged')
            }
        })
        .catch((error) => {
            console.log(error)
            Alert('error', 'You have to sign up before you log in!')
        })
    }


    return (
        <ScrollView>
            <View className="cont-form">
                <Text>Sign In</Text>
                <View className="form-style">
                    <TextInput 
                        placeholder="Email" 
                        onChange={(e) => setLogInUser({...logInUser, email: e.nativeEvent.text })}
                    />
                    <TextInput 
                        secureTextEntry={true} 
                        placeholder="Password"
                        onChange={(e) => setLogInUser({...logInUser, password: e.nativeEvent.text })}
                    />
                    <TouchableOpacity onPress={(e) => onSubmit(e)}>
                        <Text>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <Text>or</Text>
                    {/* <span className='google-btn mt-2 mb-2'><GoogleLogin
                        clientId='988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com'
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /></span> */}
                </View>
                <View> 
                    <Text>
                        Don't you have an account yet? 
                        <TouchableOpacity>
                            <Text>
                                Sign Up
                            </Text>    
                        </TouchableOpacity>
                    </Text> 
                </View>
            </View>
        </ScrollView>
    )
}



const mapDispatchToProps = {
    signInUser: usersActions.signInUser
}

export default connect(null, mapDispatchToProps)(SignIn);
