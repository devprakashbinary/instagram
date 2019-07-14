import React from 'react';
import { View } from 'react-native';
import { Divider, Badge } from 'react-native-elements';
import { gray } from '@app/app.style.config';
export default (props: any) => {
    return (
        <View style={{flex: 1}}>
            <Divider style={{ backgroundColor: gray, height: 1 }} />
            <Badge value={props.value}
                textStyle={{ fontSize: 16, color: gray, fontWeight: 'bold' }}
                badgeStyle={{ backgroundColor: '#fff', height: 40, width: 70, borderRadius: 100, position: 'absolute', left: '42%', top: -20 }} />
        </View>
    )
}