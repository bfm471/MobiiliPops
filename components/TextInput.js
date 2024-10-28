import { forwardRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TextInputCustom = forwardRef (({ placeholder, onChangeText, value, textContentType, returnKeyType, onSubmitEditing, secureTextEntry }, ref) => {

    return(
        <View>
            <TextInput 
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                textContentType={textContentType}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                ref={ref}
                style={styles.textinput}
            />
        </View>
    )
})

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

  export default TextInputCustom;