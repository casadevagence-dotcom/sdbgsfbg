# CampuSphere login

A Next.js reproduction of the CampuSphere login and password-reset pages,
configured for deployment on Vercel.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm ci
npm run dev
npm run build
npm test
```

Open [http://localhost:3000](http://localhost:3000) after starting the
development server.

## Deploy to Vercel

Import the GitHub repository into Vercel. The repository's `vercel.json`
selects the Next.js framework preset, and Vercel can use the default install,
build, and output settings.

Requirements:

- Node.js 22 or newer
- no environment variables
- no custom output-directory setting

If the Vercel project previously had manual framework or output overrides,
reset them to the repository defaults before redeploying.
