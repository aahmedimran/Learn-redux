import moment from 'moment/moment';
import React from 'react'

const History = () => {
    const demiArray = [
        { timestamp: '2023-07-11T08:30:00.000Z', data: 'Object 1' },
        { timestamp: '2023-07-11T08:30:00.000Z', data: 'Object 2' },
        { timestamp: '2023-07-10T08:30:00.000Z', data: 'Object 3' },
        { timestamp: '2023-07-10T08:30:00.000Z', data: 'Object 4' },
        { timestamp: '2023-07-09T15:45:00.000Z', data: 'Object 5' },
        { timestamp: '2023-07-08T11:20:00.000Z', data: 'Object 6' },
        { timestamp: '2023-07-04T19:10:00.000Z', data: 'Object 7' },
        { timestamp: '2023-06-05T19:10:00.000Z', data: 'Object 8' },
        { timestamp: '2022-07-11T14:00:00.000Z', data: 'Object 9' },
      ];

      const  getTimePeriod=(timestamp) =>{
        const currentDate = new Date();
        const date = new Date(timestamp);
      
        // Compare the timestamp with the current date
        const diffTime = currentDate.getTime() - date.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
      
        if (diffDays === 0) {
          return 'Today';
        } else if (diffDays === 1) {
          return 'Yesterday';
        } else if (diffDays <= 7) {
          return `${diffDays} days ago`;
        } else if (diffDays == 7) {
            return `${diffDays} days ago`;
        } else if (currentDate.getFullYear() !== date.getFullYear()) {
          return `${currentDate.getFullYear() - date.getFullYear()} years ago`;
        }
      
       // Return the timestamp if it doesn't fall into the above categories
  return timestamp;
      }

  return (
    <div>History

{demiArray.map((item,index)=>{

return(
    <div key={item.index}>
    <div>{getTimePeriod(item.timestamp)}</div>
    <div>{moment(item.timestamp).format("MMM Do YY") }---------{item.data}</div>
    </div>
)

})


}





    </div>
  )
}

export default History