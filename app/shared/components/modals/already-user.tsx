import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Button from '@app/shared/components/btn-lg';
import { primary, gray } from '@app/app.style.config';
import { Divider } from 'react-native-elements';
export default (props: ModalInterface) => {
    return (
        <View>
            <Modal isVisible={props.isVisible}>
                <View style={style.mainContainer}>
                    <View style={style.headerContainer}>
                        <Image
                            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                            style={{ width: 80, height: 80, borderRadius: 100 }}
                        />
                        <Text style={style.heading}>Log in as {props.username}?</Text>
                        {props.checkEmailAddress ? <Text style={style.paragraph}>It looks like you alreday have an Instagram account.
                        You can only have one account per email address.</Text>
                            : <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>It looks like you alreday have an Instagram account.</Text>}
                    </View>
                    <Divider style={style.divider} />
                    <View style={style.footerContainer}>
                        <Button
                            backgroundColor={primary}
                            title={`Countine as ${props.username}`}
                        />
                        <Button
                            backgroundColor="none"
                            title="Create New Account"
                            titleStyle={{ color: primary }}
                            onPress={() => props.close(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View >
    )
}


interface ModalInterface {
    isVisible: boolean;
    checkEmailAddress: boolean;
    close: any;
    username?: string;
}

const style = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 5
    },
    footerContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        width: '100%',
        alignItems: 'center'
    },
    divider: {
        height: 1,
        backgroundColor: gray,
        marginVertical: 5,
        width: '100%'
    },
    heading: {
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }

})