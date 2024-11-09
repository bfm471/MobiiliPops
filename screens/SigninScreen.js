import { Alert, StyleSheet, View } from "react-native";
import { app } from "../configs/FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import TextInputCustom from "../components/TextInput";
import ButtonCustom from "../components/Button";
import { useRef, useState } from "react";
import LoginSigninLink from "../components/LoginSigninLink";
import { storeUserCreds } from "../services/UserService";

export default function SigninScreen({ navigation }) {
    const auth = getAuth(app);

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [checkPassword, setCheckPassword] = useState('');
    const [username, setUsername] = useState('moi@moi.fi');
    const [password, setPassword] = useState('moimoi');
    const [checkPassword, setCheckPassword] = useState('moimoi');


    const passwordRef = useRef(null);
    const passwordCheckRef = useRef(null);

    const handleRegister = () => {
        if (password !== checkPassword) {
            Alert.alert('Check password!');
        } else {
            createUserWithEmailAndPassword(auth, username, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                setUsername('');
                setPassword('');
                setCheckPassword('');
                await storeUserCreds(user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log("VIRHE:", error);
                if (error.code == 'auth/email-already-in-use') {
                    Alert.alert("Looks like you already have an account. Please Log in.");
                    navigation.navigate('Login', {username: username});
                } else {
                    Alert.alert('Error occured while registering.')
                }
            })
        }
    }

    // ChatGpt:n refaktorointi-idean perusteella
    // regex: https://www.mailercheck.com/articles/email-validation-javascript
    const inputValidations = {
        username: username.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username),
        password: password.length > 0 && password.length < 6,
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
                    label='Email'
                    error={inputValidations.username}
                    errortextVisible={inputValidations.username}
                    errortext='Enter valid email address'
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