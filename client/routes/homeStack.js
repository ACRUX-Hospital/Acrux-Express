import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/pages/home';
import SignUp from '../components/pages/signUp';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: SignUp,
  },
};

// home stack navigator screens
let HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);