import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  PenTool,
  List,
  Star,
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

// Import images from assets
import logoImage from "@/assets/logo.png";
import userAvatar from "@/assets/profile.jpg";
import book_cover_great_gatsby from "@/assets/great-gatsby.webp";
import book_cover_1984 from "@/assets/1984.webp";
import book_cover_to_kill_a_mockingbird from "@/assets/to-kill-a-mockingbird.webp";
import book_cover_the_catcher_in_the_rye from "@/assets/the-catcher-in-the-rye.jpg";
import book_cover_dune from "@/assets/dune.webp";
import book_cover_pride_and_prejudice from "@/assets/pride-and-prejudice.jpg";
import book_cover_the_hobbit from "@/assets/the-hobbit.jpg";

export default function LoggedInHomepage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search query
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-gray-800 text-gray-200 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={logoImage} alt="Book Fellow Logo" className="h-12 w-12 mr-2 filter invert" />
            <h1 className="text-2xl font-bold">Book Fellow</h1>
          </div>
          <form onSubmit={handleSearch} className="flex-grow max-w-md mx-4" role="search">
            <div className="relative">
              <label htmlFor="search" className="sr-only">Search books, reviews, users</label>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" aria-hidden="true" />
              <Input
                id="search"
                type="search"
                placeholder="Search books, reviews, users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:ring-gray-500 h-10 w-full placeholder-gray-400"
              />
            </div>
          </form>
          <nav className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Notifications"
              className="text-gray-200 hover:bg-gray-600 hover:text-white focus:bg-gray-600 focus:text-white h-10 w-10 transition-colors duration-200"
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 text-gray-200 hover:bg-gray-600 hover:text-white focus:bg-gray-600 focus:text-white h-10 px-3 transition-colors duration-200" 
                  aria-label="Profile menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} alt="User avatar" />
                    <AvatarFallback>JU</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Justine</span>
                  <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Your Reading Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <img src={book_cover_great_gatsby} alt="The Great Gatsby cover" className="h-20 w-14 object-cover rounded" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">Currently Reading</h3>
                  <p className="text-muted-foreground">"The Great Gatsby" by F. Scott Fitzgerald</p>
                  <Progress value={33} className="mt-2" />
                </div>
                <Button size="sm">Update Progress</Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-grow">
                  <PenTool className="mr-2 h-4 w-4" /> Write a Review
                </Button>
                <Button variant="outline" className="flex-grow">
                  <List className="mr-2 h-4 w-4" /> Update Reading List
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Community Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { user: "Alice", action: "finished reading", book: "1984", avatar: userAvatar },
                  { user: "Bob", action: "wrote a review for", book: "To Kill a Mockingbird", avatar: userAvatar },
                  { user: "Charlie", action: "added to their reading list", book: "The Catcher in the Rye", avatar: userAvatar },
                ].map((activity, index) => (
                  <li key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar} alt={`${activity.user}'s avatar`} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <span className="flex-grow">
                      <strong className="font-medium">{activity.user}</strong>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <em className="font-medium not-italic">"{activity.book}"</em>
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <aside className="lg:w-1/3 space-y-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Your Reading Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {["To Read", "Favorites", "Book Club Picks"].map((list, index) => (
                  <li key={index}>
                    <Button variant="ghost" className="w-full justify-start hover:bg-muted/50 transition-colors duration-200">
                      <List className="mr-2 h-4 w-4" /> {list}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Recommended for You</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { title: "Dune", cover: book_cover_dune },
                  { title: "Pride and Prejudice", cover: book_cover_pride_and_prejudice },
                  { title: "The Hobbit", cover: book_cover_the_hobbit },
                ].map((book, index) => (
                  <li key={index} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200">
                    <img src={book.cover} alt={`${book.title} cover`} className="h-12 w-8 object-cover rounded" />
                    <span>{book.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Community Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium">Read 5 classics this month</p>
              <Progress value={60} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                3 out of 5 completed
              </p>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-8 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="mb-4 md:mb-0">&copy; 2024 Book Fellow. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#" 
                  className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                  aria-label="About Book Fellow"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                  aria-label="Privacy Policy"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                  aria-label="Terms of Service"
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
