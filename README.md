# Meet

AI-powered virtual meeting platform for scheduling and video calling with personalized AI agents, featuring intelligent conversation summarization.

## Features

- 🤖 **Create Custom AI Agents** - Design personalized AI personas with unique personalities and knowledge
- 📅 **Schedule Meetings** - Book video calls with your AI agents at your convenience
- 📹 **Video Conversations** - Have face-to-face conversations with AI agents in real-time
- 📝 **Smart Summaries** - Get automated, intelligent summaries of your video calls
- 💬 **Natural Conversations** - Talk about anything with your AI agents

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## How It Works

1. **Create Your Agent** - Define your AI agent's personality, expertise, and conversation style
2. **Schedule a Meeting** - Pick a time that works for you and book a video call
3. **Join the Call** - Video chat with your AI agent in real-time
4. **Get Insights** - Receive an automated summary of your conversation after the call

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org) with TypeScript
- **API**: [tRPC](https://trpc.io) for type-safe APIs
- **Database**: [Neon](https://neon.tech) (PostgreSQL) with [Drizzle ORM](https://orm.drizzle.team)
- **Background Jobs**: [Inngest](https://inngest.com) for scheduling and event-driven workflows
- **Video Calls**: [Stream](https://getstream.io) for real-time video communication
- **Fonts**: [Geist](https://vercel.com/font) font family optimized with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
