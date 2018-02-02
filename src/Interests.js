import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import HorizontalScroll from './ReuseableComponents/HorizontalScroll';

class Interests extends React.Component {
  render() {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={{width: '80%'}}>
        <Text style={{ color: 'pink', fontWeight: '700', marginTop: 20, marginBottom: 20}}>INTERESTS</Text>
        </View>

      <HorizontalScroll />

      </View>
    )
  }
}

export default Interests