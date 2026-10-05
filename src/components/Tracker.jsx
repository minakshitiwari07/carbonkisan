import { Card } from "./ui.jsx";
export default function Tracker({ hist, total }) {
  const pts = hist.length ? hist.slice(-8) : [{ v: total }]; const x = (i) => 40 + i * (440 / Math.max(pts.length - 1, 1)), y = (v) => 180 - v * 1.6;
  return <Card><h3>Improvement Tracker</h3>
    <svg viewBox="0 0 500 220" style={{ width: "100%" }}>{[0, 50, 85, 100].map((v) => <g key={v}><line x1="40" x2="480" y1={y(v)} y2={y(v)} stroke="var(--bd)" strokeDasharray={v === 85 ? "5" : "0"} /><text x="4" y={y(v) + 4} fontSize="11" fill="var(--mu)">{v === 85 ? "Target 85" : v}</text></g>)}
      <polyline fill="none" stroke="var(--g2)" strokeWidth="3" points={pts.map((p, i) => x(i) + "," + y(p.v)).join(" ")} />
      {pts.map((p, i) => <g key={i}><circle cx={x(i)} cy={y(p.v)} r="5" fill="var(--g2)" /><text x={x(i)} y={y(p.v) - 10} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--tx)">{p.v}</text></g>)}</svg>
    <div className="grid"><div className="stat"><b>{pts[0].v}/100</b>Initial</div><div className="stat"><b>{total}/100</b>Current</div><div className="stat"><b>85</b>Target</div></div></Card>;
}
