import { Link, useNavigate } from "react-router-dom"; import Step from "../components/Step.jsx"; import { Card } from "../components/ui.jsx"; import { useStore } from "../lib/store.jsx"; import { score, PRACTICES, DOCS } from "../lib/data.js";
export default function Review() {
  const { S, update } = useStore(); const nav = useNavigate(); const { farmer: F, farm: M, inp: I } = S;
  const sec = (t, to, rows) => <Card key={t}><div className="between"><h3>{t}</h3><Link className="btn sm ghost-d" to={to}>Edit</Link></div>{rows.map((r, i) => <div key={i}>{r}</div>)}</Card>;
  return <Step title="Review Your Answers" last>
    {sec("Farmer Information", "/register", [`${F.name || "-"} • ${F.mobile || "-"} • ${F.email || "-"}`, [F.village, F.district, F.state].filter(Boolean).join(", ")])}
    {sec("Farm Information", "/farm", [`${M.area || "-"} ${M.unit} • ${M.own} • ${M.soil} soil`, `Main crop: ${M.crop || "-"} • ${M.exp || 0} yrs experience`])}
    {sec("Crop History", "/crops", S.crops.length ? S.crops.map((c) => `${c.year} ${c.name} ${c.area} acres ${c.season}`) : ["No crops added"])}
    {sec("Farming Practices", "/practices", [`${PRACTICES.filter(([k]) => S.pr[k] === "yes").length} of 10 practiced`])}
    {sec("Input & Irrigation", "/inputs", [`Chemical: ${I.chem} • Organic: ${I.org} • Pesticide: ${I.pest}`, `Irrigation: ${I.irr}`])}
    {sec("Documents", "/documents", [`${DOCS.filter((_, k) => S.docs[k]).length} of 7 uploaded`])}
    <button className="btn big" onClick={() => { update((s) => ({ ...s, calc: true, hist: [...s.hist, { l: "Initial", v: score(s).total }] })); nav("/result"); }}>Calculate My Carbon Readiness</button></Step>;
}
