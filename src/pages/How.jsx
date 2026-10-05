import { Card } from "../components/ui.jsx";
const ST = ["Farmer Profile","Farm Information","Crop History","Farming Practices","Inputs & Irrigation","Documents","Readiness Assessment","Recommendations"];
export default function How() {
  return <div className="wrap narrow"><h1>How It Works</h1><p className="mu">Eight simple stages, from your profile to your action plan.</p>
    {ST.map((t, i) => <div key={t} className="c"><Card className="c"><span className="num">{i + 1}</span> <b>{t}</b></Card>{i < 7 && <div className="arrow">↓</div>}</div>)}
    <div className="note">CarbonKisan provides a preliminary readiness assessment. Actual carbon-credit eligibility depends on the requirements, methodology and verification process of the specific carbon-credit program.</div></div>;
}
