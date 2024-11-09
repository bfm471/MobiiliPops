import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { app } from "../configs/FirebaseConfig";

export default function LogOut({ navigation }) {
    const auth = getAuth(app);
    
 useEffect(() => {
        const logOutUser = async () => {
            try {
                await signOut(auth);
                console.log("User signed out.");
                await AsyncStorage.clear();
                console.log("Storage cleared.");
                navigation.navigate('Login');
            } catch (error) {
                console.log("ERROR with signOut", error);
                Alert.alert("Something went wrong with the logout.");
            }
        };

        logOutUser();
    }, []);

    return null;
}
