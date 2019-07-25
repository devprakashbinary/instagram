import React from 'react';
import { View } from 'react-native';
import { Avatar, Input, Icon } from 'react-native-elements';
import { helper } from '@app/styles/theme.style';

const PublicPostCommentBoxComponent = (props: any) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '90%'}}>
                <Avatar source={{
                    uri: 'https://instagram.fdel19-1.fna.fbcdn.net/vp/fc30cc04ac705ea368b756a227e752b7/5DDF7D90/t51.2885-19/s150x150/45882535_353784618516351_3440639726061617152_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net'
                }}
                    avatarStyle={{ width: 30, height: 30, borderRadius: 100 }}
                    containerStyle={{ width: 30, height: 30, borderRadius: 100, marginRight: 10 }}
                    overlayContainerStyle={{ borderRadius: 100, backgroundColor: 'none' }}
                    rounded={true}
                />
                <Input
                    placeholder='Add a comment...'
                    inputContainerStyle={[{marginLeft: 0, paddingLeft: 5}, helper.bdwidth(0)]}
                    containerStyle={{paddingHorizontal: 0}}
                />
            </View>
            <View>
                <Icon name="plus-circle" type="font-awesome" size={22}/>
            </View>
        </View>
    )
}

export default PublicPostCommentBoxComponent; 