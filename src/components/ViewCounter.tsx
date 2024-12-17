import { useEffect, useState } from 'react';

export const ViewCounter = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    // Get current views from localStorage
    const currentViews = parseInt(localStorage.getItem('siteViews') || '0');
    // Increment views
    const newViews = currentViews + 1;
    // Save to localStorage
    localStorage.setItem('siteViews', newViews.toString());
    // Update state
    setViews(newViews);
  }, []); // Run once on component mount

  return (
    <div className="text-center py-4 text-sm text-gray-600">
      <p>Sivua on katseltu {views} kertaa</p>
    </div>
  );
};