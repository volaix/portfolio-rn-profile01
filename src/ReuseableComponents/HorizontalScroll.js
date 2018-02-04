import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import ToggleButton from './ToggleButton';

//TODO: refactor with redux
class HorizontalScroll extends React.Component {
  state = {
    Buttons: [
      [
        {
          title: 'Philosophy',
          toggle: true,
        },
        {
          title: 'Music',
          toggle: true,
        },
        {
          title: 'Travelling',
          toggle: false,
        },
      ],
      [

        {
          title: 'Sport',
          toggle: true,
        },
        {
          title: 'Soccer',
          toggle: false,
        },
        {
          title: `Rock'n'Roll`,
          toggle: false,
        },
      ],
      [
        {
          title: `Swimming`,
          toggle: false,
        },
        {
          title: `Radiohead`,
          toggle: false,
        },
        {
          title: `Dog`,
          toggle: true,
        },
      ],
      [
        {
          title: `Religion`,
          toggle: true,
        },
        {
          title: `Michael Jackson`,
          toggle: true,
        },
        {
          title: `France`,
          toggle: true,
        },
      ],
    ]
  }

  flipState = (buttonTitle, buttonGroup) => {
    console.log('flipping button', buttonTitle)
    //redux thunk this
    const search = (element) => element.title === buttonTitle
    this.setState((prevState) => {
      const flipped = !prevState.Buttons[buttonGroup].find(search).toggle
      console.log(prevState.Buttons[buttonGroup].find(search))
      return (
        {
          Buttons: [
            ...prevState.Buttons,
            ...prevState.Buttons[0].toggle = flipped
          ]
        }
      )
    })
  }

  render() {
    return (
      <ScrollView horizontal >

        {
          this.state.Buttons.map((d, index) => (
            <View key={('interestsGroup', index)}>
              {
                this.state.Buttons[index].map((data) => (
                  <ToggleButton
                    key={data.title}
                    title={data.title}
                    toggle={data.toggle}
                    onPress={this.flipState}
                    buttonGroup={index}
                  />
                ))
              }
            </View>
          )
          )
        }

      </ScrollView>
    )
  }
}

export default HorizontalScroll