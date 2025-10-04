import React from 'react';
import {TouchableOpacity,Text,StyleSheet,
GestureResponderEvent} from 'react-native';

interface ShapeButtonProps {
    shape: string;
    isActive:boolean;
    onPress: (event:GestureResponderEvent) => void;
}
export const ShapeButton: React.FC<ShapeButtonProps> = (
    {shape,isActive,onPress}) => {
       return(
           <TouchableOpacity style={[styles.button,
           isActive?styles.buttonActive:styles.buttonInactive]}
                             onPress={onPress}>
            <Text style={[styles.buttonText,
                isActive?styles.buttonActive:styles.buttonInactive]}>
                {shape}
            </Text>
           </TouchableOpacity>
       )
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 25,
        marginHorizontal: 5,
        borderWidth: 1,
        minWidth:100,
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    buttonInactive: {
        backgroundColor: '#FFF',
        borderColor: '#ddd',
    },
    buttonText:{
        fontSize: 14,
        fontWeight:'500'
    },
    buttonTextActive:{
        color:"#fff"
    },
    buttonTextInactive:{
        color:"#666"
    }
})