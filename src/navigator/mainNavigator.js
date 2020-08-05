import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39636Navigator from '../features/BlankScreen39636/navigator';
import CopyOfBlankScreen09633Navigator from '../features/CopyOfBlankScreen09633/navigator';
import BlankScreen59632Navigator from '../features/BlankScreen59632/navigator';
import BlankScreen39628Navigator from '../features/BlankScreen39628/navigator';
import BlankScreen29627Navigator from '../features/BlankScreen29627/navigator';
import BlankScreen09625Navigator from '../features/BlankScreen09625/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39636: { screen: BlankScreen39636Navigator },
CopyOfBlankScreen09633: { screen: CopyOfBlankScreen09633Navigator },
BlankScreen59632: { screen: BlankScreen59632Navigator },
BlankScreen39628: { screen: BlankScreen39628Navigator },
BlankScreen29627: { screen: BlankScreen29627Navigator },
BlankScreen09625: { screen: BlankScreen09625Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
