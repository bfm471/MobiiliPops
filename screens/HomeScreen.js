import { RefreshControl, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

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
        <ScrollView 
            contentContainerStyle={styles.cardContainer} 
            refreshControl={
                <RefreshControl 
                    onRefresh={getRandomJoke}
                />}>
            <JokeCard joke={joke} />
        </ScrollView>
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