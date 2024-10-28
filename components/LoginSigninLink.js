import { StyleSheet, Text } from "react-native";

export default function LoginSigninLink({ onPress, text }) {

    return(
        <Text 
            onPress={onPress}>
                {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });