import { createStackNavigator } from 'react-navigation';
import { DASHBOARD_NAVIGATOR,  HOME_SCREEN } from '@app/route/app.route-labels';
import HomeScreen from './home/home.screen';

const AuthNavigator = createStackNavigator({
    [HOME_SCREEN]: {
        screen: HomeScreen
    },
},
    {
        headerMode: 'none'
    });

export default AuthNavigator;