import React from 'react';
import {StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchScreen from './screens/searchScreen';
import ResultScreen from './screens/resultScreen';
import store from './src/store/store';
import {Provider} from 'mobx-react/native';
import DetailScreen from './screens/DetailScreen';
const RootStack = StackNavigator({
  Search:{
    screen:SearchScreen
  },
  Result:{
    screen:ResultScreen
  },
  Detail:{
    screen:DetailScreen
  }
},
{
  initialRouteName: 'Search'
},
 )
export default class App extends React.Component {
  
  render() {
    return (
      <Provider {...store}>
      <RootStack/>
      </Provider>
      )
  }
}
// const styles = StyleSheet.create({
//   view:{
//     flex:1
//   }
// })
