import react, {useState, useEffect} from 'react';
import './DigitalWatch.css';

function DigitalWatch () {
  const [watch, setWatch] = useState(new Date());
  useEffect(() => {
    let intervals = setInterval(() => {
      setWatch(new Date());
    }, 1000);
    return () =>  {clearInterval(intervals)};
  }, [])



  function formatTime () {
    let hours = watch.getHours();
    let minutes = watch.getMinutes();
    let seconds = watch.getSeconds();
    let merediam = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merediam}`;
  }

function padZero (time) {
  if(time < 10) {
    return `0${time}`;
  } else {
    return`${time}`;
  }
}
  return (
    <div className='container'>
            <h1 className='value'>{formatTime()}</h1>
    </div>
  )
}

export default DigitalWatch;