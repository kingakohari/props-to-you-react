import React from 'react'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionCard from './components/IntroductionCard';

function App() {

  const date = new Date()

  const logoName = "IT Freaks"

  const students = [
    {
      name: "Béla",
      school: "Kossuth Lajos Elementary School",
      age: 10,
      hobbyList: ["crossword puzzles", "coding", "fishing"],
      hairColor: "red",
      eyeColor: "blue",
      height: 152,
    },
  
    {
      name: "Bill",
      school: "Harvard University",
      age: 20,
      hobbyList: ["coding", "partying", "sleeping"],
      hairColor: "purple",
      eyeColor: "brown",
      height: 182,
    }
    ]


  return (
    <div className="App">
      <Header logo={logoName} />
      <IntroductionCard 
        name={students[0].name}
        school={students[0].school}
        age={students[0].age}
        hobbyList={["crossword puzzles","coding","fishing"]}
        hairColor={students[0].hairColor}
        eyeColor={students[0].eyeColor}
        height="152"
      />
      <IntroductionCard 
        name={students[1].name}
        school={students[1].school}
        age={students[1].age}
        hobbyList={students[1].hobbyList}
        hairColor={students[1].hairColor}
        eyeColor={students[1].eyeColor}
        height={students[1].height}
      />
      <Footer date={date} />
      
    </div>
  );
}

export default App;
