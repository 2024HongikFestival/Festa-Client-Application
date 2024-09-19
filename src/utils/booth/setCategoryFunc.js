export const setCategoryFunc = (menu) => {
  switch (menu) {
    case 'autonomous':
      return '1';
    case 'businessEconomic':
      return '2';
    case 'art':
      return '3';
    case 'architecture':
      return '4';
    case 'education':
      return '5';
    case 'liberalArts':
      return '6';
    case 'engineering':
      return '7';
    case 'convergence':
      return '8';
    case 'clubFederation':
      return '9';
    case 'clubScholarship':
      return '9';
    case 'clubSports':
      return '10';
    case 'clubPerformance':
      return '11';
    case 'clubExhibitionLeisure':
      return '12';
    case 'clubSociety':
      return '13';
    default:
      return '1';
  }
};
