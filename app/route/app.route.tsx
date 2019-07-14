import { createSwitchNavigator } from 'react-navigation';
import { SPLASH_NAVIGATOR, AUTH_NAVIGATOR } from './app.route-labels';
import SplashNavigator from '@app/modules/splash/splash.route';
import AuthNavigator from '@app/modules/auth/auth.route';

const RouterOutlet = createSwitchNavigator(
    {
        [AUTH_NAVIGATOR]: AuthNavigator,
        // [SPLASH_NAVIGATOR]: SplashNavigator
    },
    {
        initialRouteName: AUTH_NAVIGATOR
    }
);

export default RouterOutlet;