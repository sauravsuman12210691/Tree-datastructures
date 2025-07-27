import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface TreeSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  leetcodeLinks?: string[];
  gfgLinks?: string[];
  image?: string;
}

export const TreeSection: React.FC<TreeSectionProps> = ({
  id,
  title,
  children,
  leetcodeLinks = [],
  gfgLinks = [],
  image
}) => {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <Card className="tech-card">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold gradient-text">{title}</h2>
          
          {image && (
            <div className="flex justify-center">
              <img 
                src={image} 
                alt={`${title} diagram`}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
          
          {(leetcodeLinks.length > 0 || gfgLinks.length > 0) && (
            <div className="border-t border-border/50 pt-6">
              <h4 className="text-lg font-semibold mb-4 text-accent">Practice Problems</h4>
              <div className="grid gap-4 md:grid-cols-2">
                {leetcodeLinks.length > 0 && (
                  <div>
                    <h5 className="font-medium mb-2 text-tech-blue">LeetCode Problems</h5>
                    <div className="space-y-2">
                      {leetcodeLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="tech-button w-full justify-start"
                          onClick={() => window.open(link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Problem {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {gfgLinks.length > 0 && (
                  <div>
                    <h5 className="font-medium mb-2 text-tech-green">GeeksforGeeks</h5>
                    <div className="space-y-2">
                      {gfgLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="tech-button w-full justify-start"
                          onClick={() => window.open(link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Tutorial {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};