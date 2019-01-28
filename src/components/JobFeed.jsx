import React, { Component } from 'react';

class JobFeed extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('https://jobs.github.com/positions.json?full_time=true',{mode:'no-cors'})
    .then(function(response) { return response.json(); })
    .then(response=> { this.setState({jobs: response});
    })
    .catch(response => {
      console.error(response);
  });
  }

  render() { 
    return ( 
      <div>
      </div>
    );
  }
}
 
export default JobFeed;