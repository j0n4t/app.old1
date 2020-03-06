import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class AssignCreator extends Component {
  compStore = store({
    newAssign: {id: 0, date:'', local: 0, hour: 0, profiles: [0, 0] }
  })
  
  addAssign = () => {
    appStore.addAssign(this.compStore.newAssign)
    this.compStore.newAssign = {
      id: 0, 
      date:'', 
      local: 0, 
      hour: 0, 
      profiles: []
    }
  }
  
  onChange = ev => {
    const { newAssign } = this.compStore
    newAssign[ev.target.name] = ev.target.value
  }

  onProfilesChange = ev => {
    const { newAssign } = this.compStore
    const newHours = Array.from(ev.target.selectedOptions).map(v => v.value)
    newAssign[ev.target.name] = newHours
  }

  render() {
    const { addAssign, onChange, onProfilesChange } = this
    const { newAssign } = this.compStore

    return (
      <div className='block-child'>
        <input
          name='date'
          type='date'
          value={newAssign.date}
          onChange={onChange}
        />
        <select
          name='local'
          value={newAssign.local}
          onChange={onChange}
          >  
          {appStore.locals.map(local => (
            <option key={local.id} value={local.id}>
              {local.name}
            </option>
          ))}
        </select>
        <select
          name='hour'
          value={newAssign.hour}
          onChange={onChange}
          >
          {appStore.getLocalHours(newAssign.local).map(hour => (
            <option key={hour} value={hour}>
              {appStore.getHourDesc(hour)}
            </option>
          ))}
        </select>
        <select
          name='profiles'
          value={newAssign.profiles}
          onChange={onProfilesChange}
          multiple
          >
          {/* TODO: filter profiles list, limit by 2, etc */}
          {appStore.profiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </select>
        <button 
          onClick={addAssign}
        > New Assign
        </button>
      </div>
    )
  }
}

export default view(AssignCreator)