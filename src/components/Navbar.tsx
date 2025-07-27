import React from 'react';
import { TreePine, Moon, Sun, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <TreePine className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">TreeMaster</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#introduction" className="text-muted-foreground hover:text-foreground transition-colors">
              Introduction
            </a>
            <a href="#types" className="text-muted-foreground hover:text-foreground transition-colors">
              Types
            </a>
            <a href="#implementation" className="text-muted-foreground hover:text-foreground transition-colors">
              Implementation
            </a>
            <a href="#traversals" className="text-muted-foreground hover:text-foreground transition-colors">
              Traversals
            </a>
            <a href="#advanced" className="text-muted-foreground hover:text-foreground transition-colors">
              Advanced
            </a>
            <a href="#problems" className="text-muted-foreground hover:text-foreground transition-colors">
              Problems
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* External Links */}
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://leetcode.com/tag/tree/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://github.com/sauravsuman12210691" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};