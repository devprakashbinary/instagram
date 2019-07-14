import { StyleSheet } from "react-native";
import { primary } from "@app/app.style.config";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 50
    },
    inputBox: {
        paddingLeft: 0,
        paddingRight: 0
    },
    btnNext: {
        backgroundColor: primary,
        height: 50, 
        borderRadius: 5
    },
    btnDisable: {
        backgroundColor: '#66aaea'
    },
});

export default style;