'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { format, isSameDay } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import HeroSection from "@/app/components/heroSection/heroSection";
import StarIcon from "/public/star.svg";
import EventListCard from "../components/userCard/eventListCard";
import styles from "./page.module.css";
import './calendar.css';

const concerts = [
  { id: 1, name: "Green Day", date: new Date(2025, 5, 15), venue: "Rogers Centre" },
  { id: 2, name: "Blink-182", date: new Date(2025, 6, 22), venue: "Budweiser Stage" },
  { id: 3, name: "Foo Fighters", date: new Date(2025, 7, 5), venue: "Scotiabank Arena" },
  { id: 4, name: "The Rolling Stones", date: new Date(2025, 5, 30), venue: "Rogers Centre" },
  { id: 5, name: "Metallica", date: new Date(2025, 8, 12), venue: "Budweiser Stage" },
  { id: 6, name: "Pearl Jam", date: new Date(2025, 7, 18), venue: "Scotiabank Arena" },
  { id: 7, name: "Red Hot Chili Peppers", date: new Date(2025, 6, 8), venue: "Rogers Centre" },
  { id: 8, name: "Arctic Monkeys", date: new Date(2025, 8, 3), venue: "Budweiser Stage" },
  { id: 9, name: "Queens of the Stone Age", date: new Date(2025, 7, 25), venue: "History" },
  { id: 10, name: "The Smashing Pumpkins", date: new Date(2025, 6, 14), venue: "Budweiser Stage" },
  { id: 11, name: "Green Day 2", date: new Date(2025, 5, 15), venue: "Rogers Centre" }
]; //months in javascript are from 0-11, which is why it's showing the 5th month as June and not May.. weird! 

const getMonthNumber = (monthAbbr) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.indexOf(monthAbbr);
};

const getTimeParts = (timeString) => {
  if (!timeString) return [0, 0];
  const [hours, minutes] = timeString.split(':').map(Number);
  return [hours, minutes];
};

export default function ConcertCalendarPage() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/events.json');
        if (!response.ok) throw new Error('Failed to load events');
        
        const eventsData = await response.json();
        const transformedEvents = eventsData.map(event => ({
          ...event,
          parsedDate: new Date(
            new Date().getFullYear(),
            getMonthNumber(event.date.month),
            parseInt(event.date.day),
            ...getTimeParts(event.date.time)
          )
        }));

        setEvents(transformedEvents);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const todaysEvents = events
    .filter(event => isSameDay(event.parsedDate, date))
    .map(event => ({
      ...event,
      date: {
        month: format(event.parsedDate, 'MMM'),
        day: event.parsedDate.getDate(),
        time: format(event.parsedDate, 'HH:mm')
      }
    }));

  if (isLoading) {
    return (
      <div>
        <HeroSection title="Event Calendar" />
        <p>Loading events...</p>
      </div>
    );
  }

  return (
    <div>

      <HeroSection
        title="Plan with Calendar">
      </HeroSection>
      <main className={styles.calendarPage}>
        <div className={styles.calendarContainer}>
          <Calendar
            onChange={setDate}
            value={date}

            tileContent={({ date, view }) =>
              view === 'month' && concerts.some(show => isSameDay(show.date, date)) ? (
                <StarIcon className={styles.concertMarker} />
              ) : null
            }
            tileClassName={({ date, view }) =>
              view === 'month' && concerts.some(show => isSameDay(show.date, date))
                ? 'has-concert'
                : ''
            }
          />
 //           tileContent={({ date, view }) => {
 //             if (view === 'month') {
 //               const hasEvent = events.some(event => 
 //                 isSameDay(event.parsedDate, date)
 //               );
 //               return hasEvent ? <div className="event-marker">•</div> : null;
 //             }
 //             return null;
 //           }}
 //         />
        </div>

        <div className={styles.concertsList}>
          <h2>Events on {format(date, 'MMMM d, yyyy')}</h2>
          {todaysEvents.length > 0 ? (
            <ul className={styles.eventContainer}>
              {todaysConcerts.map(show => (
                <li key={show.id}>
                  <EventListCard
                  name={show.name} 
                  time={show.time}
                  venue={show.venue} />
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noEvents}>No events scheduled for this date</p>
        </div>
          )}
        </div>
      </main>
    </div>
  );
}