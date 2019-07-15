import { StyleSheet } from 'react-native';
import { gray } from '@app/app.style.config';
import { primary } from '@app/app.style.config';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputBox: {
        paddingLeft: 0,
        paddingRight: 0
    },
    forgetPasswordContainer: {
        alignItems: 'flex-end',
        marginBottom: 25
    },
    socialContainer: {
        marginTop: '10%',
        flex: 1
    },
    footer: {
        textAlign: 'center',
        padding: 10,
        borderColor: gray,
        borderTopWidth: 1,
        alignItems: 'center',
    }
})