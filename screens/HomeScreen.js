import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { fetchData } from "../services/Api";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        getRandomJoke();
    }, []);

    const getRandomJoke = async () => {
        const response = await fetchData('https://icanhazdadjoke.com');
        console.log("VITSI", response.joke);
        if (response) {
            setJoke(response.joke);
        }
    }

    return (
        <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text
                        variant="titleMedium"
                    >
                        {joke}
                    </Text>
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
        backgroundColor: 'hotpink'
    }
  });