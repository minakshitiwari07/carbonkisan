import { Card, ProgressBar, StatusBadge } from "../components/ui.jsx"; import { band } from "../lib/data.js";
const FARM = [["Sunita Devi","Jamshedpur, JH","4.5 ac",84],["Mohan Singh","Ranchi, JH","7 ac",71],["Ravi Kumar","Patna, BR","3 ac",58],["Lakshmi Naidu","Guntur, AP","9 ac",88],["Arjun Patil","Nashik, MH","5 ac",64],["Gurpreet Kaur","Ludhiana, PB","12 ac",79],["Bimal Das","Bardhaman, WB","2 ac",36],["Anita Munda","Khunti, JH","3.5 ac",52]];
const DIST = [["High",45],["Good",120],["Needs Improvement",65],["Low",20]], AVG = [["Land",12,15],["Crops",11,15],["Practices",16,25],["Inputs",9,15],["Irrigation",6,10],["Soil",6,10],["Docs",5,10]];
export default function Admin() {
  return <div className="wrap sec"><h1>Admin Dashboard</h1>
    <div className="grid">{[["Total Farmers",250],["Assessments Completed",210],["High Readiness",45],["Good Readiness",120],["Needs Improvement",65],["Low Readiness",20]].map(([a, b]) => <Card key={a} className="stat"><span className="mu">{a}</span><b>{b}</b></Card>)}</div>
    <div className="grid two"><Card><h3>Readiness Distribution</h3>{DIST.map(([n, v]) => <div key={n} style={{ marginBottom: 8 }}><small>{n} - {v}</small><ProgressBar value={v} max={120} /></div>)}</Card>
      <Card><h3>Average Score by Category</h3>{AVG.map(([n, v, m]) => <div key={n} style={{ marginBottom: 8 }}><small>{n} {v}/{m}</small><ProgressBar value={v} max={m} /></div>)}</Card></div>
    <Card className="tbl"><h3>Farmers</h3><table><thead><tr>{["Name","Location","Farm Area","Score","Status","Last Assessment","Action"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{FARM.map((f, i) => <tr key={f[0]}><td>{f[0]}</td><td>{f[1]}</td><td>{f[2]}</td><td>{f[3]}</td><td><StatusBadge>{band(f[3]).replace(" READINESS", "")}</StatusBadge></td><td>{10 + i} Sep 2026</td><td><button className="btn sm ghost-d">View</button> <button className="btn sm ghost-d">Report</button></td></tr>)}</tbody></table></Card></div>;
}
