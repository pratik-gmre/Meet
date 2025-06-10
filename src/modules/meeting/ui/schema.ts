import {z } from 'zod'


export const meetingInsertSchema =z.object({
    name:z.string().min(1,{message:"name is required"}),
    agentId:z.string().min(1,{message:"Agent is required"})
})



export const meetingUpdateSchema = meetingInsertSchema.extend({
    id:z.string().min(1,{message:"id is required"})
    
})