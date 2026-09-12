import { createClient } from '@libsql/client'

const url = process.env.TURSO_DATABASE_URL || process.env.LIBSQL_URL || 'file:local.db'
const authToken = process.env.TURSO_AUTH_TOKEN || process.env.LIBSQL_AUTH_TOKEN
export const db = createClient({ url, authToken })

export async function initDb(){
 await db.execute(`CREATE TABLE IF NOT EXISTS admins(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,email TEXT UNIQUE NOT NULL,password_hash TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP,updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`)
 await db.execute(`CREATE TABLE IF NOT EXISTS briefings(id INTEGER PRIMARY KEY AUTOINCREMENT,project_name TEXT NOT NULL,responsible_name TEXT,email TEXT,whatsapp TEXT,instagram TEXT,website TEXT,city TEXT,project_type TEXT,main_goal TEXT,main_cta TEXT,cta_link TEXT,target_audience TEXT,audience_problem TEXT,desired_feeling TEXT,offer_description TEXT,benefits TEXT,included_items TEXT,price TEXT,bonus TEXT,deadline TEXT,guarantee_info TEXT,visual_style TEXT,colors TEXT,references_links TEXT,official_links TEXT,legal_notes TEXT,launch_date TEXT,priority TEXT,raw_payload_json TEXT NOT NULL,status TEXT DEFAULT 'new',created_at TEXT DEFAULT CURRENT_TIMESTAMP,updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`)
 await db.execute(`CREATE TABLE IF NOT EXISTS briefing_notes(id INTEGER PRIMARY KEY AUTOINCREMENT,briefing_id INTEGER NOT NULL,note TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(briefing_id) REFERENCES briefings(id))`)
 await db.execute(`CREATE TABLE IF NOT EXISTS project_links(id INTEGER PRIMARY KEY AUTOINCREMENT,briefing_id INTEGER NOT NULL,label TEXT NOT NULL,url TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(briefing_id) REFERENCES briefings(id))`)
 await db.execute(`CREATE TABLE IF NOT EXISTS status_history(id INTEGER PRIMARY KEY AUTOINCREMENT,briefing_id INTEGER NOT NULL,from_status TEXT,to_status TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(briefing_id) REFERENCES briefings(id))`)
}
