# Wexa Helpdesk (AI-Powered Smart Helpdesk)

An end-to-end web application where users raise support tickets and an AI coworker (agentic workflow) triages them by classifying, fetching relevant knowledge-base (KB) articles, drafting replies, and either auto-resolving or assigning to a human agent.

---

## 🚀 Features

- **Authentication & Roles**
  - JWT auth
  - Roles: Admin, Agent, End User

- **Knowledge Base Management (Admin)**
  - CRUD articles with tags and publish/unpublish

- **Ticket Lifecycle**
  - Users create tickets with title, description, category, and attachments (by URL)
  - Timeline of actions per ticket

- **Agentic Triage (System)**
  - Classifies category (billing / tech / shipping / other)
  - Retrieves KB articles
  - Drafts AI reply with citations
  - Computes confidence score → auto-close if above threshold
  - Logs each step in an **Audit Log**

- **Agent Review (Support Agent)**
  - Review AI suggestions
  - Edit, accept, or reject drafts
  - Resolve or reopen tickets

- **Notifications**
  - In-app and/or email stubs on ticket status change

---

## 🏗️ Architecture

- **Frontend**: React + Vite, React Router, Tailwind (optional)
- **Backend**: Node.js (Express) + MongoDB (Mongoose)
- **Agentic Workflow**: Implemented in Node.js (stubbed LLM or optional OpenAI integration)
- **Optional**: Python worker (FastAPI) for advanced agent tasks

---

## ⚙️ Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/PrashanthVurugonda/wexa-project.git
cd wexa-project
