import React from 'react'
import { view } from 'react-easy-state'
import HourCreator from './HourCreator'
import Hour from './Hour'
import LocalCreator from './LocalCreator'
import Local from './Local'
import ProfileCreator from './ProfileCreator'
import Profile from './Profile'
import AssignCreator from './AssignCreator'
import Assign from './Assign'
import appStore from '../store/appStore'

export default view(() => {
  return (
    <div className='container'>
      <div>
        <button onClick={appStore.saveStore}>Save</button>
        <button onClick={appStore.restoreStore}>Restore</button>
      </div>
      <h1>Hours</h1>
      <HourCreator />
      {appStore.data.hours.map(hour => (
        <Hour hour={hour} key={hour.id} />
      ))}
      <h1>Locals</h1>
      <LocalCreator />
      {appStore.data.locals.map(local => (
        <Local local={local} key={local.id} />
      ))}
      <h1>Profiles</h1>
      <ProfileCreator />
      {appStore.data.profiles.map(profile => (
        <Profile profile={profile} key={profile.id} />
      ))}
      <h1>Assigns</h1>
      <AssignCreator />
      {appStore.data.assigns.map(assign => (
        <Assign assign={assign} key={assign.id} />
      ))}
    </div>
  )
})