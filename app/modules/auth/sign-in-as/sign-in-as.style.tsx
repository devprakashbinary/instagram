import { StyleSheet } from "react-native";
import { primary } from "@app/app.style.config";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    btnCreateAccount: {
        backgroundColor: primary, 
        height: 50,
        width: '100%'
    },

    buttonDisable: {
        backgroundColor: '#66aaea'
    }
})