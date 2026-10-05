import { Link } from "react-router-dom"; import { Card, ProgressBar } from "../components/ui.jsx"; import { useStore } from "../lib/store.jsx"; import { score, band, recommendations, PRACTICES, DOCS } from "../lib/data.js";
export default function Dashboard() {
  const { S } = useStore(); const r = score(S), d = Object.keys(S.done).length, tot = S.calc ? Math.min(100, r.total + d * 2) : 0, pend = S.calc ? recommendations(S).filter((x) => !S.done[x.id]).length : 0;
  const stats = [["Readiness", tot + "/100"], ["Status", S.calc ? band(tot).replace(" READINESS", "") : "Not assessed"], ["Farm Size", `${S.farm.area || "-"} ${S.farm.unit.toLowerCase()}`], ["Documents", DOCS.filter((_, k) => S.docs[k]).length + "/7"], ["Practices", PRACTICES.filter(([k]) => S.pr[k] === "yes").length + "/10"], ["Pending Actions", pend]];
  return <div className="wrap sec"><h1>Welcome, {(S.farmer.name || "Farmer").split(" ")[0]} 👋</h1>
    <div className="grid">{stats.map(([a, b]) => <Card key={a} className="stat"><span className="mu">{a}</span><b>{b}</b></Card>)}</div>
    <Card><h3>Category Scores</h3>{r.cats.map(([n, v, m]) => <div key={n} style={{ marginBottom: 10 }}><small>{n} {v}/{m}</small><ProgressBar value={v} max={m} /></div>)}</Card>
    <div className="row"><Link className="btn" to="/farm">Update Assessment</Link><Link className="btn ghost-d" to="/documents">Upload Evidence</Link><Link className="btn ghost-d" to="/result">View Recommendations</Link></div></div>;
}
