import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import ToggleButton from './ToggleButton';
import { connect } from 'react-redux';
import groupObjectToArray from '../functions/groupObjectToArray';
import { buttonUpdate } from '../actions';

class HorizontalScroll extends React.Component {
  flipState = (buttonTitle) => {
    console.log('flipstate ran')
    this.props.buttonUpdate(buttonTitle)
  }

  render() {

    return (
      <ScrollView horizontal >

        {
          groupObjectToArray(this.props.signUpButtons).map((objectGroup, index) => (
            <View key={objectGroup + index}>
              {
                Object.keys(objectGroup)
                  .map((buttonID) => (
                    <ToggleButton
                      key={buttonID}
                      title={buttonID}
                      toggle={objectGroup[buttonID]}
                      onPress={this.flipState}
                    />
                  )
                  )
              }
            </View>
          ))
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const signUpButtons = state.signUpButtons
  return {
    signUpButtons,
  }
}

const mapDispatchToProps = {
  buttonUpdate,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalScroll)