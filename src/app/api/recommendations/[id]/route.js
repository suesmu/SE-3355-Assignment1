import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(_, { params }) {
  const item = db.prepare('SELECT * FROM sanaOzel WHERE id = ?').get(params.id);
  return NextResponse.json(item);
}
