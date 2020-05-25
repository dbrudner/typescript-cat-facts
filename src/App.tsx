import React, {useState, useEffect} from 'react';
import './App.css';

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

type CatFactApiResponse = {
  all: CatFact[];
}

function App() {
  const [catFacts, setCatFacts] = useState([] as CatFact[]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://cat-fact.herokuapp.com/facts');
      const data: CatFactApiResponse = await response.json();
      setCatFacts(data.all);
    })();
  }, [])

  return (
    <div className="App">
      <h1>Cat facts</h1>
      <CatFactList />
    </div>
  );
}

type CatFactListProps = {
  catFacts: CatFact[]
}

const CatFactList: React.FC<CatFactListProps> = ({ catFacts }) => {
  return <ul>
    {catFacts.map(fact => <li>{fact.text}</li>)}
  </ul>
}

export default App;
