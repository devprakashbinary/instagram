import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
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
const SignInScreen = (props: any) => {
    return (
        <View style={style.container}>
            <KeyboardAvoidingView enabled behavior="padding">
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingLeft: 15, paddingRight: 15, marginTop: '20%' }}>
                    <Text style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
                    <Input
                        placeholder='Phone number, username or email'
                        containerStyle={style.inputBox}
                        inputContainerStyle={inputBox.primary}
                    />
                    <Input
                        placeholder='Password'
                        containerStyle={style.inputBox}
                        inputContainerStyle={inputBox.primary}
                    />
                    <View style={style.forgetPasswordContainer}>
                        <Text style={theme.primaryBold}>Forgot password?</Text>
                    </View>
                    <BtnNext
                        title="Log In"
                        disabled={true}
                        buttonStyle={{ marginTop: 20 }}
                    />
                    <View style={style.socialContainer}>
                        <Divider value={'OR'} />
                        <FacebookLogin />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <AuthFooter />

        </View>
    )
}

const mapDispateToProps = (dispatch: any) => {
    return bindActionCreators({
        toggleLoader: toggleLoader
    }, dispatch)
}

export default connect(null, mapDispateToProps)(SignInScreen);