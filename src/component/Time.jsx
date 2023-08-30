import { DateTime } from 'luxon';

function Time(){
    const userLocalTime = DateTime.local();
console.log('Local Time:', userLocalTime.toString());


const newYorkTime = DateTime.now().setZone('America/New_York');
console.log('New York Time:', newYorkTime.toString())

return(
    <div>
        
    </div>

);
};
export default Time;
