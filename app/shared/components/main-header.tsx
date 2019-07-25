import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header , Icon} from 'react-native-elements';
import { offWhite, gray } from '@app/app.style.config';

const RightMenuComponent: FunctionComponent = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 20 }}>
                <Icon name="television" type="font-awesome" size={26} />
            </View>
            <View>
                <Icon name="paper-plane-o" type="font-awesome" size={26} />
            </View>
        </View>
    )
}


const MainHeader: FunctionComponent = (props: any) => {
    return (
        <View>
            <Header
                leftComponent={<Icon name="camera-retro" type="font-awesome" size={26} />}
                centerComponent={{ text: 'Instagram', style: { color: '#000', fontFamily: 'Billabong', fontSize: 35, marginBottom: -7 } }}
                rightComponent={<RightMenuComponent />}
                containerStyle={{ borderBottomColor: gray, borderBottomWidth: 1, backgroundColor: offWhite, paddingTop: 0, paddingBottom: 0, height: 50, paddingHorizontal: 15 }}

            />
        </View>
    )
}

export default MainHeader;

const style = StyleSheet.create({})
