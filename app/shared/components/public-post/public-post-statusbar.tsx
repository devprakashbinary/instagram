import React from 'react';
import { View, Text } from 'react-native';
import { gray } from '@app/app.style.config';
import { Avatar } from 'react-native-elements';
import { helper } from '@app/styles/theme.style';

const PublicPostStatusBarComponent = (props: any) => {
    return (
        <View style={{ flexDirection: 'column', paddingHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar source={{
                        uri: 'https://instagram.fdel19-1.fna.fbcdn.net/vp/09611dbe01158c6310e5a3c3075f52c3/5DEB8AA1/t51.2885-19/s150x150/23594389_891131597719810_5499267213741260800_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net'
                    }}
                        avatarStyle={{ width: 32, height: 32, borderRadius: 100 }}
                        containerStyle={[{ width: 32, height: 32, borderRadius: 100, marginRight: 0, borderColor: '#fff', position: 'relative', zIndex: 2 }, helper.bdwidth(2), helper.padding(0), helper.margin(0)]}
                        overlayContainerStyle={[{ borderRadius: 100, backgroundColor: 'none' }, helper.padding(2)]}
                        rounded={true}
                    />
                    <Avatar source={{
                        uri: 'https://instagram.fdel19-1.fna.fbcdn.net/vp/ae28f947b8d29d5fb584adad00cec2ac/5DE6791D/t51.2885-19/s150x150/66830733_344256546488173_1978021615937519616_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net'
                    }}
                        avatarStyle={{ width: 23, height: 23, borderRadius: 100 }}
                        containerStyle={{ width: 23, height: 23, borderRadius: 100, marginLeft: -10, position: 'relative', zIndex: 1 }}
                        overlayContainerStyle={{ borderRadius: 100, backgroundColor: 'none' }}
                        rounded={true}
                    />
                </View>
                <Text style={{ marginLeft: 10 }}>Liked by <Text style={{ fontWeight: 'bold' }}>sahilps108</Text> and <Text style={{ fontWeight: 'bold' }}>83 others</Text></Text>
            </View>
            <View>
                <Text style={{ color: gray }}>View all 5 comments</Text>
            </View>

        </View>
    )
}

export default PublicPostStatusBarComponent;