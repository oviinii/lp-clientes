import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
const protectedRoutes=['/admin/dashboard','/admin/briefings','/admin/kanban']
export async function middleware(req:NextRequest){const path=req.nextUrl.pathname;if(!protectedRoutes.some(p=>path.startsWith(p)))return NextResponse.next();const token=req.cookies.get('lp_admin_session')?.value;if(!token)return NextResponse.redirect(new URL('/admin',req.url));try{await jwtVerify(token,new TextEncoder().encode(process.env.AUTH_SECRET||'dev-secret-change-me'));return NextResponse.next()}catch{return NextResponse.redirect(new URL('/admin',req.url))}}
export const config={matcher:['/admin/:path*']}
