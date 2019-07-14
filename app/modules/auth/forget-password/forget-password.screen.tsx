import React, { Component, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoader } from '@app/store/actions/loader.action';
import inputBox from '@app/styles/input-box.style';
import { primary, gray } from '@app/app.style.config';
import { theme } from '@app/styles/theme.style';
import style from './forget-password.style';
import { Input, Button } from 'react-native-elements';
import Divider from '@app/shared/components/divider';
import FacebookLogin from '@app/shared/components/btn-facebook';
import DialCodeList from '@app/shared/components/dial-code-list';
import { ApiEndPoints } from '@app/core/models/interface/ApiEndPoint';
import { RestApiService } from '@app/core/services/restapi.service';

const restApiService = new RestApiService();
const ForgetPasswordScreen = (props: any) => {
    const [isContinueWithEmail, setForgetOption] = useState(false);
    const [showCountryModal, toggleCountryModal] = useState(false);
    return (
        <View style={style.container}>
            <KeyboardAvoidingView enabled behavior="padding">
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingLeft: 25, paddingRight: 25, marginTop: '5%' }}>
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Image
                            source={require('@app/assets/images/lock.png')}
                            style={{ width: 100, height: 100, borderRadius: 100 }}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>Troble logging in?</Text>
                        {isContinueWithEmail ? <View><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', marginBottom: 15 }}>Enter your username or email and we'll send you a password reset link to get back into your account.</Text></View> :
                            <View><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', marginBottom: 15 }}>Enter your phone number and we'll send you a password reset link to get back into your account.</Text></View>}
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => setForgetOption(true)}
                            style={[style.tab, { borderBottomColor: isContinueWithEmail ? '#000' : gray }]}
                        >
                            <Text style={[style.tabText, { color: isContinueWithEmail ? '#000' : gray }]}>Username</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setForgetOption(false)}
                            style={[style.tab, { borderBottomColor: !isContinueWithEmail ? '#000' : gray }]}>
                            <Text style={[style.tabText, { color: !isContinueWithEmail ? '#000' : gray }]}>Phone</Text>
                        </TouchableOpacity>
                    </View>

                    {isContinueWithEmail ? <Input
                        placeholder='Username or email'
                        containerStyle={style.inputBox}
                        inputContainerStyle={inputBox.primary}
                    /> : <View>
                            <Input 
                            placeholder='Phone'
                            containerStyle={style.inputBox}
                            inputContainerStyle={inputBox.primary}
                            />
                        </View>}
                    <Button
                        onPress={() => toggleCountryModal(true)}
                        title="Next"
                        buttonStyle={[style.loginButton, style.buttonDisable, { marginTop: 20 }]}
                    />
                    <View style={{ alignItems: 'center', marginTop: 20 }}><Text style={{ color: primary }}>Neet more help?</Text></View>
                    <View style={style.socialContainer}>
                        <Divider value={'OR'} />
                        <FacebookLogin />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={style.footer}>
                <Text style={theme.primaryBold}>Back To Login In</Text>
            </View>
            <DialCodeList visible={showCountryModal} close={(event: any) => toggleCountryModal(event)}/>
        </View>
    )
}

const mapDispateToProps = (dispatch: any) => {
    return bindActionCreators({
        toggleLoader: toggleLoader
    }, dispatch)
}

export default connect(null, mapDispateToProps)(ForgetPasswordScreen);