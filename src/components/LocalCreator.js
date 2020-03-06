import React, { Component } from 'react'
import { view, store } from "react-easy-state"
import appStore from '../store/appStore'

class LocalCreator extends Component {
  compStore = store({
    newLocal: { name: 'New local', hours: [] }
  })
  
  addLocal = () => {
    appStore.addLocal(this.compStore.newLocal)
    this.compStore.newLocal = { 
      name: 'New local', 
      hours: [] 
    }
  }
  
  onChange = ev => {
    const { newLocal } = this.compStore
    newLocal[ev.target.name] = ev.target.value
  }

  onHoursChange = ev => {
    const { newLocal } = this.compStore
    const newHours = Array.from(ev.target.selectedOptions).map(v => v.value)
    newLocal[ev.target.name] = newHours
  }

  render() {
    const { addLocal, onChange } = this
    const { newLocal } = this.compStore

    return (
      <div className='block-child'>
        <input
          name='name'
          type='text'
          value={newLocal.name}
          onChange={onChange}
        />
       <select
          name='hours'
          value={newLocal.hours}
          onChange={this.onHoursChange}
          placeholder='hours'
          className='u-full-width'
          multiple
          >
          {appStore.hours.map(hour => (
            <option key={hour.id} value={hour.id}>
              { appStore.getHourDesc(hour.id) }
            </option>
          ))}
        </select>
        <button 
          onClick={addLocal}
        > New Local
        </button>
      </div>
    )
  }
}

export default view(LocalCreator)