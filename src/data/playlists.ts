export interface Playlist {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  tracksCount: number;
}

export const featuredPlaylists: Playlist[] = [
  {
    id: 1,
    title: "Летнее настроение",
    artist: "SoundNest",
    coverUrl: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 12
  },
  {
    id: 2,
    title: "Электронный драйв",
    artist: "DJ Волна",
    coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 18
  },
  {
    id: 3,
    title: "Джаз для души",
    artist: "Саксофон",
    coverUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 8
  },
  {
    id: 4,
    title: "Рок классика",
    artist: "Гитарист",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 15
  },
  {
    id: 5,
    title: "Медитация",
    artist: "Спокойствие",
    coverUrl: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 10
  }
];

export const trendingTracks: Playlist[] = [
  {
    id: 1,
    title: "Ночное танго",
    artist: "Ария ночи",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 2,
    title: "Океан чувств",
    artist: "Морской бриз",
    coverUrl: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 3,
    title: "Городские огни",
    artist: "Ночной город",
    coverUrl: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 4,
    title: "Тихий вечер",
    artist: "Закатное солнце",
    coverUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 5,
    title: "Рассвет",
    artist: "Утренняя роса",
    coverUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  }
];
