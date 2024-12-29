import React from "react";
import ProfileSection from "./dashboard/ProfileSection";
import RaceHistory from "./dashboard/RaceHistory";
import StatisticsPanel from "./dashboard/StatisticsPanel";
import AchievementGallery from "./dashboard/AchievementGallery";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HomeProps {
  memberData?: {
    profile?: {
      name?: string;
      email?: string;
      avatarUrl?: string;
      racingCategory?: string;
      level?: string;
      bikeSpecs?: {
        model: string;
        weight: string;
        modifications: string[];
      };
    };
    races?: Array<{
      id: string;
      eventName: string;
      date: string;
      position: number;
      time: string;
      medals: Array<{ type: "gold" | "silver" | "bronze"; name: string }>;
      badges: Array<{ name: string }>;
    }>;
    achievements?: Array<{
      id: string;
      title: string;
      description: string;
      dateEarned: string;
      type: "gold" | "silver" | "bronze";
    }>;
    statistics?: {
      personalBests?: {
        sprint?: string;
        endurance?: string;
        technical?: string;
      };
      progressionData?: {
        labels: string[];
        times: number[];
      };
    };
  };
}

const Home = ({
  memberData = {
    profile: {
      name: "John Rider",
      email: "john.rider@example.com",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rider",
      racingCategory: "Junior Elite",
      level: "Advanced",
      bikeSpecs: {
        model: "SpeedMaster Pro 2000",
        weight: "4.5kg",
        modifications: ["Carbon Frame", "Custom Wheels", "Racing Grips"],
      },
    },
    races: [
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
    ],
    achievements: [
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
    ],
    statistics: {
      personalBests: {
        sprint: "01:45.32",
        endurance: "05:23.67",
        technical: "02:15.89",
      },
      progressionData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        times: [120, 115, 118, 110, 105, 100],
      },
    },
  },
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-purple-50">
      <ScrollArea className="h-screen">
        <div className="container mx-auto py-4 md:py-8 px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8">
          <ProfileSection {...memberData.profile} />

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <RaceHistory races={memberData.races} />
            <StatisticsPanel {...memberData.statistics} />
            <AchievementGallery achievements={memberData.achievements} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Home;
