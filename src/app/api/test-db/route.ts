import { NextResponse } from 'next/server'
import { Client } from 'pg'

export const dynamic = 'force-dynamic'

export async function GET() {
  const url = process.env.DATABASE_URL
  if (!url) return NextResponse.json({ error: 'DATABASE_URL missing' })

  // Sanitized for logging
  const safeUrl = url.replace(/:[^:@]+@/, ':****@')

  const start = Date.now()
  const client = new Client({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 15000,
  })

  try {
    await client.connect()
    const res = await client.query('SELECT NOW() as now, current_database() as db')
    await client.end()
    return NextResponse.json({
      ok: true,
      url: safeUrl,
      timeMs: Date.now() - start,
      result: res.rows[0],
    })
  } catch (err: any) {
    try { await client.end() } catch {}
    return NextResponse.json({
      ok: false,
      url: safeUrl,
      timeMs: Date.now() - start,
      error: err.message,
      code: err.code,
    })
  }
}