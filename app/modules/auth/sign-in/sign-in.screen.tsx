import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoader } from '@app/store/actions/loader.action';
import inputBox from '@app/styles/input-box.style';
import { primary, gray } from '@app/app.style.config';
import { theme } from '@app/styles/theme.style';
import style from './sign-in.style';
import { Avatar, Input, Button, Divider, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = (props: any) => {
    return (
        <View style={style.container}>
            <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: '20%' }}>
                <Text onPress={() => props.toggleLoader(true)} style={{ fontFamily: 'Billabong', fontSize: 60, textAlign: 'center' }}>Instagram</Text>
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
                <Button
                    title="Log In"
                    buttonStyle={[style.loginButton, style.buttonDisable]}
                />
                <View style={style.socialContainer}>
                    <Divider style={{ backgroundColor: gray, height: 1 }} />
                    <Badge value="OR"
                        textStyle={{ fontSize: 16, color: gray, fontWeight: 'bold' }}
                        badgeStyle={{ backgroundColor: '#fff', height: 40, width: 70, borderRadius: 100, position: 'absolute', left: '42%', top: -20 }} />
                    <Button
                        icon={
                            <Icon
                                name="facebook-square"
                                size={25}
                                color={primary}
                                
                            />
                        }
                        containerStyle={{marginTop: 50}}
                        titleStyle={{marginLeft: 15}}
                        title="Log In With Facebook"
                        type="clear"
                    />
                </View>
            </View>
            <View style={style.footer}>
                <Text>Don't have an account? <Text style={theme.primaryBold}>Sign Up.</Text></Text>
            </View>

        </View>
    )
}

const mapDispateToProps = (dispatch: any) => {
    return bindActionCreators({
        toggleLoader: toggleLoader
    }, dispatch)
}

export default connect(null, mapDispateToProps)(SignInScreen);