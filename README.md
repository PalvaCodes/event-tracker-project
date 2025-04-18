<img width="1440" alt="Screenshot 2025-04-18 at 2 10 51 PM" src="https://github.com/user-attachments/assets/46a98d1b-6fe3-49d4-ad1f-f58fe0dd387d" />
<img width="1440" alt="Screenshot 2025-04-18 at 2 11 37 PM" src="https://github.com/user-attachments/assets/82ebe633-0247-4feb-949b-665b1f35e824" />
<img width="1440" alt="Screenshot 2025-04-18 at 2 12 45 PM" src="https://github.com/user-attachments/assets/406c3a00-5f93-4716-874f-4ff6557239fb" />

# 🎟️ Event Discovery Platform

A modern web app for discovering live events, saving favorites, and organizing plans — powered by the Ticketmaster API and built with **Next.js** + **React**.

---

## 🔥 What It Does

This project transforms raw event data into a clean, user-friendly experience where people can:

- **Explore Upcoming Events** via an infinite scrolling feed
- **Search** by category, date, or location using dynamic filters
- **View Full Event Details** on a dedicated page
- **Save Favorites** for quick access later
- **Visualize Saved Events** in a personal calendar
- **Enjoy a Sleek UI** with responsive design and dark mode

Built to replicate the functionality of large-scale event platforms like Songkick or Dice, this app shows how real-world APIs and interactive frontend design can work together to create value.

---

## 🌐 Live Features (Implemented)

### 🏠 Homepage – Dynamic Event Feed
- Connects to **Ticketmaster API**
- Infinite scroll with pagination
- Pulls real-time events based on user input or location

### 🔍 Search Page
- Smart filters: **Category**, **Date**, **Location**
- Form validation to avoid empty or invalid queries
- User feedback via “No results found” message (conditional rendering)

### 📄 Event Detail View
- Accessible via React routing
- Shows full description, image, date, venue, and links

### ❤️ Favorites System
- Save or remove events
- Persistent storage using `localStorage` so users keep favorites after reloads

### 🗓️ Calendar Integration
- Calendar page that visualizes all saved events
- Built with `react-calendar`
- Helps users plan their month at a glance

### 🌙 Dark Mode
- Smooth toggle for light/dark mode
- Improves accessibility and user comfort

---

## 🧠 Highlights

- 💡 **API Integration**: Worked with third-party APIs (Ticketmaster) to fetch and display structured data in a real-world context.
- ⚙️ **State Management**: Shared state across multiple pages using React state and hooks — no external state library required.
- 🧭 **Routing and Navigation**: Used dynamic routing in Next.js to build a smooth single-page application experience.
- 💅 **Responsive UI/UX**: Designed with clean layouts and modular CSS. Built for both mobile and desktop.
- 📆 **Calendar Logic**: Implemented custom logic to map favorite events to calendar tiles.
- 💾 **Persistent Data**: Used `localStorage` for saving state across sessions, simulating a lightweight user account system.

---

## 🛠 Tech Stack

| Area        | Tools/Libraries                     |
|-------------|-------------------------------------|
| Framework   | Next.js, React                      |
| Styling     | CSS Modules                         |
| API         | Ticketmaster API                    |
| Calendar    | `react-calendar`                    |
| Storage     | `localStorage` (persistent favorites)|

---

## 👨‍👩‍👧 Team & Roles

- **Pedro Alvarado** – State management, calendar logic, favorites system  
- **Jonathan Marsh** – Ticketmaster API integration, data handling  
- **Maryna Snihurska** – UI/UX design, styling, and accessibility  

---







This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
