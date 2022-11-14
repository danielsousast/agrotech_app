import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cultivations from "./screens/Cultivations";
import PlantingDay from "./screens/PlantingDay";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cultivations" component={Cultivations} />
        <Stack.Screen name="PlantingDay" component={PlantingDay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
