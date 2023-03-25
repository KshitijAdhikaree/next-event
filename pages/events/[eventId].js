import { Fragment } from 'react'
import { getEventById } from '@/dummyData'
import { useRouter } from 'next/router'
import EventSummary from '@/components/eventDetail/eventSummary'
import EventLogistics from '@/components/eventDetail/eventLogistics'
import EventContent from '@/components/eventDetail/eventContent'
import ErrorAlert from '@/components/ui/errorAlert'

function EventDetailPage() {
  const router = useRouter()

  const eventId = router.query.eventId

  const event = getEventById(eventId)

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
      <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
      
      
    )
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
