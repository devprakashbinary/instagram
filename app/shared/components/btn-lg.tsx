import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { primary } from '@app/app.style.config';


export default (props: ButtonLGProps) => {
    return (
        <Button
            {...props}
            disabledStyle={{ backgroundColor: '#66aaea' }}
            disabledTitleStyle={{color: '#fff'}}
            titleStyle={props.titleStyle}
            disabled={props.disabled}
            buttonStyle={[{ height: 50, backgroundColor: props.backgroundColor }, props.buttonStyle]}
            containerStyle={[{width: '100%' }, props.containerStyle]}
        />
    )
}

interface ButtonLGProps extends ButtonProps {
    backgroundColor: string;
}
