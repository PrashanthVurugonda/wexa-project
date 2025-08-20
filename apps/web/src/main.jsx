import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [items, setItems] = React.useState([]);
  const [q, setQ] = React.useState("");

  async function search() {
    const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";
    const res = await fetch(`${base}/api/kb${q ? `?q=${encodeURIComponent(q)}` : ""}`);
    setItems(await res.json());
  }

  React.useEffect(() => { search(); }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>Wexa Helpdesk</h1>
      <div style={{ marginBottom: 12 }}>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search KB…" />
        <button onClick={search} style={{ marginLeft: 8 }}>Search</button>
      </div>
      <ul>
        {items.map(i => (
          <li key={i._id || i.title}>
            <strong>{i.title}</strong>
            <div>{i.body}</div>
            {i.tags?.length ? <small>tags: {i.tags.join(", ")}</small> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
