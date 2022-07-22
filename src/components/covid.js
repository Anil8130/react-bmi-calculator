import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid = () => {
    const [data, setData] =useState([]);
    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData =await res.json();
            setData(actualData.statewise[0]);
        }catch(err){
        }
    }
    useEffect(()=> {
        getCovidData();
    },[]);

  return (
    <>
    <section>
        <h1> Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>OUR</span> Country</p>
                        <p className="card_total card_small">India</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> Recovered</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> Confirmed</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> Death</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> Active</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Confirmed</span> Deaths</p>
                        <p className="card_total card_small">{data.deltaconfirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Last</span> Updated</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
    </>
  )
}

export default Covid