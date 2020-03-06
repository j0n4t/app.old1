import { store } from 'react-easy-state'

const appStore = store({
  weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  hours: [
    {id: 0, weekday: 'SEG', start: '12:00', end: '14:00' }
  ],
  locals: [
    {id: 0, name:'Padaria', hours: [0] }
  ],
  countHours: 1,
  countLocals: 1,
  getHourDesc(id) {
    const hour = appStore.hours.find(h => h.id == id)
    return hour.weekday + ': ' + hour.start + ' - ' + hour.end
  },
  addHour(hour) {
    hour.id = appStore.countHours++
    hour.weekday = hour.weekday || 0
    hour.start = hour.start || '00:00'
    hour.end = hour.end || '02:00'
    appStore.hours.push(hour)
  },
  deleteHour(hour) {
    // TODO: delete all references in store before deleting!
    const idx = appStore.hours.indexOf(hour)
    appStore.hours.splice(idx, 1)
  },
  addLocal(local) {
    local.id = appStore.countLocals++
    local.name = local.name || 'New local'
    local.hours = local.hours || []
    appStore.locals.push(local)
  },
  deleteLocal(local) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.locals.indexOf(local)
    appStore.locals.splice(idx, 1)
  },
})

export default appStore