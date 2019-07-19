import React, { FunctionComponent, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './otp.style';
import { Text, Input } from 'react-native-elements';
import inputBox from '@app/styles/input-box.style';
import BtnNext from '@app/shared/components/btn-lg';
import { primary } from '@app/app.style.config';

const OTPScreen: FunctionComponent = (props: any) => {
    const [otp, setOTP] = useState(null)
    debugger;
    const auth = props.navigation.getParam('auth', {phone: '', emailAddress: ''});
    return (
        <View style={style.container}>
            <View style={{ paddingHorizontal: 30, alignItems: 'center', paddingTop: 50 }}>
                <Text style={{ textAlign: 'center', fontSize: 28, marginBottom: 25 }}>Enter the Code We Sent to {auth.phone}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Text style={{ color: primary, fontWeight: 'bold', fontSize: 20 }}>Change phone number</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}> or </Text>
                    <TouchableOpacity>
                        <Text style={{ color: primary, fontWeight: 'bold', fontSize: 20 }}>resend SMS</Text>
                    </TouchableOpacity>
                </View>
                <Input
                    placeholder="Confirmation Code"
                    containerStyle={{ paddingHorizontal: 0 }}
                    inputContainerStyle={inputBox.primary}
                    keyboardType="numeric"
                    returnKeyType="send"
                    onChangeText={(text) => setOTP(text)}
                />
                <BtnNext
                    title="Next"
                    disabled={otp === ''}
                    backgroundColor={primary}
                    buttonStyle={{ width: '100%' }}
                />
            </View>
            <View style={style.footer}>
                <Text style={{ color: primary, fontWeight: 'bold' }} onPress={() => props.navigation.goBack()}>Back</Text>
            </View>
        </View>
    )
}

export default OTPScreen