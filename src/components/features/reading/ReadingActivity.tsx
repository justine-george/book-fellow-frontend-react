import { useState, useCallback } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, PenTool, Star, Clock, Activity } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const transition = { duration: 0.3, ease: "easeInOut" };

function UpdateProgressDialog({
  currentProgress,
  totalPages,
  onUpdate,
}: {
  currentProgress: number;
  totalPages: number;
  onUpdate: (pages: number) => void;
}) {
  const [pages, setPages] = useState(currentProgress);
  const [error, setError] = useState("");

  const handleUpdate = useCallback(() => {
    if (pages > totalPages) {
      setError("Pages read cannot exceed total pages");
      return;
    }
    onUpdate(pages);
  }, [onUpdate, pages, totalPages]);

  const handleQuickSelect = useCallback(
    (percentage: number) => {
      const newPages = Math.round((percentage / 100) * totalPages);
      setPages(newPages);
      setError("");
    },
    [totalPages],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setPages(value);
      setError(
        value > totalPages ? "Pages read cannot exceed total pages" : "",
      );
    },
    [totalPages],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-grow text-lg py-6">
          <BookOpen className="mr-3 h-5 w-5" /> Update Progress
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Reading Progress</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pages" className="text-right">
              Pages Read
            </Label>
            <Input
              id="pages"
              type="text"
              value={pages}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="flex justify-between">
            {[25, 50, 75, 100].map((percentage) => (
              <Button
                key={percentage}
                onClick={() => handleQuickSelect(percentage)}
                variant="outline"
                size="default"
              >
                {percentage}%
              </Button>
            ))}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleUpdate} disabled={!!error}>
              Update Progress
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ReadingActivity({
  currentlyReading,
  onProgressUpdate,
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
  onProgressUpdate: (pages: number) => void;
}) {
  const handleUpdate = useCallback(
    (pages: number) => {
      onProgressUpdate(pages);
    },
    [onProgressUpdate],
  );

  return (
    <motion.div variants={fadeIn} transition={transition}>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold flex items-center">
            <Activity className="mr-3 h-6 w-6" />
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
            <UpdateProgressDialog
              currentProgress={currentlyReading.pagesRead}
              totalPages={currentlyReading.totalPages}
              onUpdate={handleUpdate}
            />
            <Button variant="outline" className="flex-grow text-lg py-6">
              <PenTool className="mr-3 h-5 w-5" /> Share with Friends
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
