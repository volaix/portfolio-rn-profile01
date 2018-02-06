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

          <Text style={{marginTop: 30, color: 'white', fontSize: 22}}>Theresa, 26</Text>

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