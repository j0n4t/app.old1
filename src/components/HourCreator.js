import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class HourCreator extends Component {
  compStore = store({
    newHour: { weekday: 'SEG', start: '12:00', end: '14:00' }
  })
  
  addHour = () => {
    appStore.addHour(this.compStore.newHour)
    this.compStore.newHour = { weekday: 'SEG', start: '12:00', end: '14:00' }
  }
  onChange = ev => {
    const { newHour } = this.compStore
    newHour[ev.target.name] = ev.target.value
  }
  render() {
    const { addHour, onChange } = this
    const { newHour } = this.compStore

    return (
      <div className='flex center'>
        <select
          name='weekday'
          value={newHour.weekday}
          onChange={onChange}
          placeholder='weekday'
          className='u-full-width'
          >
          {appStore.weekdays.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <input
          name='start'
          type='time'
          value={newHour.start}
          onChange={onChange}
          placeholder='start'
          className='u-full-width'
        />
        <input
          name='end'
          type='time'
          value={newHour.end}
          onChange={onChange}
          placeholder='end'
          className='u-full-width'
        />
        <button 
          onClick={addHour}
        > New Hour
        </button>
      </div>
    )
  }
}

export default view(HourCreator)