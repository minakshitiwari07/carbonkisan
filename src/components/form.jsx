import { useStore } from "../lib/store.jsx";
import { Field } from "./ui.jsx";
const set = (update, sec, k, v) => update((s) => ({ ...s, [sec]: { ...s[sec], [k]: v } }));
export function Bind({ sec, k, label, type = "text", options }) {
  const { S, update } = useStore(); const v = S[sec][k] ?? (options ? options[0] : "");
  const on = (e) => set(update, sec, k, e.target.value);
  return <Field label={label}>{options ? <select value={v} onChange={on}>{options.map((o) => <option key={o}>{o}</option>)}</select> : <input type={type} value={v} onChange={on} />}</Field>;
}
export function Choice({ sec, k, label, opts = ["Yes", "No"] }) {
  const { S, update } = useStore();
  return <Field label={label}><div className="opt">{opts.map((o) => <button type="button" key={o} className={(S[sec][k] === o ? "on " : "") + (o === "No" ? "n" : "")} onClick={() => set(update, sec, k, o)}>{o}</button>)}</div></Field>;
}
