import React from "react";
import '../../assets/style/table.css';

interface DayProps {
    groups: string[][]; 
    today:string;
    fistDayActualMonth: Date;
  }

const Day: React.FC<DayProps> = (Dayprops) =>{
    const nameFirstDay = Dayprops.fistDayActualMonth.getDay(); 
    const justNumberDay = parseInt(Dayprops.today.substring(0,2));
    let getNameDay = 0;

    switch(nameFirstDay){
        case 0:
             //Sunday
             getNameDay =  justNumberDay - 1;
            break;
        case 1:
            //Monday
            getNameDay =  justNumberDay + 0;
            break;
        case 2:
            //Tuesday
            getNameDay = justNumberDay + 1;
            break;
        case 3:
            //Wednesday
            getNameDay = justNumberDay + 2;
            break;
        case 4:
            //Thursday
            getNameDay = justNumberDay + 3;
            break;
        case 5:
            //Friday
            getNameDay = justNumberDay + 4;
            break;
        case 6:
            //Saturday
            getNameDay = justNumberDay + 5;
        break;
    }

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
            <tr>
                <td>{Dayprops.today}</td>
                <td className={Dayprops.groups[0][getNameDay]}>{Dayprops.groups[0][getNameDay]}</td>
                <td className={Dayprops.groups[1][getNameDay]}>{Dayprops.groups[1][getNameDay]}</td>
                <td className={Dayprops.groups[2][getNameDay]}>{Dayprops.groups[2][getNameDay]}</td>
                <td className={Dayprops.groups[3][getNameDay]}>{Dayprops.groups[3][getNameDay]}</td> 
            </tr>
        </tbody>
    </table>

    )
}
export default Day;