import React from 'react'
import { view } from 'react-easy-state'

import appStore from '../store'

// TODO: make a Hour component
export default view(() => (
  <ul>
    {appStore.TPL.hours.map(hour => <li key={hour.id}> {hour.weekday} </li>)}
  </ul>
))