import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "The Scholar's Den",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    price: 8,
    rating: 4.9,
    floor: "2nd Floor",
    seats: 4,
    bookings: 128,
    desc: "A serene private room tucked in the quiet wing of the Central Library. Great for focused reading and research.",
    tags: ["Wi-Fi", "Whiteboard", "Quiet Zone", "Power Outlets"],
  },
  {
    id: 2,
    title: "Innovator's Suite",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    price: 14,
    rating: 4.7,
    floor: "3rd Floor",
    seats: 8,
    bookings: 94,
    desc: "A collaborative room equipped for group study, presentations, and brainstorming sessions.",
    tags: ["Wi-Fi", "Monitor", "Video Conferencing", "Power Outlets"],
  },
  {
    id: 3,
    title: "Zen Focus Pod",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    price: 5,
    rating: 4.8,
    floor: "1st Floor",
    seats: 1,
    bookings: 211,
    desc: "A minimal single-occupancy pod for deep focus, online exams, and private study sessions.",
    tags: ["Wi-Fi", "Quiet Zone", "Natural Light", "Power Outlets"],
  },
  {
    id: 4,
    title: "Bright Study Lounge",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    price: 12,
    rating: 4.6,
    floor: "4th Floor",
    seats: 6,
    bookings: 76,
    desc: "A bright, comfortable space with natural light, soft chairs, and a calm study environment.",
    tags: ["Wi-Fi", "Natural Light", "Whiteboard", "Group Study"],
  },
  {
    id: 5,
    title: "Creative Media Room",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop",
    price: 10,
    rating: 4.5,
    floor: "Media Lab",
    seats: 3,
    bookings: 62,
    desc: "Perfect for creative projects, virtual meetings, digital practice, and presentation prep.",
    tags: ["Wi-Fi", "Monitor", "Power Outlets", "Private"],
  },
  {
    id: 6,
    title: "Team Collaboration Hub",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    price: 11,
    rating: 4.8,
    floor: "Ground Floor",
    seats: 10,
    bookings: 156,
    desc: "A spacious group room designed for teamwork, meetings, project planning, and discussions.",
    tags: ["Wi-Fi", "Large Table", "Whiteboard", "Group Study"],
  },
];

const AvailableRooms = () => {
  return (
    <section className="bg-[#ede8e0] dark:bg-[#1e3a8a] py-16 md:py-20">
      <div className="w-[84.615%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
            Available Study Rooms
          </h2>
          <p className="mt-4 text-[#5f5a50] dark:text-[#F6F0E4]/75 leading-7">
            Handpicked spaces across campus for every study style — solo pods,
            group suites, quiet rooms, and creative studios.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group overflow-hidden rounded-3xl border border-[#006B4F]/15 bg-[#f9f3e8]/75 dark:bg-[#0f234f]/70 backdrop-blur-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full border border-[#006B4F]/30 bg-[#006B4F]/85 px-3 py-1 text-xs font-bold text-white">
                  ● Available
                </span>

                <span className="absolute top-4 right-4 rounded-full border border-[#006B4F]/25 bg-[#f9f3e8]/90 px-3 py-1 text-xs font-bold text-[#006B4F]">
                  ${room.price}/hr
                </span>

                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
                  ⭐ {room.rating}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
                  {room.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5f5a50] dark:text-[#F6F0E4]/75">
                  {room.desc}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#5f5a50] dark:text-[#F6F0E4]/70">
                  <span>📍 {room.floor}</span>
                  <span>•</span>
                  <span>👥 {room.seats} seats</span>
                  <span>•</span>
                  <span>{room.bookings} bookings</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {room.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#006B4F]/20 bg-[#006B4F]/10 px-3 py-1 text-xs font-semibold text-[#006B4F] dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-[#006B4F]/10 pt-5">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#006B4F] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black">
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableRooms;
