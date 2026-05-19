import Hero from "@/components/Hero";
import AvailableRooms from "@/components/AvailableRooms";
import BookingProcess from "@/components/BookingProcess";
import ReadyToBook from "@/components/ReadyToBook";

export default function Home() {
  return (
    <div>
      <Hero />
      <AvailableRooms />
      <BookingProcess />
      <ReadyToBook />
    </div>
  );
}
