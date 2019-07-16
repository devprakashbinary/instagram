import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { style } from './sign-up.style';
import ButtonPrimary from '@app/shared/components/btn-lg';
import { primary } from '@app/app.style.config';
const SignUpScreen: FunctionComponent = (props: any) => {
    return (
        <View style={style.container}>
            <View style={{width: '100%', paddingHorizontal: 25}}>
                <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                <ButtonPrimary
                title="Create New Account"
                backgroundColor={primary}
                buttonStyle={{marginTop: 50}}
                />
                <ButtonPrimary
                    title="Log In"
                    backgroundColor="none"
                    titleStyle={{color: primary}}
                    buttonStyle={{marginTop: 50, backgroundColor: 'none'}}
                />
            </View>
        </View>
    )
}

export default SignUpScreen;