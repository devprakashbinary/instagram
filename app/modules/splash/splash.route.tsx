import { createStackNavigator } from 'react-navigation';
import { SPLASH_SCREEN } from '@app/route/app.route-labels';
import SplashScreen from './splash.screen';


const SplashNavigation = createStackNavigator({
    [SPLASH_SCREEN]: {
        screen: SplashScreen
    }
}, {
    headerMode: 'none'
});


export default SplashNavigation;