import moment from 'moment';

// format date helpers
export const formatDate = (dateString, format = 'MMM YYYY', ifNoDate = 'Present') => {
    // format the date value
    const converted = moment(dateString).format(format)
    // check the format result is invalid date
    const inValidDate = (converted == 'Invalid date')
    // return value with condition
    return inValidDate ? ifNoDate : converted;
}