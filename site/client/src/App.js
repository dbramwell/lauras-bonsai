import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    year: new Date().getFullYear(),
    month: new Date().toLocaleString("en-us", {month: "long"})
  }

  fetchWaterings() {
    var endpoint = 'https://00ix9zye5i.execute-api.us-east-1.amazonaws.com/dev/waterings?'
    if (this.state.month) {
      endpoint += `year=${this.state.year}`
    }
    if (this.state.month) {
      endpoint += `&month=${this.state.month}`
    }
    fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({data: json})
    });
  }

  render() {
    return (
      <div className="App" style={{
          backgroundImage: `url(${require("./images/background.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} >
        <header className="App-header">
          <h1>Laura's Bonsai</h1>
          <a href="#" onClick={(event) => {
            event.preventDefault()
            this.fetchWaterings()
          }}>Fetch Waterings</a>
          {this.state.data ?
          <div style={{backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '10px'}}>
            <Timeline>
              {this.state.data.Items.sort(function(a, b){
                var keyA = new Date(a.time),
                    keyB = new Date(b.time);
                if(keyA > keyB) return -1;
                if(keyA < keyB) return 1;
                return 0;
              }).map((item) => <TimelineEvent createdAt={item.time} icon={<i />} iconColor="#6fba1c" />)}
            </Timeline>
          </div>
          :
            null
          }
        </header>
      </div>
    );
  }
}

export default App;
