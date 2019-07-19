import React, { useState } from 'react';
import axios from 'axios';
import {
    Image,
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    ModalProps,
    ScrollView
} from 'react-native';
import { gray } from '@app/app.style.config';
import { Input } from 'react-native-elements';
import { helper } from '@app/styles/theme.style';

export default (props: AccountAssitanceProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}>
            <View style={style.headerContainer}>
                <Text style={style.headerTitle}>Account Assistance</Text>
                <TouchableOpacity onPress={() => props.close(false)} style={style.btnDone}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Done</Text></TouchableOpacity>
            </View>
            <ScrollView>
                <View style={style.searchBarContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingRight: 20, borderRightWidth: 1, borderRightColor: gray }}>
                            <Image
                                source={require('@app/assets/images/instagram-black-white.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <Text style={{ fontFamily: 'Billabong', fontSize: 30, paddingLeft: 20, paddingTop: 5 }}>Instagram</Text>
                    </View>
                    <Input
                        leftIcon={{ type: 'font-awesome', name: 'search', color: gray, size: 16 }}
                        leftIconContainerStyle={{ marginHorizontal: 10 }}
                        placeholder="How can w help?"
                        inputContainerStyle={[helper.bdwidth(1), { height: 30, paddingRight: 10, marginTop: 10, backgroundColor: '#fff', borderRadius: 3 }]}
                    />
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={{ paddingVertical: 20, paddingHorizontal: 20, color: gray, fontSize: 16, fontWeight: 'bold', borderBottomColor: gray, borderBottomWidth: 1 }}>Help Center</Text>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                        <Text style={{ fontSize: 26 }}>What can I do if I've lost access to the email or phone number I signed up with?</Text>
                        <Text style={{ fontSize: 14, marginTop: 20 }}>If you've lost access to the eamil or phone number you used to sign up for Instagram,
                    you can either try to regain access to the email or phone number or you can update your profile with new account information</Text>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    )
}




const style = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: gray,
        borderBottomWidth: 1
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    btnDone: {
        width: '28%',
        alignItems: 'flex-end'
    },
    searchBarContainer: {
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: gray,
        alignItems: 'center'
    }
});

interface AccountAssitanceProps extends ModalProps {
    close: any;
}
