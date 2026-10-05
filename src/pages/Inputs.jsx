import Step from "../components/Step.jsx"; import { Card } from "../components/ui.jsx"; import { Bind, Choice } from "../components/form.jsx";
export default function Inputs() {
  return <Step title="Inputs & Irrigation">
    <h3>Fertilizer</h3><Choice sec="inp" k="chem" label="Chemical fertilizer (urea, DAP) used?" opts={["No","Low","High"]} /><Bind sec="inp" k="chemq" label="Quantity per acre and how often" />
    <Choice sec="inp" k="org" label="Organic fertilizer used?" /><Bind sec="inp" k="orgq" label="Type and quantity" />
    <h3 style={{ marginTop: 20 }}>Pesticide</h3><Choice sec="inp" k="pest" label="How often do you spray pesticides?" opts={["No","Rarely","Often"]} />
    <h3 style={{ marginTop: 20 }}>Irrigation & Water</h3><Bind sec="inp" k="irr" label="Main irrigation method" options={["Drip","Sprinkler","Flood","Rain-fed","Other"]} />
    <Choice sec="inp" k="wlog" label="Do you keep water-use records?" /><Choice sec="inp" k="wsave" label="Do you use water-saving practices?" /></Step>;
}
