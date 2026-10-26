// This component arranges the announcement, header, and hero sections.
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main>
        <Hero />
      </main>
    </>
  );
}
