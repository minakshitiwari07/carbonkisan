import Step from "../components/Step.jsx"; import { ProgressBar, StatusBadge } from "../components/ui.jsx"; import { useStore } from "../lib/store.jsx"; import { DOCS } from "../lib/data.js";
export default function Documents() {
  const { S, update } = useStore(); const n = DOCS.filter((_, k) => S.docs[k]).length;
  return <Step title="Documents & Evidence"><b>Documentation Progress: {n} / 7 Completed</b><ProgressBar value={n} max={7} />
    {DOCS.map((d, k) => <div key={d} className="item"><span>{d}</span><span className="row"><StatusBadge tone={S.docs[k] ? "" : "r"}>{S.docs[k] ? "Uploaded" : "Missing"}</StatusBadge>
      <button className="btn sm ghost-d" onClick={() => update((s) => ({ ...s, docs: { ...s.docs, [k]: !s.docs[k] } }))}>{S.docs[k] ? "Remove" : "Upload"}</button></span></div>)}
    <p className="mu">Demo only: no file is sent anywhere.</p></Step>;
}
