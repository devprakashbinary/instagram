/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import RouterOutlet from './app/route/app.route';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import LoaderComponent from '@app/shared/components/loader';

const App = (props: any) => {
  return (
   <View style={{ flex: 1, backgroundColor: '#fff'}}>
     <RouterOutlet/>
     {props.show && <LoaderComponent/>}
   </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
      show: state.loaderReducer.show
  }
}

export default connect(mapStateToProps)(App);
