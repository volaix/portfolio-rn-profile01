import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'

class Interests extends React.Component {
  render() {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={{width: '80%'}}>
        <Text style={{ color: 'pink', fontWeight: '700', marginTop: 20, marginBottom: 20}}>INTERESTS</Text>
        </View>
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
      </View>
    )
  }
}

export default Interests