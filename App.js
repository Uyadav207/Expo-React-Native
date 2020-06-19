import { createAppContainer } from 'react-navigation';    // calling createAppContainer from react-navigation
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";     //importing both screens to the main--> APP.js
import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import SquareScreen from './src/screens/SquareScreen';
import ReducerSquareScreen from './src/screens/ReducerSquareScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,                        //Stacking HomeScreen
    randC: ColorScreen,
    Components : ComponentsScreen,
    List: ListScreen,
    ImgScr: ImageScreen,
    count: CounterScreen,
    square: SquareScreen,
    ReduceSquare : ReducerSquareScreen,
    TScreen : TextScreen
                                             //Stacking ColorScreen i.e our main Application
  },
  {
    initialRouteName: "Home",              //The Priority Route to be displayed first
    defaultNavigationOptions: {
      title: "App"                         //Title of the header is APP
    }
  }
);

export default createAppContainer(navigator);   //exporting default navigator
