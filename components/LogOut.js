import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { app } from "../configs/FirebaseConfig";

export default function LogOut({ navigation }) {
    const auth = getAuth(app);

    console.log("LOGOUT");
    useEffect(() => {
        (signOut(auth)
            .then(async () => {
                await AsyncStorage.clear();
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.log("ERROR with signOut", error);
                Alert.alert("Something went wrong with the signout.")
            })
        )
    }, []);

    return null;
}
