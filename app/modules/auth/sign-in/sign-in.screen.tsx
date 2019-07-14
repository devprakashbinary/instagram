import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoader } from '@app/store/actions/loader.action';
import { Avatar } from 'react-native-elements';

const SignInScreen = (props: any) => {
    return (
        <View>
            <Text onPress={() => props.toggleLoader(true)} style={{ fontFamily: 'Billabong', fontSize: 40 }}>Instagram</Text>
            <Avatar
                onPress={() => props.toggleLoader(true)}
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />

        </View>
    )
}

const mapDispateToProps = (dispatch: any) => {
    return bindActionCreators({
        toggleLoader: toggleLoader
    }, dispatch)
}

export default connect(null, mapDispateToProps)(SignInScreen);