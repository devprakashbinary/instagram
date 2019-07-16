import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { style } from './sign-up.style';
import ButtonPrimary from '@app/shared/components/btn-lg';
import { primary } from '@app/app.style.config';
import { CREATE_ACCOUNT_SCREEN, SIGN_IN_SCREEN } from '@app/route/app.route-labels';
const SignUpScreen: FunctionComponent = (props: any) => {
    return (
        <View style={style.container}>
            <View style={{ width: '100%', paddingHorizontal: 25 }}>
                <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                <ButtonPrimary
                    onPress={() => props.navigation.navigate(CREATE_ACCOUNT_SCREEN)}
                    title="Create New Account"
                    backgroundColor={primary}
                    buttonStyle={{ marginTop: 40 }}
                />
                <ButtonPrimary
                    onPress={() => props.navigation.navigate(SIGN_IN_SCREEN)}
                    title="Log In"
                    backgroundColor="none"
                    titleStyle={{ color: primary }}
                    buttonStyle={{ marginTop: 20, backgroundColor: 'none' }}
                />
            </View>
        </View>
    )
}

export default SignUpScreen;