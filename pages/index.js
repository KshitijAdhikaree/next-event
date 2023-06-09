import { getFeaturedEvents } from "@/dummyData"
import EventList from "@/components/events/eventList"


function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage
