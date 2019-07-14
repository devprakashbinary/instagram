import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { style } from './sign-up.style';
import { Button } from 'react-native-elements';
import { primary } from '@app/app.style.config';
const SignUpScreen: FunctionComponent = (props: any) => {
    return (
        <View style={style.container}>
            <View style={{width: '100%', paddingHorizontal: 25}}>
                <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                <Button
                    title="Create New Account"
                    buttonStyle={[style.btnCreateAccount, {marginTop: 50}]}
                />
                <Button
                    title="Log In"
                    titleStyle={{color: primary}}
                    buttonStyle={[style.btnCreateAccount, {backgroundColor: 'none', marginTop: 10}]}
                />
            </View>
        </View>
    )
}

export default SignUpScreen;