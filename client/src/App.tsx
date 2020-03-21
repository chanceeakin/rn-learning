import React from "react";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { mapping, dark as darkTheme } from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </ApplicationProvider>
  </NavigationContainer>
);

export default App;
