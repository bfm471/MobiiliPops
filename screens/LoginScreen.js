import { Alert, StyleSheet, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

import { app } from "../configs/FirebaseConfig";
import Header from "../components/Header";
import TextInputCustom from "../components/TextInput";
import ButtonCustom from "../components/Button";
import LoginSigninLink from "../components/LoginSigninLink";
import { storeUserCreds } from "../services/UserService";

export default function LoginScreen({ navigation, route }) {
    const auth = getAuth(app);
    const prevUsername = route?.params?.username;
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [username, setUsername] = useState('lom@lom.fi');
    const [password, setPassword] = useState('lomlom');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            setUsername('');
            setPassword('');
            await storeUserCreds(user);
            navigation.navigate('Home');
        })
        .catch((error) => {
            console.log("ERROR with signin:", error);
            Alert.alert("Error occured while signing in.")
        })
    }

    useEffect(() => {
        if(prevUsername != null)  {
            setUsername(prevUsername);
        }
    });

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
                    returnKeyType='done'
                    label='Email / Username'
                />
                <TextInputCustom 
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    textContentType='password'
                    returnKeyType='done'
                    secureTextEntry={true}
                    label='Password'
                />
                <ButtonCustom
                    title="Log In"
                    onPress={handleLogin}
                    disabled={username.length < 3 || password.length < 6}
                />
            </View>
            <View style={styles.linkContainer}>
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
    },
    linkContainer: {
        marginTop: 15,
    }
  });