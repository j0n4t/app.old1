import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class Local extends Component {
  constructor({ local }) {
    super()
    this.compStore = store({
      currentLocal: Object.assign({}, local),
      editing: false
    })
  }

  onEdit = () => {
    this.compStore.editing = true
  }

  onDelete = () => {
    appStore.deleteLocal(this.props.local)
  }

  onSave = () => {
    Object.assign(this.props.local, this.compStore.currentLocal)
    this.compStore.editing = false
  }

  onCancel = () => {
    Object.assign(this.compStore.currentLocal, this.props.local)
    this.compStore.editing = false
  }

  onChange = ev => {
    this.compStore.currentLocal[ev.target.name] = ev.target.value
  }

  onHoursChange = ev => {
    const newHours = Array.from(ev.target.selectedOptions).map(v => v.value)
    this.compStore.currentLocal[ev.target.name] = newHours
  }

  render() {
    const { onChange, onSave, onCancel, onEdit, onDelete } = this
    const { currentLocal, editing } = this.compStore
    const { local } = this.props

    if (!editing) {
      return (
        <div>
          <div>{local.name}</div>
          <ul>
            {local.hours.map(hour => (
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
          value={currentLocal.name}
          onChange={onChange}
        />
       <select
          name='hours'
          value={currentLocal.hours}
          onChange={this.onHoursChange}
          multiple
          >
          {appStore.data.hours.map(hour => (
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

export default view(Local)