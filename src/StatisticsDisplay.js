import React from 'react'
import './StatisticsDisplay.css'

function StatisticsDisplay() {
    return (
        <div className="statisticsDisplay">
            <p className="statisticsDisplay__title">Statistics Display</p>
            <hr />
            <div className="statisticsDisplay__content">
                <div className="statisticsDisplay__labels">
                    <p>Average Profit</p>
                    <p>Average Loss</p>
                    <p>Shares</p>
                    <p>Average RRR</p>
                    <p>Win Rate</p>
                    <p>Average Profit</p>
                </div>
                <div className="statisticsDisplay__values">
                    <p>Average Profit</p>
                    <p>Average Loss</p>
                    <p>Shares</p>
                    <p>Average RRR</p>
                    <p>Win Rate</p>
                    <p>Average Profit</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticsDisplay
