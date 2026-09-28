import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import ActivitiesClient from './ActivitiesClient'

export const revalidate = 60

export default async function ActivitiesPage() {
  const payload = await getPayloadHMR({ config: configPromise })

  const [activitiesRes, visitsRes] = await Promise.all([
    payload.find({
      collection: 'activities',
      sort: 'displayOrder',
      limit: 100,
      depth: 1,
    }),
    payload.find({
      collection: 'visits',
      sort: 'displayOrder',
      limit: 100,
      depth: 1,
    }),
  ])

  return (
    <ActivitiesClient
      activities={activitiesRes.docs}
      visits={visitsRes.docs}
    />
  )
}