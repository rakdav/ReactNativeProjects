import ReactNative from "react";
import {View, Text, Button, StatusBar} from 'react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./router";
import style from "./style";


type Props=NativeStackScreenProps<RootStackParamList>;

export default function Home({navigation}:Props){
    return (
        <View style={style.container}>
            <StatusBar barStyle={"dark-content"}/>
            <Text>Settings Screen</Text>
            <Button title="Home"
                    onPress={() => navigation.navigate("Home")} />
        </View>
    );
}