import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bike, Camera, Edit, User, Star } from "lucide-react";

interface ProfileSectionProps {
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
  onEditProfile?: () => void;
  onEditPhoto?: () => void;
}

const ProfileSection = ({
  name = "John Rider",
  email = "john.rider@example.com",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=rider",
  racingCategory = "Junior Elite",
  level = "Advanced",
  bikeSpecs = {
    model: "SpeedMaster Pro 2000",
    weight: "4.5kg",
    modifications: ["Carbon Frame", "Custom Wheels", "Racing Grips"],
  },
  onEditProfile = () => console.log("Edit profile clicked"),
  onEditPhoto = () => console.log("Edit photo clicked"),
}: ProfileSectionProps) => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-3xl shadow-xl">
      <Card className="bg-white">
        <CardHeader className="pb-4 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="relative">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                  <AvatarImage src={avatarUrl} alt={name} />
                  <AvatarFallback className="bg-purple-200">
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={onEditPhoto}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 w-full sm:w-auto">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-2xl">{name}</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={onEditProfile}
                  >
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
                <p className="text-muted-foreground">{email}</p>
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Star className="h-3 w-3" />
                    {racingCategory}
                  </Badge>
                  <Badge>{level}</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Bike className="h-5 w-5 text-primary" />
              Bike Specifications
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Model</p>
                <p className="font-medium">{bikeSpecs.model}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weight</p>
                <p className="font-medium">{bikeSpecs.weight}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Modifications</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {bikeSpecs.modifications.map((mod, index) => (
                    <Badge key={index} variant="outline">
                      {mod}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
