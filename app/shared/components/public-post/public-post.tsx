import React from 'react';
import { View, Text } from 'react-native';
import PublicPostHeaderComponent from '@app/shared/components/public-post/public-post-header';
import PublicPostActionComponent from '@app/shared/components/public-post/public-post-action';
import PublicPostImageComponent from '@app/shared/components/public-post/public-post-image';
import PublicPostStatusBarComponent from '@app/shared/components/public-post/public-post-statusbar';
import PublicPostCommentBoxComponent from '@app/shared/components/public-post/public-post-comment-box';
import { gray } from '@app/app.style.config';
const PublicPostComponent = (props: any) => {
    return (
        <View>
            <PublicPostHeaderComponent/>
            <PublicPostImageComponent/>
            <PublicPostActionComponent/>
            <PublicPostStatusBarComponent/>
            <PublicPostCommentBoxComponent/>
            <Text style={{marginTop: 5, marginBottom: 10, color: gray, paddingHorizontal: 15}}>2 days ago</Text>
        </View>
    )
}

export default PublicPostComponent;