import React, { Component } from 'react';

import ReactMinimalPieChart from 'react-minimal-pie-chart';

class PieChart extends Component {
    render() {
        // dataComments && dataLikes are both dummy data used here because i have not found any data like likes and comments
        const dataLikes = [
            {   title: '1',
                value: 1000,
                color: '#E38627'
              },
              {
                title: '2',
                value: 948,
                color: '#C1AB37'
              },
              {
                title: '3',
                value: 765,
                color: '#636135'
              },{
                title: '4',
                value: 673,
                color: '#0AA627'
              },
              {
                title: '5',
                value: 690,
                color: '#D56073'
              },
              {
                title: '6',
                value: 490,
                color: '#6A21FF'
              },{
                title: '7',
                value: 440,
                color: '#E35F27'
              },
              {
                title: '8',
                value: 400,
                color: '#CC7C37'
              },
              {
                title: '9',
                value: 249,
                color: '#A62135'
              },
              {
                title: '10',
                value: 98,
                color: '#E83627'
              },
              {
                title: '11',
                value: 452,
                color: '#C31C37'
              }
            
        ];
        const dataComments = [
            {   title: '1',
                value: 500,
                color: '#E30F27'
              },
              {
                title: '2',
                value: 475,
                color: '#C1ACC7'
              },
              {
                title: '3',
                value: 372,
                color: '#630A35'
              },{
                title: '4',
                value: 339,
                color: '#09B627'
              },
              {
                title: '5',
                value: 345,
                color: '#D50073'
              },
              {
                title: '6',
                value: 239,
                color: '#2AF1FF'
              },{
                title: '7',
                value: 217,
                color: '#E39027'
              },
              {
                title: '8',
                value: 148,
                color: '#CCCC37'
              },
              {
                title: '9',
                value: 189,
                color: '#A68F35'
              },
              {
                title: '10',
                value: 45,
                color: '#E83FA7'
              },
              {
                title: 'others',
                value: 150,
                color: '#C9A737'
              }
            
        ];
        
        
        return (
            <div className="container">
                 <div className="col-md-12" style={{margintop: '25%'}}>
                    <div className='row'>
                        <div className="col-md-5">
                            <ReactMinimalPieChart 
                                data = {dataLikes}
                                dx='20'
                                dy='20'
                               
                            />   
                        </div>
                        <div className="col-md-5">
                            <ReactMinimalPieChart 
                                    data = {dataComments}
                                    dx='20'
                                    dy='20'
                                   
                                />   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PieChart;