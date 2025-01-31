import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";

const AppStack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name={"Home"} component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
