import React from 'react'
import Moon from './Moon'
import Stars from './Stars'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Sky.module.css'
const cj = cssJoinFactory(styles)

const Sky = () => {
  return (
    <div className={cj("sky")}>
      <Stars />
      <Moon />
    </div>
  )
}

export default Sky
