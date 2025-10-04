import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./router";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import Details from "./Details";
import {Button} from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details}
                        options={({ route }) => ({
                            headerRight: () => {
                                return (
                                    <Button
                                        title="Buy"
                                        onPress={() => {}}
                                        disabled={route.params.stock === 0}
                                    />
                                );
                            },
                        })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


