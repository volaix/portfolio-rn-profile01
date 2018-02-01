import React from 'react'
import { Text, View } from 'react-native';
import Interests from './Interests';
import Profile from './Profile';
import GradientButton from './ReuseableComponents/GradientButton';


class SrcScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: 'rgba(46,43,58,1)', justifyContent: 'center', alignItems: 'center' }}>

        <Profile />

        <Interests />

        <GradientButton />

      </View>
    )
  }
}

export default SrcScreen