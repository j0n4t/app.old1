import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class Profile extends Component {
  constructor({ profile }) {
    super()
    this.compStore = store({
      currentProfile: Object.assign({}, profile),
      editing: false
    })
  }

  onEdit = () => {
    this.compStore.editing = true
  }

  onDelete = () => {
    appStore.deleteProfile(this.props.profile)
  }

  onSave = () => {
    Object.assign(this.props.profile, this.compStore.currentProfile)
    this.compStore.editing = false
  }

  onCancel = () => {
    Object.assign(this.compStore.currentProfile, this.props.profile)
    this.compStore.editing = false
  }

  onChange = ev => {
    this.compStore.currentProfile[ev.target.name] = ev.target.value
  }

  onHoursChange = ev => {
    const newHours = Array.from(ev.target.selectedOptions).map(v => v.value)
    this.compStore.currentProfile[ev.target.name] = newHours
  }

  render() {
    const { onChange, onSave, onCancel, onEdit, onDelete } = this
    const { currentProfile, editing } = this.compStore
    const { profile } = this.props

    if (!editing) {
      return (
        <div>
          <div>{profile.name}</div>
          <div>{profile.sex}</div>
          <ul>
            {profile.hours.map(hour => (
              <li key={hour}>{appStore.getHourDesc(hour)}</li>
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
          name='name'
          type='text'
          value={currentProfile.name}
          onChange={onChange}
        />
        <select
          name='sex'
          value={currentProfile.sex}
          onChange={onChange}
          >  
          <option key='M' value='M'>M</option>
          <option key='F' value='F'>F</option>
        </select>
        <select
          name='hours'
          value={currentProfile.hours}
          onChange={this.onHoursChange}
          multiple
          >
          {appStore.hours.map(hour => (
            <option key={hour.id} value={hour.id}>
              { appStore.getHourDesc(hour.id) }
            </option>
          ))}
        </select>
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    )
  }
}

export default view(Profile)