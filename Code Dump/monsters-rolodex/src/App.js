import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { CardList } from './components/card_list/card_list.component';

import './App.css';


class App extends Component {
  /* constructor() {
    super();
    this.state = {
      // state
    }
  } */  

  // Alternatively, we can use this syntax
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return  (
    <div>
      {/* Inline Styling */}
      <h1 style={
          {textAlign: "center", fontFamily: "Bigelow Rules", color: "#0ccac4", fontSize: "72px"}
        }>Monsters Rolodex</h1>

      <input style={input_style} type='search' placeholder='Search Monster' 
        onChange={e => { this.setState({searchField: e.target.value}, () => console.log(this.state))} } />
      
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

// Styling using object
const input_style = {
  outline: "none",
  display: "block",
  margin: "1.2rem auto",
  padding: "10px"
}

export default App;
