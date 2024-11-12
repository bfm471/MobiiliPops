import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { app } from '../configs/FirebaseConfig';
import { getUserCreds } from "./UserService";

const database = getDatabase(app);

export const saveFavoriteJoke = async (item) => {
    console.log("TALLENNA VITSI")

    const creds = await getUserCreds();
    const userId = creds.id;

    try {
            if (item.id && item.joke) {
                const dbRef = ref(database, `${userId}/${item.id}`);
                await set(dbRef, { joke: item.joke});
            } else {
                console.log("ERROR - no joke to save")
            }
    } catch (error) {
        console.log("ERROR with saveItem", error);

    }
}

export const deleteItem = async (item) => {
    console.log("POISTA VITSI", item);

    const creds = await getUserCreds();
    const userId = creds.id;

    try {
        remove(ref(database, `${userId}/${item.id}`))
    } catch (error) {
        console.log("ERROR with delete item", error);
    }
}

export const getFavorites = async (setJokes) => {
    console.log("TUO VITSIT");

    const creds = await getUserCreds();
    const userId = creds.id;
    const userRef = ref(database, `${userId}`);

    onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const keys = Object.keys(data);
            AsyncStorage.setItem("favouriteKeys", JSON.stringify(keys));
            const keysAndData = Object.values(data).map((obj, index) => {
                return { ...obj, id: keys[index] }
            })
            setJokes(keysAndData);
        }
    })
}