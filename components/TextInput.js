import { forwardRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

const TextInputCustom = forwardRef (({ placeholder, onChangeText, value, textContentType, returnKeyType, onSubmitEditing, secureTextEntry, label, error, errortextVisible, errortext }, ref) => {

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
                error={error}
            />
            <HelperText visible={errortextVisible} type="error">
                {errortext}
            </HelperText>
        </View>
    )
})

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
    },
  });

  export default TextInputCustom;