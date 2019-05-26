import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import { StatusBar } from 'react-native';
import Currencies from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options'
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const CurrencyList = createStackNavigator({
  CurrencyList: {
    screen: Currencies,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});
export default createAppContainer(
  createStackNavigator(
    {
      HomeStack,
      CurrencyList
    },
    {
      mode: 'modal',
      headerMode: 'none',
      cardStyle: { paddingTop: StatusBar.currentHeight }
    }
  )
);
