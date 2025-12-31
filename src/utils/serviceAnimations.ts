/**
 * Returns a unique animation class for each service based on its ID
 */
export const getServiceAnimation = (serviceId: number): string => {
  const animations = [
    'animate-float-icon',        // 1. Wall Paper Fixing - Float
    'animate-float-icon',        // 2. Floor & Wall Tiling - Float (removed rotation)
    'animate-bounce-icon',       // 3. Plaster Works - Bounce
    'animate-pulse-scale',       // 4. Carpentry & Flooring - Pulse scale
    'animate-swing-icon',        // 5. Engraving & Ornamentation - Swing
    'animate-shake-icon',        // 6. Painting Contracting - Shake
    'animate-glow-pulse',       // 7. Air-Conditioning - Glow pulse
    'animate-float-icon',        // 8. Ventilation & Air Filtration - Float (removed rotation)
    'animate-wiggle-icon',       // 9. Electromechanical Equipment - Wiggle
    'animate-slide-bounce',      // 10. False Ceiling & Partitions - Slide bounce
    'animate-float-icon',        // 11. Plumbing & Sanitary - Float (reuse)
    'animate-pulse-scale',       // 12. Office Fit Out - Pulse scale
    'animate-bounce-icon',       // 13. Water Tank Cleaning - Bounce
    'animate-float-icon',        // 14. Kitchen Renovation - Float (removed rotation)
  ];

  // Return animation based on service ID (1-14)
  return animations[(serviceId - 1) % animations.length] || 'animate-float-icon';
};

