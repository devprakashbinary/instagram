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
    bdwidth: (value: number) => {
        return {
            borderBottomWidth: value,
            borderTopWidth: value,
            borderRightWidth: value,
            borderLeftWidth: value,
        }
    },
    padding: (value: number) => {
        return {
            paddingVertical: value,
            paddingHorizontal: value,
        }
    },
    margin: (value: number) => {
        return {
            paddingVertical: value,
            paddingHorizontal: value,
        }
    }
}
