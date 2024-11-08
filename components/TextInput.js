import { forwardRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const TextInputCustom = forwardRef (({ placeholder, onChangeText, value, textContentType, returnKeyType, onSubmitEditing, secureTextEntry, label }, ref) => {

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
                label={label}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        margin: 10,
    },
  });

  export default TextInputCustom;