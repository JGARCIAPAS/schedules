import React from 'react';
import { useState } from 'react';
import '../src/assets/style/page.css'
import Day from './components/day/Day';
/* import Week from './components/week/Week'; */
import Month from './components/month/Month';
import Year from './components/year/Year';

const Page = () => {
  const today = new Date().toLocaleDateString("es-ES");
  const actualMonth = new Date().getMonth() + 1;
  const actualYear = new Date().getFullYear();
  const fistDayActualMonth = new Date(`${actualMonth}/01/${actualYear}`);
  const getTodayDateSpanish = new Date().toLocaleDateString('es-ES', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
  const groups = [
    ["libre", "libre", "noche", "noche", "tarde", "tarde", "tarde", "tarde", "tarde", "libre", "libre", "noche", "noche", "libre", "noche", "noche", "tarde", "tarde", "tarde", "libre", "libre", "mañana", "mañana", "mañana", "mañana", "mañana", "mañana", "libre", "libre", "libre", "noche", "noche", "tarde", "tarde", "tarde", "tarde", "tarde", "libre"],
    ["mañana", "mañana", "mañana", "mañana", "mañana", "mañana", "libre", "libre", "libre", "noche", "noche", "tarde", "tarde", "tarde", "tarde", "tarde", "libre", "libre", "noche", "noche", "libre", "noche", "noche", "tarde", "tarde", "tarde", "libre", "libre", "mañana", "mañana", "mañana", "mañana", "mañana", "mañana", "libre", "libre", "noche"],
    ["noche", "noche", "tarde", "tarde", "tarde", "libre", "libre", "mañana", "mañana", "mañana", "mañana", "mañana", "mañana", "libre", "libre", "libre", "noche", "noche", "tarde", "tarde", "tarde", "tarde", "tarde", "libre", "libre", "noche", "noche", "libre", "noche", "noche", "tarde", "tarde", "tarde", "libre", "libre", "mañana", "mañana", "mañana"],
    ["tarde", "tarde", "libre", "libre", "noche", "noche", "libre", "noche", "noche", "tarde", "tarde", "tarde", "libre", "libre", "mañana", "mañana", "mañana", "mañana", "mañana", "mañana", "libre", "libre", "libre", "noche", "noche", "tarde", "tarde", "tarde", "tarde", "tarde", "libre", "libre", "noche", "noche", "libre", "noche", "noche", "tarde"]
  ];
  const [showDayComponent, setShowDayComponent] = useState(false); 
  const [showMonthComponent, setShowMonthComponent] = useState(false);
  const [showYearComponent, setShowYearComponent] = useState(false);
  const toggleDayComponent = ()=>{
    setShowDayComponent(!showDayComponent);
    setShowMonthComponent(false);
    setShowYearComponent(false);
  }
  const toggleMonthComponent = () =>{
    setShowDayComponent(false);
    setShowMonthComponent(!showMonthComponent);
    setShowYearComponent(false);
  }
  const toggleYearComponent = () => {
    setShowDayComponent(false);
    setShowMonthComponent(false);
    setShowYearComponent(!showYearComponent);
  }

return (
  <>
    <div className='front-img'>
      <img src='../src/assets/img/logohr.png' className="logo" alt="logo horarios" />
    </div>
    <div className='main_page'>
        <div className='head_page'>
          <h2>Bienvenido, hoy es <p>{getTodayDateSpanish}</p></h2>
        </div>
        <div className='body_page'>
          <div className='buttons'>
              <div className='upper-buttons'></div>
              <div className='main-buttons'>
                  <button onClick={toggleDayComponent}>Hoy</button>
                  <button onClick={toggleMonthComponent}>Este mes</button>
                  <button onClick={toggleYearComponent}>Este año</button>
              </div>
              <div className='below-buttons'></div>
          </div>
          <div className='schedule_tables'>
            {showDayComponent && <Day groups={groups} today={today} fistDayActualMonth={fistDayActualMonth}/>}
            {showMonthComponent && <Month groups={groups} actualMonth={actualMonth} actualYear={actualYear} fistDayActualMonth={fistDayActualMonth}/>}
            {showYearComponent && <Year actualYear={actualYear} groups={groups}/>}
          </div>
        </div>
        <div className='footer_page'>© {actualYear}</div>
    </div>
  </>
  )
}

export default Page
