import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import MainHeader from '@app/shared/components/main-header';
import StoryBarComponent from '@app/shared/components/story-bar';
import PublicPostComponent from '@app/shared/components/public-post/public-post';


const HomeScreen: FunctionComponent = () => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <MainHeader />
            <StoryBarComponent />
            <PublicPostComponent/>
        </View>
    )
}

export default HomeScreen;
