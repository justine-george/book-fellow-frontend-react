import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, BookHeart } from "lucide-react";

export const RecommendedBooks = ({
  recommendedBooks,
}: {
  recommendedBooks: {
    title: string;
    author: string;
    cover: string;
    rating: number;
  }[];
}) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <BookHeart className="mr-3 h-5 w-5" />
          Recommended for You
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recommendedBooks.map((book, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
            >
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="h-24 w-16 object-cover rounded shadow-sm"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-lg leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">
                    {book.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-2 cursor-pointer">
                Add to List
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
