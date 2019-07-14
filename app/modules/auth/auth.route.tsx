import { createStackNavigator } from 'react-navigation';
import { SIGN_IN_SCREEN } from '@app/route/app.route-labels';
import SignInScreen from './sign-in/sign-in.screen';


const AuthNavigator = createStackNavigator({
    [SIGN_IN_SCREEN]: {
        screen: SignInScreen
    }
},
    {
        headerMode: 'none'
    });

export default AuthNavigator;