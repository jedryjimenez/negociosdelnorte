import React from "react";
import { Settings } from "react-native";
import { YellowBox } from "react-native";
import {} from "react-native";
import Navigation from "./app/navigations/Navigations";

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}
