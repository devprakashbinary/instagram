import React from 'react';
import { Avatar, Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { primary } from '@app/app.style.config';

const StoryRoundThumbComponent = (props: StoryRoundThumbProps) => {
    return (
        <View style={[{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }, props.containerStyle]}>
            <Avatar
                source={{
                    uri:
                        props.imageURL,
                }}
                avatarStyle={{ width: 52, height: 52, borderRadius: 100 }}
                containerStyle={[style.containerStyle, { borderColor: props.isOwner ? 'rgba(0,0,0,0)' : 'green', }]}
                overlayContainerStyle={{ borderRadius: 100, backgroundColor: 'none' }}
                rounded={true}
            />
            {props.isOwner && <Icon name="add-circle" type="ionicons" size={20} color={primary} containerStyle={{ position: 'absolute', top: 40, right: 7 }}></Icon>}
            <Text style={{ marginTop: 3, maxWidth: 75 }} numberOfLines={1}>{!props.isOwner ? props.userName : 'Your Story'}</Text>
        </View>
    )
}

export default StoryRoundThumbComponent;

interface StoryRoundThumbProps {
    containerStyle: any;
    imageURL: string;
    userName: string;
    isOwner: boolean
}

const style = StyleSheet.create({
    containerStyle: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1,
        paddingHorizontal: 3,
        paddingVertical: 3
    }
})