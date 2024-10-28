import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TextInputCustom({ placeholder, onChangeText, value }) {

    return(
        <View>
            <TextInput 
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.textinput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        height: 40,
        padding: 10,
        margin: 10,
        fontSize: 15,

        borderWidth: 1,
        borderColor: 'black'
    },
  });