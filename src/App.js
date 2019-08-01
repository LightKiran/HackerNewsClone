import React from 'react';
import Header from './hack/Header';
import './hack/Mine.css';


class App extends React.Component{

  state = {
    loading: true,
    person: null
  };

  // best life cycle method if we are importing data from api
  async componentDidMount(){
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({person: data.results[0], loading : false});
  }

  render(){
  
    return (
     
          <div>
          <div className="container">
            <Header />
            <div>
           {this.state.loading || !this.state.person ? (
            <div>loading...</div>
            ) : (
            <div>{this.state.person.name.first}</div>
            ) }
         </div>
          </div>
          
         
         </div>

        );

  }

}




export default App;
