import { StyleSheet } from 'react-native';
import { gray } from '@app/app.style.config';
const inputBox = StyleSheet.create({
    primary: {
        backgroundColor: '#fafafa',
        borderColor: gray,
        borderRadius: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15
    }
});

export default inputBox;
