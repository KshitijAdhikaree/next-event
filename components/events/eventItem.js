import Link from 'next/link'
import styles from './eventItem.module.css'

function EventItem(props) {
    const {title, image, date, location, id} = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(',','\n')

    const exploreLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>

          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem