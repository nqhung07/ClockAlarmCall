/* eslint-disable prettier/prettier */
import React from 'react'
import { Text } from 'react-native'
import BackgroundTask from "react-native-background-task"

BackgroundTask.define(() => {
  console.log('Hello from a background task')
  alert('Hello from a background task')
  BackgroundTask.finish()
})

export default class Tasks extends React.Component {
  componentDidMount() {
    BackgroundTask.schedule({
      period: 10,
      timeout: 10,
    })
  }
  
  render() {
    return <Text>Hello world</Text>
  }
}