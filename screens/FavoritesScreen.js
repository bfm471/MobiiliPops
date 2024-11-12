import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { getFavorites } from "../services/DatabaseService";
import JokeCard from "../components/JokeCard";

export default function FavoriteScreen({ navigation }) {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        getFavoriteJokes();
    }, []);

    const getFavoriteJokes = () => {
        getFavorites(setJokes);
    }

    return (
        <ScrollView>
            <View style={styles.favoritesContainer}>
                {jokes.map((item, index) => (
                    <JokeCard joke={item} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    favoritesContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});