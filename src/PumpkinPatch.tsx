import React from 'react'
import Pumpkin from './Pumpkin'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './PumpkinPatch.module.css'

const cj = cssJoinFactory(styles)

const NUM_PUMPKINS = 120

const PumpkinPatch = () => {
  let pumpkins = []
  for (let i = 0; i < NUM_PUMPKINS; i++) {
    pumpkins.push(<Pumpkin key={i} />)
  }
  return <div className={cj('pumpkin-patch')}><Pumpkin /></div>
}

export default PumpkinPatch
