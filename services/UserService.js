import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserCreds = async (user) => {
    try {
        const userInfo = {
            'username': user.email,
            'id': user.uid
        }
        await AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));            
    } catch (error) {
        console.log("ERROR saving data to asyncStorage", error);
    }
}

export const getUserCreds = async () => {
    try {
            const creds = await AsyncStorage.getItem('userinfo');
            return JSON.parse(creds);
        
    } catch (error) {
        console.log("ERROR getting usercredentials");
    }
}