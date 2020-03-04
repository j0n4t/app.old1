import { store } from 'react-easy-state'

const TPLschema = store({
  weekdays: [ 'DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB' ],
  hours: [
    { id: 1, weekday: 1, start: '08:00', end: '10:00' }, 
    { id: 2, weekday: 1, start: '10:00', end: '12:00' }, 
    { id: 3, weekday: 1, start: '12:00', end: '14:00' }, 
    { id: 4, weekday: 1, start: '14:00', end: '16:00' }, 
    { id: 5, weekday: 2, start: '10:00', end: '12:00' }, 
    { id: 6, weekday: 2, start: '12:00', end: '14:00' }, 
    { id: 7, weekday: 3, start: '17:00', end: '19:00' }, 
    { id: 8, weekday: 4, start: '19:00', end: '21:00' }, 
    { id: 9, weekday: 5, start: '10:00', end: '12:00' }, 
  ],
  locals: [
    { id: 1, address: 'Padaria', hours: [ 1, 2, 3, 4 ] },
    { id: 2, address: 'Loja',    hours: [ 3, 4, 6, 7 ] },
  ],
  profiles: [
    { id: 1, name: 'Jonathan',  gender: 'm', hours: [ 1, 3, 5 ] },
    { id: 2, name: 'Arnaldo',   gender: 'm', hours: [ 2, 3, 4 ] },
    { id: 3, name: 'Antônio',   gender: 'm', hours: [ 1, 4, 5 ] },
    { id: 4, name: 'Marinalva', gender: 'f', hours: [ 2, 3, 4 ] },
    { id: 5, name: 'Amanda',    gender: 'f', hours: [ 2, 3, 6 ] },
    { id: 6, name: 'Lúcia',     gender: 'f', hours: [ 6, 7, 9 ] },
    { id: 7, name: 'Roberta',   gender: 'f', hours: [ 2, 4, 5 ] },
  ],
  assigns: [
    { id: 1, day: '2020-02-01', hour: 3, local: 1, profile1: 1, profile2: 2 }
  ]
})

export default TPLschema