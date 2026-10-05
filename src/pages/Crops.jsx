import { useState } from "react"; import Step from "../components/Step.jsx"; import { Field } from "../components/ui.jsx"; import { useStore } from "../lib/store.jsx";
export default function Crops() {
  const { S, update } = useStore(); const blank = { year: "2026", name: "", area: "", season: "Kharif" }; const [f, setF] = useState(blank);
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const del = (i) => update((s) => ({ ...s, crops: s.crops.filter((_, j) => j !== i) }));
  return <Step title="Crop History"><div className="f2">
    <Field label="Year"><input type="number" value={f.year} onChange={upd("year")} /></Field><Field label="Crop Name"><input value={f.name} onChange={upd("name")} /></Field>
    <Field label="Area (acres)"><input type="number" value={f.area} onChange={upd("area")} /></Field>
    <Field label="Season"><select value={f.season} onChange={upd("season")}>{["Kharif","Rabi","Zaid"].map((x) => <option key={x}>{x}</option>)}</select></Field></div><br />
    <button className="btn" onClick={() => { if (f.name && f.area) { update((s) => ({ ...s, crops: [...s.crops, f] })); setF(blank); } }}>+ Add Crop</button>
    {S.crops.map((c, i) => <div key={i} className="item"><span>{c.year} | {c.name} | {c.area} acres | {c.season}</span><span className="row"><button className="btn sm ghost-d" onClick={() => { setF(c); del(i); }}>Edit</button><button className="btn sm ghost-d" onClick={() => del(i)}>Delete</button></span></div>)}</Step>;
}
