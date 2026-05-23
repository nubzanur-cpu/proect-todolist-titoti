import { MenuItem, OutletLocation, Review } from './types';

// Let's use the image paths from our generated assets
export const HERO_IMAGE = '/src/assets/images/hero_feast_1779550867743.png';
export const BAKSO_URAT_IMAGE = '/src/assets/images/bakso_urat_1779550887235.png';
export const MIE_AYAM_IMAGE = '/src/assets/images/mie_ayam_1779550904312.png';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Bakso Urat Spesial',
    description: 'Bakso urat sapi ukuran jumbo khas Wonogiri dengan isi tetelan daging sapi melimpah. Disajikan mendidih bersama kuah kaldu sapi bening gurih, mie kuning, bihun, dan seledri.',
    price: 32000,
    image: BAKSO_URAT_IMAGE,
    category: 'bakso',
    tags: ['Best Seller', 'Pedas Mantap', 'Full Daging'],
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Bakso Telor',
    description: 'Bakso sapi halus yang membungkus satu butir telur ayam utuh di dalamnya. Menghasilkan rasa gurih lembut berpadu kuah kaldu yang kaya.',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600',
    category: 'bakso',
    tags: ['Favorit Anak', 'Kenyal'],
    isPopular: false
  },
  {
    id: 'b3',
    name: 'Bakso Halus Wonogiri',
    description: 'Porsi lengkap bakso sapi halus bertekstur sangat lembut dan kenyal alami tanpa pengeras buatan. Menggunakan 100% daging sapi murni pilihan.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'bakso',
    tags: ['Ringan', 'Legendaris'],
    isPopular: false
  },
  {
    id: 'b4',
    name: 'Mie Ayam Wonogiri',
    description: 'Mie kuning kenyal khas buatan sendiri dibalut minyak ayam racikan rahasia, topping tumisan ayam semur bumbu rempah melimpah, caisim segar, dan kerupuk pangsit renyah.',
    price: 22000,
    image: MIE_AYAM_IMAGE,
    category: 'mie',
    tags: ['Resep Autentik', 'Gurih Manis'],
    isPopular: true
  },
  {
    id: 'b5',
    name: 'Mie Ayam Bakso Urat',
    description: 'Perpaduan sempurna dari mie ayam khas Wonogiri yang manis gurih dengan tambahan satu bakso urat besar yang kaya tekstur tenon.',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600',
    category: 'mie',
    tags: ['Kombinasi Sempurna', 'Porsi Kenyang'],
    isPopular: true
  },
  {
    id: 'b6',
    name: 'Es Teler Titoti',
    description: 'Es teler melimpah berisi potongan buah alpukat mentega segar, nangka wangi, kelapa muda kerok, jeli pandan, diguyur susu kental manis dan sirup cocopandan.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    category: 'minuman',
    tags: ['Segar Dingin', 'Alami'],
    isPopular: true
  },
  {
    id: 'b7',
    name: 'Es Kelapa Muda Jeruk',
    description: 'Air kelapa muda serut dipadukan dengan perasan jeruk peras asli, es batu kristal, dan sedikit gula cair alami untuk melepaskan dahaga seketika.',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600',
    category: 'minuman',
    tags: ['Kelapa Asli', 'Asam Segar'],
    isPopular: false
  },
  {
    id: 'b8',
    name: 'Tahu Bakso Goreng',
    description: 'Tahu pong goreng berkulit tebal yang diisi adonan bakso padat bumbu bawang putih gurih, disajikan hangat dengan cocolan sambal kecap pedas.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    category: 'side',
    tags: ['Camilan', 'Renyah'],
    isPopular: false
  }
];

export const OUTLETS: OutletLocation[] = [
  {
    id: 'o1',
    name: 'Bakso Titoti Kebon Jeruk',
    address: 'Jl. Raya Kebon Jeruk No.44, RT.1/RW.3, Sukabumi Utara, Kec. Kebon Jeruk, Kota Jakarta Barat',
    city: 'Jakarta',
    phone: '021-53673321',
    mapUrl: 'https://maps.google.com/?q=Bakso+Titoti+Kebon+Jeruk+Jakarta',
    amenities: ['AC Ruang Utama', 'Lahan Parkir Luas', 'Mushola', 'Kapasitas 150+ Kursi', 'Ruang VIP Sejuk'],
    hours: '10:00 - 21:30 WIB'
  },
  {
    id: 'o2',
    name: 'Bakso Titoti Wonogiri (Pusat)',
    address: 'Jl. Raya Wonogiri-Ponorogo KM 3, Brubuh, Ngadirojo, Kabupaten Wonogiri, Jawa Tengah',
    city: 'Wonogiri',
    phone: '0813-2945-8822',
    mapUrl: 'https://maps.google.com/?q=Bakso+Titoti+Wonogiri',
    amenities: ['Pendopo Klasik Jawa', 'Lesehan Nyaman', 'Area Bermain Anak', 'Mushola Besar', 'Parkir Bis Pariwisata'],
    hours: '09:00 - 21:00 WIB'
  },
  {
    id: 'o3',
    name: 'Bakso Titoti Depok',
    address: 'Jl. Ir H. Juanda No. 12, Kemiri Muka, Kec. Beji, Kota Depok, Jawa Barat',
    city: 'Depok',
    phone: '021-77801234',
    mapUrl: 'https://maps.google.com/?q=Bakso+Titoti+Depok',
    amenities: ['Lantai 2 Sejuk', 'WIFI Gratis', 'Mushola', 'Ramah Kursi Roda', 'Pembayaran QRIS/Debit'],
    hours: '10:00 - 21:30 WIB'
  },
  {
    id: 'o4',
    name: 'Bakso Titoti Sragen',
    address: 'Jl. Raya Sukowati No.184, Kebayan 3, Sragen Kulon, Kec. Sragen, Kabupaten Sragen, Jawa Tengah',
    city: 'Sragen',
    phone: '0812-9900-2211',
    mapUrl: 'https://maps.google.com/?q=Bakso+Titoti+Sragen',
    amenities: ['Ruangan AC Tirai', 'Koneksi WIFI', 'Mushola Bersih', 'Spot Foto Estetik'],
    hours: '09:00 - 21:00 WIB'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Yuki Anggraini',
    date: '12 Mei 2026',
    rating: 5,
    comment: 'Bakso uratnya legendaris banget! Rasanya konsisten dari dulu pas kecil diajak orang tua makan di sini. Kuahnya bening tapi rasanya gurih banget, sambelnya juara!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'r2',
    user: 'Bambang Prasetyo',
    date: '28 April 2026',
    rating: 5,
    comment: 'Mie Ayam Bakso Urat adalah menu kombinasi maut di Titoti. Porsi ayamnya ndaging abis, manis gurihnya pas. Tempatnya luas banget dan parkirannya lega di Kebon Jeruk.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'r3',
    user: 'Kartika Sari',
    date: '4 Juni 2026',
    rating: 4,
    comment: 'Heritage Wonogirinya kerasa banget kalau mampir ke warung pusatnya yang di Ngadirojo Wonogiri, tempat pendopo luas dengan lesehan kayu. Es telernya suwegerrrr!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const FAQ_QUESTIONS = [
  {
    q: 'Apakah semua menu Bakso Titoti bersertifikat Halal?',
    a: 'Ya, seluruh menu di semua cabang Bakso Titoti bersertifikat Halal 100%. Kami hanya menggunakan daging sapi segar pilihan setiap harinya serta bahan masakan bermutu tinggi dan patuh syariat.'
  },
  {
    q: 'Apakah Bakso Titoti menerima pesanan katering dan acara besar?',
    a: 'Tentu! Kami melayani pesanan katering untuk hajatan pernikahan, seminar, khitanan, ulang tahun, hingga gathering kantor lengkap dengan pramusaji dan gubuk pikulan khas Wonogiri.'
  },
  {
    q: 'Bagaimana cara melakukan kemitraan atau waralaba Bakso Titoti?',
    a: 'Saat ini seluruh outlet utama kami dikelola secara kekeluargaan untuk menjaga cita rasa otentik Wonogiri. Namun, kami membuka jalur kerjasama kemitraan lokasi untuk area-area strategis baru di Jabodetabek dan Jawa Tengah.'
  },
  {
    q: 'Apakah menu Bakso Titoti bisa dipesan melalui layanan pesan-antar online?',
    a: 'Tentu saja! Semua cabang kami sudah terintegrasi penuh di GrabFood, GoFood, dan ShopeeFood demi kenyamanan bersantap Anda di rumah.'
  }
];
