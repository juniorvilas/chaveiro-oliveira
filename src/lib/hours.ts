import { business, schedule } from '../data/business'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Dia da semana e minutos no fuso da loja, independente do fuso do visitante.
function nowInStore(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: business.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return { day: weekdays.indexOf(get('weekday')), minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export function storeStatus(date = new Date()) {
  const { day, minutes } = nowInStore(date)
  const time = schedule[day]?.time
  const open = !!time && minutes >= toMinutes(time[0]) && minutes < toMinutes(time[1])
  return { today: day, open }
}
