import { getAuth, signOut } from "firebase/auth";
import { app } from "../configs/FirebaseConfig";
import { useEffect } from "react";

export default function LogOut({ navigation }) {
    const auth = getAuth(app);

    console.log("LOGOUT");
    useEffect(() => {
        (signOut(auth)
            .then(() => {
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
