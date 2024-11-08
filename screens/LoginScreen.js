import { Alert, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import TextInputCustom from "../components/TextInput";
import ButtonCustom from "../components/Button";
import { useRef, useState } from "react";
import LoginSigninLink from "../components/LoginSigninLink";

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    const handleLogin = () => {
        Alert.alert("Nappi painettu!", username + " " + password);
    }

    return (
        <View style={styles.container}>
            <View>
                <Header header={"LOG IN"} />
            </View>
            <View style={styles.inputContainer}>
                <TextInputCustom 
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    textContentType='username'
                    returnKeyType='next'
                    onSubmitEditing={() => passwordRef.current.focus()}
                    label='Username'
                />
                <TextInputCustom 
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    textContentType='password'
                    returnKeyType='done'
                    onSubmitEditing={() => handleLogin()} // vai sulkee vain näppäimistön?
                    secureTextEntry={true}
                    ref={passwordRef}
                    label='Password'
                />
                <ButtonCustom
                    title="Log In"
                    onPress={handleLogin}
                    disabled={username.length < 3 || password.length < 5}
                />
            </View>
            <View>
                <LoginSigninLink 
                    text='Don´t have an account yet? Press here to register!'
                    onPress={() => navigation.navigate('Signin')}
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