import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
export const ReadingLists = ({
  readingLists,
}: {
  readingLists: { name: string; icon: React.ElementType; count: number }[];
}) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex justify-between items-center">
          Your Reading Lists
          <Button variant="ghost" size="sm" className="text-primary">
            <PlusCircle className="h-5 w-5 mr-1" />
            New List
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {readingLists.map((list, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-muted/50 transition-colors duration-200 py-2"
              >
                <div className="flex items-center">
                  {React.createElement(list.icon, { className: "mr-2 h-5 w-5 text-primary" })}
                  <span>{list.name}</span>
                </div>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {list.count} books
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
