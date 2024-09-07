import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ListTodo } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ReadingList {
  name: string;
  icon: React.ElementType;
  count: number;
}

interface ReadingListsProps {
  readingLists: ReadingList[];
  onNewList: () => void;
  onSelectList: (list: ReadingList) => void;
}

export const ReadingLists: React.FC<ReadingListsProps> = ({
  readingLists,
  onNewList,
  onSelectList,
}) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold flex items-center justify-between">
          <span className="flex items-center">
            <ListTodo className="mr-3 h-6 w-6" aria-hidden="true" />
            Your Reading Lists
          </span>
          <Button
            variant="outline"
            size="sm"
            className="text-primary cursor-pointer"
            onClick={onNewList}
            aria-label="Create new reading list"
          >
            <PlusCircle className="h-4 w-4 mr-2" aria-hidden="true" />
            New List
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="max-h-[300px]">
          <ul className="space-y-1 pr-4">
            {readingLists.map((list, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="w-full text-left hover:bg-muted/50 transition-colors duration-200 px-3 py-2 h-auto cursor-pointer"
                  onClick={() => onSelectList(list)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center min-w-0 flex-grow">
                      {React.createElement(list.icon, {
                        className: "mr-3 h-5 w-5 text-primary flex-shrink-0",
                        "aria-hidden": "true",
                      })}
                      <span className="text-sm font-medium truncate">
                        {list.name}
                      </span>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                      {list.count}
                    </span>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
