import * as React from "react";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<{}>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">HOME</Text>
      <Button onPress={() => navigation.push("Details")}>DETAILS</Button>
    </Layout>
  );
}
