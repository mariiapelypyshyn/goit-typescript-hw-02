/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday = 'Понеділок',
  Tuesday = 'Вівторок',
  Wednesday = 'Середа',
  Thursday = 'Четвер',
  Friday = 'П\'ятниця',
  Saturday = 'Субота',
  Sunday = 'Неділя'
}

function isWeekend(day: DaysOfWeek): boolean {
  switch (day) {
    case DaysOfWeek.Saturday:
    case DaysOfWeek.Sunday:
      return true; 
    default:
      return false; 
  }
}