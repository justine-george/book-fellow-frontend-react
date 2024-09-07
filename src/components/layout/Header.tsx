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
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export const Header = ({
  logoImage,
  userAvatar,
}: {
  logoImage: string;
  userAvatar: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-slate-900 text-primary-foreground py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src={logoImage}
            alt="Book Fellow Logo"
            className="h-12 w-12 mr-2 filter invert"
          />
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
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-4 w-4"
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
              className="pl-10 bg-gray-700 text-white border-gray-600 focus:ring-gray-500 h-10 w-full placeholder-gray-300"
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
                <span className="text-sm hidden md:block">Justine</span>
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
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};
