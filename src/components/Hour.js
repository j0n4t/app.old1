import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class Hour extends Component {
  constructor({ hour }) {
    super()
    this.compStore = store({
      currentHour: Object.assign({}, hour),
      editing: false
    })
  }

  onEdit = () => {
    this.compStore.editing = true
  }

  onDelete = () => {
    appStore.deleteHour(this.props.hour)
  }

  onSave = () => {
    Object.assign(this.props.hour, this.compStore.currentHour)
    this.compStore.editing = false
  }

  onCancel = () => {
    Object.assign(this.compStore.currentHour, this.props.hour)
    this.compStore.editing = false
  }

  onChange = ev => {
    this.compStore.currentHour[ev.target.name] = ev.target.value
  }

  render() {
    const { onChange, onSave, onCancel, onEdit, onDelete } = this
    const { currentHour, editing } = this.compStore
    const { hour } = this.props

    if (!editing) {
      return (
        <div className='flex center'>
          <div>{hour.weekday}</div>
          <div>{hour.start}</div>
          <div>{hour.end}</div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )
    }
    return (
      <div>
       <select
          name='weekday'
          value={currentHour.weekday}
          onChange={onChange}
          placeholder='weekday'
          className='u-full-width'
          >
          {appStore.data.weekdays.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <input
          name='start'
          type='time'
          value={currentHour.start}
          onChange={onChange}
        />
        <input
          name='end'
          type='time'
          value={currentHour.end}
          onChange={onChange}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    )
  }
}

export default view(Hour)