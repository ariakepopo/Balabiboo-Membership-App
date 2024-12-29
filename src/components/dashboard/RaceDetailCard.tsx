import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Medal, Trophy, Calendar, Flag, Clock } from "lucide-react";

interface RaceDetailCardProps {
  eventName?: string;
  date?: string;
  position?: number;
  time?: string;
  medals?: Array<{ type: "gold" | "silver" | "bronze"; name: string }>;
  badges?: Array<{ name: string }>;
}

const RaceDetailCard = ({
  eventName = "Summer Championship Race",
  date = "2024-02-15",
  position = 1,
  time = "02:45.32",
  medals = [
    { type: "gold", name: "First Place" },
    { type: "silver", name: "Speed Demon" },
  ],
  badges = [{ name: "Personal Best" }, { name: "Track Record" }],
}: RaceDetailCardProps) => {
  const getMedalColor = (type: "gold" | "silver" | "bronze") => {
    switch (type) {
      case "gold":
        return "text-yellow-500";
      case "silver":
        return "text-gray-400";
      case "bronze":
        return "text-amber-700";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className="w-[400px] bg-white shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          {eventName}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {date}
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Position and Time */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-primary" />
              <span className="font-semibold">Position: {position}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">Time: {time}</span>
            </div>
          </div>

          {/* Medals */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Medals</h3>
            <div className="flex flex-wrap gap-2">
              {medals.map((medal, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Medal className={`h-5 w-5 ${getMedalColor(medal.type)}`} />
                  <span className="text-sm">{medal.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Badges</h3>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RaceDetailCard;
