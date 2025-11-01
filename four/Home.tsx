import {View,Text,Button,StatusBar} from "react-native";
import {RootStackParamList} from "./router";
import styles from "./styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList,"Home">

export default function Home({navigation}: Props) {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Button title="First Item"
          onPress={()=>navigation.navigate("Details",
              {
                  title:"First Item",
                  content:"First Item Content",
                  stock:1
              })}/>
          <Button title="Second Item"
                  onPress={()=>navigation.navigate("Details",
                      {
                          title:"Second Item",
                          content:"Second Item Content",
                          stock:0
                      })}/>
          <Button title="Third Item"
                  onPress={()=>navigation.navigate("Details",
                      {
                          title:"Third Item",
                          content:"Third Item Content",
                          stock:200
                      })}/>
      </View>
    );
}
