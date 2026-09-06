export const DESTINATIONS = [
  {
    id: 'thailand',
    name: 'Thailand',
    title: 'Land of Smiles & Songkran Festival',
    tagline: 'Tropical beaches, vibrant markets & water celebrations',
    startingPrice: 18400,
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    description: 'Explore Bangkok temples, Pattaya nightlife, Coral Island beaches, and experience Songkran Water Festival.',
    popularFor: ['Water Sports', 'Nightlife', 'Temple Tours', 'Shopping']
  },
  {
    id: 'dubai',
    name: 'Dubai',
    title: 'City of Gold & Future Wonders',
    tagline: 'Futuristic skylines, desert safaris & luxury shopping',
    startingPrice: 34990,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'Marvel at Burj Khalifa, thrill on desert sand dunes, cruise Dubai Marina, and explore Dubai Mall.',
    popularFor: ['Luxury', 'Desert Safari', 'Skyscrapers', 'Theme Parks']
  },
  {
    id: 'singapore',
    name: 'Singapore',
    title: 'The Garden City of Tomorrow',
    tagline: 'Modern marvels, Sentosa Island & world-class theme parks',
    startingPrice: 42500,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    description: 'Visit Gardens by the Bay, Universal Studios Sentosa, Night Safari, and Jewel Changi Airport.',
    popularFor: ['Family Fun', 'Theme Parks', 'Supertrees', 'Clean City']
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    title: 'Truly Asia Heritage & Modern Thrills',
    tagline: 'Twin towers, Genting Highlands & tropical rainforests',
    startingPrice: 22800,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    description: 'Walk below Petronas Towers, ride cable cars to Genting Highlands, and explore Batu Caves.',
    popularFor: ['Genting Highlands', 'Batu Caves', 'City Life', 'Culture']
  },
  {
    id: 'bali',
    name: 'Bali',
    title: 'Island of the Gods & Romantic Escapes',
    tagline: 'Pristine beaches, emerald rice terraces & sacred temples',
    startingPrice: 28900,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Relax in luxury Ubud private villas, swing over Tegallalang rice fields, and cruise Nusa Penida.',
    popularFor: ['Honeymoon', 'Villas', 'Beach Clubs', 'Rice Terraces']
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    title: 'Emerald Waters & Rich Heritage',
    tagline: 'Halong Bay cruises, ancient towns & limestone karsts',
    startingPrice: 31200,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    description: 'Sail through Halong Bay karsts, wander Hanoi Old Quarter, and taste authentic street cuisine.',
    popularFor: ['Halong Bay', 'History', 'Cruises', 'Nature']
  },
  {
    id: 'europe',
    name: 'Europe',
    title: 'The Continental Fairytale',
    tagline: 'Paris romance, Swiss Alps & Roman history',
    startingPrice: 145000,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    description: 'Ascend the Eiffel Tower, ride Mt. Titlis cable car in Switzerland, and marvel at the Colosseum.',
    popularFor: ['Swiss Alps', 'Paris Romance', 'Schengen Visa', 'History']
  },
  {
    id: 'india',
    name: 'India',
    title: 'Incredible Diversity & Spiritual Heritage',
    tagline: 'Kashmir snows, Kerala backwaters & Taj Mahal',
    startingPrice: 14800,
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
    description: 'Discover Dal Lake houseboats, Munnar tea hills, Alleppey backwater cruises, and Himalayan vistas.',
    popularFor: ['Houseboats', 'Snow Mountains', 'Spiritual', 'Backwaters']
  }
];

export const FEATURED_PACKAGE = {
  id: 'thailand-songkran',
  name: "Thailand Songkran - World's Biggest Water Festival",
  badge: "LIMITED OFFER",
  destination: "Thailand",
  price: 18400,
  priceLabel: "₹18,400 / person",
  dates: "13th – 16th April",
  duration: "3 Nights / 4 Days",
  rating: 4.9,
  reviewsCount: 142,
  travelType: "Festival & Holiday",
  excludeFlights: true,
  image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80"
  ],
  highlights: [
    "3 Nights Hotel Accommodation",
    "Daily Buffet Breakfast",
    "All Tours & Transfers Included",
    "Pattaya Beach & Nightlife Sightseeing",
    "SriRacha Tiger Topia Admission",
    "Pattaya Alcazar Cabaret Show (VIP Seats)",
    "Pattaya Coral Island Tour with Indian Lunch",
    "Bangkok City & Golden Temple Tour",
    "Comprehensive Travel Insurance Included"
  ],
  itinerary: [
    {
      day: "DAY 1",
      title: "Arrival in Bangkok → Transfer to Pattaya → Check-in",
      details: "Welcome to Thailand! Upon arrival at Suvarnabhumi Airport, meet our TQ Fly Travels representative. Board your comfortable AC coach and transfer to Pattaya. Check into your hotel and relax. In the evening, explore Pattaya's lively walking street or beach promenade."
    },
    {
      day: "DAY 2",
      title: "SriRacha Tiger Topia → Coral Island Speedboat Tour",
      details: "After breakfast, visit SriRacha Tiger Topia for exciting wildlife encounters. Next, head to Coral Island via speedboat. Enjoy clear waters, optional parasailing/sea walking, and a delicious hot Indian lunch on the beach. Return to hotel in late afternoon."
    },
    {
      day: "DAY 3",
      title: "Songkran Water Festival Fun → Alcazar Show",
      details: "Experience the vibrant Songkran Water Festival spirit across Pattaya! Enjoy friendly water celebrations, street music, and cultural joy. In the evening, attend the world-famous Pattaya Alcazar Cabaret Show featuring stunning costumes and performances."
    },
    {
      day: "DAY 4",
      title: "Bangkok City & Temple Tour → Departure",
      details: "Check out after breakfast and drive to Bangkok. Enjoy a guided Bangkok City Tour visiting famous temples (Wat Traimit Golden Buddha & Wat Pho). Free time for souvenir shopping at Pratunam Market before airport drop-off for your flight home."
    }
  ],
  inclusions: [
    "3 Nights accommodation in 3/4-star Pattaya hotel",
    "Daily breakfast at the hotel",
    "1 Special Indian lunch at Coral Island",
    "Speedboat transfers to Coral Island",
    "Entry ticket to SriRacha Tiger Topia",
    "VIP tickets for Pattaya Alcazar Show",
    "Bangkok City & Temple Tour guided sightseeings",
    "All airport, hotel, and inter-city AC coach transfers",
    "Complimentary Travel Insurance policy",
    "24x7 TQ Fly Travels local destination assistance"
  ],
  exclusions: [
    "International Flight Tickets (Can be added on request)",
    "Thailand Visa fee (Visa on Arrival assistance provided)",
    "Personal expenses, room service, laundry & phone calls",
    "Optional water sports activities at Coral Island",
    "Any items not explicitly mentioned in inclusions"
  ],
  hotels: "Centara Azure Hotel Pattaya / Sovereign Group Hotel or similar (4-Star Rated)",
  transfers: "Air-Conditioned Deluxe Coach / Private Van Transfers"
};

export const TOUR_PACKAGES = [
  FEATURED_PACKAGE,
  {
    id: 'dubai-deluxe',
    name: 'Dubai Luxury Escape & Desert Safari',
    badge: 'POPULAR',
    destination: 'Dubai',
    price: 34990,
    priceLabel: '₹34,990 / person',
    dates: 'Available All Months',
    duration: '4 Nights / 5 Days',
    rating: 4.8,
    reviewsCount: 94,
    travelType: 'International',
    excludeFlights: false,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '4-Star Hotel stay in Bur Dubai',
      'Burj Khalifa 124th Floor Observation Deck',
      'Desert Safari with BBQ Dinner & Tanoura Dance',
      'Dubai Marina Dhow Cruise Dinner',
      'Half-day Dubai City Tour & Miracle Garden'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival in Dubai → Marina Dhow Cruise", details: "Airport pick up, hotel check-in, evening romantic Dhow Cruise dinner along Dubai Marina." },
      { day: "DAY 2", title: "Dubai City Tour & Burj Khalifa", details: "Guided city tour visiting Dubai Frame, Jumeirah Beach, and Burj Khalifa 124th floor at sunset." },
      { day: "DAY 3", title: "Desert Safari & BBQ Night", details: "Morning free for shopping. Afternoon 4x4 Dune Bashing, camel rides, henna painting & belly dance BBQ dinner." },
      { day: "DAY 4", title: "Dubai Miracle Garden & Global Village", details: "Visit world's largest floral garden and cultural shopping pavilions." },
      { day: "DAY 5", title: "Shopping at Meena Bazaar → Departure", details: "Free time for gold & spice souk shopping before airport drop." }
    ],
    inclusions: ['4 Nights 4-Star Hotel', 'Daily Breakfast', 'Burj Khalifa Ticket', 'Desert Safari BBQ', 'Dhow Cruise Dinner', 'All Transfers'],
    exclusions: ['Visa fee', 'Personal expenses', 'Tourism Dirham fee'],
    hotels: 'Fortune Atrium Hotel Bur Dubai / Grand Excelsior',
    transfers: 'AC Private & SIC Transfers'
  },
  {
    id: 'singapore-sentosa',
    name: 'Singapore Sentosa & Universal Studios Combo',
    badge: 'BEST VALUE',
    destination: 'Singapore',
    price: 42500,
    priceLabel: '₹42,500 / person',
    dates: 'Daily Departures',
    duration: '4 Nights / 5 Days',
    rating: 4.9,
    reviewsCount: 112,
    travelType: 'Family',
    excludeFlights: true,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Universal Studios 1-Day Pass with Rides',
      'Sentosa Cable Car & Wings of Time Show',
      'Gardens by the Bay Flower Dome & Cloud Forest',
      'Night Safari Wildlife Park Tour',
      'Jewel Changi Rain Vortex Experience'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival in Singapore → Night Safari", details: "Transfer to hotel. Evening visit to world's first nocturnal zoo." },
      { day: "DAY 2", title: "Universal Studios Full Day Fun", details: "Immerse in movie theme rides, Transformers 3D, and Hollywood shows." },
      { day: "DAY 3", title: "Sentosa Island & Wings of Time", details: "Cable car ride, Madame Tussauds, Siloso Beach, and spectacular light show." },
      { day: "DAY 4", title: "Gardens by the Bay & Marina Bay", details: "Explore Supertree Grove, Cloud Forest waterfall, and Merlion Park." },
      { day: "DAY 5", title: "Jewel Changi → Return Flight", details: "Shop at Jewel Changi, see world's tallest indoor waterfall, departure." }
    ],
    inclusions: ['4 Nights Hotel', 'Daily Breakfast', 'Universal Studios Ticket', 'Night Safari Ticket', 'Sentosa Cable Car', 'Airport Transfers'],
    exclusions: ['Flights', 'Visa fees', 'Personal expenses'],
    hotels: 'Hotel Boss Singapore / ibis Styles Albert Park',
    transfers: 'AC SIC Coach Transfers'
  },
  {
    id: 'malaysia-explorer',
    name: 'Genting Highlands & Kuala Lumpur Escape',
    badge: 'POPULAR',
    destination: 'Malaysia',
    price: 22800,
    priceLabel: '₹22,800 / person',
    dates: 'Available All Year',
    duration: '3 Nights / 4 Days',
    rating: 4.7,
    reviewsCount: 86,
    travelType: 'Holiday',
    excludeFlights: true,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Petronas Twin Towers Photo Stop',
      'Batu Caves Rainbow Steps Tour',
      'Genting Highlands Skyway Cable Car',
      'Sunway Lagoon Theme Park (Optional)',
      '4-Star Central KL Hotel Accommodation'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival KL Airport → Hotel Check-in", details: "Warm welcome, transfer to KL hotel, evening street food tour at Jalan Alor." },
      { day: "DAY 2", title: "Batu Caves & Genting Highlands", details: "Ascend Batu Caves temple steps, ride cable car to Genting indoor theme park & casino." },
      { day: "DAY 3", title: "Kuala Lumpur City & Twin Towers Tour", details: "Visit Independence Square, National Mosque, King's Palace, and Petronas Twin Towers." },
      { day: "DAY 4", title: "Putrajaya City Tour → Airport Drop", details: "Enroute visit Pink Mosque in Putrajaya before KLIA airport drop." }
    ],
    inclusions: ['3 Nights KL Hotel', 'Breakfasts', 'Batu Caves & Genting Cable Car', 'KL City Tour', 'Airport Transfers'],
    exclusions: ['Flights', 'Malaysia Visa', 'Tourism Tax'],
    hotels: 'Furama Bukit Bintang / Hotel Royal KL',
    transfers: 'Private Sedan / Van'
  },
  {
    id: 'bali-honeymoon',
    name: 'Bali Island Bliss & Nusa Penida Explorer',
    badge: 'HONEYMOON SPECIAL',
    destination: 'Bali',
    price: 28900,
    priceLabel: '₹28,900 / person',
    dates: 'Flexible Departure',
    duration: '5 Nights / 6 Days',
    rating: 4.9,
    reviewsCount: 150,
    travelType: 'Honeymoon',
    excludeFlights: true,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '2 Nights Private Pool Villa in Ubud',
      '3 Nights Beach Resort in Kuta/Seminyak',
      'Nusa Penida West Island Tour with Kelingking Beach',
      'Bali Swing & Tegallalang Rice Terrace',
      'Tanah Lot Temple Sunset Tour'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival Bali → Check-in Ubud Villa", details: "Flower garland welcome, private transfer to luxury Ubud Private Pool Villa." },
      { day: "DAY 2", title: "Ubud Swing & Volcano Tour", details: "Giant jungle swing, Tegallalang Rice Terrace, Kintamani Volcano Batur view lunch." },
      { day: "DAY 3", title: "Nusa Penida Island Speedboat Day Trip", details: "Speedboat ride, Kelingking T-Rex cliff view, Broken Beach, Angel Billabong." },
      { day: "DAY 4", title: "Water Sports & Tanah Lot Sunset", details: "Transfer to Kuta. Banana boat & jet ski at Tanjung Benoa, evening Tanah Lot sunset." },
      { day: "DAY 5", title: "Free Day for Spa & Beach Clubs", details: "Relax in Seminyak beach clubs or enjoy authentic Balinese massage spa." },
      { day: "DAY 6", title: "Souvenir Market → Departure", details: "Shop Krisna souvenir store, drop to Denpasar airport." }
    ],
    inclusions: ['2 Nights Ubud Pool Villa', '3 Nights Kuta Resort', 'Daily Breakfast', 'Nusa Penida Trip', 'Bali Swing Pass', 'Private Car Transfers'],
    exclusions: ['Flights', 'Bali Tourist Levy ($10)', 'Water sports charges'],
    hotels: 'Dedari Villa Ubud & Sun Island Resort Kuta',
    transfers: 'Private Driver AC Car'
  },
  {
    id: 'kashmir-paradise',
    name: 'Magical Kashmir & Gulmarg Snow Wonderland',
    badge: 'DOMESTIC FAVOURITE',
    destination: 'India',
    price: 16500,
    priceLabel: '₹16,500 / person',
    dates: 'Weekly Departures',
    duration: '4 Nights / 5 Days',
    rating: 4.8,
    reviewsCount: 142,
    travelType: 'Spiritual',
    excludeFlights: true,
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '1 Night Deluxe Dal Lake Houseboat Stay',
      'Sunset Shikara Ride on Dal Lake',
      'Gulmarg Gondola Ride Phase 1 Ticket',
      'Pahalgam Valley of Shepherds Day Trip',
      'Srinagar Nishat & Shalimar Mughal Gardens'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival Srinagar → Houseboat & Shikara", details: "Meet at Srinagar airport, transfer to houseboats. 1-hour sunset Shikara ride." },
      { day: "DAY 2", title: "Srinagar to Gulmarg Snow Meadows", details: "Drive to Gulmarg. Ride world famous Gondola cable car to snow peaks. ATV rides." },
      { day: "DAY 3", title: "Gulmarg to Pahalgam Valley", details: "Visit saffron fields, Avantipura ruins, drive along Lidder River in Pahalgam." },
      { day: "DAY 4", title: "Pahalgam to Srinagar Mughal Gardens", details: "Explore Betaab Valley, return to Srinagar to visit Nishat Bagh & Shalimar Bagh." },
      { day: "DAY 5", title: "Lal Chowk Shopping → Airport Drop", details: "Shop saffron, dry fruits & Pashmina shawls, transfer to Srinagar airport." }
    ],
    inclusions: ['1 Night Houseboat', '3 Nights Hotel', 'Breakfast & Dinner Included', 'Shikara Ride', 'Private Vehicle for 5 Days'],
    exclusions: ['Flight tickets', 'Gondola tickets', 'Ponies & Union cabs'],
    hotels: 'Heritage Luxury Houseboat & Hotel Royal Batoo Srinagar',
    transfers: 'Private Sedan / Innova'
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala God\'s Own Country Backwaters & Tea Hills',
    badge: 'NATURE SPECIAL',
    destination: 'India',
    price: 14800,
    priceLabel: '₹14,800 / person',
    dates: 'Daily Departures',
    duration: '4 Nights / 5 Days',
    rating: 4.9,
    reviewsCount: 98,
    travelType: 'Honeymoon',
    excludeFlights: true,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '2 Nights Munnar Hill Station Stay',
      '1 Night Thekkady Spice Plantation Stay',
      '1 Night Alleppey Deluxe Houseboat Cruise (All Meals)',
      'Tea Garden Walk & Mattupetty Dam Visit',
      'Periyar Wildlife Boat Sanctuary Ride'
    ],
    itinerary: [
      { day: "DAY 1", title: "Arrival Cochin → Drive to Munnar", details: "Pick up at Cochin, scenic drive past Cheeyappara waterfalls to Munnar mist hills." },
      { day: "DAY 2", title: "Munnar Tea Gardens & Eco Point", details: "Visit Tea Museum, Mattupetty Dam, Kundala Lake, and Echo Point." },
      { day: "DAY 3", title: "Munnar to Thekkady Wildlife Sanctuary", details: "Drive to Thekkady. Spice plantation tour, evening Kathakali cultural dance show." },
      { day: "DAY 4", title: "Thekkady to Alleppey Houseboat Cruise", details: "Board private houseboat at noon. Cruise serene coconut palm backwaters with live cooked meals." },
      { day: "DAY 5", title: "Check-out Houseboat → Cochin Drop", details: "Breakfast on houseboat, transfer to Cochin Fort Kochi tour & airport drop." }
    ],
    inclusions: ['2 Nights Munnar Resort', '1 Night Thekkady Hotel', '1 Night Alleppey Houseboat', 'All Meals on Houseboat', 'Private Car'],
    exclusions: ['Flight / Train tickets', 'Boating charges at Periyar', 'Personal tips'],
    hotels: 'Tea County Munnar & Deluxe Alleppey Houseboat',
    transfers: 'Dedicated Private AC Sedan'
  }
];

export const PASSPORT_SERVICES = [
  {
    id: 'new-passport',
    title: 'New Passport Application',
    icon: 'FileText',
    badge: 'MOST POPULAR',
    description: 'Complete document verification, online appointment booking, and step-by-step guidance for fresh passport issuance.',
    processingTime: 'NORMAL: 15-20 Days | TATKAL: 3-5 Days',
    documentsRequired: ['Aadhaar Card', 'PAN Card / Voter ID', '10th Marksheet / Birth Certificate', 'Bank Passbook with photo'],
    feeText: 'Government fees + nominal TQ service charge'
  },
  {
    id: 'renewal-passport',
    title: 'Passport Renewal / Reissue',
    icon: 'RefreshCw',
    badge: 'HASSLE FREE',
    description: 'Seamless renewal assistance for expired passports or passports reaching 10-year validity completion.',
    processingTime: 'NORMAL: 10-15 Days | TATKAL: 2-4 Days',
    documentsRequired: ['Old Passport Original', 'Aadhaar Card', 'Proof of Present Address'],
    feeText: 'Hassle-free appointment slot booking'
  },
  {
    id: 'damaged-passport',
    title: 'Reissue Damaged / Lost Passport',
    icon: 'AlertTriangle',
    badge: 'URGENT SUPPORT',
    description: 'Urgent document preparation, FIR endorsement support, and fast-track processing for lost or damaged passports.',
    processingTime: 'NORMAL: 15-20 Days | TATKAL: 4-7 Days',
    documentsRequired: ['FIR Copy (if lost)', 'Damaged Booklet (if damaged)', 'Affidavit Annexure F', 'Id & Address Proofs'],
    feeText: 'Dedicated case officer support'
  },
  {
    id: 'minor-passport',
    title: 'Minor New / Renewal Passport',
    icon: 'Users',
    badge: 'FAMILY SPECIAL',
    description: 'Specialized minor passport application for children under 18 with parental consent documentation support.',
    processingTime: 'NORMAL: 10-14 Days',
    documentsRequired: ['Birth Certificate', 'Both Parents Passport Copies', 'Annexure D Consent', 'Aadhaar of Minor'],
    feeText: 'Complete parental documentation assistance'
  },
  {
    id: 'tatkal-passport',
    title: 'Tatkal Express Passport',
    icon: 'Zap',
    badge: 'EXPRESS 3 DAYS',
    description: 'Priority emergency processing for urgent international travel, job joinings, or emergency family travel.',
    processingTime: '3 - 5 Working Days',
    documentsRequired: ['3 Valid Verification Documents (Aadhaar, PAN, Voter ID / Driving License)'],
    feeText: 'Priority appointment slots guaranteed'
  },
  {
    id: 'notary-attestation',
    title: 'Public Notary Attestation',
    icon: 'ShieldCheck',
    badge: 'VERIFIED',
    description: 'Official legal notary attestation, affidavit drafting, Annexure preparation for passport clearance.',
    processingTime: 'Same Day Service',
    documentsRequired: ['Original documents to be notarized', 'Valid ID Proof'],
    feeText: 'Legal attestation by certified notary'
  },
  {
    id: 'paper-ads',
    title: 'Paper Ads for Name Change / Lost',
    icon: 'Newspaper',
    badge: 'COMPLIANCE',
    description: 'Publishing mandatory name change or lost passport advertisements in two leading national newspapers.',
    processingTime: '1 - 2 Days Newspaper Publication',
    documentsRequired: ['Name Change Affidavit', 'ID Proofs'],
    feeText: 'Publication clips & affidavits delivered'
  }
];

export const VISA_SERVICES = [
  {
    id: 'visa-thailand',
    country: 'Thailand',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80',
    type: 'E-Visa / Visa on Arrival Assistance',
    validity: '30 Days Single Entry',
    processingTime: '2 - 3 Days',
    requirements: ['Passport valid for 6 months', '2 Passport size photos (white bg)', 'Flight tickets & Hotel voucher', '6 months bank statement'],
    popular: true
  },
  {
    id: 'visa-dubai',
    country: 'Dubai / UAE',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    type: '30 Days / 60 Days Tourist E-Visa',
    validity: '30 or 60 Days',
    processingTime: '24 - 48 Hours Express',
    requirements: ['Passport front & back scan', 'Passport photo with white bg', 'PAN card copy'],
    popular: true
  },
  {
    id: 'visa-singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
    type: 'Multiple Entry Tourist E-Visa',
    validity: 'Up to 2 Years',
    processingTime: '3 - 4 Working Days',
    requirements: ['Passport color scan', 'Form 14A filled & signed', 'Covering letter', '6 months bank statement (min ₹50,000 balance)'],
    popular: true
  },
  {
    id: 'visa-malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80',
    type: 'MDAC / E-Visa Support',
    validity: '30 Days',
    processingTime: '1 - 2 Days',
    requirements: ['Passport copy', 'Digital photo', 'Return air tickets', 'Hotel booking'],
    popular: true
  },
  {
    id: 'visa-schengen',
    country: 'Europe / Schengen',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    type: 'Short Stay Tourist & Business Visa',
    validity: 'As per Itinerary',
    processingTime: '10 - 15 Days',
    requirements: ['Cover letter & Detailed Itinerary', '6 Months Bank statement + ITR 3 Years', 'Travel Insurance (€30,000 coverage)', 'VFS Appointment Slot'],
    popular: true
  },
  {
    id: 'visa-us-uk',
    country: 'USA / UK / Canada / Australia',
    flag: '🌐',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    type: 'Visitor & Tourist Visa Assistance',
    validity: '5 - 10 Years',
    processingTime: 'DS-160 / Form Filing + Slot',
    requirements: ['DS-160 filing guidance', 'US Embassy appointment slot', 'Mock interview preparation', 'Financial documentation checklist'],
    popular: false
  }
];

export const ALL_SERVICES = [
  { id: 'srv-1', title: 'Flight Booking', icon: 'Plane', category: 'Travel', description: 'Best deals on domestic and international airline tickets with instant seats.' },
  { id: 'srv-2', title: 'Hotel Reservation', icon: 'Building2', category: 'Stay', description: 'Curated 3-star, 4-star, 5-star hotels and luxury beach resorts worldwide.' },
  { id: 'srv-3', title: 'Cab Booking', icon: 'Car', category: 'Transfers', description: 'Outstation and local airport taxi transfers with professional drivers.' },
  { id: 'srv-4', title: 'Bus Booking', icon: 'Bus', category: 'Transfers', description: 'AC Sleeper and Volvos bus tickets across major intercity routes.' },
  { id: 'srv-5', title: 'Train Booking', icon: 'Train', category: 'Transfers', description: 'IRCTC railway ticket reservations and tatkal quota assistance.' },
  { id: 'srv-6', title: 'Cruise Packages', icon: 'Ship', category: 'Holiday', description: 'Cordelia Cruises, Royal Caribbean, and Genting Dream ocean voyages.' },
  { id: 'srv-7', title: 'Travel Insurance', icon: 'ShieldCheck', category: 'Protection', description: 'Comprehensive medical and flight delay insurance coverage.' },
  { id: 'srv-8', title: 'Tour Packages', icon: 'Compass', category: 'Holiday', description: 'Customized family, honeymoon, group, and solo holiday packages.' },
  { id: 'srv-9', title: 'Visa Assistance', icon: 'Globe', category: 'Documentation', description: 'End-to-end tourist and business visa application and appointment service.' },
  { id: 'srv-10', title: 'Passport Assistance', icon: 'BookOpen', category: 'Documentation', description: 'Fresh, renewal, tatkal, and minor passport application processing.' },
  { id: 'srv-11', title: 'Spiritual Tours', icon: 'Sun', category: 'Holiday', description: 'Chardham Yatra, Kashi Vishwanath, Tirupati, and Shirdi holy pilgrimage packages.' },
  { id: 'srv-12', title: 'International Tours', icon: 'MapPin', category: 'Holiday', description: 'Thailand, Dubai, Singapore, Bali, Europe, Maldives, & Vietnam packages.' },
  { id: 'srv-13', title: 'Domestic Tours', icon: 'Map', category: 'Holiday', description: 'Kashmir, Kerala, Himachal, Goa, Rajasthan, and Andaman island packages.' }
];

export const DEMO_FLIGHTS = [
  {
    id: 'flt-1',
    airline: 'IndiGo Airlines',
    code: '6E-712',
    from: 'Chennai (MAA)',
    to: 'Bangkok (BKK)',
    departureTime: '01:45 AM',
    arrivalTime: '06:30 AM',
    duration: '3h 15m',
    type: 'Non-stop',
    price: 12450,
    class: 'Economy',
    baggage: '20 kg Check-in + 7 kg Cabin'
  },
  {
    id: 'flt-2',
    airline: 'Thai Airways',
    code: 'TG-338',
    from: 'Chennai (MAA)',
    to: 'Bangkok (BKK)',
    departureTime: '11:10 AM',
    arrivalTime: '04:15 PM',
    duration: '3h 35m',
    type: 'Non-stop',
    price: 16800,
    class: 'Economy',
    baggage: '30 kg Check-in + 7 kg Cabin'
  },
  {
    id: 'flt-3',
    airline: 'Emirates',
    code: 'EK-543',
    from: 'Mumbai (BOM)',
    to: 'Dubai (DXB)',
    departureTime: '04:20 AM',
    arrivalTime: '06:05 AM',
    duration: '3h 15m',
    type: 'Non-stop',
    price: 19500,
    class: 'Economy',
    baggage: '30 kg Check-in + 7 kg Cabin'
  },
  {
    id: 'flt-4',
    airline: 'Air India',
    code: 'AI-995',
    from: 'Delhi (DEL)',
    to: 'Dubai (DXB)',
    departureTime: '08:00 PM',
    arrivalTime: '10:15 PM',
    duration: '3h 45m',
    type: 'Non-stop',
    price: 17200,
    class: 'Economy',
    baggage: '25 kg Check-in + 7 kg Cabin'
  },
  {
    id: 'flt-5',
    airline: 'Singapore Airlines',
    code: 'SQ-529',
    from: 'Bengaluru (BLR)',
    to: 'Singapore (SIN)',
    departureTime: '11:10 PM',
    arrivalTime: '06:10 AM+1',
    duration: '4h 30m',
    type: 'Non-stop',
    price: 24800,
    class: 'Economy',
    baggage: '30 kg Check-in + 7 kg Cabin'
  }
];

export const DEMO_HOTELS = [
  {
    id: 'htl-1',
    name: 'Centara Azure Hotel Pattaya',
    location: 'Pattaya Beach, Thailand',
    rating: 4.8,
    reviewsCount: 320,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 4200,
    amenities: ['Free WiFi', 'Swimming Pool', 'Buffet Breakfast', 'Airport Shuttle', 'Gym'],
    tag: 'Songkran Special Partner'
  },
  {
    id: 'htl-2',
    name: 'Fortune Atrium Hotel Bur Dubai',
    location: 'Bur Dubai, UAE',
    rating: 4.7,
    reviewsCount: 240,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 6800,
    amenities: ['Rooftop Pool', 'Free WiFi', 'Indian Restaurant', 'Metro Nearby', 'Spa'],
    tag: 'Luxury 4-Star'
  },
  {
    id: 'htl-3',
    name: 'Hotel Boss Singapore',
    location: 'Victoria Street, Singapore',
    rating: 4.6,
    reviewsCount: 450,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 8900,
    amenities: ['City Skyline View', 'Outdoor Pool', 'Free High Speed WiFi', 'MRT Station 3 Min'],
    tag: 'Family Favorite'
  },
  {
    id: 'htl-4',
    name: 'Dedari Villa & Jungle Retreat Ubud',
    location: 'Ubud, Bali',
    rating: 4.9,
    reviewsCount: 190,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 7500,
    amenities: ['Private Pool', 'Rice Terrace View', 'Floating Breakfast', 'Balinese Spa'],
    tag: 'Honeymoon Choice'
  }
];

export const OFFERS = [
  {
    id: 'off-1',
    title: 'Thailand Songkran Special',
    subtitle: '3 Nights Pattaya & Bangkok Water Festival Package',
    originalPrice: 22000,
    offerPrice: 18400,
    badge: 'LIMITED OFFER',
    tagColor: 'bg-rose-600',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    validTill: 'Valid till 10th April 2026',
    packageId: 'thailand-songkran'
  },
  {
    id: 'off-2',
    title: 'Dubai Desert & City Delight',
    subtitle: '4 Nights Stay + Burj Khalifa + Safari Dinner',
    originalPrice: 39990,
    offerPrice: 34990,
    badge: 'POPULAR',
    tagColor: 'bg-amber-600',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    validTill: 'Valid for bookings this week',
    packageId: 'dubai-deluxe'
  },
  {
    id: 'off-3',
    title: 'Singapore Sentosa Fiesta',
    subtitle: '4 Nights Stay + Universal Studios Pass Included',
    originalPrice: 48000,
    offerPrice: 42500,
    badge: 'BEST VALUE',
    tagColor: 'bg-[#0B5D3B]',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    validTill: 'Limited slots available',
    packageId: 'singapore-sentosa'
  },
  {
    id: 'off-4',
    title: 'Kashmir Snow Special Getaway',
    subtitle: '4 Nights Stay with Dal Lake Houseboat & Gulmarg',
    originalPrice: 19900,
    offerPrice: 16500,
    badge: 'LIMITED OFFER',
    tagColor: 'bg-rose-600',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
    validTill: 'Winter Season Discount',
    packageId: 'kashmir-paradise'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Rajesh & Sunitha Kumar',
    location: 'Chennai, Tamil Nadu',
    trip: 'Thailand Songkran Package',
    rating: 5,
    quote: 'Everything was extremely well planned! TQ Fly Travels handled our Pattaya hotels, Coral Island boat, and local transfers seamlessly. The Songkran water festival experience was unforgettable.'
  },
  {
    id: 't2',
    name: 'Anand Viswanathan',
    location: 'Coimbatore',
    trip: 'Tatkal Passport Assistance',
    rating: 5,
    quote: 'I urgently needed a Tatkal passport renewal for a sudden business trip. TQ Fly Travels checked all my documents and secured an appointment slot within 24 hours. Got my passport in 3 days!'
  },
  {
    id: 't3',
    name: 'Priya & Vikram Sharma',
    location: 'Bengaluru',
    trip: 'Bali Honeymoon Package',
    rating: 5,
    quote: 'The private pool villa in Ubud recommended by TQ Fly Travels was unbelievable. Nusa Penida trip driver was super courteous. 100% stress-free honeymoon holiday!'
  },
  {
    id: 't4',
    name: 'Dr. Mohammed Farooq',
    location: 'Trichy',
    trip: 'Dubai Family & Desert Safari Tour',
    rating: 5,
    quote: 'Awesome family trip to Dubai. Burj Khalifa views and the Desert Safari BBQ dinner were the top highlights. Quick response on WhatsApp whenever we had a query.'
  }
];

export const FAQS = [
  {
    question: "Is international flight included in the ₹18,400 Thailand Songkran package?",
    answer: "No, the ₹18,400 Thailand package excludes international flight tickets so that you have flexibility in selecting your preferred departure city and airline. However, our TQ Fly Travels team can easily book your flights at competitive rates upon request."
  },
  {
    question: "How does TQ Fly Travels help with Passport applications?",
    answer: "We provide end-to-end passport assistance including document verification, online form submission, Passport Seva Kendra (PSK) appointment slot booking, affidavit guidance, and Tatkal express processing."
  },
  {
    question: "How do I book or enquire about a tour package?",
    answer: "You can click '+ Add to My Trip' to build your itinerary or click 'Enquire on WhatsApp' for instant assistance directly with our travel advisor at +1 (415) 555-0123."
  },
  {
    question: "What visa support is provided for international trips?",
    answer: "We assist with tourist E-visas, VFS appointment scheduling, cover letter drafting, financial documentation checklists, and step-by-step guidance for Thailand, Dubai, Singapore, Malaysia, Schengen, UK, and USA visas."
  }
];
