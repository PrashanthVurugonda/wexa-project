# Wexa Helpdesk (AI-Powered Smart Helpdesk)

An end-to-end web application where users raise support tickets and an AI coworker (agentic workflow) triages them by classifying, fetching relevant knowledge-base (KB) articles, drafting replies, and either auto-resolving or assigning to a human agent.

---

## 🚀 Features

- **Authentication & Roles**: JWT auth; roles for Admin, Agent, User  
- **Knowledge Base (KB) Management**: CRUD articles, tags, publish/unpublish  
- **Ticket Lifecycle**: Create tickets, attachments by URL, timeline of actions  
- **Agentic Triage**: Classify, retrieve KB, draft reply with citations, confidence score, auto-close  
- **Agent Review**: Accept/edit drafts, resolve/reopen  
- **Audit Logs**: Every step logged with a traceId  
- **Notifications**: In-app and/or email stub on status change

---

## 🏗️ Architecture

- **Frontend**: React + Vite, React Router, Tailwind (optional)  
- **Backend**: Node.js (Express) + MongoDB (Mongoose)  
- **Agentic Logic**: Implemented in Node (stubbed LLM or optional OpenAI)  
- **Optional**: Python worker (FastAPI) for advanced tasks

---

## ⚙️ Setup & Run

1) **Clone the repository**
```bash
git clone https://github.com/PrashanthVurugonda/wexa-project.git
cd wexa-project
```

2) **Create environment variables** (create a `.env` file in the project root)
```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/helpdesk
JWT_SECRET=change-me
AUTO_CLOSE_ENABLED=true
CONFIDENCE_THRESHOLD=0.78
STUB_MODE=true
OPENAI_API_KEY=   # optional
```

3) **Install dependencies** (if running locally)
```bash
npm install
```

4) **Run with Docker (recommended)**
```bash
docker compose up --build
```

5) **Seed sample data**
```bash
npm run seed
```

6) **Start the app locally (non-Docker mode)**
```bash
npm start
```

## 🧠 Agent Workflow

1. **Plan** → classification → retrieval → draft → decision  
2. **Classify** → rule-based keywords (stub) or LLM  
3. **Retrieve KB** → keyword search (top 3 results)  
4. **Draft Reply** → AI reply with numbered citations to KB  
5. **Decision** → auto-close if confidence ≥ threshold and feature enabled  
6. **Audit Logging** → append structured events with a traceId

---

## 🧪 Testing
```bash
npm test
```

---

## ✅ Acceptance Criteria

- Register/login and create a ticket  
- Triage suggestion generated and stored  
- Auto-close when confidence ≥ threshold (if enabled)  
- Agents can review/edit/send replies  
- Audit timeline shows ordered steps with timestamps  
- Works with `STUB_MODE=true` (no external keys)  
- One-command run via Docker: `docker compose up`

---

## 📖 License

MIT
