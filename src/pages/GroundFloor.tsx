import { useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  ChartNoAxesColumnIncreasingIcon,
  ChevronDown,
  CookingPot,
  DoorOpen,
  Sofa,
  Trees,
  Utensils,
} from "lucide-react";

import gglogo from "../assets/gglolgo.png";
import groundFloor from "../assets/Background Image.png";
import GroundFloorDialog from "../components/GroundFloorDialog";

const panoramaHotspots = [
  {
    id: "kitchen",
    x: 8.3,
    y: 50,
    title: "Kitchen",
    description: "A practical modern kitchen with clean finishes.",
    Icon: CookingPot,
  },
  {
    id: "hall",
    x: 34.9,
    y: 38.2,
    title: "Open-plan space",
    description: "An airy connection between the living and dining areas.",
    Icon: DoorOpen,
  },
  {
    id: "island",
    x: 65.5,
    y: 45.5,
    title: "Kitchen island",
    description: "A central workspace with a clean, minimalist finish.",
    Icon: CookingPot,
  },
  {
    id: "dining",
    x: 87.8,
    y: 47.2,
    title: "Dining room",
    description: "A bright dining area beside the windows.",
    Icon: Utensils,
  },
  {
    id: "family",
    x: 35.3,
    y: 64.3,
    title: "Family room",
    description: "A comfortable place to relax with family.",
    Icon: Sofa,
  },
];

const roomLinks = [
  { label: "Kitchen", x: 15, y: 73, Icon: ArrowUpRight },
  { label: "Dining room", x: 83, y: 73, Icon: ArrowUpLeft },
  { label: "Bathroom", x: 28, y: 87, Icon: Bath },
  { label: "Front yard", x: 50, y: 90, Icon: Trees },
  { label: "Bedroom", x: 72, y: 87, Icon: BedDouble },
];

const roomIds: Record<string, number> = {
  Bedroom: 1,
  Kitchen: 2,
  "Family room": 3,
  "Dining room": 4,
  Bathroom: 5,
  "Front yard": 6,
};

export default function GroundFloor() {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>("family");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(3);

  const activeHotspot = panoramaHotspots.find(
    (spot) => spot.id === selectedHotspot
  );

  const ActiveHotspotIcon = activeHotspot?.Icon;

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#bcb4aa] font-sans text-white">
        <title>GroundFloor - Serenia Real Estate</title>
      {/* Top navigation */}
      <header className="absolute inset-x-4 top-4 z-20 flex h-11 items-center justify-between">

        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] sm:gap-3 sm:text-[13px]"
        >
          <span>All clusters</span>
          <span className="opacity-60">/</span>
          <span>Aruna residence</span>
          <span className="opacity-60">/</span>
          <span>Type-A</span>
          <span className="opacity-60">/</span>

          <span className="rounded-full bg-black/25 px-3 py-1.5">
            360 preview
          </span>
        </nav>

        {/* Brand logo */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center sm:flex">
          <img
            src={gglogo}
            alt="Serenia"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Floor selector */}
        <button
          type="button"
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 bg-black/30 px-3 py-2.5 text-xs transition-colors hover:bg-black/45 sm:px-5 sm:text-[13px]"
        >
          <ChartNoAxesColumnIncreasingIcon size={16} strokeWidth={1.8} />

          <span>Ground floor</span>

          <ChevronDown size={14} className="ml-2" />
        </button>
      </header>

      {/* Ground floor panorama */}
      <section
        aria-label="Ground floor 360 preview"
        className="relative min-h-dvh w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("${groundFloor}")`,
        }}
      >

        {/* Interactive hotspots */}
        {panoramaHotspots.map((spot) => {
          const isActive = selectedHotspot === spot.id;

          return (
            <button
              key={spot.id}
              type="button"
              aria-label={`Show ${spot.title}`}
              aria-pressed={isActive}
              onClick={() =>
                setSelectedHotspot(isActive ? null : spot.id)
              }
              className={`absolute z-10 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-all duration-300 ${
                isActive
                  ? "scale-110 bg-white/95"
                  : "bg-black/30 hover:scale-110 hover:bg-white/75"
              }`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
            >
              <span
                className={`h-3 w-3 rounded-full shadow ${
                  isActive ? "bg-black" : "bg-white"
                }`}
              />
            </button>
          );
        })}

        {/* Selected hotspot information */}
        {activeHotspot && ActiveHotspotIcon ? (
          <div
            className="absolute z-20 flex max-w-[310px] -translate-x-1/2 -translate-y-full items-center gap-3 bg-white px-4 py-3 text-[#222] shadow-xl"
            style={{
              left: `${Math.min(Math.max(activeHotspot.x, 18), 78)}%`,
              top: `${Math.max(activeHotspot.y - 8, 12)}%`,
            }}
          >
            <ActiveHotspotIcon
              size={21}
              strokeWidth={1.7}
              className="shrink-0 text-neutral-500"
            />

            <span>
              <small className="mb-1 block text-[11px] text-neutral-500">
                {activeHotspot.title}
              </small>

              <strong className="block text-xs font-medium leading-relaxed">
                {activeHotspot.description}
              </strong>
            </span>
          </div>
        ) : null}

        {/* Room navigation shortcuts */}
        {roomLinks.map(({ label, x, y }) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              setSelectedRoom(roomIds[label] ?? 3);
              setDialogOpen(true);
            }}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-xs text-white drop-shadow transition-transform hover:scale-105 sm:gap-4 sm:text-[15px]"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <span className="whitespace-nowrap">
              {label}
            </span>

            <span className="grid h-8 w-14 place-items-center rounded-[50%] bg-white/65 text-neutral-900 transition-colors hover:bg-white sm:h-9 sm:w-16">
              <ChevronDown size={19} strokeWidth={2.2} />
            </span>
          </button>
        ))}

        {/* Open floor plan */}

      </section>

      {/* Ground floor dialog */}
      <GroundFloorDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        selectedRoom={selectedRoom}
        onSelectRoom={setSelectedRoom}
      />

    </main>
  );
}