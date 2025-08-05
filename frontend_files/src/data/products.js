// Canvas

const products = [
  {
    id: '1',
    name: 'Easy Glue Resist Art on Canvas',
    category: 'Watercolor Paint',
    images: [
      'https://i.postimg.cc/hvZL7xRM/easy-glue-resist-art.jpg',
      'https://i.postimg.cc/hvZL7xRM/easy-glue-resist-art.jpg',
      'https://i.postimg.cc/yx3dvSSL/mini.jpg'
    ],
    price: 39.99,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Abstract Art Piece',
    category: 'abstract',
    images: [
      'https://i.postimg.cc/yx3dvSSL/mini.jpg',
      'https://i.postimg.cc/hvZL7xRM/easy-glue-resist-art.jpg',
      'https://i.postimg.cc/hhFGwPLc/star.jpg'
    ],
    price: 59.99,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/hhFGwPLc/star.jpg',
      'https://i.postimg.cc/NFxH1XhZ/cretivity.jpg',
      'https://i.postimg.cc/B6HDnymS/clay.jpg'
    ],
    price: 45.5,
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/DztLFFdp/boo.jpg',
      'https://i.postimg.cc/PJHDp47m/hand.jpg',
      'https://i.postimg.cc/L85x89Lm/small.jpg'
    ],
    price: 45.5,
    rating: 4.4,
  },
  {
    id: '5',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/NFxH1XhZ/cretivity.jpg',
      'https://i.postimg.cc/hhFGwPLc/star.jpg',
      'https://i.postimg.cc/yx3dvSSL/mini.jpg'
    ],
    price: 45.5,
    rating: 5,
  },
  {
    id: '6',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/PJHDp47m/hand.jpg',
      'https://i.postimg.cc/DztLFFdp/boo.jpg',
      'https://i.postimg.cc/B6HDnymS/clay.jpg'
    ],
    price: 45.5,
    rating: 5,
  },
  {
    id: '7',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/B6HDnymS/clay.jpg',
      'https://i.postimg.cc/NFxH1XhZ/cretivity.jpg',
      'https://i.postimg.cc/yx3dvSSL/mini.jpg'
    ],
    price: 45.5,
    rating: 4.5,
  },
  {
    id: '8',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/mZyFtHH6/combo.jpg',
      'https://i.postimg.cc/3wj3ng7s/com-full.jpg',
      'https://i.postimg.cc/hjqfGDPB/com-front.jpg',
      'https://i.postimg.cc/zD7VJYss/com-back.jpg',
      'https://i.postimg.cc/52htP4zC/com-jar.jpg',
      'https://i.postimg.cc/7htHSwDb/jar-zoom.jpg',
      'https://i.postimg.cc/jSHVbt9N/small.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '9',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/pTW2jj36/single-1.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '10',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/W4VGDMPZ/slide-10.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '11',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/Y9XJ9rZ5/single-3.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '12',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/Mpd4tKKv/single-4.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '13',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/bYV96DQX/slide-9.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '14',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/vTTLYbwS/slide-8.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '15',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/xdGPg6Pg/slide-7.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '16',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/8PCncgbG/slide-6.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '17',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/4ysqBKtH/slide-5.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '18',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/DwpWhLwF/red-yellow.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '19',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/7Z5Hgcq8/crack.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '20',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/CKSZRtpz/hairclip.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '21',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/4d3m59dG/clips.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },
  {
    id: '22',
    name: 'Floral Wall Canvas',
    category: 'floral',
    images: [
      'https://i.postimg.cc/t4HJcfT2/roundband.jpg'
    ],
    price: 45.5,
    rating: 4.7,
  },

//Earrings

  {
    id: "earring-1",
    name: "Crystal Drop Earrings",
    price: 4.99,
    rating: 4.8,
    images: ["https://i.postimg.cc/QdCFk3xQ/earr.jpg"],
    category: "earrings",
    description: "Elegant crystal earrings perfect for special occasions."
  },

  {
    id: "earring-2",
    name: "Boho Hoop Earrings",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/ZnSgvMMG/black-ea.jpg"],
    category: "earrings",
    description: "Stylish bohemian hoop earrings."
  },

  {
    id: "earring-3",
    name: "Lotus Earring",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/8z6hxz5b/lousear.jpg"],
    category: "earrings",
    description: "Handcrafted Statement - extreme light weighted & most Trendy Beaded Earring Collection"
  },

  {
    id: "earring-4",
    name: "Yellow Pearl Earring",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/BZmwsCTn/y-p-e.jpg"],
    category: "earrings",
    description: "Handcrafted Statement - extreme light weighted & most Trendy Beaded Earring Collection",
    tags: ["Beaded", "Yellow", "Pearl"]
  },
  {
    id: "earring-5",
    name: "Denim Earring",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/4NSfKVgJ/demin-eaa.jpg"],
    category: "earrings",
    description: "Handcrafted Statement - extreme light weighted & most Trendy Beaded Earring Collection",
    tags: ["Denim", "Trendy"]
  },
  {
    id: "earring-6",
    name: "Lotus Earring",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/j2BH2CqZ/p-w-e.jpg"],
    category: "earrings",
    description: "Handcrafted Statement - extreme light weighted & most Trendy Beaded Earring Collection",
    tags: ["Lotus", "Beaded", "White"]
  },
  {
    id: "earring-7",
    name: "Denim Earring",
    price: 3.99,
    rating: 4.5,
    images: ["https://i.postimg.cc/W4r1c3xs/demin-earr.jpg"],
    category: "earrings",
    description: "Handcrafted Statement - extreme light weighted & most Trendy Beaded Earring Collection",
    tags: ["Denim", "Boho"]
  },

  {
    id: "earring-8",
    name: " Handmade Mandala Earrings",
    price: 12.99,
    rating: 4.8,
    images: ["https://i.postimg.cc/Jh4fSQYJ/Mandala.jpg"],
    category: "earrings",
    description: "Classic gold stud earrings.",
    tags: ["Gold", "Stud"]
  },
  {
    id: "earring-9",
    name: "Gold Stud-Pookie Ear Top",
    price: 12.99,
    rating: 4.8,
    images: ["https://i.postimg.cc/KzbgYzkD/gold-studs.jpg"],
    category: "earrings",
    description: "Classic gold stud earrings.",
    tags: ["Gold", "Stud"]
  },

//hairclips

  {
    id: "hairclip-1",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/CKSZRtpz/hairclip.jpg",
      "https://i.postimg.cc/4d3m59dG/clips.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },
  {
    id: "hairclip-2",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/y6cR4dxh/claw.jpg",
      "https://i.postimg.cc/d1M0428b/claw1.jpg",
      "https://i.postimg.cc/4N4xLN9x/claw2.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },
  {
    id: "hairclip-3",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/Nj3Ycg5T/claw3.jpg",
      "https://i.postimg.cc/C1YgRmCx/claw4.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },
  {
    id: "hairclip-4",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/3NxQBNcM/claw5.jpg",
      "https://i.postimg.cc/SR1Ft4Bn/claw6.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },
  {
    id: "hairclip-5",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/hPhqQJmT/claw7.jpg",
      "https://i.postimg.cc/SR1Ft4Bn/claw6.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },
  {
    id: "hairclip-6",
    name: "Elegant Floral Hair Clip",
    images: [
      "https://i.postimg.cc/k5PrHfpv/claw8.jpg",
      "https://i.postimg.cc/SR1Ft4Bn/claw6.jpg"
    ],
    price: 4.99,
    rating: 4.8,
    description: "A beautiful handmade floral hair clip, perfect for parties or daily wear.",
    category: "hair clips",
  },

  //neckpieces

  {
    id: "neckpiece-1",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/t4yzJc7c/ye1.jpg",
      "https://i.postimg.cc/4N83H73T/ye2.jpg",
      "https://i.postimg.cc/KjpyjTDq/ye3.jpg",
      "https://i.postimg.cc/jqpFJVZx/neckp.jpg"
      
      
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },

  {
    id: "neckpiece-2",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/sgc68Myx/neckpec.jpg",
      "https://i.postimg.cc/3JtPK3bN/nyset.jpg"
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },
  {
    id: "neckpiece-3",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/y85tZvKz/2ny.jpg",
      "https://i.postimg.cc/029skWkW/ny.jpg",
      "https://i.postimg.cc/VvdXnB13/nyp.jpg",
      "https://i.postimg.cc/cHJ3GMKr/bluey.jpg",
      "https://i.postimg.cc/3JtPK3bN/nyset.jpg"
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },
  {
    id: "neckpiece-4",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/Y9X1vyc6/pur1.jpg",
      "https://i.postimg.cc/sgc68Myx/neckpec.jpg"
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },
  {
    id: "neckpiece-5",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/cLSM5zSm/chaw.jpg",
      "https://i.postimg.cc/sgc68Myx/neckpec.jpg"
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },
  {
    id: "neckpiece-6",
    name: "Vintage Pearl Necklace Set",
    images: [
      "https://i.postimg.cc/zDprfsdL/chaw1.jpg",
      "https://i.postimg.cc/Dfx9hqZL/chaw0-1.jpg"
    ],
    price: 14.99,
    rating: 4.7,
    description: "A gorgeous vintage-style pearl necklace with matching earrings.",
    category: "neckpieces set",
  },

  //bags

  {
    id: "bag-1",
    name: "Handmade Tote Bag",
    images: [
      "https://i.postimg.cc/s2JrTjH4/bag.jpg",
      "https://i.postimg.cc/631FPyrn/tote.jpg",
      "https://i.postimg.cc/9X1kBxp7/tote1.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },
  {
    id: "bag-2",
    name: "Handmade BackPack Bag",
    images: [
      "https://i.postimg.cc/13VDftXz/bp1.jpg",
      "https://i.postimg.cc/KYwG4GKm/bp2.jpg",
      "https://i.postimg.cc/3rg8JH3H/b3.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },
  {
    id: "bag-3",
    name: "Handmade Shoulder Bag",
    images: [
      "https://i.postimg.cc/RFwWB6gk/soulder2.jpg",
      "https://i.postimg.cc/wT4TnQ6t/shoulder4.jpg",
      "https://i.postimg.cc/6pTTQ1HL/shoulder3.jpg",
      "https://i.postimg.cc/ht3zbqJ5/shoulder1.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },
  {
    id: "bag-4",
    name: "Handmade Coin Bag",
    images: [
      "https://i.postimg.cc/1tyQ88mh/coin3.jpg",
      "https://i.postimg.cc/xCgSM98k/coin2.jpg",
      "https://i.postimg.cc/d31c9gZ5/coin.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },
  {
    id: "bag-5",
    name: "Handmade Credit-Card Bag",
    images: [
      "https://i.postimg.cc/8cW9wDPB/credit.jpg",
      "https://i.postimg.cc/s2kJmWBq/credit2.jpg",
      "https://i.postimg.cc/qqLXpZmH/credit1.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },
  {
    id: "bag-6",
    name: "Handmade Wallet Bag",
    images: [
      "https://i.postimg.cc/q7xfHp8m/coin1.jpg",
      "https://i.postimg.cc/bwGb5Jjh/wallet.jpg",
      "https://i.postimg.cc/cHTrCyNh/wallet1.jpg"
    ],
    price: 19.99,
    rating: 4.9,
    description: "Eco-friendly and stylish handmade canvas tote bag.",
    category: "bags",
  },

  //keyrings

  {
    id: "keyring-1",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/gc71GXfT/keyr.jpg",
      "https://i.postimg.cc/tggLX3C8/keya.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },
  {
    id: "keyring-2",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/MZDNz1sq/key1.jpg",
      "https://i.postimg.cc/ydKpHNcD/key2.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },
  {
    id: "keyring-3",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/WpYmm7S9/key3.jpg",
      "https://i.postimg.cc/85KvH1dF/key4.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },
  {
    id: "keyring-4",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/fLr3d8Zm/key5.jpg",
      "https://i.postimg.cc/PqfzzFGR/key6.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },
  
  {
    id: "keyring-5",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/PqfzzFGR/key6.jpg",
      "https://i.postimg.cc/90kNvH20/key8.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },
  {
    id: "keyring-6",
    name: "Cute Resin Key Ring",
    images: [
      "https://i.postimg.cc/j2nhnwVq/key9.jpg",
      "https://i.postimg.cc/KvXWrF0p/key10.jpg"
    ],
    price: 3.49,
    rating: 4.6,
    description: "Colorful resin keyring perfect for your keys or bag.",
    category: "key rings",
  },

  //papercraftDIYforkids

  {
    id: "craft-1",
    name: "DIY Paper Craft Kit for Kids",
    images: [
      "https://i.postimg.cc/gJtczcWH/fl.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-2",
    name: "DIY Craft-Doll & KeyRings",
    images: [
      "https://i.postimg.cc/d37sLMQP/clayd.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-3",
    name: "DIY Paper Craft-BookMarker",
    images: [
      "https://i.postimg.cc/7Ysmtk9y/p1.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-4",
    name: "DIY Paper Craft-BookMarker",
    images: [
      "https://i.postimg.cc/Xqv99rTB/p2.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-5",
    name: "DIY Paper Craft-Pencile Eraser",
    images: [
      "https://i.postimg.cc/brGszk7g/p3.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-6",
    name: "DIY Craft-Kids KeyRings",
    images: [
      "https://i.postimg.cc/bwdgnBQN/p4.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },
  {
    id: "craft-7",
    name: "DIY Craft-Paper Clip",
    images: [
      "https://i.postimg.cc/MKgMsPCG/p5.jpg",
      "https://i.postimg.cc/d37sLMQP/clayd.jpg"
    ],
    price: 6.99,
    rating: 4.8,
    description: "Fun and safe DIY paper craft set to engage kids in creativity.",
    category: "paper craft diy for kids",
  },

  //bangles

  {
    id: "b1",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/5Nr8Fqbw/bangles1.jpg",
      "https://i.postimg.cc/0jD0CVxM/bangs13.jpg",
    ],
  },
  {
    id: "b2",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/RZ3ycRf9/bangles2.jpg",
      "https://i.postimg.cc/26YtNNt8/bangles3.jpg",
      "https://i.postimg.cc/GthS9JrW/bangles4.jpg"
    ],
  },
  {
    id: "b3",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/7YhWkVK7/bangs5.jpg",
      "https://i.postimg.cc/26YtNNt8/bangles3.jpg",
    ],
  },
  {
    id: "b4",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/Sxz1XKFx/bangs6.jpg",
      "https://i.postimg.cc/FKVZcdPN/bangs8.jpg",
      "https://i.postimg.cc/QMQ6bnML/bangs7.jpg",
      "https://i.postimg.cc/FzMcwNPT/bangs9.jpg"
    ],
  },
  {
    id: "b5",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/K8yBNc3z/bangs11.jpg",
      "https://i.postimg.cc/FKVZcdPN/bangs8.jpg",
      "https://i.postimg.cc/QMQ6bnML/bangs7.jpg",
      "https://i.postimg.cc/FzMcwNPT/bangs9.jpg"
    ],
  },
  {
    id: "b6",
    name: "Elegant Gold Bangles",
    category: "bangles",
    price: 24.99,
    rating: 4.8,
    description: "Traditional handcrafted bangles made with gold polish.",
    images: [
      "https://i.postimg.cc/brtSx4zk/bangs12.jpg",
      "https://i.postimg.cc/FKVZcdPN/bangs8.jpg",
      "https://i.postimg.cc/QMQ6bnML/bangs7.jpg",
      "https://i.postimg.cc/FzMcwNPT/bangs9.jpg"
    ],
  },

  //rings

  {
  id: "r1",
  name: "Crystal Adjustable Ring",
  category: "rings",
  price: 14.99,
  rating: 4.7,
  description: "A beautiful adjustable ring with embedded crystals, perfect for all occasions.",
  images: [
    "https://i.postimg.cc/BZVr7b3J/ring.jpg",
    "https://i.postimg.cc/BZVr7b3J/ring.jpg"
  ]
},
{
  id: "r2",
  name: "Vintage Silver Ring",
  category: "rings",
  price: 18.50,
  rating: 4.8,
  description: "Handcrafted silver ring with antique detailing and rustic finish.",
  images: [
    "https://i.postimg.cc/B6kGFnQZ/ring1.jpg"
  ]
},
{
  id: "r3",
  name: "Vintage Silver Ring",
  category: "rings",
  price: 18.50,
  rating: 4.8,
  description: "Handcrafted silver ring with antique detailing and rustic finish.",
  images: [
    "https://i.postimg.cc/s22F0hMD/ring2.jpg"
  ]
},
{
  id: "r4",
  name: "Vintage Silver Ring",
  category: "rings",
  price: 18.50,
  rating: 4.8,
  description: "Handcrafted silver ring with antique detailing and rustic finish.",
  images: [
    "https://i.postimg.cc/SKwh2KKS/ring3.jpg",
    "https://i.postimg.cc/0jv1nHmh/ring4.jpg"
  ]
},

//bracelets

{
  id: "br1",
  name: "Charm Bead Bracelet",
  category: "bracelets",
  price: 13.99,
  rating: 4.6,
  description: "A colorful charm bracelet with beads and a stretchable band.",
  images: [
    "https://i.postimg.cc/cLP3HQfr/braslate1.jpg",
    "https://i.postimg.cc/qqf06vjc/braslate6.jpg"
  ]
},
{
  id: "br2",
  name: "Leather Cuff Bracelet",
  category: "bracelets",
  price: 17.49,
  rating: 4.8,
  description: "Handcrafted leather cuff bracelet with adjustable clasp and modern look.",
  images: [
    "https://i.postimg.cc/3xfsDwwy/braslate5.jpg",
    "https://i.postimg.cc/W4r5bpqc/braslate10.jpg"
  ]
},
{
  id: "br3",
  name: "Leather Cuff Bracelet",
  category: "bracelets",
  price: 17.49,
  rating: 4.8,
  description: "Handcrafted leather cuff bracelet with adjustable clasp and modern look.",
  images: [
    "https://i.postimg.cc/c1j0PXWg/braslate2.jpg",
    "https://i.postimg.cc/N0f0QFz5/braslate11.jpg",
    "https://i.postimg.cc/XJr7yh3W/braslate12.jpg"
  ]
},
{
  id: "br4",
  name: "Leather Cuff Bracelet",
  category: "bracelets",
  price: 17.49,
  rating: 4.8,
  description: "Handcrafted leather cuff bracelet with adjustable clasp and modern look.",
  images: [
    "https://i.postimg.cc/q7C5hXYY/braslate7.jpg",
    "https://i.postimg.cc/NfJJdzvS/braslate8.jpg",
    "https://i.postimg.cc/6p8Hgf93/braslate9.jpg"
  ]
},

//Anket

{
    id: "a1",
    name: "Beaded Anklet",
    category: "anklet",
    price: 12.99,
    rating: 4.6,
    description: "Colorful beaded anklet perfect for summer vibes.",
    images: [
      "https://i.postimg.cc/9Fw2tTvd/a1.jpg",
      "https://i.postimg.cc/9Fw2tTvd/a1.jpg"
    ],
  },
{
    id: "a2",
    name: "Beaded Anklet",
    category: "anklet",
    price: 12.99,
    rating: 4.6,
    description: "Colorful beaded anklet perfect for summer vibes.",
    images: [
      "https://i.postimg.cc/D0LTF3QC/a2.jpg",
      "https://i.postimg.cc/D0LTF3QC/a2.jpg"
    ],
  },
{
    id: "a3",
    name: "Beaded Anklet",
    category: "anklet",
    price: 12.99,
    rating: 4.6,
    description: "Colorful beaded anklet perfect for summer vibes.",
    images: [
      "https://i.postimg.cc/N05ZBwB1/a3.jpg",
      "https://i.postimg.cc/N05ZBwB1/a3.jpg"
    ],
  },
{
    id: "a4",
    name: "Beaded Anklet",
    category: "anklet",
    price: 12.99,
    rating: 4.6,
    description: "Colorful beaded anklet perfect for summer vibes.",
    images: [
      "https://i.postimg.cc/8c4VsB3W/a4.jpg",
      "https://i.postimg.cc/8c4VsB3W/a4.jpg"
    ],
  },
{
    id: "a5",
    name: "Beaded Anklet",
    category: "anklet",
    price: 12.99,
    rating: 4.6,
    description: "Colorful beaded anklet perfect for summer vibes.",
    images: [
      "https://i.postimg.cc/brCFK6W6/a5.jpg",
      "https://i.postimg.cc/brCFK6W6/a5.jpg",
    ],
  },

  //Brooch

  {
    id: "bro1",
    name: "Pookie Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/pT3HmTyP/br1.jpg",
    ],
  },
  {
    id: "bro2",
    name: "Left Clover Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/ZY1NSxbM/br11.jpg",
    ],
  },
  {
    id: "bro3",
    name: "Green Leaf Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/YqRt3tsz/br13.jpg",
    ],
  },
  {
    id: "bro4",
    name: "Fish Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/j5cfTpj6/br5.jpg",
      "https://i.postimg.cc/jjrn7xwQ/br6.jpg",
      "https://i.postimg.cc/MZrcYbfG/br7.jpg",
      ""
    ],
  },
  {
    id: "bro5",
    name: "Flower Clover Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/3xjJzgNm/br9.jpg",
      "https://i.postimg.cc/htVfgkyJ/br8.jpg",
    ],
  },
  {
    id: "bro6",
    name: "Umbrella Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/G9wd521X/br10.jpg",
    ],
  },
  {
    id: "bro7",
    name: "Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/cLctfqQp/br12.jpg",
    ],
  },
  {
    id: "bro8",
    name: "Leaf Clover Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/kXD20shk/br14.jpg",
      "https://i.postimg.cc/pVcTJ8Xk/br17.jpg",
      "https://i.postimg.cc/ZRRmW73m/br16.jpg"
    ],
  },
  {
    id: "bro9",
    name: "Watermelon Brooch Pin",
    category: "brooch",
    price: 18.5,
    rating: 4.7,
    description: "Antique-style brooch for elegant outfits.",
    images: [
      "https://i.postimg.cc/nzG4zs3D/br2.jpg"
    ],
  },

  //Sunglasses

  {
    id: "sg1",
    name: " Riksha paint Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Handmade Riksha Paint Sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/3JYGLCK5/sunglasses1.jpg",
    ],
  },
  {
    id: "sg2",
    name: "Riksha paint Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Handmade Riksha Paint Sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/R0KV5yRP/sunglasses2.jpg",
    ],
  },
  {
    id: "sg3",
    name: "Riksha paint Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Handmade Riksha Paint Sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/t4V9WwLX/sunglasses3.jpg",
    ],
  },
  {
    id: "sg4",
    name: "Riksha paint Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Handmade Riksha Paint Sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/136Zf6qX/sunglasses4.jpg",
    ],
  },
  {
    id: "sg5",
    name: "Fancy Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Stylish oversized sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/m2TMCRXR/sunglasses5.jpg",
    ],
  },
  {
    id: "sg6",
    name: "Fancy Sunglasses",
    category: "sunglasses",
    price: 15.0,
    rating: 4.4,
    description: "Stylish oversized sunglasses for UV protection.",
    images: [
      "https://i.postimg.cc/J4y8THdQ/sunglasses6.jpg",
    ],
  },

  //Shoes

  {
    id: "sh1",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/RVCy2LH5/shoe1.jpg",
      "https://i.postimg.cc/7Y79sCB8/shoe3.jpg"
    ],
  },
  {
    id: "sh2",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/7Y79sCB8/shoe3.jpg",
      "https://i.postimg.cc/RVCy2LH5/shoe1.jpg"
    ],
  },
  {
    id: "sh3",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/BZjMF7Hv/shoe2.jpg",
    ],
  },
  {
    id: "sh4",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/HLS9cbL5/shoe4.jpg",
    ],
  },
  {
    id: "sh5",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/bJDkZMWc/shoe5.jpg",
    ],
  },
  {
    id: "sh6",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/mrqFWjDd/shoe6.jpg",
    ],
  },
  {
    id: "sh7",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/MGNLhk8v/shoe7.jpg",
    ],
  },
  {
    id: "sh8",
    name: "Handcrafted Leather Shoes",
    category: "shoes",
    price: 49.0,
    rating: 4.9,
    description: "Comfortable handmade leather footwear.",
    images: [
      "https://i.postimg.cc/9f6xLGG9/shoe8.jpg",
      "https://i.postimg.cc/mrqFWjDd/shoe6.jpg"
    ],
  },

  //Candles

  {
    id: "cd1",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/5t5HrCGG/candles.jpg",
    ],
  },
  {
    id: "cd2",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/rs4zSRSQ/candles1.jpg",
    ],
  },
  {
    id: "cd3",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/WbpQqcTJ/candles2.jpg",
    ],
  },
  {
    id: "cd4",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/2684FG6T/candles3.jpg",
    ],
  },
  {
    id: "cd5",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/2SQvsML2/candles4.jpg",
    ],
  },
  {
    id: "cd6",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/R0bcdfHB/candles5.jpg",
    ],
  },
  {
    id: "cd7",
    name: "Scented Soy Candles",
    category: "candles",
    price: 19.99,
    rating: 4.8,
    description: "Eco-friendly soy candles with lavender scent.",
    images: [
      "https://i.postimg.cc/dtxwqVr0/candles6.jpg",
    ],
  },

  //Vases

   {
    id: "vs1",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/SKCpmLfS/vases.jpg",
    ],
  },
   {
    id: "vs2",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/HxtDypNF/vases1.jpg",
    ],
  },
   {
    id: "vs3",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/PJrGbgsJ/vases2.jpg",
    ],
  },
   {
    id: "vs4",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/9XJHXQZ7/vases3.jpg",
    ],
  },
   {
    id: "vs5",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/MpZD6z0v/vases5.jpg",
    ],
  },
   {
    id: "vs6",
    name: "Ceramic Flower Vase",
    category: "vases",
    price: 22.99,
    rating: 4.6,
    description: "Minimalist ceramic vase for home décor.",
    images: [
      "https://i.postimg.cc/9Qw6BPSd/vases4.jpg",
    ],
  },

  //GiftCards

  {
    id: "gc1",
    name: "Gift Box Set-1",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store." ,
    images: [
      "https://i.postimg.cc/0QvG4xNk/gift1.jpg",
    ],
  },
  {
    id: "gc2",
    name: "Gift Box Set-2",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store.",
    images: [
      "https://i.postimg.cc/VkYd26qH/gift2.jpg",
    ],
  },
  {
    id: "gc3",
    name: "Gift Box Set-3",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store.",
    images: [
      "https://i.postimg.cc/Yq0PRNVX/gift3.jpg",
    ],
  },
  {
    id: "gc4",
    name: "Gift Box Set-4",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store.",
    images: [
      "https://i.postimg.cc/6TxG8fG9/gift4.jpg",
    ],
  },
  {
    id: "gc5",
    name: "Gift Box Set-5",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store.",
    images: [
      "https://i.postimg.cc/X75hGfzt/gift5.jpg",
    ],
  },
  {
    id: "gc6",
    name: "Gift Box Set-6",
    category: "gift cards",
    price: 25.0,
    rating: 5.0,
    description: "Digital gift box to spend on anything in our store.",
    images: [
      "https://i.postimg.cc/pdW16gLt/gift6.jpg",
    ],
  },

  //search option

  // {
  //   id: "se-1",
  //   name: "Art Canvas",
  //   image: "'https://i.postimg.cc/yx3dvSSL/mini.jpg",
  // },
  // {
  //   id: "se-2",
  //   name: "Floral",
  //   image: "https://i.postimg.cc/j2BH2CqZ/p-w-e.jpg",
  // },
  // {
  //   id: "se-3",
  //   name: "Shoe Box",
  //   image: "https://i.postimg.cc/X75hGfzt/gift5.jpg",
  // },
  // {
  //   id: "se-4",
  //   name: "Silk Scarf",
  //   image: "https://i.postimg.cc/vHVcPxFy/scarf.jpg",
  // },

{
  id: 'baguette-1',
  name: 'Vintage Y2K Charles David calfskin-pink…',
  price: 97.42,
  rating: 4.5, 
  description: 'A beautiful vintage Y2K style baguette bag.',
  images: [
    'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
    { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
  ]
}

  

  
];

export default products;


