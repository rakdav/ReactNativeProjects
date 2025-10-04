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
        <View >

        </View>
    )
}
const styles = StyleSheet.create({
    
})