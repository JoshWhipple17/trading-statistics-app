import React, { useState } from 'react'
import './Statistics.css'
import NewEntry from './NewEntry'
import Button from './Button'
import TradeLog from './TradeLog'
import TotalTrades from './TotalTrades'
import StatisticsDisplay from './StatisticsDisplay'

function Statistics() {
    const [trades, setTrades] = useState({});
    const [statistics, setStatistics] = useState({});

    const addTrade = () => {
        //let position = document.querySelector('');
        //let entry = document.querySelector('');
        //let exit = document.querySelector('');
        //let share = document.querySelector('');

        //send a post request to the server
        console.log("Trade Posted!");
    };

    return (
        <div className="statistics">
            <div className="statistics__newEntry">
                <NewEntry />
            </div>
            <div className="statistics__addNewTrade">
                <Button text="Add New Trade"  click={addTrade} />
            </div>
            <div className="statistics__tradeLog">
                <TradeLog />
            </div>
            <div className="statistics__totalTrades">
                <TotalTrades />
            </div>
            <div className="statistics__statisticsDisplay">
                <StatisticsDisplay />
            </div>
        </div>
    )
}

export default Statistics
