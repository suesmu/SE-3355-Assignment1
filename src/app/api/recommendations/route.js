import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const items = db.prepare('SELECT * FROM sanaOzel').all();
  return NextResponse.json(items);
}

