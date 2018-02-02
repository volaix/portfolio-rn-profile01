import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import ToggleButton from './ToggleButton';

//TODO: Make Map logic here
class HorizontalScroll extends React.Component {
  render() {
    return (
        <ScrollView horizontal>
          
        <View>
            <ToggleButton title='Philosophy' />
            <ToggleButton title='PhilosophyB' toggle/>
            <ToggleButton title='PhilosophyC' />
          </View>

          <View>
            <ToggleButton title='SwimmingA' />
            <ToggleButton title='SwimmingB' toggle/>
            <ToggleButton title='SwimmingC' />
          </View>

          <View>
            <ToggleButton title='Philosophy' />
            <ToggleButton title='Philosophy' />
            <ToggleButton title='Philosophy' />
          </View>

          <View>
            <ToggleButton title='Philosophy' />
            <ToggleButton title='Philosophy' />
            <ToggleButton title='Philosophy' />
          </View>

        </ScrollView>
    )
  }
}

export default HorizontalScroll