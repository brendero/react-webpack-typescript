import React, { Component } from 'react'
import { ButtonComponent } from './components/ButtonComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Typescript react starter</h1>
        <ButtonComponent buttonText="Press Here"/>
      </div>
    )
  }
}
