import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, PenTool, Star, Clock } from "lucide-react";

export const ReadingActivity = ({
  currentlyReading,
}: {
  currentlyReading: {
    title: string;
    author: string;
    cover: string;
    progress: number;
    pagesRead: number;
    totalPages: number;
    timeSpent: string;
    rating: number;
  };
}) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Your Reading Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-4">
          <img
            src={currentlyReading.cover}
            alt={`${currentlyReading.title} cover`}
            className="h-32 w-20 object-cover rounded shadow-sm"
          />
          <div className="flex-grow space-y-2">
            <div>
              <h3 className="font-semibold text-lg leading-tight">
                {currentlyReading.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentlyReading.author}
              </p>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < currentlyReading.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                Your rating
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {currentlyReading.progress}%
                </span>
              </div>
              <Progress value={currentlyReading.progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{currentlyReading.pagesRead} pages read</span>
                <span>{currentlyReading.totalPages} pages total</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>Time spent: {currentlyReading.timeSpent}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <Button className="flex-grow">
            <BookOpen className="mr-2 h-4 w-4" /> Continue Reading
          </Button>
          <Button variant="outline" className="flex-grow">
            <PenTool className="mr-2 h-4 w-4" /> Update Rating
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
