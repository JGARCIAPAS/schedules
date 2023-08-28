import React, { useState } from "react";
import Month from "../month/Month";
import '../../assets/style/table.css';
interface YearProps{
    actualYear: number;
    groups: string[][];
}

const Year: React.FC<YearProps> = (YearProps)=> {
    const completeMonth = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'];
    const [getExpandedTables, setGetExpandedTables] = useState(Array(completeMonth.length).fill(false));

    const handleToggle = (index:any) => {
        const newExpandedIndexes = [...getExpandedTables];
        newExpandedIndexes[index] = !newExpandedIndexes[index];
        setGetExpandedTables(newExpandedIndexes);
    }

    const monthItems: JSX.Element[] = []
    for (let month = 1; month <= completeMonth.length; month++) {
        let fistDayActualMonth = new Date(`${month}/01/${YearProps.actualYear}`);
        monthItems.push(
            <div key={month}>
                <h3 className='title_month_table' onClick={()=>handleToggle(month)}>{completeMonth[month-1]}</h3>
                {getExpandedTables[month] && <Month groups={YearProps.groups} actualMonth={month} actualYear={YearProps.actualYear} fistDayActualMonth={fistDayActualMonth}/>}
                
            </div>
            )
    }
    return(<>
     {monthItems}
        </>)
}
export default Year;