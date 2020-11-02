import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
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
  }
  
  componentDidMount()
  {

  }
  
  render()
  {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <p key={monster.id}>{monster.name}</p>)}
      </div>
    );
  }
}

export default App;
