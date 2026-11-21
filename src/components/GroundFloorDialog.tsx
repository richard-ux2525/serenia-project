import React from "react";
import stupidBox from '../assets/stupidbox.png'
type Room = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  selectedRoom: number;
  onSelectRoom: (id: number) => void;
};

const groundFloorRooms: Room[] = [
  { id: 1, name: "Bedroom", description: "Private and bright sleeping space for rest" },
  { id: 2, name: "Kitchen", description: "Functional modern kitchen for cooking" },
  { id: 3, name: "Family room", description: "Spacious living area for gathering" },
  { id: 4, name: "Dining area", description: "Cozy dining spot for meals" },
  { id: 5, name: "Sliding door", description: "Wide access to fresh air and light" },
  { id: 6, name: "Front yard", description: "A green outdoor space for fresh air" },
];

export default function GroundFloorDialog({
  open,
  onClose,
  selectedRoom,
  onSelectRoom,
}: Props) {
  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Ground floor plan"
      className="absolute bottom-2 right-2 top-auto z-30 flex h-[72vh] w-[calc(100%-1rem)] flex-col overflow-hidden bg-white text-neutral-900 shadow-2xl sm:bottom-4 sm:right-4 sm:top-[72px] sm:h-auto sm:w-[448px]"
    >
      <div className="relative grid grid-cols-2 gap-1 bg-white p-3">
        <div className="w-107 p-2 flex bg-stone text-center mt-15">
            <div className="bg-white w-1/2 px-3 py-3 text-sm font-medium shadow-sm">Ground floor</div>
        <div className="bg-neutral-100 w-1/2 px-3 py-3 text-sm text-neutral-500">Upper floor</div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close floor plan"
          className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-neutral-200 text-lg leading-none transition hover:bg-neutral-300"
        >
          ×
        </button>
      </div>

      <div className="grid min-h-[210px] flex-1 place-items-center bg-neutral-50 px-3 py-5 sm:min-h-[300px] sm:flex-none">
            <img src={stupidBox} className="absolute"/>
        <div className="relative h-[210px] w-[280px] rotate-[-30deg] skew-x-[30deg]  sm:h-[230px] sm:w-[300px]">
          

          {groundFloorRooms.map((room, index) => {
            const positions = [
            "right-[42px] bottom-[42px]",
            "right-[35px] top-[40px]",
            "left-[125px] top-[120px]",
            "left-[95px] top-[60px]",
            "left-[70px] top-[20px]",
              "left-[-10px] bottom-[55px]",
            ];
            return (
              <button
                key={room.id}
                onClick={() => onSelectRoom(room.id)}
                aria-label={`Select ${room.name}`}
                className={`absolute z-10 grid h-7 w-7 place-items-center rounded-full text-xs shadow-md transition ${
                  positions[index]
                } ${
                  selectedRoom === room.id
                    ? "bg-neutral-950 text-white"
                    : "bg-white text-neutral-900 hover:bg-neutral-200"
                }`}
              >
                {room.id}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-0 overflow-y-auto px-2 pb-3">
        {groundFloorRooms.map((room) => (
          <button
            key={room.id}
            onClick={() => onSelectRoom(room.id)}
            className={`flex w-full items-center gap-4 border-b border-dashed border-neutral-200 px-3 py-4 text-left transition ${
              selectedRoom === room.id ? "bg-neutral-100" : "bg-white hover:bg-neutral-50"
            }`}
          >
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs shadow-sm ${
                selectedRoom === room.id
                  ? "bg-neutral-950 text-white"
                  : "bg-neutral-100 text-neutral-900"
              }`}
            >
              {room.id}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <strong className="text-sm font-medium">{room.name}</strong>
              <small className="text-xs leading-relaxed text-neutral-500">{room.description}</small>
            </span>
            <span className="text-xl text-neutral-400">›</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
