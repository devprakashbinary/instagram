
import { StyleSheet } from "react-native";
import { gray } from "@app/app.style.config";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },
    footer: {
        textAlign: 'center',
        padding: 10,
        borderColor: gray,
        borderTopWidth: 1,
        alignItems: 'center',
    }
});

export default style;