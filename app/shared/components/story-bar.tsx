import React, { FunctionComponent } from 'react';
import { View, ScrollView } from 'react-native';
import StoryRoundThumbComponent from '@app/shared/components/story-round-thumb';
import { gray } from '@app/app.style.config';
import { userStories } from '@app/core/mock/UserStoryHomeList';


const StoryBarComponent: FunctionComponent = (props: any) => {
    return (
        <View style={{ flexDirection: 'row', borderBottomColor: gray, borderBottomWidth: 1, paddingVertical: 3, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {userStories.map(elem => <StoryRoundThumbComponent containerStyle={{marginHorizontal: 5}} imageURL={elem.imageUrl} userName={elem.username} isOwner={elem.isOwner}/>)}
            </ScrollView>
        </View>
    )
}

export default StoryBarComponent