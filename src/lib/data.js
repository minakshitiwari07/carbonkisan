export const PRACTICES = [
  ["rot","Crop Rotation","Do you grow different crops in turn, season after season?"],
  ["org","Compost / Organic Manure","Do you add cow dung, compost or vermicompost to your soil?"],
  ["cov","Cover Crops","Do you grow a green crop to cover bare soil?"],
  ["til","Less Ploughing","Do you plough less to protect soil? (Reduced tillage)"],
  ["res","Crop Residue Management","Do you reuse crop waste instead of burning it?"],
  ["tre","Trees on Farm","Do you have trees on your field or bunds? (Agroforestry)"],
  ["soi","Soil Testing","Have you tested your soil in the last 3 years?"],
  ["ipm","Safe Pest Control","Do you limit pesticides using neem, traps or timing? (IPM)"],
  ["wat","Water Saving","Do you use methods that save irrigation water?"],
  ["fer","Balanced Fertilizer","Do you apply fertilizer as per soil test or expert advice?"],
];
export const DOCS = ["Land Ownership / Lease Document","Soil Test Report","Crop Records","Fertilizer / Input Records","Irrigation Records","Farm Photographs","Sustainable Practice Evidence"];
export const EMPTY = { farmer:{}, farm:{unit:"Acres",own:"Owned",soil:"Loamy"}, crops:[], pr:{}, inp:{chem:"No",org:"No",pest:"Rarely",irr:"Drip",wlog:"No",wsave:"No"}, docs:{}, done:{}, hist:[], calc:false };
export const DEMO = { ...EMPTY, calc:true,
  farmer:{name:"Ramesh Kumar",mobile:"9876543210",email:"ramesh@example.com",state:"Jharkhand",district:"East Singhbhum",village:"Golmuri"},
  farm:{area:"5",unit:"Acres",own:"Owned",soil:"Loamy",loc:"Golmuri",crop:"Rice",exp:"12"},
  crops:[{year:"2026",name:"Rice",area:"3",season:"Kharif"},{year:"2025",name:"Wheat",area:"3",season:"Rabi"},{year:"2024",name:"Maize",area:"3",season:"Kharif"}],
  pr:{rot:"yes",org:"yes",cov:"no",til:"sure",res:"yes",tre:"yes",soi:"no",ipm:"yes",wat:"yes",fer:"sure"},
  inp:{chem:"Low",org:"Yes",pest:"Rarely",irr:"Sprinkler",wlog:"No",wsave:"Yes"},
  docs:{0:true,2:true,3:false,4:true,5:true,6:true}, hist:[{l:"Initial",v:62}] };

export const band = (t) => t>=80?"HIGH READINESS":t>=60?"GOOD READINESS":t>=40?"NEEDS IMPROVEMENT":"LOW READINESS";

export function score(S) {
  const { farm:f, crops:c, pr, inp:i, docs:d } = S;
  const y = (k) => pr[k]==="yes"?1:pr[k]==="sure"?0.4:0;
  const land = (+f.area>0?5:0)+({Owned:5,Leased:3}[f.own]||1)+(+f.exp>=5?3:+f.exp>0?1:0)+(f.loc?2:0);
  const crop = Math.min(c.length,3)*3+(new Set(c.map(x=>x.name?.toLowerCase())).size>=2?3:0)+(c.some(x=>+x.year>=2025)?3:0);
  const prac = PRACTICES.reduce((a,p)=>a+y(p[0])*2.5,0);
  const input = (i.org==="Yes"?5:0)+(i.chem==="No"?4:i.chem==="Low"?3:1)+(i.pest==="No"?3:i.pest==="Rarely"?2:0)+(d[3]?3:0);
  const irr = ({Drip:6,Sprinkler:6,"Rain-fed":5,Other:3,Flood:2}[i.irr]||2)+(i.wsave==="Yes"?2:0)+(i.wlog==="Yes"?2:0);
  const soil = y("soi")*4+y("til")*2+y("cov")*2+y("res")*2;
  const doc = Math.round(DOCS.filter((_,k)=>d[k]).length/7*10);
  const cats = [["Land Information",land,15],["Crop History",crop,15],["Farming Practices",prac,25],["Input Management",input,15],["Irrigation",irr,10],["Soil Management",soil,10],["Documentation",doc,10]]
    .map(([n,v,m])=>[n,Math.round(Math.min(v,m)),m]);
  return { cats, total: cats.reduce((a,c)=>a+c[1],0) };
}

export function recommendations(S) {
  const r=[], { pr, docs:d, inp:i } = S, add=(id,pri,problem,why,act)=>r.push({id,pri,problem,why,act});
  if(!d[1]||pr.soi!=="yes") add("soil","High","No recent soil-test report","It shows your soil health and is key evidence.","Get a soil test from your nearest Krishi Vigyan Kendra and upload it.");
  if(!d[0]) add("land","High","Land document missing","Programmes need proof you control the land.","Upload your land record or lease paper.");
  if(!d[3]||!d[2]) add("rec","Medium","Input and crop records incomplete","Written records prove what you did.","Note seed, fertilizer and spray use every season.");
  if(pr.res!=="yes") add("res","Medium","Crop residue not managed","Burning residue releases carbon.","Mulch or compost crop waste instead.");
  if(i.irr==="Flood") add("irr","Medium","Flood irrigation uses much water","Saving water also saves energy and cost.","Try drip or sprinkler irrigation.");
  if(!d[5]) add("pho","Recommended","Farm photographs missing","Dated photos show your field over time.","Upload photos each season.");
  return r;
}
