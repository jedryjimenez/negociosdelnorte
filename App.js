import React from "react";
import { Settings } from "react-native";
import { YellowBox } from "react-native";
import {} from "react-native";
import Navigation from "./app/navigations/Navigations";
import { decode, encode } from "base-64";

YellowBox.ignoreWarnings(["Setting a timer"]);

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return <Navigation />;
}
