import { Fragment } from 'react'
import { getEventById } from '@/dummyData'
import { useRouter } from 'next/router'
import EventSummary from '@/components/eventDetail/eventSummary'
import EventLogistics from '@/components/eventDetail/eventLogistics'
import EventContent from '@/components/eventDetail/eventContent'

function EventDetailPage() {
  const router = useRouter()

  const eventId = router.query.eventId

  const event = getEventById(eventId)

  if (!event) {
    return <p>No event found</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt = {event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
