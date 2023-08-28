import React from "react";
import '../../assets/style/table.css';

interface WeekProps{
    groups: string[][];
    today: string;
    fistDayActualMonth: Date;
}
const Week: React.FC<WeekProps> = (WeekProps)=>{
    console.log(`los grupos son ${WeekProps.groups}`)
    console.log(`el primer dia de este mes es ${WeekProps.fistDayActualMonth}`)
    console.log(`hoy es ${WeekProps.today}`)


    const todayDate = new Date();

    console.log(todayDate)


    const numberToday = parseInt(WeekProps.today.substring(0,2));
    const nameDay = todayDate.getDay();
    let weekStart = new Date();
    console.log(`el numero de hoy es ${numberToday}`)
    console.log(`el el dia de la semana que es hoy es ${nameDay}`)
    console.log(`la fecha de hoy es ${weekStart}`)

    function generateCompleteWeek(date: Date, numberDays: number){
        return Array.from({length: numberDays}, (_, index) => {
            const fixedDate = new Date(date); 
            fixedDate.setDate(fixedDate.getDate() + index);
            return fixedDate.toLocaleDateString('es-ES');
        })
        
    }

    switch(nameDay){
        case 0:
            //Sunday
            weekStart.setDate(weekStart.getDate() - 6);
        break;
        case 1:
            //Monday
            weekStart.setDate(weekStart.getDate() - 0);
        break;
        case 2:
            //Tuesday
            weekStart.setDate(weekStart.getDate() - 1);
        break;
        case 3:
            //Wednesday
            weekStart.setDate(weekStart.getDate() - 2);
        break;
        case 4:
            //Thursday
            weekStart.setDate(weekStart.getDate() - 3)
        break;
        case 5:
            //Friday
            weekStart.setDate(weekStart.getDate() - 4);
        break;
        case 6:
            //Saturday
            weekStart.setDate(weekStart.getDate() - 5);
        break;
    }
    const completeWeek = generateCompleteWeek(weekStart, 7);
    console.log(`el lunes es ${weekStart}`);
    console.log(`la semana completa es ${completeWeek}`);



    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Grupo A</th>
                    <th>Grupo B</th>
                    <th>Grupo C</th>
                    <th>Grupo D</th>
                </tr>

            </thead>
            <tbody>
                {completeWeek.map((day, index)=>(
                     <tr key={index}>
                        <td >{day}</td>
                        <td className='mañana'>LOL</td>
                        <td className='tarde'>LOL</td>
                        <td className='libre'>LOL</td>
                        <td className='noche'>LOL</td>
                     </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Week;