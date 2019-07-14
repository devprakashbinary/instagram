import { createStackNavigator } from 'react-navigation';
import { SIGN_IN_SCREEN, FORGET_PASSWORD } from '@app/route/app.route-labels';
import SignInScreen from './sign-in/sign-in.screen';
import ForgotPasswordScreen from './forget-password/forget-password.screen';


const AuthNavigator = createStackNavigator({
    [FORGET_PASSWORD]: {
        screen: ForgotPasswordScreen
    },
    [SIGN_IN_SCREEN]: {
        screen: SignInScreen
    }
},
    {
        headerMode: 'none'
    });

export default AuthNavigator;