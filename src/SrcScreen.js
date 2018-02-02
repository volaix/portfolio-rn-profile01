import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import Interests from './Interests';
import Profile from './Profile';
import GradientButton from './ReuseableComponents/GradientButton';
import Info from './Info';


class SrcScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: 'rgba(46,43,58,1)' }}>

        <ScrollView
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <Profile />

          <Interests />

          <Info />

          <GradientButton />

        </ScrollView>

      </View>

    )
  }
}

export default SrcScreen