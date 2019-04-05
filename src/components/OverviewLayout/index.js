import React, { Component } from 'react';
// import ReactMinimalPieChart from 'react-minimal-pie-chart';
import PieChart from './view';

class OverviewLayout extends Component {
    render() {
        return (
            <div>
                <PieChart />
            </div>
        );
    }
}

export default OverviewLayout;