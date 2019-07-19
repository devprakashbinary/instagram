import { createSwitchNavigator } from 'react-navigation';
import { AUTH_NAVIGATOR } from './app.route-labels';
import AuthNavigator from '@app/modules/auth/auth.route';

const RouterOutlet = createSwitchNavigator(
    {
        [AUTH_NAVIGATOR]: AuthNavigator
    },
    {
        initialRouteName: AUTH_NAVIGATOR
    }
);

export default RouterOutlet;