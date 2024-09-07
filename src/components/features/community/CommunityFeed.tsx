import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Community Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {communityFeed.map((activity, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200"
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
              <div className="flex-grow">
                <span>
                  <strong className="font-medium">{activity.user}</strong>{" "}
                  <span className="text-muted-foreground">
                    {activity.action}
                  </span>{" "}
                  <em className="font-medium not-italic">"{activity.book}"</em>
                </span>
              </div>
              <img
                src={activity.bookCover}
                alt={`${activity.book} cover`}
                className="h-24 w-16 object-cover rounded shadow-sm"
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
