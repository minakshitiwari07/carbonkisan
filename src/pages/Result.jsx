import { Link } from "react-router-dom";
import Tracker from "../components/Tracker.jsx";
import { Card, ProgressBar, ScoreCircle, StatusBadge } from "../components/ui.jsx";
import { useStore } from "../lib/store.jsx";
import { score, band, recommendations, PRACTICES, DOCS, DEMO } from "../lib/data.js";
export default function Result() {
  const { S, update } = useStore();
  if (!S.calc) return (<div className="wrap narrow c"><Card><h2>No assessment yet</h2><p className="mu">The remaining assessment pages are coming next. Load a sample farm to try the scoring engine now.</p>
    <div className="row" style={{ justifyContent: "center" }}><button className="btn" onClick={() => update({ ...DEMO })}>Load Demo Farm</button><Link to="/register" className="btn ghost-d">Create Profile</Link></div></Card></div>);
  const r = score(S), done = Object.keys(S.done).length, total = Math.min(100, r.total + done * 2), recs = recommendations(S);
  const good = [...PRACTICES.filter(p => S.pr[p[0]] === "yes").map(p => p[1] + " practiced"), ...DOCS.filter((_, k) => S.docs[k]).map(d => d + " uploaded")];
  const bad = [...PRACTICES.filter(p => S.pr[p[0]] !== "yes").map(p => p[1] + " not yet practiced"), ...DOCS.filter((_, k) => !S.docs[k]).map(d => d + " missing")];
  const tone = total < 40 ? "r" : total < 60 ? "a" : "";
  return (<div className="wrap sec"><h1>Your Carbon Readiness</h1>
    <Card className="c"><ScoreCircle value={total} /><StatusBadge tone={tone}>{band(total)}</StatusBadge>
      <div className="cats">{r.cats.map(([n, v, m]) => <div key={n}><div className="between"><span>{n}</span><b>{v}/{m}</b></div><ProgressBar value={v} max={m} /></div>)}</div>
      <div className="note">This is a preliminary prototype score, not official carbon-credit eligibility.</div></Card>
    <div className="grid two"><Card><h3 className="ok">Your Strengths</h3>{good.map(g => <div key={g}>✅ {g}</div>)}</Card><Card><h3 className="bad">Areas to Improve</h3>{bad.map(g => <div key={g}>⚠️ {g}</div>)}</Card></div>
    <Tracker hist={S.hist} total={total} />
    <h2>Smart Recommendations</h2>
    <div className="grid two">{recs.map(x => <Card key={x.id} style={{ opacity: S.done[x.id] ? .55 : 1 }}><StatusBadge tone={x.pri === "High" ? "r" : x.pri === "Medium" ? "a" : ""}>{x.pri.toUpperCase()}</StatusBadge><h3>{x.problem}</h3><p><b>Why it matters:</b> {x.why}</p><p><b>What to do:</b> {x.act}</p>
      {S.done[x.id] ? <b>✔ Completed</b> : <button className="btn sm" onClick={() => update(s => { const nd = { ...s.done, [x.id]: true }; return { ...s, done: nd, hist: [...s.hist, { l: "Action", v: Math.min(100, r.total + Object.keys(nd).length * 2) }] }; })}>Mark as Completed</button>}</Card>)}</div></div>);
}
