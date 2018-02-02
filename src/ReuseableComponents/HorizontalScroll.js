import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'

class HorizontalScroll extends React.Component {
  render() {
    return (
        <ScrollView horizontal>
          
        <View>
            <Button title='Philosophy' />
            <Button title='Philosophy' />
            <Button title='Philosophy' />
          </View>

          <View>
            <Button title='Philosophy' />
            <Button title='Philosophy' />
            <Button title='Philosophy' />
          </View>

          <View>
            <Button title='Philosophy' />
            <Button title='Philosophy' />
            <Button title='Philosophy' />
          </View>
          
        </ScrollView>
    )
  }
}

export default HorizontalScroll