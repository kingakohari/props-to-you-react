import React from 'react'

function IntroductionCard(props) {

    const name = props.name
    const school = props.school
    const age = props.age
    const hobbyList = props.hobbyList.join(", ")
    const hairColor = props.hairColor
    const eyeColor = props.eyeColor
    const height = props.height

  
  return (
  <div className="introduction">
    <p className="introduction__text">Hello, my name is {name}. I am a student at {school}, and I would like to be the best React developer in the world :). I'm {age} years old, and my hobbies are {hobbyList}. I am {height} cm tall, have {hairColor} hair and {eyeColor} eyes.</p>
  </div>
  )

}

export default IntroductionCard;