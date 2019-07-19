import React, { FunctionComponent, useState } from 'react';
import { View, Text } from 'react-native';
import Tab from '@app/shared/components/tabs';
import PhoneInput from '@app/shared/components/phoneInput';
import style from './create-account.style';
import { CountryDialCode } from '@app/core/models/interface/CountryDialCode';
import { Input } from 'react-native-elements';
import inputBox from '@app/styles/input-box.style';
import { gray, primary } from '@app/app.style.config';
import AuthFooter from '@app/shared/components/auth-footer';
import { OTP_SCREEN } from '@app/route/app.route-labels';
import AlreadyRegisteredModal from '@app/shared/components/modals/already-user';
import { AuthData } from '@app/core/mock/AuthData';
import Button from '@app/shared/components/btn-lg';

const CreateAccountScreen: FunctionComponent = (props: any) => {
    const [isContinueWithPhone, setForgetOption] = useState(true);
    const [isAlreadyPhoneExist, setAlreadyPhone] = useState(false);
    const [isAlreadyEmailExist, setAlreadyEmail] = useState(false);
    const [dialCode, setDialCode] = useState({ dial_code: '+91', name: 'India', code: 'IN' });
    const [auth, setAuthData] = useState({ email: '', phone: '', username: AuthData.username });

    function onCountrySelect(event: CountryDialCode) {
        setDialCode(event);
    }

    function onSubmitOTP() {
        if (auth.phone === AuthData.phone || auth.email === AuthData.emailAddress) {
            if (isContinueWithPhone) {
                setAlreadyPhone(true);
            } else {
                setAlreadyEmail(true);
            }
        } else {
            props.navigation.navigate(OTP_SCREEN, {phone: auth});
        }
    }

    return (
        <View style={style.container}>
            <View style={{ paddingHorizontal: 30 }}>
                <Tab
                    onLeftClick={() => { setForgetOption(true) }}
                    onRightClick={() => { setForgetOption(false) }}
                    leftTitle="Phone"
                    rightTitle="Email"
                />
                <View>
                    {isContinueWithPhone ? <PhoneInput
                        onSelect={(event: CountryDialCode) => onCountrySelect(event)}
                        returnKeyType="send"
                        keyboardType="numeric"
                        onChangeText={(text: any) => setAuthData({ ...text, phone: text })}
                    /> :
                        <Input
                            placeholder='Email'
                            containerStyle={style.inputBox}
                            rightIcon={{ type: 'font-awesome', name: 'times-circle', color: gray }}
                            rightIconContainerStyle={{ display: 'none' }}
                            inputContainerStyle={[inputBox.primary, { marginBottom: 0 }]}
                        />}
                    <Button
                        disabled={((auth.email === '' && !isContinueWithPhone) || (auth.phone === '' && isContinueWithPhone))}
                        onPress={() => onSubmitOTP()}
                        title="Next"
                        backgroundColor={primary}
                        buttonStyle={[style.btnNext, style.btnDisable, { marginTop: 20 }]}
                    />
                    {isContinueWithPhone && <Text style={{ textAlign: 'center', fontSize: 16, color: gray, marginTop: 15 }}>You may receive SMS updates from Instagram and can opt out at any time.</Text>}
                </View>
            </View>
            <AlreadyRegisteredModal isVisible={isAlreadyPhoneExist} username={auth.username} close={() => { setAlreadyPhone(false); props.navigation.navigate(OTP_SCREEN, {auth}) }} checkEmailAddress={false} />
            <AlreadyRegisteredModal isVisible={isAlreadyEmailExist} username={auth.username} close={() => { setAlreadyEmail(false); props.navigation.navigate(OTP_SCREEN, {auth})}} checkEmailAddress={true} />
            <AuthFooter parentProps={props} />



        </View>
    )
}

export default CreateAccountScreen;