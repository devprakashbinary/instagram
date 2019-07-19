import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { helper } from '@app/styles/theme.style';
import { gray, primary } from '@app/app.style.config';
import DialCodeList from '@app/shared/components/modals/dial-code-list';
import { CountryDialCode } from '@app/core/models/interface/CountryDialCode';

export default (props: any) => {
    const [dialCode, setDialCode] = useState({ dial_code: '+91', name: 'India', code: 'IN' });
    const [showCountryModal, toggleCountryModal] = useState(false);
    return (
        <View style={[helper.bdwidth(1), style.phoneNumberContainer]}>
            <Text
                onPress={() => toggleCountryModal(true)}
                style={style.phoneDropdown}>{dialCode.code} {dialCode.dial_code}</Text>
            <Input
                {...props}
                placeholder='Phone'
                inputStyle={{ fontWeight: 'bold' }}
                rightIconContainerStyle={{ display: 'none' }}
                rightIcon={{ type: 'font-awesome', name: 'times-circle', color: gray }}
                inputContainerStyle={[helper.bdwidth(0), { paddingLeft: 15 }]}
            />
            <DialCodeList visible={showCountryModal} close={(event: any) => toggleCountryModal(false)} onSelect={(event: CountryDialCode) => { props.onSelect(event); setDialCode(event), toggleCountryModal(false) }} />
        </View>
    )
}

const style = StyleSheet.create({
    phoneDropdown: {
        paddingRight: 15,
        paddingVertical: 5,
        borderRightWidth: 1,
        borderColor: gray,
        color: primary,
        fontWeight: 'bold'
    },
    phoneNumberContainer: {
        backgroundColor: '#fafafa',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderColor: gray
    }
})