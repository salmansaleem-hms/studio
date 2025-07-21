import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Salman Saleem. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
