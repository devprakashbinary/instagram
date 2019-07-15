import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Tab from '@app/shared/components/tabs';
import PhoneInput from '@app/shared/components/phoneInput';
import style from './create-account.style';
import { CountryDialCode } from '@app/core/models/interface/CountryDialCode';
import { Input, Button } from 'react-native-elements';
import inputBox from '@app/styles/input-box.style';
import { gray } from '@app/app.style.config';
import AuthFooter from '@app/shared/components/auth-footer';


const CreateAccountScreen: FunctionComponent = (props: any) => {
    const [isContinueWithPhone, setForgetOption] = useState(true);
    const [dialCode, setDialCode] = useState({ dial_code: '+91', name: 'India', code: 'IN' });
    function onCountrySelect(event: CountryDialCode) {
        setDialCode(event);
    }
    return (
        <View style={style.container}>
            <View style={{paddingHorizontal: 30}}>
                <Tab
                    onLeftClick={() => { setForgetOption(true) }}
                    onRightClick={() => { setForgetOption(false) }}
                    leftTitle="Phone"
                    rightTitle="Email"
                />
                <View>
                    {isContinueWithPhone ? <PhoneInput onSelect={(event: CountryDialCode) => onCountrySelect(event)} /> :
                        <Input
                            placeholder='Email'
                            containerStyle={style.inputBox}
                            rightIcon={{ type: 'font-awesome', name: 'times-circle', color: gray }}
                            rightIconContainerStyle={{ display: 'none' }}
                            inputContainerStyle={[inputBox.primary, { marginBottom: 0 }]}
                        />}
                    <Button
                        title="Next"
                        buttonStyle={[style.btnNext, style.btnDisable, { marginTop: 20 }]}
                    />
                    {isContinueWithPhone && <Text style={{textAlign: 'center', fontSize: 16, color: gray, marginTop: 15}}>You may receive SMS updates from Instagram and can opt out at any time.</Text>}
                </View>
            </View>
            <AuthFooter/>

        </View>
    )
}

export default CreateAccountScreen;