import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Star.module.css'
import { getRandomInt } from './utilities/utilities'

const cj = cssJoinFactory(styles)

const Star: React.FC = () => {
  const bottom = getRandomInt(1, 10000)
  const left = getRandomInt(1, 10000)
  const style = {
    bottom: (bottom * .01) + '%',
    left: (left * .01) + '%'
  }
  return (
    <div className={cj('star')} style={style} />
  )
}

export default Star
