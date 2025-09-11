import React from 'react'
import { useAgentFilters } from '../../hooks/use-agents-filters'
import { Input } from '@/components/ui/input'
import {  SlidersHorizontalIcon } from 'lucide-react'

//whatever i write in input filed is passed in url as query params and vice versa by due to nuqs


const AgentSearchFilter = () => {

    const [filters , setFilters] = useAgentFilters()
  return (
    <div className='relative'>
        <Input placeholder='filter by name' className='h-9 bg-white w-[200px] pl-7'
        
        value={filters.search}
        onChange={(e)=>setFilters({search:e.target.value})}
        />
        <SlidersHorizontalIcon className='size-4  text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2'/>
    </div>
  )
}

export default AgentSearchFilter
