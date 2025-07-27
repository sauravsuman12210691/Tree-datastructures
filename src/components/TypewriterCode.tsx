import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TypewriterCodeProps {
  codes: {
    [key: string]: string;
  };
  title?: string;
  className?: string;
}

export const TypewriterCode: React.FC<TypewriterCodeProps> = ({ 
  codes, 
  title, 
  className = "" 
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(Object.keys(codes)[0]);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCode = codes[selectedLanguage] || '';

  useEffect(() => {
    if (isTyping && currentIndex < currentCode.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(currentCode.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30); // Typing speed

      return () => clearTimeout(timer);
    } else if (currentIndex >= currentCode.length) {
      setIsTyping(false);
    }
  }, [isTyping, currentIndex, currentCode]);

  useEffect(() => {
    // Reset when language changes
    setDisplayedCode('');
    setCurrentIndex(0);
    setIsTyping(false);
  }, [selectedLanguage]);

  const startTyping = () => {
    if (currentIndex >= currentCode.length) {
      // Reset if already completed
      setDisplayedCode('');
      setCurrentIndex(0);
    }
    setIsTyping(true);
  };

  const pauseTyping = () => {
    setIsTyping(false);
  };

  const resetTyping = () => {
    setDisplayedCode('');
    setCurrentIndex(0);
    setIsTyping(false);
  };

  const showComplete = () => {
    setDisplayedCode(currentCode);
    setCurrentIndex(currentCode.length);
    setIsTyping(false);
  };

  return (
    <div className={`my-6 ${className}`}>
      {/* Header */}
      <div className="bg-muted/20 px-4 py-3 rounded-t-lg border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {title && (
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
          )}
          <div className="flex gap-2">
            {Object.keys(codes).map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguage === lang ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={isTyping ? pauseTyping : startTyping}
            className="h-8 w-8 p-0"
          >
            {isTyping ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetTyping}
            className="h-8 w-8 p-0"
          >
            <RotateCcw className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={showComplete}
            className="h-8 px-2 text-xs"
          >
            Show All
          </Button>
        </div>
      </div>

      {/* Code Display */}
      <pre className="code-block rounded-t-none overflow-x-auto min-h-[200px]">
        <code className="text-sm">
          {displayedCode}
          {isTyping && (
            <span className="animate-pulse bg-primary w-2 h-4 inline-block ml-1"></span>
          )}
        </code>
      </pre>
    </div>
  );
};