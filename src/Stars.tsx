import React from 'react'
import Star from './Star'

const NUM_STARS = 500

const Stars = () => {
  let stars = []
  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(<Star key={i} />)
  }
  return (
    <div className="stars">
      {stars}
    </div>
  )
}

export default Stars
