import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import ToggleButton from './ToggleButton';

//TODO: refactor with redux
class HorizontalScroll extends React.Component {
  flipState = (buttonTitle, buttonGroup) => {
  }

  render() {
    return (
      <ScrollView horizontal >

        <View>
          <ToggleButton
            title={'data.title'}
            toggle={true}
            onPress={this.flipState}
          />
        </View>


      </ScrollView>
    )
  }
}

export default HorizontalScroll