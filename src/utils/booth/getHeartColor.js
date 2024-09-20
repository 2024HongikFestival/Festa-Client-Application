export const getHeartColor = (menuKey) => {
  switch (menuKey) {
    case 'autonomous':
      return 'rgba(255, 104, 29, 1)';
    case 'businessEconomic':
      return 'rgba(124, 129, 255, 1)';
    case 'art':
      return 'rgba(152, 80, 246, 1)';
    case 'architecture':
      return 'rgba(236, 137, 248, 1)';
    case 'education':
      return 'rgba(116, 188, 255, 1)';
    case 'liberalArts':
      return 'rgba(147, 227, 232, 1)';
    case 'engineering':
      return 'rgba(242, 219, 13, 1)';
    case 'convergence':
      return 'rgba(213, 207, 252, 1)';
    case 'clubFederation':
      return 'rgba(153, 240, 66, 1)';
    case 'clubScholarship':
    case 'clubSports':
    case 'clubPerformance':
    case 'clubExhibitionLeisure':
    case 'clubSociety':
      return 'rgba(153, 240, 66, 1)';
    default:
      return 'rgba(255, 104, 29, 1)';
  }
};
