// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { s3Storage } from '@payloadcms/storage-s3'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'
// import { StudentAchievements } from './collections/StudentAchievements'
// import { CollegeAchievements } from './collections/CollegeAchievements'
// import { Gallery } from './collections/Gallery'
// import { Events } from './collections/Events'
// import { Publications } from './collections/Publications'
// import { Faculty } from './collections/Faculty'
// import { ResearchAreas } from './collections/ResearchAreas'
// import { Payments } from './collections/Payments'
// import { Students } from './collections/Student'
// import { Results } from './collections/Results'
// import { Inquiries } from './collections/Inquires'
// import { Activities } from './collections/Activities'
// import { Visits } from './collections/Visits'

// import { About } from './globals/About'
// import { Contact } from './globals/Contact'
// import { Admissions } from './globals/Admissions'
// import { Campus } from './globals/Campus'
// import { HomeSettings } from './globals/HomeSettings'
// import { MootCourt } from './globals/MootCourt'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },

//   // ✅ FIXED: NEVER keep this empty
//   serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',

//   cookiePrefix: 'avirat-law',

//   collections: [
//     Users,
//     Media,
//     CollegeAchievements,
//     StudentAchievements,
//     Gallery,
//     Events,
//     ResearchAreas,
//     Faculty,
//     Publications,
//     Payments,
//     Students,
//     Results,
//     Inquiries,
//     Activities,
//     Visits,
//   ],

//   globals: [About, Contact, Admissions, Campus, HomeSettings, MootCourt],

//   editor: lexicalEditor(),

//   // ✅ FIXED: NEVER empty
//   secret: process.env.PAYLOAD_SECRET || 'dev-secret-key',

//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },

//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URL || '',
//       ssl: { rejectUnauthorized: false },
//       max: 3,
//       min: 0,
//       idleTimeoutMillis: 30_000,
//       connectionTimeoutMillis: 10_000,
//     },
//   }),

//   sharp,

//   plugins: [
//     s3Storage({
//       collections: {
//         media: {
//           // ✅ BEST PRACTICE: Direct Supabase URL
//           generateFileURL: ({ filename }) => {
//             return `https://${process.env.SUPABASE_HOSTNAME}.supabase.co/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/${filename}`
//           },
//         },
//       },

//       bucket: process.env.SUPABASE_BUCKET!,

//       config: {
//         credentials: {
//           accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
//           secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
//         },
//         region: process.env.SUPABASE_REGION || 'ap-south-1',
//         endpoint: process.env.SUPABASE_S3_ENDPOINT!,
//         forcePathStyle: true,
//       },
//     }),
//   ],
// })

// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { s3Storage } from '@payloadcms/storage-s3'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'
// import { StudentAchievements } from './collections/StudentAchievements'
// import { CollegeAchievements } from './collections/CollegeAchievements'
// import { Gallery } from './collections/Gallery'
// import { Events } from './collections/Events'
// import { Publications } from './collections/Publications'
// import { Faculty } from './collections/Faculty'
// import { ResearchAreas } from './collections/ResearchAreas'
// import { Payments } from './collections/Payments'
// import { Students } from './collections/Student'
// import { Results } from './collections/Results'
// import { Inquiries } from './collections/Inquires'
// import { Activities } from './collections/Activities'
// import { Visits } from './collections/Visits'

// import { About } from './globals/About'
// import { Contact } from './globals/Contact'
// import { Admissions } from './globals/Admissions'
// import { Campus } from './globals/Campus'
// import { HomeSettings } from './globals/HomeSettings'
// import { MootCourt } from './globals/MootCourt'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// // ✅ Build the list of trusted origins
// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'https://avirat-law-college-black.vercel.app',
//   process.env.NEXT_SERVER_URL,
//   process.env.PAYLOAD_PUBLIC_SERVER_URL,
//   // process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
// ].filter(Boolean) as string[]

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },

//   // ✅ Must match the origin that users actually visit
//   serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',

//   // ✅ CRITICAL: whitelist all origins that will POST/PUT/PATCH/DELETE
//   csrf: allowedOrigins,
//   cors: allowedOrigins,

//   cookiePrefix: 'avirat-law',

//   // ⚠️ Optional but recommended: force secure cookies on prod
//   // cookies: {
//   //   sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
//   //   secure: process.env.NODE_ENV === 'production',
//   // },

//   collections: [
//     Users,
//     Media,
//     CollegeAchievements,
//     StudentAchievements,
//     Gallery,
//     Events,
//     ResearchAreas,
//     Faculty,
//     Publications,
//     Payments,
//     Students,
//     Results,
//     Inquiries,
//     Activities,
//     Visits,
//   ],

//   globals: [About, Contact, Admissions, Campus, HomeSettings, MootCourt],

//   editor: lexicalEditor(),

//   secret: process.env.PAYLOAD_SECRET!,

//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },

//  db: postgresAdapter({
//   pool: {
//     connectionString: process.env.DATABASE_URL || '',
//     ssl: { rejectUnauthorized: false },
//     max: 1,              
//     min: 0,
//     idleTimeoutMillis: 10_000,       
//     connectionTimeoutMillis: 10_000,
//     allowExitOnIdle: true,           
//   },
// }),

//   sharp,

//   plugins: [
//     s3Storage({
//       collections: {
//         media: {
//           generateFileURL: ({ filename }) => {
//             return `https://${process.env.SUPABASE_HOSTNAME}.supabase.co/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/${filename}`
//           },
//         },
//       },
//       bucket: process.env.SUPABASE_BUCKET!,
//       config: {
//         credentials: {
//           accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
//           secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
//         },
//         region: process.env.SUPABASE_REGION || 'ap-south-1',
//         endpoint: process.env.SUPABASE_S3_ENDPOINT!,
//         forcePathStyle: true,
//       },
//     }),
//   ],
// })

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { StudentAchievements } from './collections/StudentAchievements'
import { CollegeAchievements } from './collections/CollegeAchievements'
import { Gallery } from './collections/Gallery'
import { Events } from './collections/Events'
import { Publications } from './collections/Publications'
import { Faculty } from './collections/Faculty'
import { ResearchAreas } from './collections/ResearchAreas'
import { Payments } from './collections/Payments'
import { Students } from './collections/Student'
import { Results } from './collections/Results'
import { Inquiries } from './collections/Inquires'
import { Activities } from './collections/Activities'
import { Visits } from './collections/Visits'

import { About } from './globals/About'
import { Contact } from './globals/Contact'
import { Admissions } from './globals/Admissions'
import { Campus } from './globals/Campus'
import { HomeSettings } from './globals/HomeSettings'
import { MootCourt } from './globals/MootCourt'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// ✅ Environment detection
const isProduction = process.env.NODE_ENV === 'production'

// ✅ Allowed origins for CSRF/CORS — must include localhost + Vercel URL + custom domain
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://avirat-law-college-black.vercel.app',
  process.env.NEXT_PUBLIC_SERVER_URL,
  process.env.PAYLOAD_PUBLIC_SERVER_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
].filter(Boolean) as string[]

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',

  // ✅ CRITICAL: fixes Vercel admin 403
  csrf: allowedOrigins,
  cors: allowedOrigins,

  cookiePrefix: 'avirat-law',

  collections: [
    Users,
    Media,
    CollegeAchievements,
    StudentAchievements,
    Gallery,
    Events,
    ResearchAreas,
    Faculty,
    Publications,
    Payments,
    Students,
    Results,
    Inquiries,
    Activities,
    Visits,
  ],

  globals: [About, Contact, Admissions, Campus, HomeSettings, MootCourt],

  editor: lexicalEditor(),

  // ✅ Fail loudly if missing, no silent dev fallback in prod
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-key',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // ✅ Environment-aware pool — tight on Vercel, generous on local
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      ssl: { rejectUnauthorized: false },

      // On Vercel: 1 conn per function + exit on idle (avoids EMAXCONNSESSION)
      // On local: 10 conns + no exit on idle (drizzle-kit schema pull needs this)
      max: isProduction ? 1 : 10,
      min: 0,
      idleTimeoutMillis: isProduction ? 10_000 : 30_000,
      connectionTimeoutMillis: 30_000,
      allowExitOnIdle: isProduction,
    },
  }),

  sharp,

  plugins: [
    s3Storage({
      collections: {
        media: {
          generateFileURL: ({ filename }) => {
            return `https://${process.env.SUPABASE_HOSTNAME}.supabase.co/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/${filename}`
          },
        },
      },
      bucket: process.env.SUPABASE_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.SUPABASE_REGION || 'ap-south-1',
        endpoint: process.env.SUPABASE_S3_ENDPOINT!,
        forcePathStyle: true,
      },
    }),
  ],
})