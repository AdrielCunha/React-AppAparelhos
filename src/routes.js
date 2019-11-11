import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import CadCliente from './pages/CadCliente';
import CadAparelho from './pages/CadAparelho';

const RootStack = createStackNavigator({Main, CadCliente, CadAparelho});
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
