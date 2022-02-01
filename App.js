import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BoxScreen from "./src/screens/BoxScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreen1 from "./src/screens/CounterScreen1";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen1 from "./src/screens/SquareScreen1";
import TextScreen from "./src/screens/TextScreen";
import TextValidationScreen from "./src/screens/TextValidationScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Counter1: CounterScreen1,
    Color: ColorScreen,
    Square: SquareScreen,
    Square1: SquareScreen1,
    TextScreen: TextScreen,
    TextValidationScreen: TextValidationScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
