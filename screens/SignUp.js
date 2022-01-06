import { useEffect, useState } from 'react';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity, Picker} from 'react-native';
import SignUpStyles from '../styles/SignUpStyles';
// import { Picker } from '@react-native-picker/picker';

const SignUp = (props) => {
    
    const { getCountries } = props;

    useEffect(() => {
      getCountries()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const { allCountries } = props;

    const {
      inputStyle, 
      pickerStyle, 
      button, 
      buttonText, 
      or
    } = SignUpStyles

    const [selectedValue, setSelectedValue] = useState("choose your country");

    const [newUser, setNewUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userImg: '',
      country: '',
    })
    
    const onSubmit = (e) => {
      e.preventDefault()
      let info = Object.values(newUser).some(infoUser => infoUser === '')
      if(info) {
        Alert('error', 'There are fields incomplete, please complete them')
      } else {
        props.signUpUser(newUser)
        .then(response => {
          console.log(response)
          if(response.data.success) {
              Alert('success', 'Your account has been created!')
          } else if (response.data.errors) {
            setErrorInput({})
            response.data.errors.map(error => setErrorInput(messageError => {
              return {
                ...messageError,
                [error.path]: error.message
              }
            }))
          } else {
              Alert('error',  'That email has already been used! Try with another one')
            }
            })
        .catch(error => {
          console.log(error)
          Alert('error', 'We are having technicas difficulties! Come back later!')
        })
          }
        }
        
        const responseGoogle = (res) => {
          const googleUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            userImg: res.profileObj.imageUrl,
            country: ' ',
            googleAccount: true
          }
          props.signUpUser(googleUser)
          .then((response) => {
            if (response.data.success){
              Alert('success', 'Your account has been created!')
            }
            else{
              setErrorInput(response.data.error)
              Alert('error', 'Something went wrong! Come back later!')
            }
          })
          .catch((error) => {
                console.log(error)
                Alert('error', 'This account is already in use.')
            })
        }
            
            return (
                    <View style={{backgroundColor: '#292929', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#fff', padding: 40, borderRadius: 10}}>
                          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#292929', padding: 10}}> Sign Up</Text>
                          <View className="form-style">
                              <TextInput
                                style={inputStyle}
                                placeholder="First Name" 
                                onChange={(e) => setNewUser({...newUser, firstName: e.nativeEvent.text })}
                              />
                              <TextInput 
                                style={inputStyle}
                                placeholder="Last Name" 
                                onChange={(e) => setNewUser({...newUser, lastName: e.nativeEvent.text })}
                              />
                              <TextInput 
                                style={inputStyle}
                                placeholder="Email" 
                                onChange={(e) => setNewUser({...newUser, email: e.nativeEvent.text })}
                              />
                              <TextInput 
                                style={inputStyle}
                                secureTextEntry={true} 
                                placeholder="Password" 
                                onChange={(e) => setNewUser({...newUser, password: e.nativeEvent.text })}
                              />
                              <TextInput 
                                style={inputStyle}
                                placeholder="URL Profile Image" 
                                onChange={(e) => setNewUser({...newUser, userImg: e.nativeEvent.text })}

                              />
                              <Picker  
                              style={pickerStyle}
                              selectedValue={selectedValue} 
                              onChange={(e) => setNewUser({...newUser, country: e.nativeEvent.text })}>
                                  <Picker.Item value="choose your country" label='Choose your country'/>
                                  {   
                                      typeof(allCountries) === "object" ?
                                      allCountries.map((country, index) => {
                                        return <Picker.Item key={index} value={country.name} label={country.name}/>
                                      })
                                      :
                                      <Picker.Item label='Loading...' value='Loading...'/>
                                    }
                              </Picker>
                              <TouchableOpacity 
                              onPress={(e) => onSubmit(e)}
                              style={button}>
                                <Text style={buttonText}>Create account</Text>
                              </TouchableOpacity>
                              <Text style={or}>or</Text>
                              {/* <GoogleLogin
                                clientId='988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com'
                                buttonText="Sign Up with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                              /> */}
                          </View>
                          <View> 
                              <Text style={{marginRight: 5}}>
                                Already has an account? 
                                <TouchableOpacity >
                                  <Text>
                                     Sign In
                                  </Text>
                                </TouchableOpacity>
                              </Text> 
                          </View>
                      </View>
                    </View>
      )
}

const mapStateToProps = (state) => {
  return {
    firstName : state.users.firstName,
    lastName: state.users.lastName,
    userImg: state.users.userImg,
    email: state.users.email,
    allCountries: state.users.allCountries
  }
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,
  getCountries: usersActions.getCountries
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
  
  