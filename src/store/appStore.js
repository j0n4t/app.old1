import { store } from 'react-easy-state'

const appStore = store({
  restoreStore() {
    appStore.data = JSON.parse(localStorage.getItem('data'))
  },
  saveStore() {
    localStorage.setItem('data', JSON.stringify(appStore.data))
  },
  saveFile() {
    var data = JSON.stringify(appStore.data)
    var blob = new Blob([data], {type:'application/json'})
    var elem = window.document.createElement('a')
    elem.href = window.URL.createObjectURL(blob)
    console.log(elem.href)
    elem.download = 'store.json'
    document.body.appendChild(elem)
    elem.click()
    document.body.removeChild(elem)
  },
  loadFile() {
    var selectedFile = document.getElementById('load').files[0]
    const fr = new FileReader()
    fr.onload = (e) => {
      var result = JSON.parse(e.target.result)
      appStore.data = result
    }
    fr.readAsText(selectedFile)
  },

  data: {
    weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    countHours: 1,
    hours: [
      {id: 0, weekday: 'SEG', start: '12:00', end: '14:00' }
    ],
    countLocals: 1,
    locals: [
      {id: 0, name:'Padaria', hours: [0] }
    ],
    countProfiles: 1,
    profiles: [
      {id: 0, name:'Jonathan', sex:'M', hours: [0] }
    ],
    countAssigns: 1,
    assigns: [
      {id: 0, date:'2020-02-21', local: 0, hour: 0, profiles: [] }
    ],
  },

  // HOURS
  getHourDesc(id) {
    const hour = appStore.data.hours.find(h => h.id == id)
    return hour.weekday + ': ' + hour.start + ' - ' + hour.end
  },
  addHour(hour) {
    hour.id = appStore.data.countHours++
    hour.weekday = hour.weekday || 0
    hour.start = hour.start || '00:00'
    hour.end = hour.end || '02:00'
    appStore.data.hours.push(hour)
  },
  deleteHour(hour) {
    // TODO: delete all references in store before deleting!
    const idx = appStore.data.hours.indexOf(hour)
    appStore.data.hours.splice(idx, 1)
  },

  // LOCALS
  getLocalHours(id) {
    const local = appStore.data.locals.find(l => l.id == id)
    return local.hours
  },
  getLocalName(id) {
    const local = appStore.data.locals.find(l => l.id == id)
    return local.name
  },
  addLocal(local) {
    local.id = appStore.data.countLocals++
    local.name = local.name || 'New local'
    local.hours = local.hours || []
    appStore.data.locals.push(local)
  },
  deleteLocal(local) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.data.locals.indexOf(local)
    appStore.data.locals.splice(idx, 1)
  },

  // PROFILES
  getProfileName(id) {
    const profile = appStore.data.profiles.find(p => p.id == id)
    return profile.name
  },
  addProfile(profile) {
    profile.id = appStore.data.countProfiles++
    profile.name = profile.name || 'New profile'
    profile.sex = profile.sex || 'M'
    profile.hours = profile.hours || []
    appStore.data.profiles.push(profile)
  },
  deleteProfile(profile) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.data.profiles.indexOf(profile)
    appStore.data.profiles.splice(idx, 1)
  },

  // ASSIGNS

  // getAssignDesc(id) {
  // const assign = appStore.data.pssigns.find(h => h.id == id)
  //   const profiles = appStore.getProfileName
  //assign.date + '-' + assign.hour + '@' + assign.local + ': ' + assign.profiles
  // },
  addAssign(assign) {
    assign.id = appStore.data.countAssigns++
    assign.date = assign.date || '2020-02-21'
    assign.local = assign.local || 0
    assign.hour = assign.hour || 0
    assign.profiles = assign.profiles || []
    appStore.data.assigns.push(assign)
  },
  deleteAssign(assign) {
    // TODO: delete all references in appStore before deleting!
    const idx = appStore.data.assigns.indexOf(assign)
    appStore.data.assigns.splice(idx, 1)
  },
})

export default appStore