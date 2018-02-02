import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'

class ToggleButton extends React.Component {
  render() {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
<Button title={props.title} />
      </View>
    )
  }
}

export default ToggleButton