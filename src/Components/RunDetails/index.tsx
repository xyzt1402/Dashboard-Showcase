import React from 'react'
import runDetailsStyle from './index.module.scss'
import { useSearchParams } from 'react-router-dom'

type Props = {
  currentDetail: string | null
}

const RunDetails = ({ currentDetail }: Props) => {

  return (
    <div className={runDetailsStyle['hsc-run-details-container']}>
      <div className={runDetailsStyle['hsc-hightlight']}>Run Details</div>
      <div className={runDetailsStyle['divider']}></div>
      <div>{currentDetail}</div>
    </div>
  )
}

export default RunDetails