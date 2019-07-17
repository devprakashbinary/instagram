import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './sign-in-as.style';
import ButtonPrimary from '@app/shared/components/btn-lg';
import { primary } from '@app/app.style.config';
import AuthFooter from '@app/shared/components/auth-footer';
import { AuthData } from '@app/core/mock/AuthData';
import { SIGN_IN_SCREEN } from '@app/route/app.route-labels';
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
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginVertical: 15 }}>{AuthData.username}</Text>
                    <ButtonPrimary
                        title="Log In"
                        backgroundColor={primary}
                        onPress={() => console.log('sdfsadfdsf')}
                    />
                    <ButtonPrimary
                        title="Log In With Another Account"
                        titleStyle={{ color: primary }}
                        backgroundColor='none'
                        buttonStyle={{ marginTop: 20 }}
                        onPress={() => props.navigation.navigate(SIGN_IN_SCREEN)}
                    />
                </View>
            </View>
            <AuthFooter parentProps={props}/>
        </View>
    )
}

export default SignInAsScreen;