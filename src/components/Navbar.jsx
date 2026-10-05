import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
export const Logo = () => <Link to="/" className="logo"><Leaf size={26} />CarbonKisan</Link>;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const L = [["/","Home"],["/register","Assessment"],["/dashboard","Dashboard"],["/result","My Result"],["/admin","Admin"],["/how","How It Works"],["/about","About"],["/login","Login"]];
  return (
    <nav className="nav"><div className="wrap nav-in">
      <Logo />
      <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        {L.map(([to,t]) => <NavLink key={to} to={to} end>{t}</NavLink>)}
      </div>
      <Link to="/register" className="btn sm hide-m">Start Assessment</Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></nav>
  );
}
