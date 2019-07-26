import React, { FunctionComponent } from 'react';
import { View, ScrollView } from 'react-native';
import MainHeader from '@app/shared/components/main-header';
import StoryBarComponent from '@app/shared/components/story-bar';
import PublicPostComponent from '@app/shared/components/public-post/public-post';


const HomeScreen: FunctionComponent = () => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <MainHeader />
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
                <StoryBarComponent />
                <PublicPostComponent />
                <PublicPostComponent />
                <PublicPostComponent />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;
