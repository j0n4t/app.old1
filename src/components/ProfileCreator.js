import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class ProfileCreator extends Component {
  compStore = store({
    newProfile: { name: 'New profile', sex: 'M', hours: [] }
  })
  
  addProfile = () => {
    appStore.addProfile(this.compStore.newProfile)
    this.compStore.newProfile = { 
      name: 'New profile', 
      sex: 'M',
      hours: [] 
    }
  }
  
  onChange = ev => {
    const { newProfile } = this.compStore
    newProfile[ev.target.name] = ev.target.value
  }

  onHoursChange = ev => {
    const { newProfile } = this.compStore
    const newHours = Array.from(ev.target.selectedOptions).map(v => v.value)
    newProfile[ev.target.name] = newHours
  }

  render() {
    const { addProfile, onChange } = this
    const { newProfile } = this.compStore

    return (
      <div className='block-child'>
        <input
          name='name'
          type='text'
          value={newProfile.name}
          onChange={onChange}
        />
        <select
          name='sex'
          value={newProfile.sex}
          onChange={onChange}
          >  
          <option key='M' value='M'>M</option>
          <option key='F' value='F'>F</option>
        </select>
        <select
          name='hours'
          value={newProfile.hours}
          onChange={this.onHoursChange}
          multiple
          >
          {appStore.hours.map(hour => (
            <option key={hour.id} value={hour.id}>
              { appStore.getHourDesc(hour.id) }
            </option>
          ))}
        </select>
        <button 
          onClick={addProfile}
        > New Profile
        </button>
      </div>
    )
  }
}

export default view(ProfileCreator)