import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ContactClient from './ContactClient'

export const revalidate = 60

export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'contact' })

  return <ContactClient data={data} />
}

export const dynamic = 'force-dynamic'
