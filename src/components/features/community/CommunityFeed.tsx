import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

export const CommunityFeed = ({
  communityFeed,
}: {
  communityFeed: {
    user: string;
    action: string;
    book: string;
    avatar: string;
    color: string;
    bookCover: string;
  }[];
}) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Users className="mr-3 h-6 w-6" />
          Community Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communityFeed.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
            >
              <Avatar className="h-10 w-10 relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: activity.color,
                    mixBlendMode: "color",
                  }}
                ></div>
                <AvatarImage
                  src={activity.avatar}
                  alt={`${activity.user}'s avatar`}
                />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium truncate">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground truncate">"{activity.book}"</p>
              </div>
              <img
                src={activity.bookCover}
                alt={`${activity.book} cover`}
                className="h-16 w-12 object-cover rounded shadow-sm"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
