import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoader } from '@app/store/actions/loader.action';
import inputBox from '@app/styles/input-box.style';
import { primary, gray } from '@app/app.style.config';
import { theme } from '@app/styles/theme.style';
import style from './sign-in.style';
import { Input } from 'react-native-elements';
import Divider from '@app/shared/components/divider';
import FacebookLogin from '@app/shared/components/btn-facebook';
import AuthFooter from '@app/shared/components/auth-footer';
import BtnNext from '@app/shared/components/btn-lg';
import { FORGET_PASSWORD } from '@app/route/app.route-labels';
import { AuthData } from '@app/core/mock/AuthData';
import { WRONG_PASSWORD } from '@app/core/models/String';

function wrongCredentials(auth: any) {
    Alert.alert(
        WRONG_PASSWORD.title({username: auth.username}),
        WRONG_PASSWORD.message,
        [
            { text: 'Try Again', onPress: () => console.log('Ask me later pressed') }
        ],
        { cancelable: false },
    );
}


const SignInScreen = (props: any) => {
    const [auth, setAuth] = useState({ username: '', password: '' });

    function login(auth: { username: string, password: string }) {
        if ((auth.username === AuthData.emailAddress || auth.username === AuthData.phone) && auth.password === AuthData.loginPassword) {

        } else {
            wrongCredentials(auth);
        }
    }
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', paddingHorizontal: 15 }}>
                    <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                    <Input
                        placeholder='Phone number, username or email'
                        containerStyle={style.inputBox}
                        inputContainerStyle={inputBox.primary}
                        onChangeText={(text) => setAuth({ ...auth, username: text })}
                    />
                    <Input
                        placeholder='Password'
                        containerStyle={style.inputBox}
                        inputContainerStyle={inputBox.primary}
                        secureTextEntry={true}
                        returnKeyType="send"
                        onChangeText={(text) => setAuth({ ...auth, password: text })}
                        onSubmitEditing={() => login(auth)}
                    />
                    <View style={style.forgetPasswordContainer}>
                        <Text style={theme.primaryBold} onPress={() => props.navigation.navigate(FORGET_PASSWORD)}>Forgot password?</Text>
                    </View>
                    <BtnNext
                        title="Log In"
                        disabled={(auth.username === '' || auth.password === '')}
                        backgroundColor={primary}
                        buttonStyle={{ marginTop: 20 }}
                        onPress={() => login(auth)}
                    />
                    <View style={style.socialContainer}>
                        <Divider value={'OR'} />
                        <FacebookLogin />
                    </View>
                </View>
            </View>
            <AuthFooter parentProps={props} />

        </View>
    )
}

const mapDispateToProps = (dispatch: any) => {
    return bindActionCreators({
        toggleLoader: toggleLoader
    }, dispatch)
}

export default connect(null, mapDispateToProps)(SignInScreen);