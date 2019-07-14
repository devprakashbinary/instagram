import { StyleSheet } from 'react-native';
import { primary } from '@app/app.style.config';

export const theme = StyleSheet.create({
    primary: {
        color: primary
    },
    primaryBold: {
        color: primary,
        fontWeight: 'bold'
    }
});

export const helper = {
    bdwidth: (width: number) => {
        return {
            borderBottomWidth: width,
            borderTopWidth: width,
            borderRightWidth: width,
            borderLeftWidth: width,
        }
    }
}
