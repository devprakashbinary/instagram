import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { primary, gray } from '@app/app.style.config';

const PublicPostActionComponent = (props: any) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10 }}>
            <View style={{flexDirection: 'row', width: '33.33%'}}>
                <Icon name="heart-o" type="font-awesome" size={22} containerStyle={{ marginRight: 8 }} />
                <Icon name="comment-o" type="font-awesome" size={22} containerStyle={{ marginHorizontal: 8 }} />
                <Icon name="paper-plane-o" type="font-awesome" size={22} containerStyle={{ marginLeft: 8 }} />
            </View>
            <View style={{flexDirection: 'row', width: '33.33%', justifyContent: 'center'}}>
                <Icon name="circle" type="font-awesome" color={primary} size={10} containerStyle={{marginHorizontal: 3}}/>
                <Icon name="circle" type="font-awesome" color={gray} size={10} containerStyle={{marginHorizontal: 3}}/>
            </View>
            <View style={{flexDirection: 'row', width: '33.33%', justifyContent: 'flex-end'}}>
                <Icon name="bookmark-o" type="font-awesome" size={22} />
            </View>
        </View>
    )
}

export default PublicPostActionComponent;