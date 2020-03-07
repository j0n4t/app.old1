import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class Assign extends Component {
  constructor({ assign }) {
    super()
    this.compStore = store({
      currentAssign: Object.assign({}, assign),
      editing: false
    })
  }

  onEdit = () => {
    this.compStore.editing = true
  }

  onDelete = () => {
    appStore.deleteAssign(this.props.assign)
  }

  onSave = () => {
    Object.assign(this.props.assign, this.compStore.currentAssign)
    this.compStore.editing = false
  }

  onCancel = () => {
    Object.assign(this.compStore.currentAssign, this.props.assign)
    this.compStore.editing = false
  }

  onChange = ev => {
    this.compStore.currentAssign[ev.target.name] = ev.target.value
  }

  onProfilesChange = ev => {
    const newProfiles = Array.from(ev.target.selectedOptions).map(v => v.value)
    this.compStore.currentAssign[ev.target.name] = newProfiles
  }

  render() {
    const { onChange, onProfilesChange, onSave, onCancel, onEdit, onDelete } = this
    const { currentAssign, editing } = this.compStore
    const { assign } = this.props

    if (!editing) {
      return (
        <div>
          <div>{assign.date}</div>
          <div>{appStore.getLocalName(assign.local)}</div>
          <div>{appStore.getHourDesc(assign.hour)}</div>
          <ul>
            {assign.profiles.map(profile => (
              <li key={profile}>{appStore.getProfileName(profile)}</li>
            ))}
          </ul>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )
    }
    return (
      <div className='block-child'>
        <input
          name='date'
          type='date'
          value={currentAssign.date}
          onChange={onChange}
        />
        <select
          name='local'
          value={currentAssign.local}
          onChange={onChange}
          >  
          {appStore.data.locals.map(local => (
            <option key={local.id} value={local.id}>
              {local.name}
            </option>
          ))}
        </select>
        <select
          name='hour'
          value={currentAssign.hour}
          onChange={onChange}
          >
          {appStore.getLocalHours(currentAssign.local).map(hour => (
            <option key={hour} value={hour}>
              {appStore.getHourDesc(hour)}
            </option>
          ))}
        </select>
        <select
          name='profiles'
          value={currentAssign.profiles}
          onChange={onProfilesChange}
          multiple
          >
          {/* TODO: filter profiles list, limit by 2, etc */}
          {appStore.data.profiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </select>
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    )
  }
}

export default view(Assign)