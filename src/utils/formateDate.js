import moment from 'moment/moment';

//change unix format to milisecond format
export const formatDate =(unix_time)=>{

   const date = new Date(unix_time * 1000)

   return moment(date).calendar();
}

export default formatDate;