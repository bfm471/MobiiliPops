import { getDatabase, push, ref, remove, set } from "firebase/database";

import { app } from '../configs/FirebaseConfig';
import { getUserCreds } from "./UserService";

const database = getDatabase(app);

export const saveItem = async (item) => {
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
    console.log("POISTA VITSI");

    const creds = await getUserCreds();
    const userId = creds.id;

    try {
        remove(ref(database, `${userId}/${item.id}`))
    } catch (error) {
        console.log("ERROR with delete item", error);
    }
}