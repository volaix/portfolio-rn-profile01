import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import HorizontalScroll from './ReuseableComponents/HorizontalScroll';
import TextColumn from './ReuseableComponents/TextColumn';

const TextColumnData = [
  {
    category: 'Age',
    result: '26',
  },
  {
    category: 'Height',
    result: `5'4"`,
  },
  {
    category: 'Ethnicity',
    result: 'White',
  },
  {
    category: 'Sign',
    result: 'Pisces',
  },
  {
    category: 'Religion',
    result: 'Catholic',
  },
  {
    category: 'Body Type',
    result: 'Fit',
  },
  {
    category: 'Diet',
    result: `Vegan`,
  },
  {
    category: 'Smoke',
    result: 'No',
  },
  {
    category: 'Drink',
    result: 'No',
  },
  {
    category: 'Drugs',
    result: 'Never',
  },
]

class Info extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
        <View style={{ width: '80%' }}>
          <Text style={{ color: 'rgba(188,111,101,1)', fontWeight: '800', marginTop: 20, marginBottom: 20 }}>INFO</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TextColumn data={TextColumnData.slice(0,5)} />
          <TextColumn data={TextColumnData.slice(5,10)} />
        </View>

      </View>
    )
  }
}

export default Info