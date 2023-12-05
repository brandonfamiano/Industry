import React, {useState , useEffect} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../assets/styles/eventcalendar.scss'
const locales ={
  'en-US': import('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({

  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events =[
    {
      title: "Wildlife Conservation Day",
      allday: true,
      start: new Date(2023,11, 3, 11),
      end: new Date(2023,11  , 3, 16,45)
    },
    {
        title: "Boston Small Group Food/History Tour",
        allday: true,
        start: new Date(2023,11, 1, 3),
        end: new Date(2023,11  , 1, 6)
      },
      {
        title: "The Best of Boston - Food Tours by Cozymeal™",
        allday: true,
        start: new Date(2023,11, 28, 3),
        end: new Date(2023,11  , 28, 6)
      },
      {
        title: "Boston North End: Food Tour",
        allday: true,
        start: new Date(2023,11, 23, 10),
        end: new Date(2023,11  , 23, 13)
      },
      {
        title: "Harvard Square Food Tour",
        allday: true,
        start: new Date(2023,11, 16, 11),
        end: new Date(2023,11  , 16, 14)
      },
      {
        title: "Common Culture: Pasta Two Ways:Boston",
        allday: true,
        start: new Date(2023,11, 5, 11),
        end: new Date(2023,11  , 5, 14)
      },
      {
        title: "Boston’s “Little Italy” North End Pizza & History Walking Food Tour",
        allday: true,
        start: new Date(2023,11, 15, 11),
        end: new Date(2023,11  , 15, 14)
      },
      {
        title: "The Official Ugly Sweater Bar Crawl - Boston",
        allday: true,
        start: new Date(2023,11, 9, 19),
        end: new Date(2023,11  , 9, 22)
      },
      {
        title: "SOWA Winter Festival / Maybe Dinner-Boston",
        allday: true,
        start: new Date(2023,11, 17, 19),
        end: new Date(2023,11  , 17, 22)
      },
      
    {
      title: "World Soil DAY",
      allday: true,
      start: new Date(2023,11, 5, 16,45),
      end: new Date(2023,11  , 5, 17,30)
    },
    {
      title: "UNICEF Birthday",
      allday: true,
      start: new Date(2023,11, 11, 10),
      end: new Date(2023,11  , 11, 11)
    },
    {
      title: "National Maple Syrup Day",
      allday: true,
      start: new Date(2023,11,8),
      end: new Date(2023,11,9)
    },

  ]
export default function EventCalendar() {
  const [newEvent, setNewEvent] = useState({title:"", start:"",end:""})
  const [allEvents, setAllEvents] = useState(events )
  const [holidays, setHolidays] = useState([]);
  
  useEffect(()=>{
    fetch("https://date.nager.at/api/v3/PublicHolidays/2023/CA")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data)=>{
      const formattedHolidays = data.map((holiday) =>({
        title: holiday.name,
        allday: true,
        start: new Date(holiday.date),
        end: new Date(holiday.date)
      }));
      setHolidays(formattedHolidays);
    })
    .catch((error) =>{
      console.log("error fetching holidays")
    }); 
  },[]);
  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }
  
  return (
    
    <div className="body">
        <h1 className="event-header">Events</h1>
        <a className="event-header-sub">Menu/Events</a>
      <div className="upcoming-events">
        <div className="card">
            <img src="https://lh3.googleuserconetnt.com/p/AF1QipMPxmmX1C3UOKtDYwRax5uEzfx0DB0_SeOTHeoZ=s1360-w1360-h1020"/>
            <h1>Insert Event Here</h1>
            <h2>Insert Date Here</h2>
        </div>
      </div>
z
      <Calendar localizer={localizer} events={[...allEvents,...holidays]} startAccessor="start" endAccessor="end" className ="calendar" style = {{height:500, margin: "50px"}}></Calendar>
      
    </div>
  );
}