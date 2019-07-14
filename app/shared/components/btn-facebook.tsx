import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primary } from '@app/app.style.config';
export default (props: any) => {
    return (
        <Button
            icon={
                <Icon
                    name="facebook-square"
                    size={25}
                    color={primary}

                />
            }
            containerStyle={{ marginTop: 50 }}
            titleStyle={{ marginLeft: 15 }}
            title="Log In With Facebook"
            type="clear"
        />
    )
}