import { NextResponse } from 'next/server';
import path from 'path';
import Database from 'better-sqlite3';

const db = new Database(path.resolve(process.cwd(), 'database.db'));

export async function GET() {
  const electronics = db.prepare('SELECT * FROM electronics').all();
  return NextResponse.json(electronics);
}
