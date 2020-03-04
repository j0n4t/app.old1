import React from 'react'
import { view } from 'react-easy-state'
import HourCreator from './HourCreator'
import Hour from './Hour'
import appStore from '../store/appStore'

export default view(() => {
  return (
    <div className='container'>
      <h1>Hours</h1>
      <HourCreator />
      {appStore.hours.map(hour => (
        <Hour hour={hour} key={hour.id} />
      ))}
    </div>
  )
})