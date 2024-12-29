import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import AchievementCard from "./AchievementCard";

interface Achievement {
  id: string;
  title: string;
  description: string;
  dateEarned: string;
  type: "gold" | "silver" | "bronze";
}

interface AchievementGalleryProps {
  achievements?: Achievement[];
}

const AchievementGallery = ({
  achievements = [
    {
      id: "1",
      title: "Speed Demon",
      description: "Completed a race in under 2 minutes",
      dateEarned: "2024-01-15",
      type: "gold",
    },
    {
      id: "2",
      title: "Consistent Performer",
      description: "Completed 10 races with top 3 finishes",
      dateEarned: "2024-01-20",
      type: "silver",
    },
    {
      id: "3",
      title: "Rising Star",
      description: "First podium finish in a major event",
      dateEarned: "2024-02-01",
      type: "bronze",
    },
    {
      id: "4",
      title: "Track Master",
      description: "Set a new track record",
      dateEarned: "2024-02-10",
      type: "gold",
    },
  ],
}: AchievementGalleryProps) => {
  return (
    <Card className="w-full bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <Trophy className="h-6 w-6 text-primary" />
          Achievements
        </CardTitle>
      </CardHeader>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fadeIn justify-items-center sm:justify-items-start">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            dateEarned={achievement.dateEarned}
            type={achievement.type}
          />
        ))}
      </div>
    </Card>
  );
};

export default AchievementGallery;
