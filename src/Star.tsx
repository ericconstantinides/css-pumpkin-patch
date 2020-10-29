import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Star.module.css'
import { getRandomInt } from './utilities/utilities'

const cj = cssJoinFactory(styles)

const Star: React.FC = () => {
  return (
    <div>&nbsp;</div>
  )
}

export default Star
