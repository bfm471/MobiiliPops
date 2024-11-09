import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

import { fetchData } from "../services/Api";
import { useEffect, useState } from "react";
import LikeIcon from "../components/LikeIcon";
import LikeIconPressed from "../components/LikeIconPressed";
import { deleteItem, saveItem } from "../services/DatabaseService";

export default function HomeScreen({ navigation }) {
    const [joke, setJoke] = useState('');
    const [liked, setLiked] = useState('');

    useEffect(() => {
        getRandomJoke();
    }, []);

    useEffect(() => {
        if (liked) {
            saveItem(joke);
        } else {
            deleteItem(joke); 
        }
    }, [liked]);

    const getRandomJoke = async () => {
        const response = await fetchData('https://icanhazdadjoke.com');
        console.log("VITSI", response);
        if (response) {
            setJoke(response);
        }
    }

    const handlePress = () => {
        setLiked(!liked);
    }

    return (
        <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.cardText}>
                        {joke.joke}
                    </Text>
                    <View style={styles.iconContainer}>
                        {
                            liked ?
                            <LikeIconPressed onPress={handlePress} /> :
                            <LikeIcon onPress={handlePress}/>
                        }
                    </View>
                </Card.Content>
            </Card>
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
    card: {
        minWidth: '70%',
        maxWidth: '90%',
        minHeight: 160,
        backgroundColor: 'lightgray',
        justifyContent: "center",
    },
    iconContainer: {
        alignItems: "flex-end",
        paddingTop: 20
    }
});