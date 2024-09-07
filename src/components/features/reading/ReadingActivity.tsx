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
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold">
          Your Reading Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={currentlyReading.cover}
            alt={`${currentlyReading.title} cover`}
            className="h-48 w-32 object-cover rounded-lg shadow-md"
          />
          <div className="flex-grow space-y-4 w-full">
            <div>
              <h3 className="font-bold text-2xl leading-tight mb-1">
                {currentlyReading.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {currentlyReading.author}
              </p>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < currentlyReading.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-3 text-lg font-medium">Your rating</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Progress</span>
                <span className="font-bold text-xl">
                  {currentlyReading.progress}%
                </span>
              </div>
              <Progress value={currentlyReading.progress} className="h-3" />
              <div className="flex justify-between text-sm">
                <span>{currentlyReading.pagesRead} pages read</span>
                <span>{currentlyReading.totalPages} pages total</span>
              </div>
            </div>
            <div className="flex items-center text-lg">
              <Clock className="h-5 w-5 mr-2" />
              <span>
                Time spent: <strong>{currentlyReading.timeSpent}</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <Button className="flex-grow text-lg py-6">
            <BookOpen className="mr-3 h-5 w-5" /> Continue Reading
          </Button>
          <Button variant="outline" className="flex-grow text-lg py-6">
            <PenTool className="mr-3 h-5 w-5" /> Update Rating
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
