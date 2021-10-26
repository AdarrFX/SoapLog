import logo from './logo.svg';
import './App.css';
import { LogEntry } from './LogEntry';

function App() {

  const soapData = 
    [{
      "id" : 1,
      "ImageURL": "http://placekitten.com/300/200",
      "Title": "Orange Soap",
      "Description" : "Hard and orangey"
    },
    {
      "id" : 2,
      "ImageURL": "http://placekitten.com/350/250",
      "Title": "Lemon Soap",
      "Description" : "Soft and yellow"
    },
    {
      "id" : 3,
      "ImageURL": "http://placekitten.com/320/220",
      "Title": "Blue Soap",
      "Description" : "Blue and soft"
    },
    {
      "id" : 4,
      "ImageURL": "http://placekitten.com/199/199",
      "Title": "Tasty Soap",
      "Description" : "Delicious and tender"
    },
  ];

  return (
    <div className="App">
      <header className="App-header">

        <p>
         Soapmaking Log
        </p>

      </header>

      <div className="List-container">

        {soapData.map((listing) => (

          <LogEntry key={listing.id} soapImageLink={listing.ImageURL} soapTitle={listing.Title} soapDescription={listing.Description}/>

        ))}


      </div>


    </div>
  );
}

export default App;
