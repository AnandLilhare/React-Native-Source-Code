import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponetScreen from "./src/screens/ComponetScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Componets: ComponetScreen
  },
  {
    initialRouteName: "Componets",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
