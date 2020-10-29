import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Pumpkin.module.css'

const cj = cssJoinFactory(styles)

const Pumpkin: React.FC = () => {
  return (
    <div className={cj('pumpkin')} >
      &nbsp;
    </div>
  )
}

export default Pumpkin
