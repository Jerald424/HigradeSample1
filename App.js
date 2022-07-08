import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SelecCollege from "./Components/Select_College/SelecCollege";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      {/* <SelecCollege /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='/'>
          <Stack.Screen name='/' component={SelecCollege} />
          <Stack.Screen name='/home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
