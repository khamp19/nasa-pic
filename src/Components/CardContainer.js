import React, { Component } from 'react';
import AstCard from './AstCard';
import axios from 'axios';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      astronomy:[]
    }
  }
  componentDidMount() {
    const API_Key = 'xFMCW12PS0v8fhdRkITjV2ELyuxwBfRqoL1TEepD';
    const NASA = 'https://api.nasa.gov/planetary/apod?api_key=';

    axios.get(NASA+API_Key)
      .then(res => {
        this.setState({
          astronomy: res.data
        })
        console.log(this.state.astronomy)
      })
      .catch(err => {
        console.log(err, 'cannot get data')
      });
  }

  render () {
    const { astronomy } = this.state;
    return (
      <div>
        <AstCard data={astronomy}/>
      </div>
    )
  }
}

export default CardContainer;
