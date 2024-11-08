import { Alert, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import TextInputCustom from "../components/TextInput";
import ButtonCustom from "../components/Button";
import { useRef, useState } from "react";
import LoginSigninLink from "../components/LoginSigninLink";

export default function SigninScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const passwordRef = useRef(null);
    const passwordCheckRef = useRef(null);

    const handleRegister = () => {
        if (password !== checkPassword) {
            Alert.alert('Check password!');
        } else {
            Alert.alert("Nappi painettu Signup!", username + " " + password);
            // luo tili
        }
    }

    // ChatGpt:n refaktorointi-idean perusteella
    const inputValidations = {
        username: username.length > 0 && username.length < 3,
        password: password.length > 0 && password.length < 5,
        checkPassword: checkPassword.length == password.length && checkPassword !== password
    }

    return (
        <View style={styles.container}>
            <View>
                <Header header={"SIGN UP"} />
            </View>
            <View style={styles.inputContainer}>
                <TextInputCustom 
                    onChangeText={(text) => setUsername(text)}
                    textContentType='username'
                    returnKeyType='next'
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={username}
                    label='Choose your username'
                    error={inputValidations.username}
                    errortextVisible={inputValidations.username}
                    errortext='Must be at least 3 characters'
                />
                <TextInputCustom 
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    textContentType='newPassword'
                    returnKeyType='next'
                    onSubmitEditing={() => passwordCheckRef.current.focus()}
                    secureTextEntry={true}
                    ref={passwordRef}
                    label='Choose your password'
                    error={inputValidations.password}
                    errortextVisible={inputValidations.password}
                    errortext='Must be at least four letters'
                />
                <TextInputCustom 
                    onChangeText={(text) => setCheckPassword(text)}
                    value={checkPassword}
                    returnKeyType='done'
                    secureTextEntry={true}
                    ref={passwordCheckRef}
                    label='Enter password again'
                    error={inputValidations.checkPassword}
                    errortextVisible={inputValidations.checkPassword}
                    errortext='Passwords must match'

                />
                <ButtonCustom
                    title="Register"
                    onPress={handleRegister}
                    disabled={username.length < 3 || password.length < 5}
                />
            </View>
            <View>
                <LoginSigninLink 
                    text='Already have an account? Press here to login!'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
        width: 200
    }
  });