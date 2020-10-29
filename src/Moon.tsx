import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Moon.module.css'

const cj = cssJoinFactory(styles)

const Moon = () => {
  return <div className={cj('moon')}></div>
}

export default Moon
