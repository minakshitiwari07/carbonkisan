import { Link, useLocation } from "react-router-dom";
import { Card } from "./ui.jsx";
export const ORDER = [["/register","Farmer"],["/farm","Farm"],["/crops","Crops"],["/practices","Practices"],["/inputs","Inputs"],["/documents","Documents"],["/review","Review"]];
export default function Step({ title, children, last }) {
  const i = ORDER.findIndex(([p]) => p === useLocation().pathname);
  return (<div className="wrap narrow">
    <div className="stepper">{ORDER.map(([p, t], j) => <Link key={p} to={p} className={j <= i ? "d" : ""}>{j + 1}<br />{t}</Link>)}</div>
    <Card><h2>{title}</h2>{children}</Card>
    <div className="between">{i > 0 ? <Link className="btn ghost-d" to={ORDER[i - 1][0]}>← Back</Link> : <span />}{!last && <Link className="btn" to={ORDER[i + 1][0]}>Next →</Link>}</div>
  </div>);
}
