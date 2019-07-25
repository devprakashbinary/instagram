import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';




const PublicPostHeaderComponent = (props: any) => {
    // function action() {
    //     Alert
    // }
    return (
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center',  paddingHorizontal: 15, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                <Avatar source={{
                    uri: 'https://instagram.fdel19-1.fna.fbcdn.net/vp/09611dbe01158c6310e5a3c3075f52c3/5DEB8AA1/t51.2885-19/s150x150/23594389_891131597719810_5499267213741260800_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net'
                }}
                    avatarStyle={{ width: 35, height: 35, borderRadius: 100 }}
                    containerStyle={{ width: 35, height: 35, borderRadius: 100, marginRight: 10 }}
                    overlayContainerStyle={{ borderRadius: 100, backgroundColor: 'none' }}
                    rounded={true}
                />
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>chaubey_vish</Text>
                    <Text>delhi</Text>
                </View>
            </View>
            <View>
                <Icon name="more" type="ionicons" />
            </View>
        </View>
    )
}

export default PublicPostHeaderComponent;