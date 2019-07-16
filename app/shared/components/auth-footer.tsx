import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '@app/styles/theme.style';
import { gray } from '@app/app.style.config';
import { SIGN_UP_SCREEN } from '@app/route/app.route-labels';

export default (props: any) => {
    return (
        <View style={style.footer}>
            <Text>Don't have an account? <Text style={theme.primaryBold} onPress={() => props.parentProps.navigation.navigate(SIGN_UP_SCREEN)}>Sign Up.</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    footer: {
        textAlign: 'center',
        padding: 10,
        borderColor: gray,
        borderTopWidth: 1,
        alignItems: 'center',
      }
})