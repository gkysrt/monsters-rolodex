import React from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component'

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
    const {type, name, value} = event.target
    this.setState(prevState => {
      return {
        [name]: value,
        monsters: this.state.monsters.filter(element => element.name === value)
      }
    })
  }
  
  render()
  {
    return (
      <div className="App">
        <input type='text' onChange={this.handleChange} value={this.state.searchField} name='searchField'/>
        <br/>
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
