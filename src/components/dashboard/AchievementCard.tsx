import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Trophy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AchievementCardProps {
  title?: string;
  description?: string;
  dateEarned?: string;
  type?: "gold" | "silver" | "bronze";
  onShare?: () => void;
}

const AchievementCard = ({
  title = "Speed Demon",
  description = "Completed a race in under 2 minutes",
  dateEarned = "2024-01-15",
  type = "gold",
  onShare = () => console.log("Share clicked"),
}: AchievementCardProps) => {
  const typeColors = {
    gold: "bg-yellow-400 hover:bg-yellow-500",
    silver: "bg-purple-300 hover:bg-purple-400",
    bronze: "bg-amber-600 hover:bg-amber-700",
  };

  return (
    <Card className="w-full max-w-[300px] h-[350px] bg-white hover:shadow-xl transition-all duration-300 rounded-xl border-2 border-purple-100">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Trophy
            className={`w-8 h-8 animate-bounce ${type === "gold" ? "text-yellow-400" : type === "silver" ? "text-purple-400" : "text-amber-600"}`}
          />
          <Badge
            variant="secondary"
            className={`${typeColors[type]} animate-float`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold mt-2 text-purple-800">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-purple-600 font-medium">
          Earned on {new Date(dateEarned).toLocaleDateString()}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 font-medium">{description}</p>
      </CardContent>

      <CardFooter className="absolute bottom-0 w-full p-4 border-t border-purple-100">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2 hover:bg-purple-50 border-purple-200"
                onClick={onShare}
              >
                <Share2 className="w-4 h-4" />
                Share Achievement
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share this achievement with your friends</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default AchievementCard;
