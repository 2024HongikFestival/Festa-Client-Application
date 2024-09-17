export const commonMenuItems = [
  {
    flamePath: '/flame',
    flameLabel: 'layouts.header.toFlame',
    daedongjePath: '/',
    daedongjeLabel: 'layouts.header.toDaedongje',
    accordion: false,
  },
  {
    flamePath: '/flame/map',
    flameLabel: 'layouts.header.toFlameSitemap',
    daedongjePath: '/map',
    daedongjeLabel: 'layouts.header.toRoadmap',
    accordion: false,
  },
  {
    flamePath: '/flame/timetable',
    flameLabel: 'layouts.header.toFlameTimeTable',
    daedongjeLabel: 'layouts.header.toStage',
    accordion: true,
    daedongjeAccordion: [
      {
        path: '/lineup',
        label: 'layouts.header.toLineUp',
      },
      {
        path: '/stage-info',
        label: 'layouts.header.toStageInfo',
      },
      {
        path: '/hongik-zone',
        label: 'layouts.header.toHongikZone',
      },
    ],
  },
  {
    flamePath: '/flame/reservation',
    flameLabel: 'layouts.header.toFlameReservation',
    daedongjePath: '/booth',
    daedongjeLabel: 'layouts.header.toBooth',
    accordion: true,
    daedongjeAccordion: [
      {
        path: '/booth',
        label: 'layouts.header.toDrink',
      },
      {
        path: '/fleamarket',
        label: 'layouts.header.toFleaMarket',
      },
      {
        path: '/md',
        label: 'layouts.header.toMd',
      },
    ],
  },
  {
    flamePath: '/flame/lineup',
    flameLabel: 'layouts.header.toLineUp',
    daedongjePath: '/facilities',
    daedongjeLabel: 'layouts.header.toFacilityInfo',
    accordion: true,
    daedongjeAccordion: [
      {
        path: '/facilities',
        label: 'layouts.header.toFacilities',
      },
      {
        path: '/lost-and-found',
        label: 'layouts.header.toLostAndFound',
      },
    ],
  },
  {
    flamePath: '/flame/md',
    flameLabel: 'layouts.header.toMd',
    daedongjePath: '/event',
    daedongjeLabel: 'layouts.header.toEvent',
    accordion: false,
  },
];

export const flameMenuItems = [
  {
    flamePath: '/flame/promotion',
    flameLabel: 'layouts.header.toPromotion',
    accordion: false,
  },
];
