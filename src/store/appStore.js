import { store } from 'react-easy-state'

const appStore = store({
  weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],

  // HOURS
  countHours: 1,
  hours: [
    {id: 0, weekday: 'SEG', start: '12:00', end: '14:00' }
  ],
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

  // LOCALS
  countLocals: 1,
  locals: [
    {id: 0, name:'Padaria', hours: [0] }
  ],
  getLocalHours(id) {
    const local = appStore.locals.find(l => l.id == id)
    return local.hours
  },
  getLocalName(id) {
    const local = appStore.locals.find(l => l.id == id)
    return local.name
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

  // PROFILES
  countProfiles: 1,
  profiles: [
    {id: 0, name:'Jonathan', sex:'M', hours: [0] }
  ],
  getProfileName(id) {
    const profile = appStore.profiles.find(p => p.id == id)
    return profile.name
  },
  addProfile(profile) {
    profile.id = appStore.countProfiles++
    profile.name = profile.name || 'New profile'
    profile.sex = profile.sex || 'M'
    profile.hours = profile.hours || []
    appStore.profiles.push(profile)
  },
  deleteProfile(profile) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.profiles.indexOf(profile)
    appStore.profiles.splice(idx, 1)
  },

  // ASSIGNS
  countAssigns: 1,
  assigns: [
    {id: 0, date:'2020-02-21', local: 0, hour: 0, profiles: [] }
  ],
  addAssign(assign) {
    assign.id = appStore.countAssigns++
    assign.date = assign.date || '2020-02-21'
    assign.local = assign.local || 0
    assign.hour = assign.hour || 0
    assign.profiles = assign.profiles || []
    appStore.assigns.push(assign)
  },
  deleteAssign(assign) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.assigns.indexOf(assign)
    appStore.assigns.splice(idx, 1)
  },
})

export default appStore