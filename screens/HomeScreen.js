import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { fetchData } from "../services/Api";
import JokeCard from "../components/JokeCard";

export default function HomeScreen({ navigation }) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        getRandomJoke();
    }, []);

    const getRandomJoke = async () => {
        const response = await fetchData('https://icanhazdadjoke.com');
        // console.log("VITSI", response);
        if (response) {
            setJoke(response);
        }
    }

    return (
        <View style={styles.cardContainer}>
            <JokeCard joke={joke} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});