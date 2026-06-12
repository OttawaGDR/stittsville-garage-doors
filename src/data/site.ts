export const site = {
  name: 'Stittsville Garage Doors',
  tagline: "Stittsville's local garage door specialists",
  url: 'https://www.stittsvillegaragedoors.ca',
  phone: '(613) 777-6401',
  phoneRaw: '+16137776401',
  email: 'stittsvillegd@gmail.com',
  hours: 'Mon–Sun 7 AM – 10 PM · 24/7 Emergency',
  serviceArea: {
    primary: 'Stittsville, ON',
    coords: { lat: 45.2624, lng: -75.9119 },
  },
  legal: {
    entity: 'Stittsville Garage Doors',
    insured: true,
  },
  social: {
    yelp: 'https://www.yelp.com/biz/stittsville-garage-doors-stittsville',
  },
  parent: {
    name: 'GDS — Garage Doors & Openers Ottawa',
    shortName: 'GDS Ottawa',
    url: 'https://garagedoorsolutionsottawa.ca',
    bbbUrl:
      'https://www.bbb.org/ca/on/stittsville/profile/garage-doors/gds-garage-doors-openers-ottawa-0117-255126',
    reviewsUrl:
      'https://www.bbb.org/ca/on/stittsville/profile/garage-doors/gds-garage-doors-openers-ottawa-0117-255126',
  },
} as const;
