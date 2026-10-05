import Step from "../components/Step.jsx"; import { Bind } from "../components/form.jsx";
export default function Farm() {
  return <Step title="Farm Information"><div className="f2">
    <Bind sec="farm" k="area" label="Total Land Area" type="number" /><Bind sec="farm" k="unit" label="Unit" options={["Acres","Hectares"]} />
    <Bind sec="farm" k="own" label="Land Ownership" options={["Owned","Leased","Other"]} /><Bind sec="farm" k="soil" label="Soil Type" options={["Loamy","Sandy","Clay","Silty","Other"]} />
    <Bind sec="farm" k="loc" label="Farm Location (village / landmark)" /><Bind sec="farm" k="crop" label="Current Main Crop" /><Bind sec="farm" k="exp" label="Years of Farming Experience" type="number" /></div></Step>;
}
