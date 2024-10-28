import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function ButtonCustom({ onPress, title, disabled }) {

    return(
        <Button 
            color={"hotpink"}
            title={title}
            onPress={onPress}
            disabled={disabled}            
        />
    )
}