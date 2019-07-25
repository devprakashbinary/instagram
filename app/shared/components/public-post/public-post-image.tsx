import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';


const PublicPostImageComponent = (props: any) => {
    return (
        <View>
            <Image
                source={{ uri: 'https://instagram.fdel19-1.fna.fbcdn.net/vp/9a2892ec165f9f446828b5ef5b82231a/5DB4605A/t51.2885-15/e35/51745167_487872295076463_3602484035368953596_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net&_nc_cat=103' }}
                style={{ width: '100%' , height: 400}}
                PlaceholderContent={<ActivityIndicator />}
            />
        </View>
    )
}

export default PublicPostImageComponent;