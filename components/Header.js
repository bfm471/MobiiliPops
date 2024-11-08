import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Header({ header }) {

    return(
        <View style={styles.container}>
            <Text 
                style={styles.text}
                variant='headlineMedium'
            >{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });