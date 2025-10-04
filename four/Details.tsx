import {View,Text,Button,StatusBar} from "react-native";
import {RootStackParamList} from "./router";
import styles from "./styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList,"Details">

export default function Details({route,navigation}: Props) {
    const {content,title} = route.params;
    React.useEffect(()=>{
        navigation.setOptions({title})
    },[])
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text>{content}</Text>
      </View>
    );
}