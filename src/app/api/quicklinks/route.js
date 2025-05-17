import { NextResponse } from 'next/server';
const db = require('@/lib/db'); 

export async function GET() {
  const links = db.prepare('SELECT * FROM quicklinks').all();
  return NextResponse.json(links);
}


export async function POST(req) {
  const body = await req.json();
  const { title, url } = body;

  const stmt = db.prepare('INSERT INTO quicklinks (title, url) VALUES (?, ?)');
  const result = stmt.run(title, url);

  return NextResponse.json({ success: true, id: result.lastInsertRowid });
}
