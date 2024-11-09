import { getDatabase, push, ref } from "firebase/database";

import { app } from '../configs/FirebaseConfig';
import { getUserCreds } from "./UserService";

const database = getDatabase(app)

export const saveItem = async (item) => {
    console.log("TALLENNA VITSI")

    const creds = await getUserCreds();
    const userId = creds.id;

    try {
            if (item.id && item.joke) {
                push(ref(database, `${userId}/`), {item});
            } else {
                console.log("ERROR - no joke to save")
            }
    } catch (error) {
        console.log("ERROR with saveItem", error);

    }
}

export const deleteItem = () => {
    console.log("POISTA VITSI");
}