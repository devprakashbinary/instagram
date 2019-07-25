import React from 'react';
import { View, Text } from 'react-native';
import { gray } from '@app/app.style.config';

const PublicPostStatusBarComponent = (props: any) => {
    return (
        <View style={{flexDirection:'column', paddingHorizontal: 15}}>
            <View style={{flexDirection:'row'}}>
                <Text>AD</Text>
                <Text style={{marginLeft: 10}}>Liked by <Text style={{fontWeight: 'bold'}}>sahilps108</Text> and <Text  style={{fontWeight: 'bold'}}>83 others</Text></Text>
            </View>
            <View>
                <Text style={{color: gray}}>View all 5 comments</Text>
            </View>

        </View>
    )
}

export default PublicPostStatusBarComponent;