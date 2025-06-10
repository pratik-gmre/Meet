
import {agentsRouter} from '@/modules/agents/server/procedures'
import {  createTRPCRouter } from '../init';
import { meetingRouter } from '@/modules/meeting/server/procedure';
export const appRouter = createTRPCRouter({
  meetings:meetingRouter,
  agents:agentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;