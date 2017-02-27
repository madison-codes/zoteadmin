import moment from 'moment';

const formatDateTime = (dateTime) => {
  return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a');
};

export default formatDateTime;
