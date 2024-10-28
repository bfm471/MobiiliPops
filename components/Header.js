import { StyleSheet, Text, View } from "react-native";

export default function Header({ header }) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: '25',
        fontWeight: "600"
    }
  });