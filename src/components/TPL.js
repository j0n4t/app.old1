import React from 'react'
import { view } from 'react-easy-state'
import HourCreator from './HourCreator'
import Hour from './Hour'
import LocalCreator from './LocalCreator'
import Local from './Local'
import appStore from '../store/appStore'

export default view(() => {
  return (
    <div className='container'>
      <h1>Hours</h1>
      <HourCreator />
      {appStore.hours.map(hour => (
        <Hour hour={hour} key={hour.id} />
      ))}

      <h1>Locals</h1>
      <LocalCreator />
      {appStore.locals.map(local => (
        <Local local={local} key={local.id} />
      ))}
    </div>
  )
})