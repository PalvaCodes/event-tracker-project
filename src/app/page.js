'use client'
import { useEffect, useState } from "react";
import styles from "@/app/styles/page.module.css";
import EventCard from "./components/eventCard/eventCard";
import ActionLink from "./components/actionButton/actionLink";
import ToTopButton from "./components/toTopButton/toTopButton";
import CardContainer from "./components/cardContainer/cardContainer";
import eventData from "/public/events.json";
import fetchEvents from "../lib/fetchEvents";

export default function Home() {
  const [allevents, setAllEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setAllEvents(data);
    };

    getEvents();
  }, []);

  const handleViewAll = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContainer}>
            <h1>Discover new and exciting events</h1>
            <p>Stay up to date with the latest events near you and never miss out on the fun. Find concerts, festivals, and more — all in one place!</p>
          </div>
        </div>
        <ActionLink
          toId="#main"
          className={styles.downBtn}>
          Discover
        </ActionLink>
      </section>
      <CardContainer
        visible={visibleCount < allevents.length}
        onClick={handleViewAll}>
        {allevents.slice(0, visibleCount).map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </CardContainer>
      <ToTopButton />
    </div>
  );
}
