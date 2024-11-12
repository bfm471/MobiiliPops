import { StyleSheet, View } from "react-native";
import LikeIconPressed from "./LikeIconPressed";
import LikeIcon from "./LikeIcon";
import { useState } from "react";
import { Card, Text } from "react-native-paper";

import { deleteItem, saveFavoriteJoke } from "../services/DatabaseService";

export default function JokeCard({ joke }) {
    const [isLiked, setIsLiked] = useState('');

    const handlePress = () => {
        const liked = isLiked;
        setIsLiked(!isLiked);
        toggleJoke(!liked);
    }

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