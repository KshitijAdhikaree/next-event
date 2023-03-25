import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummyData'
import EventList from '@/components/events/eventList'
import ResultsTitle from '@/components/events/resultsTitle'
import { Fragment } from 'react'
import Button from '@/components/ui/button'
import ErrorAlert from '@/components/ui/errorAlert'

function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className='center'>Loading</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <h1>Invalid Filter</h1>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <h1>No events found.</h1>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
