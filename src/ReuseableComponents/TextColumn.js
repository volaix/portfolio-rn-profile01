import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import DoubleText from './DoubleText';

const TextColumnDataA = [
  {
    category: 'Age',
    result: '26'
  },
  {
    category: 'Ethnicity',
    result: 'White'
  },
  {
    category: 'Sign',
    result: 'Pisces'
  },
  {
    category: 'Religion',
    result: 'Catholic'
  },
]

class TextColumn extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>

        <DoubleText category={'Age'} result={'26'}/>

        <Text>Height: 5'4"       </Text>
        <Text>Ethnicity: White        </Text>
        <Text>Sign: Pisces       </Text>
        <Text>Religion: Catholic       </Text>

      </View>
    )
  }
}

export default TextColumn