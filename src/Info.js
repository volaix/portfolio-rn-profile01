import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import HorizontalScroll from './ReuseableComponents/HorizontalScroll';
import TextColumn from './ReuseableComponents/TextColumn';

class Info extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20}}>
        <View style={{ width: '80%' }}>
          <Text style={{ color: 'rgba(188,111,101,1)', fontWeight: '800', marginTop: 20, marginBottom: 20 }}>INFO</Text>
        </View>

<TextColumn />

      </View>
    )
  }
}

export default Info