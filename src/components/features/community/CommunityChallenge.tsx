import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

export const CommunityChallenge = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Trophy className="mr-3 h-5 w-5" />
          Community Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2 font-medium">Read 5 classics this month</p>
        <Progress value={60} className="mb-2" />
        <p className="text-sm text-muted-foreground">3 out of 5 completed</p>
      </CardContent>
    </Card>
  );
};
