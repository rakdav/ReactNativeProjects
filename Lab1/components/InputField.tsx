import React from "react";
import {TextInput,StyleSheet,Text,View} from "react-native";

interface InputFieldProps {
    placeholderText: string,
    value: string,
    onChangeText: (value: string) => void,
    label?: string,
}
export const InputField: React.FC<InputFieldProps> = (
    {placeholderText,value,onChangeText,label}
)=>{
    return(
        <View style={styles.container}>
            {label &&<Text style={styles.label}>{label}</Text>}
            <TextInput
            style={styles.input}
            placeholder={placeholderText}
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label:{
        fontSize: 14,
        fontWeight: '500',
        marginBottom:5,
        color:"#444"
    },
    input:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#ddd",
        fontSize:16,
        color:"#333"
    }
})