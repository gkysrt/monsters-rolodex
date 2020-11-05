import React from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        searchField: '',
        monsters: [
          {
            name: 'Frankenstein',
            id: 1
          },
          {
            name: 'Dracula',
            id: 2
          },
          {
            name: 'Zombie',
            id: 3
          }
        ]
      }
      
      // Javascript feature. Javascript methods has to know their context 
      // ( My guess: so that everytime "this" pointer is used, it will refer to that context? Or to be able to have a reference to that function using 'this' pointer ) 
      // Can use arrow func instead. Arrow functions are automatically binded to class they're contained within. So do anonymous functions
      this.handleChange = this.handleChange.bind(this); 
  }
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange(event)
  {
    const {type, name, className, value} = event.target
    this.setState(prevState => {
      return {
        [name]: value
      }
    }, () => console.log(this.state))

    // this.setState(func to set state, callback) is an asyncronous function 
  }
  
  render()
  {
    const {monsters, searchField} = this.state;
    const filteredList = monsters.filter(element => element.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          onChange={this.handleChange}
          value={this.state.searchField}
          name='searchField'/>
        <br/>
        <CardList monsters={filteredList}/>
      </div>
    );
  }
}

export default App;
