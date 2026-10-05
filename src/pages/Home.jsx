import { Link } from "react-router-dom";
import { Sprout, BarChart3, FileCheck2, Lightbulb } from "lucide-react";
import { Card } from "../components/ui.jsx";
const WHY = [[Sprout,"Sustainable Farming Assessment","Evaluate sustainable agricultural practices."],[BarChart3,"Readiness Score","Get an easy-to-understand score out of 100."],[FileCheck2,"Digital Evidence","Track important farm documents and evidence."],[Lightbulb,"Smart Recommendations","Receive personalized improvement suggestions."]];
const STEPS = ["Create Farmer Profile","Add Farm & Crop Details","Assess Farming Practices","Upload Evidence","Get Readiness Score"];
export default function Home() {
  return (<>
    <header className="hero"><div className="wrap hero-in">
      <div>
        <span className="chip">🌾 Built for Indian farmers</span>
        <h1>Assess Your Farm's Carbon Credit Readiness</h1>
        <p>CarbonKisan helps farmers understand their farming practices, documentation and preparedness for carbon-credit programs.</p>
        <div className="row"><Link to="/register" className="btn gold">Start Free Assessment</Link><Link to="/dashboard" className="btn ghost">View Dashboard</Link></div>
      </div>
      <svg viewBox="0 0 320 260" className="art" aria-hidden="true"><circle cx="250" cy="50" r="30" fill="#f5d26b" /><path d="M0 150Q120 100 320 140V260H0z" fill="#3aa356" />{[0,1,2,3,4,5,6].map(i => <path key={i} d={`M160 150L${i*55-30} 260`} stroke="#c9e86a" strokeWidth="3" opacity=".6" />)}<circle cx="160" cy="95" r="22" fill="#a86b3c" /><path d="M138 90Q160 55 182 90z" fill="#f08a24" /><rect x="136" y="116" width="48" height="70" rx="14" fill="#f7f3e8" /></svg>
    </div></header>
    <section className="sec"><div className="wrap"><h2 className="c">Why CarbonKisan?</h2>
      <div className="grid">{WHY.map(([I,t,d]) => <Card key={t} className="hov"><div className="ic"><I size={22} /></div><h3>{t}</h3><p className="mu">{d}</p></Card>)}</div></div></section>
    <section className="sec alt"><div className="wrap"><h2 className="c">How It Works</h2>
      <div className="grid">{STEPS.map((s, i) => <Card key={s} className="hov"><span className="num">{i + 1}</span> <b>{s}</b></Card>)}</div></div></section>
    <section className="stats"><div className="wrap grid">{[["7","Assessment Categories"],["100","Point Readiness Score"],["✔","Personalized Action Plan"],["✔","Farmer-Friendly Interface"]].map(([a,b]) => <div key={b}><b>{a}</b><span>{b}</span></div>)}</div></section>
    <section className="sec"><div className="wrap cta"><h2>Ready to understand your farm's carbon readiness?</h2><Link to="/register" className="btn gold">Start Free Assessment</Link></div></section>
  </>);
}
