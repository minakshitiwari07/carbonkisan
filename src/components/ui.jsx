import { useEffect, useState } from "react";
export const Card = ({ children, className = "", ...p }) => <div className={"card " + className} {...p}>{children}</div>;
export const ProgressBar = ({ value, max = 100 }) => <div className="bar"><i style={{ width: (value / max) * 100 + "%" }} /></div>;
export const Field = ({ label, error, children }) => <div><label>{label}</label>{children}{error && <div className="err">{error}</div>}</div>;
export const StatusBadge = ({ tone = "", children }) => <span className={"badge " + tone}>{children}</span>;
export function ScoreCircle({ value }) {
  const [v, setV] = useState(0); const R = 80, C = 2 * Math.PI * R;
  useEffect(() => { const t = setTimeout(() => setV(value), 80); return () => clearTimeout(t); }, [value]);
  return (<svg viewBox="0 0 200 200" className="circle" role="img" aria-label={`Score ${value} out of 100`}>
    <circle cx="100" cy="100" r={R} fill="none" stroke="var(--be)" strokeWidth="16" />
    <circle cx="100" cy="100" r={R} fill="none" stroke="var(--g2)" strokeWidth="16" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - v / 100)} transform="rotate(-90 100 100)" style={{ transition: "stroke-dashoffset 1.2s" }} />
    <text x="100" y="106" textAnchor="middle" fontSize="46" fontWeight="800" fill="var(--g1)">{value}</text>
    <text x="100" y="130" textAnchor="middle" fontSize="15" fill="var(--mu)">out of 100</text></svg>);
}
