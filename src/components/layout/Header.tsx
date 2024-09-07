import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  BookOpen,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

export const Header = ({ userAvatar }: { userAvatar: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <BookOpen className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold hidden md:block">Book Fellow</h1>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex-grow max-w-md mx-4"
          role="search"
        >
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              Search books, reviews, users
            </label>
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
              aria-hidden="true"
            />
            <Input
              id="search"
              type="search"
              placeholder="Search books, reviews, users..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="pl-10 bg-primary/20 text-primary-foreground h-9 w-full placeholder-primary-foreground/50 border-primary-foreground/30 focus:border-primary-foreground/50 focus:ring-1 focus:ring-primary-foreground/50 cursor-text"
            />
          </div>
        </form>
        <nav className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Notifications"
                className="text-primary-foreground hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 h-10 w-10 transition-colors duration-200 cursor-pointer"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-4" align="end">
              <DropdownMenuLabel className="text-lg font-semibold mb-2">
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mb-2" />
              <div className="space-y-4">
                <DropdownMenuItem className="cursor-pointer flex items-start p-2 hover:bg-accent rounded-md">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      New friend request
                    </span>
                    <span className="text-sm text-muted-foreground">
                      John Doe sent you a friend request
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      2 hours ago
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-start p-2 hover:bg-accent rounded-md">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      Book recommendation
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Check out "The Great Gatsby" based on your interests
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      1 day ago
                    </span>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="cursor-pointer text-center">
                <span className="text-sm text-primary font-semibold">
                  View all notifications
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-primary-foreground hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 h-10 px-3 transition-colors duration-200 cursor-pointer"
                aria-label="Profile menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatar} alt="User avatar" />
                  <AvatarFallback>JU</AvatarFallback>
                </Avatar>
                <span className="text-sm hidden md:block">Justine</span>
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4" align="end">
              <DropdownMenuLabel className="text-lg font-semibold mb-2">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mb-2" />
              <div className="space-y-2">
                <DropdownMenuItem className="cursor-pointer flex items-center p-2 hover:bg-accent rounded-md">
                  <User className="mr-3 h-4 w-4" />
                  <span className="text-sm">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center p-2 hover:bg-accent rounded-md">
                  <Settings className="mr-3 h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center p-2 hover:bg-accent rounded-md">
                  <BookOpen className="mr-3 h-4 w-4" />
                  <span className="text-sm">My Books</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer flex items-center p-2 hover:bg-accent rounded-md text-red-500"
              >
                <LogOut className="mr-3 h-4 w-4" />
                <span className="text-sm font-semibold">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};
