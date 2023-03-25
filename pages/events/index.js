import { getAllEvents } from '@/dummyData'
import EventList from '@/components/events/eventList'
import EventsSearch from '@/components/events/eventsSearch'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import ResultsTitle from '@/components/events/resultsTitle'

function AllEventsPage() {
  const events = getAllEvents()

  const router = useRouter()

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <ResultsTitle/>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage
