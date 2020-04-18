const mockTags = [
  {
    id: 1,
    name: 'games',
  },
  {
    id: 2,
    name: 'comics',
  },
  {
    i d: 3,
    name: 'videos',
  },
  {
    id: 4,
    name: 'youtube',
    children: [
      {
        id: 5,
        name: 'games',
        parent_id: 4,
      },
      {
        id: 6,
        name: 'tech',
        parent_id: 4,
      },
      {
        id: 7,
        name: 'edu',
        parent_id: 4,
      },
      {
        id: 8,
        name: 'history',
        parent_id: 4,
      },
    ],
  },
  {
    id: 9,
    name: 'news',
  },
  {
    id: 10,
    name: 'stats',
  },
  {
    id: 11,
    name: 'cooking',
  },
];

export default mockTags;
