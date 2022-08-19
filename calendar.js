const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]
const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']

function app() {
  return {
    month: '',
    year: '',
    no_of_days: [],
    blankdays: [],
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],

    events: [
      {
        event_date: new Date(2022, 7, 1),
        event_title: "April Fool's Day",
        event_theme: 'blue',
      },

      {
        event_date: new Date(2022, 7, 10),
        event_title: 'Birthday',
        event_theme: 'red',
      },

      {
        event_date: new Date(2022, 7, 16),
        event_title: 'Upcoming Event',
        event_theme: 'green',
      },
    ],
    event_title: '',
    event_date: '',
    event_phone: '',
    event_theme: 'blue',

    themes: [
      {
        value: 'blue',
        label: 'Blue Theme',
      },
      {
        value: 'red',
        label: 'Red Theme',
      },
      {
        value: 'yellow',
        label: 'Yellow Theme',
      },
      {
        value: 'green',
        label: 'Green Theme',
      },
      {
        value: 'purple',
        label: 'Purple Theme',
      },
    ],

    openEventModal: false,

    initDate() {
      let today = new Date()
      this.month = today.getMonth()
      this.year = today.getFullYear()
      this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString()
    },

    isToday(date) {
      const today = new Date()
      const d = new Date(this.year, this.month, date)
      return today.toDateString() === d.toDateString() ? true : false
    },

    showEventModal(date) {
      // open the modal
      if (this.isDateBeforeToday(date)) {
        this.openEventModal = true
        this.event_date = new Date(this.year, this.month, date).toDateString()
      }
    },

    addEvent() {
      if (this.event_title == '') {
        return
      }

      this.events.push({
        event_date: this.event_date,
        event_title: this.event_title,
        event_theme: this.event_theme,
      })

      // clear the form data
      this.event_title = ''
      this.event_date = ''
      this.event_theme = 'blue'

      //close the modal
      this.openEventModal = false
    },
    isDateBeforeToday(date) {
      const currentDay = new Date()
      return (
        new Date(this.year, this.month, date).getTime() >=
        new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()).getTime()
      )
    },

    getNoOfDays() {
      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate()

      // find where to start calendar day of week
      let dayOfWeek = new Date(this.year, this.month).getDay()
      let blankdaysArray = []
      for (var i = 1; i <= dayOfWeek - 1; i++) {
        blankdaysArray.push(i)
      }

      let daysArray = []
      for (var i = 1; i <= daysInMonth; i++) {
        daysArray.push(i)
      }

      this.blankdays = blankdaysArray
      this.no_of_days = daysArray
    },
  }
}
