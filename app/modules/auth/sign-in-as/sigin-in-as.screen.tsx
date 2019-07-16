import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './sign-in-as.style';
import ButtonPrimary from '@app/shared/components/btn-lg';
import { primary } from '@app/app.style.config';
import AuthFooter from '@app/shared/components/auth-footer';
const SignInAsScreen: FunctionComponent = (props: any) => {
    return (
        <View style={style.container}>
            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: '100%', paddingHorizontal: 25 }}>
                    <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                            style={{ width: 80, height: 80, borderRadius: 100 }}
                        />
                    </View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginVertical: 15 }}>developer.prakash</Text>
                    <ButtonPrimary
                        title="Log In"
                        backgroundColor={primary}
                    />
                    <ButtonPrimary
                        title="Log In With Another Account"
                        titleStyle={{ color: primary }}
                        backgroundColor='none'
                        buttonStyle={{ marginTop: 20 }}
                    />
                </View>
            </View>
            <AuthFooter />
        </View>
    )
}

export default SignInAsScreen;