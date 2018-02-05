import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import ToggleButton from './ToggleButton';
import { connect } from 'react-redux';


//TODO: refactor with redux
class HorizontalScroll extends React.Component {
  flipState = (buttonTitle, buttonGroup) => {
  }

  render() {
    console.log(this.props.signUpButtons)
    return (
      <ScrollView horizontal >

        <View>
        {
          Object.keys(this.props.signUpButtons)
          .map((buttonID)=>{
            console.log(buttonID)
            return (
              <ToggleButton
              key={buttonID}
              title={buttonID}
              toggle={this.props.signUpButtons[buttonID]}
              onPress={this.flipState}
            />
            )
          })
        }
        </View>
        
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

// const mapDispatchToProps = {
//   fetchData,
// }


export default connect(
  mapStateToProps
)(HorizontalScroll)