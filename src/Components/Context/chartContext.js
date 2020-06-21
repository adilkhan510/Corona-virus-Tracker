import React, { useState, createContext } from 'react';

export const ChartContext = createContext();

const ChartProvider = ({ children })=>{
    const [chartType, setChartType] = useState(null);
    return(
        <ChartContext.Provider value={{chartType, setChartType}} >
            {children}
        </ChartContext.Provider>
    )
}

export default ChartProvider