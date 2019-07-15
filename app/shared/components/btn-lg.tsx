import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { primary } from '@app/app.style.config';


export default (props: ButtonProps) => {
    return (
        <Button
            {...props}
            disabledStyle={{ backgroundColor: '#66aaea' }}
            disabledTitleStyle={{color: '#fff'}}
            buttonStyle={{ height: 50, backgroundColor: primary}}
            containerStyle={{width: '100%' }}
        />
    )
}
