import { StatusBar } from 'expo-status-bar';
import {Platform, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Routes} from "./router";
import styles from "./styles";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "./Home";
import News from "./News";
import Settings from "./Settings";

const Tab=createBottomTabNavigator<Routes>();
const Drawer=createDrawerNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
        {Platform.OS === "android" &&(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="News" component={News}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        )}
        {Platform.OS === "ios" &&(
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="News" component={News}/>
                <Drawer.Screen name="Settings" component={Settings}/>
            </Drawer.Navigator>
        )}
    </NavigationContainer>
  );
}


