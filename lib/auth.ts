import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { db, initDb } from './db'

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-secret-change-me')
const cookieName='lp_admin_session'
export async function hashPassword(password:string){return bcrypt.hash(password,10)}
export async function verifyPassword(password:string,hash:string){return bcrypt.compare(password,hash)}
export async function createSession(admin:{id:number,email:string,name:string}){const token=await new SignJWT(admin).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret);(await cookies()).set(cookieName,token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*24*7})}
export async function logout(){(await cookies()).delete(cookieName)}
export async function currentAdmin(){const token=(await cookies()).get(cookieName)?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,secret);return payload as any}catch{return null}}
export async function requireAdmin(){const admin=await currentAdmin();if(!admin)throw new Error('UNAUTHORIZED');return admin}
export async function ensureAdmin(){await initDb();const email=process.env.ADMIN_EMAIL||'admin@lpclientes.local';const password=process.env.ADMIN_PASSWORD||'admin123';const existing=await db.execute({sql:'SELECT id FROM admins WHERE email=?',args:[email]});if(existing.rows.length===0){await db.execute({sql:'INSERT INTO admins(name,email,password_hash) VALUES(?,?,?)',args:['Admin',email,await hashPassword(password)]})}}
