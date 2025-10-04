import * as React from 'react';
import Home from "./Home";
import Settings from "./Settings";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./router";
import {NavigationContainer} from "@react-navigation/native";

const Stack=createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
