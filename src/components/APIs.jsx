import React, { Component } from 'react';

class APIs extends Component {
  state = { 
    articleIDs: [],
    articles: []
   }

  componentWillMount() {
    
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response=>response.json())
      .then(response=> { this.setState({
        articleIDs: response
      });
    })



  }

componentDidMount() {

  const articlesResponses = this.state.articleIDs.map(articleID => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${articleID}.json?print=pretty`)
      .then(response=>response.json())
      .then(response => console.log(response))
  })

  this.setState({
    articles: articlesResponses
  })
}

  render() { 

    return ( 
      <div>

      </div>
     );
  }
}
 
export default APIs;