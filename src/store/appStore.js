import { store } from 'react-easy-state'

const appStore = store({
  weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  hours: [],
  countHours: 0,
  addHour(hour) {
    hour.id = appStore.countHours++
    hour.weekday = hour.weekday || 0
    hour.start = hour.start || '00:00'
    hour.end = hour.end || '02:00'
    appStore.hours.push(hour)
  },
  deleteHour(hour) {
    const idx = appStore.hours.indexOf(hour)
    appStore.hours.splice(idx, 1)
  }
})

export default appStore