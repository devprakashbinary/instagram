import { createSwitchNavigator } from 'react-navigation';
import { AUTH_NAVIGATOR, DASHBOARD_NAVIGATOR } from './app.route-labels';
import AuthNavigator from '@app/modules/auth/auth.route';
import DashboardNavigator from '@app/modules/dashboard/dashboard.route'

const RouterOutlet = createSwitchNavigator(
    {
        [AUTH_NAVIGATOR]: AuthNavigator,
        [DASHBOARD_NAVIGATOR]: DashboardNavigator
    },
    {
        initialRouteName: AUTH_NAVIGATOR
    }
);

export default RouterOutlet;