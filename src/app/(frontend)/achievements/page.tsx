import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import AchievementsClient from './AchievementsClient'

export const revalidate = 60

export default async function AchievementsPage() {
  const payload = await getPayload({ config: configPromise })

  const collegeRes = await payload.find({ collection: 'college-achievements', limit: 100 })
  const studentRes = await payload.find({ collection: 'student-achievements', limit: 100 })

  return <AchievementsClient collegeData={collegeRes.docs} studentData={studentRes.docs} />
}

export const dynamic = 'force-dynamic'
