import { createStackNavigator } from 'react-navigation';
import { 
    SIGN_IN_SCREEN, 
    SIGN_UP_SCREEN, 
    FORGET_PASSWORD,
    OTP_SCREEN, 
    CREATE_ACCOUNT_SCREEN,
    SIGN_IN_AS_SCREEN
 } from '@app/route/app.route-labels';
import SignInScreen from './sign-in/sign-in.screen';
import SignInASScreen from './sign-in-as/sigin-in-as.screen';
import SignUpScreen from './sign-up/sign-up.screen';
import CreateAccountScreen from './create-account/create-account.screen';
import ForgotPasswordScreen from './forget-password/forget-password.screen';
import OTPScreen from './otp/otp.screen';


const AuthNavigator = createStackNavigator({
    [SIGN_IN_SCREEN]: {
        screen: SignInScreen
    },
    [FORGET_PASSWORD]: {
        screen: ForgotPasswordScreen
    },
    [SIGN_IN_AS_SCREEN]: {
        screen: SignInASScreen
    },
    [CREATE_ACCOUNT_SCREEN]: {
        screen: CreateAccountScreen
    },
    [OTP_SCREEN]: {
        screen: OTPScreen
    },
    [SIGN_UP_SCREEN]: {
        screen: SignUpScreen
    },
},
    {
        headerMode: 'none'
    });

export default AuthNavigator;