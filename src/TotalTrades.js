import React from 'react'
import './TotalTrades.css'

function TotalTrades() {
    return (
        <div className="totalTrades">
            <p className="totalTrades__title">Total Trades</p>
            <hr />
            <div className="totalTrades__value">
                <p id="numTrades">100</p>
            </div>
        </div>
    )
}

export default TotalTrades
