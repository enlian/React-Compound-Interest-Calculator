import React, { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [result, setResult] = useState(null);
  const [growthRate, setGrowthRate] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(compoundFrequency);
    const t = parseFloat(years);

    let yearlyResults = [];
    for (let i = 1; i <= t; i++) {
      const A = P * Math.pow(1 + r / n, n * i);
      const earnings = A - P;
      yearlyResults.push({
        year: i,
        totalAmount: A.toFixed(2),
        growthRate: ((A - P) / P * 100).toFixed(2),
        earnings: earnings.toFixed(2),
      });
    }

    const finalAmount = P * Math.pow(1 + r / n, n * t);
    const growth = ((finalAmount - P) / P) * 100;
    const earnings = finalAmount - P;

    setResult(finalAmount.toFixed(2));
    setGrowthRate(growth.toFixed(2));
    setTotalEarnings(earnings.toFixed(2));
    setYearlyData(yearlyResults);
  };

  return (
    <div className="App">
      <h1>複利計算機</h1>
      <div className="calculator">
        <label>元本 ($):</label>
        <input 
          type="number" 
          value={principal} 
          onChange={(e) => setPrincipal(e.target.value)} 
        />
        
        <label>年間利率 (%):</label>
        <input 
          type="number" 
          value={rate} 
          onChange={(e) => setRate(e.target.value)} 
        />
        
        <label>複利回数 (年間):</label>
        <input 
          type="number" 
          value={compoundFrequency} 
          onChange={(e) => setCompoundFrequency(e.target.value)} 
        />
        
        <label>投資期間 (年):</label>
        <input 
          type="number" 
          value={years} 
          onChange={(e) => setYears(e.target.value)} 
        />

        <button onClick={calculateCompoundInterest}>計算</button>

        {result && (
          <div className="result">
            <h2>結果</h2>
            <table className="result-table">
              <thead>
                <tr>
                  <th>最終的な金額</th>
                  <th>総成長率</th>
                  <th>総収益</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${result}</td>
                  <td>{growthRate}%</td>
                  <td>${totalEarnings}</td>
                </tr>
              </tbody>
            </table>

            <h2>年ごとの成長</h2>
            <table className="yearly-table">
              <thead>
                <tr>
                  <th>年</th>
                  <th>総金額</th>
                  <th>成長率</th>
                  <th>収益</th>
                </tr>
              </thead>
              <tbody>
                {yearlyData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.year}年</td>
                    <td>${data.totalAmount}</td>
                    <td>{data.growthRate}%</td>
                    <td>${data.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
