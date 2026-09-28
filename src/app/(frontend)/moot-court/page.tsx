import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import MootCourtClient from './MootCourtClient'

export const revalidate = 60

export default async function MootCourtPage() {
  const payload = await getPayloadHMR({ config: configPromise })

  const data = await payload.findGlobal({
    slug: 'moot-court',
    depth: 1,
  })

  return <MootCourtClient data={data} />
}
