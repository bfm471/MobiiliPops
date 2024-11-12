import { StyleSheet, View } from "react-native";
import LikeIconPressed from "./LikeIconPressed";
import LikeIcon from "./LikeIcon";
import { useEffect, useState } from "react";
import { Card, Text } from "react-native-paper";

import { deleteItem, saveFavoriteJoke } from "../services/DatabaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function JokeCard({ joke }) {
    const [isLiked, setIsLiked] = useState('');

    useEffect(() => {
        assignStatus();
    }, [joke])

    const assignStatus = async () => {
        const favouriteKeys = JSON.parse(await AsyncStorage.getItem("favouriteKeys"));
        if (favouriteKeys && favouriteKeys.includes(joke.id)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }

    const handlePress = () => {
        const liked = isLiked;
        setIsLiked(!isLiked);
        setTimeout(() => {
            toggleJoke(!liked);
            
        }, 500);    }

    const toggleJoke = (like) => {
        if (like) {
            saveFavoriteJoke(joke);
        } else {
            deleteItem(joke); 
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text variant="titleMedium" style={styles.cardText}>
                    {joke?.joke}
                </Text>
                <View style={styles.iconContainer}>
                    {
                        isLiked ?
                            <LikeIconPressed onPress={handlePress} /> :
                            <LikeIcon onPress={handlePress} />
                    }
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minHeight: 160,
        backgroundColor: 'lightgray',
        justifyContent: "center",
        marginBottom: 10
    },
    iconContainer: {
        alignItems: "flex-end",
        paddingTop: 20
    }
})