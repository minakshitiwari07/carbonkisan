import Step from "../components/Step.jsx"; import { Card } from "../components/ui.jsx"; import { useStore } from "../lib/store.jsx"; import { PRACTICES } from "../lib/data.js";
export default function Practices() {
  const { S, update } = useStore();
  return <Step title="Sustainable Farming Practices"><div className="grid two">{PRACTICES.map(([k, t, d]) => <Card key={k}><b>{t}</b><p className="mu">{d}</p>
    <div className="opt">{[["yes","YES"],["no","NO"],["sure","NOT SURE"]].map(([v, l]) => <button key={v} className={(S.pr[k] === v ? "on " : "") + (v === "no" ? "n" : "")} onClick={() => update((s) => ({ ...s, pr: { ...s.pr, [k]: v } }))}>{l}</button>)}</div></Card>)}</div></Step>;
}
