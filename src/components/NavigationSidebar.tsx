import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'terminology', title: 'Tree Terminology' },
  { id: 'types', title: 'Types of Trees' },
  { id: 'binary-tree', title: 'Binary Tree' },
  { id: 'bst', title: 'Binary Search Tree' },
  { id: 'traversals', title: 'Tree Traversals' },
  { id: 'avl', title: 'AVL Tree' },
  { id: 'heaps', title: 'Heaps' },
  { id: 'tries', title: 'Tries' },
  { id: 'segment-tree', title: 'Segment Tree' },
  { id: 'advanced', title: 'Advanced Concepts' },
  { id: 'problems', title: 'Sample Problems' },
  { id: 'summary', title: 'Summary' }
];

export const NavigationSidebar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="tech-card sticky top-4">
      <div className="p-4">
        <h3 className="text-lg font-bold gradient-text mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left hover:bg-accent/20 transition-colors"
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </Button>
          ))}
        </nav>
      </div>
    </Card>
  );
};