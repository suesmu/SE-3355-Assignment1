import { NextResponse } from 'next/server';
const db = require('@/lib/db');

export async function GET() {
  const slides = db.prepare('SELECT * FROM slider').all();
  return NextResponse.json(slides);
}
