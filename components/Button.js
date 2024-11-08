import { StyleSheet, Text, View } from "react-native";
import { Button, Title } from "react-native-paper";

export default function ButtonCustom({ onPress, title, disabled }) {

    return(
        <Button 
            mode="outlined"
            title={title}
            onPress={onPress}
            disabled={disabled}            
        >
            {title}
        </Button>
    )
}