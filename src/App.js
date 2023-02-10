
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender':'남성',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any/2',
  'name': '고태우',
  'birthday': '12345',
  'gender':'남성',
  'job':'학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any/3',
  'name': '이순신',
  'birthday': '535454',
  'gender':'여성',
  'job':'장군'
},
]

class App extends Component{
  render(){
  return (
     <div>
      {customers.map(c=>{ return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
     </div>
    );
  }
}

export default App;
