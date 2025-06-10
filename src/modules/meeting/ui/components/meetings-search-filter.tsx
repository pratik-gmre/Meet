import React from 'react'
import { useMeetingFilters } from '../../hooks/use-meetings-filters'
import { Input } from '@/components/ui/input'
import { SearchIcon, SlidersHorizontalIcon } from 'lucide-react'

//whatever i write in input filed is passed in url as query params and vice versa by due to nuqs


const MeetingsSearchFilter = () => {

    const [filters , setFilters] = useMeetingFilters()
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

export default MeetingsSearchFilter
