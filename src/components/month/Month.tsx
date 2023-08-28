import React from "react";
import '../../assets/style/table.css';

interface MonthProps{
    groups: string[][];
    actualMonth: number;
    actualYear: number;
    fistDayActualMonth: Date;
}

const Month: React.FC<MonthProps> = (MonthProps) =>{
    const daysInMonth = (month:number, year:number) =>{
        return new Date(year, month, 0).getDate();
    }
    const nameFirstDay = MonthProps.fistDayActualMonth.getDay(); 
    const rows: JSX.Element[] = [];
    for (let day = 0; day < daysInMonth(MonthProps.actualMonth, MonthProps.actualYear); day++) {
        rows.push(
            <tr key={day}>
                <td>{`${day + 1}/${MonthProps.actualMonth}/${MonthProps.actualYear}`}</td>
                <td className={MonthProps.groups[0][nameFirstDay + day]}>{MonthProps.groups[0][nameFirstDay + day]}</td>
                <td className={MonthProps.groups[1][nameFirstDay + day]}>{MonthProps.groups[1][nameFirstDay + day]}</td>
                <td className={MonthProps.groups[2][nameFirstDay + day]}>{MonthProps.groups[2][nameFirstDay + day]}</td>
                <td className={MonthProps.groups[3][nameFirstDay + day]}>{MonthProps.groups[3][nameFirstDay + day]}</td>
            </tr>
        );
    }

    return( <table>
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
            {rows}
        </tbody>
    </table>)
}
export default Month;