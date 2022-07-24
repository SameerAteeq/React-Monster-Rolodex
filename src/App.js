// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value , setvalue]
  const [Monsters, setMonsters] = useState([]);
  const [FilterdMonsters, setFilteredMonsters] = useState(Monsters);

  console.log('rendered');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const NewFilterdMonsters = Monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(NewFilterdMonsters);
  }, [Monsters, searchField]);

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className='app-tittle'>Monster Rolodex</h1>
      <SearchBox
        className='monster-search-box'
        OnchangeHandler={OnSearchChange}
        placeholder='Search Monsters' />

      {<CardList monsters={FilterdMonsters} />}
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       Monsters: [],
//       searchField: '',
//       loading: false
//     };

//   }

//   componentDidMount() {

//     this.setState(() => {
//       return {
//         loading: true
//       }
//     })
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { Monsters: users, loading: false };
//       }
//       ));
//   }
//   OnSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   }
//   render() {

//     const { searchField, Monsters } = this.state;
//     const { OnSearchChange } = this;
//     const FilterdMonsters = Monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     if (this.state.loading) return <p>loading....</p>

//     return (
//       <div className="App">
//         <h1 className='app-tittle'>Monster Rolodex</h1>
//         <SearchBox className='monster-search-box' OnchangeHandler={OnSearchChange} placeholder='Search Monsters' />
//         <CardList monsters={FilterdMonsters} />
//       </div>
//     );
//   }
// }

export default App;
