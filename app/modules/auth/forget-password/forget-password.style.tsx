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
    loginButton: {
        backgroundColor: primary,
        height: 50
    },
    buttonDisable: {
        backgroundColor: '#66aaea'
    },
    socialContainer: {
        marginTop: '10%',
        flex: 1
    },
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
    footer: {
        textAlign: 'center',
        padding: 10,
        borderColor: gray,
        borderTopWidth: 1,
        alignItems: 'center',
    },
    phoneDropdown: {
        paddingRight: 15, 
        paddingVertical: 5, 
        borderRightWidth: 1, 
        borderColor: gray, 
        color: primary, 
        fontWeight: 'bold' 
    },
    phoneNumberContainer: { 
        backgroundColor:'#fafafa',
        borderRadius: 5, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 15,
        borderColor: gray
    }
})