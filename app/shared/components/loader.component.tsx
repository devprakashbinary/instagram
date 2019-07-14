
import React, { FunctionComponent } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");
const LoaderComponent: FunctionComponent = (props: any) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: width,
            height: height,
            zIndex: 2000
        }}>
            <ActivityIndicator size="large" color="#ef5b29" />
        </View>
    )
}

export default LoaderComponent;
