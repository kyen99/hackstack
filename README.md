# Mach49 Hackstack

## TODO

- Google analytics (capture all events)
- Magic link auth
- Standard UI components
  - Hero
  - Pricing
  - Nav bar
  - Product Features
  - Sign in/Sign out
  - Theme overrides

## Features

- Chakra-UI style and theming system
- Next-auth authentication
- GraphQL client
- React-admin

## Setup

1. Clone this repo
2. Run `npm install`
3. Create postgres database in AWS
4. Create Hasura account pointing to pg
5. Create credentials for auth providers
6. Edit .env.local

## Production Deployment

1. Create Vercel account
2. Authenticate local vercel cli
3. `vercel --prod`
4. Connect Vercel account with repo
