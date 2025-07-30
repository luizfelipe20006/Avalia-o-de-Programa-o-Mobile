import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/telas/Home";

export default function App(){
  return (
    <SafeAreaView style={{flex: 1, paddingTop: Platform.OS == 'android'? StatusBar.currentHeight: 0}}>
      <Home/>
    </SafeAreaView>

  )
}