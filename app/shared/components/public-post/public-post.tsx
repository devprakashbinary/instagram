import React from 'react';
import { View } from 'react-native';
import PublicPostHeaderComponent from '@app/shared/components/public-post/public-post-header';
import PublicPostActionComponent from '@app/shared/components/public-post/public-post-action';
import PublicPostImageComponent from '@app/shared/components/public-post/public-post-image';


const PublicPostComponent = (props: any) => {
    return (
        <View>
            <PublicPostHeaderComponent/>
            <PublicPostImageComponent/>
            <PublicPostActionComponent/>
        </View>
    )
}

export default PublicPostComponent;