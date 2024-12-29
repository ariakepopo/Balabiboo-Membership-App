import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Medal } from "lucide-react";
import RaceDetailCard from "./RaceDetailCard";

interface Race {
  id: string;
  eventName: string;
  date: string;
  position: number;
  time: string;
  medals: Array<{ type: "gold" | "silver" | "bronze"; name: string }>;
  badges: Array<{ name: string }>;
}

interface RaceHistoryProps {
  races?: Race[];
}

const RaceHistory = ({
  races = [
    {
      id: "1",
      eventName: "Summer Championship Race",
      date: "2024-02-15",
      position: 1,
      time: "02:45.32",
      medals: [
        { type: "gold", name: "First Place" },
        { type: "silver", name: "Speed Demon" },
      ],
      badges: [{ name: "Personal Best" }, { name: "Track Record" }],
    },
    {
      id: "2",
      eventName: "Spring Classic",
      date: "2024-01-20",
      position: 2,
      time: "02:50.15",
      medals: [{ type: "silver", name: "Second Place" }],
      badges: [{ name: "Season Best" }],
    },
    {
      id: "3",
      eventName: "Winter Challenge",
      date: "2023-12-10",
      position: 3,
      time: "02:55.45",
      medals: [{ type: "bronze", name: "Third Place" }],
      badges: [{ name: "Consistent Performer" }],
    },
  ],
}: RaceHistoryProps) => {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  return (
    <div className="w-full p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
        <h2 className="text-2xl font-bold">Race History</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Filter by Date
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-2xl border-2 border-purple-200 overflow-x-auto bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="hidden sm:table-cell">Medals</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {races.map((race) => (
              <TableRow key={race.id}>
                <TableCell className="font-medium">{race.eventName}</TableCell>
                <TableCell>{race.date}</TableCell>
                <TableCell>#{race.position}</TableCell>
                <TableCell>{race.time}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex gap-1">
                    {race.medals.map((medal, index) => (
                      <Medal
                        key={index}
                        className={`h-5 w-5 ${medal.type === "gold" ? "text-yellow-500" : medal.type === "silver" ? "text-gray-400" : "text-amber-700"}`}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedRace(race)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[450px]">
                      <RaceDetailCard {...race} />
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RaceHistory;
