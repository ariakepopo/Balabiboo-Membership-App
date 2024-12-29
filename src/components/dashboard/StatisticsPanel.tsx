import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingUp, Medal, Calendar } from "lucide-react";

interface StatisticsPanelProps {
  personalBests?: {
    sprint?: string;
    endurance?: string;
    technical?: string;
  };
  progressionData?: {
    labels: string[];
    times: number[];
  };
}

const StatisticsPanel = ({
  personalBests = {
    sprint: "01:45.32",
    endurance: "05:23.67",
    technical: "02:15.89",
  },
  progressionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    times: [120, 115, 118, 110, 105, 100],
  },
}: StatisticsPanelProps) => {
  return (
    <Card className="w-full bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Performance Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal-bests" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0">
            <TabsTrigger
              value="personal-bests"
              className="flex items-center gap-2"
            >
              <Medal className="h-4 w-4" />
              Personal Bests
            </TabsTrigger>
            <TabsTrigger
              value="progression"
              className="flex items-center gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Progression
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal-bests">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <Card className="transform hover:scale-105 transition-transform duration-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Sprint</h3>
                    <p className="text-2xl font-bold text-primary">
                      {personalBests.sprint}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Endurance</h3>
                    <p className="text-2xl font-bold text-primary">
                      {personalBests.endurance}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Technical</h3>
                    <p className="text-2xl font-bold text-primary">
                      {personalBests.technical}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progression">
            <div className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-[300px] flex items-center justify-center">
                    {/* Placeholder for chart - in a real implementation, you would use a charting library */}
                    <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                      <TrendingUp className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-gray-500">
                        Progression Chart Placeholder
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Showing data from {progressionData.labels[0]} to{" "}
                        {
                          progressionData.labels[
                            progressionData.labels.length - 1
                          ]
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 flex items-center justify-end text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsPanel;
