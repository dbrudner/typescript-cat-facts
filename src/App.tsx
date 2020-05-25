import React, {useState, useEffect} from 'react';
import './App.css';
import {List} from "antd";

// https://cat-fact.herokuapp.com/facts

// {
//   "_id": "5887e1d85c873e0011036889",
//   "text": "Cats make about 100 different sounds. Dogs make only about 10.",
//   "type": "cat",
//   "user": {
//   "_id": "5a9ac18c7478810ea6c06381",
//   "name": {
//   "first": "Alex",
//   "last": "Wohlbruck"
//   }
//   },
//   "upvotes": 9,
//   "userUpvoted": null
//   }

type CatFact = {
  _id: string;
  text: string;
  type: string;
  user: {
    _id: string;
    name: {
      first: string;
      last: string;
    }
  },
  upvotes: number,
  userUpvoted?: boolean;
}

type CatFacts = CatFact[]

type CatFactApiResponse = {
  all: CatFacts;
}

function App() {
  const [catFacts, setCatFacts] = useState([] as CatFacts);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://cat-fact.herokuapp.com/facts');
      const data: CatFactApiResponse = await response.json();
      setCatFacts(data.all);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Cat facts</h1>
      <CatFactList catFacts={catFacts} />
    </div>
  );
}

type CatFactListProps = {
  catFacts: CatFacts;
}

const CatFactList: React.FC<CatFactListProps> = ({ catFacts }) => {
  // return <ul>
  //   {catFacts.map(fact => <li key={fact._id}>{fact.text}</li>)}
  // </ul>

  return <List
    dataSource={catFacts}
    renderItem={fact => <List.Item>{fact.text}</List.Item>}
  />
}

export default App;
