import React , {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { gray } from '@app/app.style.config';

export default (props: any) => {
    const [isContinueWithEmail, setForgetOption] = useState(false);
    return (
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
            <TouchableOpacity
                onPress={(event) => {setForgetOption(true); props.onLeftClick(event)}}
                style={[style.tab, { borderBottomColor: isContinueWithEmail ? '#000' : gray }]}
            >
                <Text style={[style.tabText, { color: isContinueWithEmail ? '#000' : gray }]}>Username</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={(event) => {setForgetOption(false); props.onRightClick(event)}}
                style={[style.tab, { borderBottomColor: !isContinueWithEmail ? '#000' : gray }]}>
                <Text style={[style.tabText, { color: !isContinueWithEmail ? '#000' : gray }]}>Phone</Text>
            </TouchableOpacity>
        </View>
    )
}



const style = StyleSheet.create({
    tab: {
        flex: 1,
        borderBottomWidth: 2,
        paddingVertical: 10
    },
    tabText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22
    },
})