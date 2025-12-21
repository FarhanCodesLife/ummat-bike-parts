export interface BikePart {
  id: number;
  name: string;
  category: string;
  tags: string[]; // Search ko asaan banane ke liye
  a125: number;
  b125: number;
  a70: number;
  b70: number;
}

export const bikeParts: BikePart[] = [
  // --- BODY & EXTERIOR ---
  { id: 1, name: "Tanki + Side Cover + Lock (ٹنکی + سائیڈ کور + لاک)", category: "Body", tags: ["tank", "tanki", "cover", "lock", "set", "body"], a125: 9000, b125: 8000, a70: 4400, b70: 2400 },
  { id: 2, name: "Monogram Front (مونوگرام فرنٹ)", category: "Body", tags: ["logo", "monogram", "front", "name"], a125: 150, b125: 0, a70: 100, b70: 0 },
  { id: 3, name: "Side Cover Jodi (سائیڈ کور جوڑی)", category: "Body", tags: ["cover", "side", "jodi", "tapa"], a125: 1500, b125: 650, a70: 500, b70: 200 },
  { id: 4, name: "Side Cover Lock Jodi (سائیڈ کور لاک جوڑی)", category: "Body", tags: ["lock", "cover", "side", "jodi"], a125: 300, b125: 0, a70: 300, b70: 0 },
  { id: 5, name: "Tanki Dhakna (ٹنکی ڈھکنا)", category: "Body", tags: ["cap", "tank", "tanki", "dhakna"], a125: 1100, b125: 950, a70: 500, b70: 320 },
  { id: 6, name: "Tanki Rubber (ٹنکی ربڑ)", category: "Body", tags: ["rubber", "tank", "tanki"], a125: 50, b125: 0, a70: 40, b70: 0 },
  { id: 7, name: "Seat Mukammal (سیٹ مکمل)", category: "Body", tags: ["seat", "complete", "cushion"], a125: 5500, b125: 3500, a70: 3100, b70: 1700 },
  { id: 8, name: "Seat Bracket Lohe ki (سیٹ بریکٹ لوہے کی)", category: "Body", tags: ["bracket", "seat", "loha", "iron"], a125: 0, b125: 0, a70: 600, b70: 400 },
  { id: 26, name: "Agla Monogram (اگلا مونوگرام)", category: "Body", tags: ["logo", "front", "monogram"], a125: 150, b125: 0, a70: 100, b70: 0 },
  { id: 27, name: "Agla Monogram Patti (اگلا مونوگرام پٹی)", category: "Body", tags: ["patti", "front", "monogram", "strip"], a125: 200, b125: 0, a70: 120, b70: 0 },
  { id: 28, name: "Mudguard Jodi Chrome (مڈگارڈ جوڑی کروم)", category: "Body", tags: ["mudguard", "fender", "chrome", "jodi"], a125: 3000, b125: 2500, a70: 2100, b70: 1500 },
  { id: 29, name: "Mudguard Patti (مڈگارڈ پٹی کٹ)", category: "Body", tags: ["patti", "mudguard", "strip", "bolt"], a125: 150, b125: 0, a70: 130, b70: 0 },
  { id: 35, name: "Pichla Hub/Rim (پچھلا رم/ہب)", category: "Body", tags: ["rim", "hub", "back", "rear", "pichla"], a125: 2000, b125: 1500, a70: 1600, b70: 1200 },
  { id: 36, name: "Agla Hub/Rim (اگلا رم/ہب)", category: "Body", tags: ["rim", "hub", "front", "agla"], a125: 1700, b125: 1200, a70: 1200, b70: 800 },
  { id: 38, name: "Dum ki Jodi (دم کی جوڑی)", category: "Body", tags: ["tail", "dum", "back", "rubber"], a125: 120, b125: 0, a70: 80, b70: 0 },
  { id: 55, name: "Carrier (کیریئر)", category: "Body", tags: ["carrier", "back", "rest"], a125: 880, b125: 750, a70: 500, b70: 0 },
  { id: 57, name: "Back Light Bracket (بیک لائٹ بریکٹ)", category: "Body", tags: ["bracket", "light", "back", "rear"], a125: 340, b125: 0, a70: 280, b70: 0 },
  { id: 66, name: "Chain Cover Plastic (چین کور پلاسٹک)", category: "Body", tags: ["chain", "cover", "plastic"], a125: 600, b125: 450, a70: 500, b70: 300 },
  { id: 67, name: "Chain Cover New (چین کور نیا)", category: "Body", tags: ["chain", "cover", "loha", "iron", "new"], a125: 1100, b125: 950, a70: 900, b70: 700 },
  { id: 69, name: "Dum Jodi (دم جوڑی)", category: "Body", tags: ["tail", "dum", "jodi"], a125: 100, b125: 0, a70: 100, b70: 0 },
  { id: 70, name: "Seat U Bracket Plastic (سیٹ بریکٹ پلاسٹک)", category: "Body", tags: ["seat", "bracket", "plastic", "u"], a125: 0, b125: 0, a70: 500, b70: 400 },

  // --- HANDLE & CONTROLS ---
  { id: 9, name: "Handle (ہینڈل)", category: "Controls", tags: ["handle", "bar", "steering"], a125: 900, b125: 700, a70: 800, b70: 700 },
  { id: 10, name: "Tee (ٹی)", category: "Controls", tags: ["tee", "t", "handle", "fork"], a125: 500, b125: 0, a70: 300, b70: 0 },
  { id: 11, name: "Assembly Mukammal Set (اسمبلی مکمل سیٹ)", category: "Controls", tags: ["assembly", "switch", "handle", "set"], a125: 1400, b125: 0, a70: 1100, b70: 0 },
  { id: 12, name: "Brake Lever ka Gutka (بریک لیور کا گٹکا)", category: "Controls", tags: ["brake", "lever", "gutka", "small"], a125: 150, b125: 0, a70: 120, b70: 0 },
  { id: 13, name: "Handle Muthi Jodi (ہینڈل مٹھی جوڑی)", category: "Controls", tags: ["grip", "handle", "muthi", "jodi"], a125: 200, b125: 0, a70: 120, b70: 0 },
  { id: 14, name: "Brake Lever (بریک لیور)", category: "Controls", tags: ["brake", "lever", "hand"], a125: 150, b125: 0, a70: 120, b70: 0 },
  { id: 15, name: "Accelerator Cable (ایکسلیٹر کیبل)", category: "Controls", tags: ["race", "cable", "accelerator", "wire"], a125: 250, b125: 200, a70: 200, b70: 150 },
  { id: 16, name: "Clutch Lever (کلچ لیور)", category: "Controls", tags: ["clutch", "lever", "hand"], a125: 200, b125: 0, a70: 200, b70: 100 },
  { id: 17, name: "Haff Assembly (باف اسمبلی)", category: "Controls", tags: ["haff", "clutch", "assembly"], a125: 650, b125: 500, a70: 500, b70: 400 },
  { id: 18, name: "Clutch Gutka (کلچ گٹکا)", category: "Controls", tags: ["clutch", "gutka", "small"], a125: 200, b125: 0, a70: 140, b70: 0 },
  { id: 51, name: "Gear Lever (گیئر لیور)", category: "Controls", tags: ["gear", "lever", "foot"], a125: 510, b125: 400, a70: 310, b70: 250 },

  // --- ELECTRICAL & METER ---
  { id: 19, name: "Meter Switch (میٹر سوئچ)", category: "Electrical", tags: ["meter", "switch", "key", "ignition"], a125: 350, b125: 0, a70: 200, b70: 0 },
  { id: 20, name: "Meter Case (میٹر کیس)", category: "Electrical", tags: ["meter", "case", "body", "cover"], a125: 700, b125: 0, a70: 190, b70: 0 },
  { id: 21, name: "Meter Patti (میٹر پٹی)", category: "Electrical", tags: ["meter", "patti", "bracket"], a125: 300, b125: 0, a70: 150, b70: 0 },
  { id: 22, name: "Head Light (ہیڈ لائٹ)", category: "Electrical", tags: ["light", "front", "headlight", "lamp"], a125: 1500, b125: 650, a70: 500, b70: 320 },
  { id: 40, name: "Mukammal Meter (مکمل میٹر)", category: "Electrical", tags: ["meter", "speedometer", "complete"], a125: 1900, b125: 1300, a70: 750, b70: 650 },
  { id: 56, name: "Back Light (بیک لائٹ)", category: "Electrical", tags: ["light", "back", "rear", "indicator"], a125: 700, b125: 500, a70: 450, b70: 300 },
  { id: 59, name: "Indicator Char (اشارے سیٹ)", category: "Electrical", tags: ["indicator", "light", "signal", "ishare"], a125: 1000, b125: 650, a70: 600, b70: 450 },
  { id: 60, name: "Mukammal Wiring (مکمل وائرنگ)", category: "Electrical", tags: ["wire", "wiring", "electrical", "complete"], a125: 1800, b125: 1500, a70: 1400, b70: 1000 },
  { id: 62, name: "Battery (بیٹری)", category: "Electrical", tags: ["battery", "power", "cell"], a125: 1800, b125: 0, a70: 1800, b70: 1200 },
  { id: 63, name: "Wire Switch (وائر سوئچ)", category: "Electrical", tags: ["wire", "switch", "button"], a125: 250, b125: 0, a70: 250, b70: 0 },
  { id: 64, name: "Horn (ہارن)", category: "Electrical", tags: ["horn", "sound", "bell"], a125: 500, b125: 350, a70: 450, b70: 350 },
  { id: 71, name: "Lock Set Mukammal", category: "Electrical", tags: ["lock", "set", "key", "complete"], a125: 1600, b125: 0, a70: 1400, b70: 950 },
  { id: 77, name: "Seal Battery Cell (سیل بیٹری سیل)", category: "Electrical", tags: ["battery", "cell", "acid", "seal"], a125: 150, b125: 0, a70: 150, b70: 0 },
  { id: 102, name: "Fancy Monogram Front", category: "Electrical", tags: ["fancy", "monogram", "light", "logo"], a125: 1000, b125: 500, a70: 1000, b70: 500 },
  { id: 103, name: "Focus Light (فوکس لائٹ)", category: "Electrical", tags: ["focus", "light", "extra", "led"], a125: 900, b125: 350, a70: 900, b70: 350 },

  // --- WHEELS & BRAKES ---
  { id: 30, name: "Mukammal Rim Jodi + Hub", category: "Wheels", tags: ["rim", "wheel", "hub", "complete", "jodi"], a125: 9000, b125: 8800, a70: 6500, b70: 5000 },
  { id: 31, name: "Rim ki Jodi 2 Adad (رم جوڑی)", category: "Wheels", tags: ["rim", "wheel", "jodi", "circle"], a125: 5100, b125: 3000, a70: 2500, b70: 2000 },
  { id: 32, name: "Spoke ki Jodi 2 Adad (تیلیاں)", category: "Wheels", tags: ["spoke", "tiliyan", "wire", "wheel"], a125: 900, b125: 0, a70: 600, b70: 0 },
  { id: 33, name: "Wheel Thru ki Mazdoori", category: "Wheels", tags: ["labor", "wheel", "thru", "fitting"], a125: 650, b125: 0, a70: 450, b70: 0 },
  { id: 34, name: "Hub Agla Pichla (ہب)", category: "Wheels", tags: ["hub", "wheel", "center", "drum"], a125: 6800, b125: 0, a70: 3200, b70: 0 },
  { id: 37, name: "Hub k Bearing (بیرنگ)", category: "Wheels", tags: ["bearing", "hub", "wheel", "ball"], a125: 200, b125: 0, a70: 140, b70: 0 },
  { id: 39, name: "Brake Setting (بریک سیٹنگ)", category: "Wheels", tags: ["brake", "setting", "adjustment"], a125: 450, b125: 0, a70: 380, b70: 0 },
  { id: 47, name: "Brake Pedal (بریک پیڈل)", category: "Wheels", tags: ["brake", "pedal", "foot"], a125: 500, b125: 430, a70: 500, b70: 360 },
  { id: 58, name: "Footrest Jodi (فٹ ریسٹ جوڑی)", category: "Wheels", tags: ["footrest", "pedal", "jodi", "rubber"], a125: 350, b125: 0, a70: 280, b70: 0 },
  { id: 84, name: "Tyre (ٹائر)", category: "Wheels", tags: ["tyre", "rubber", "wheel"], a125: 5000, b125: 4200, a70: 2700, b70: 2400 },
  { id: 85, name: "Tube 1 Adad (ٹیوب)", category: "Wheels", tags: ["tube", "air", "tyre"], a125: 600, b125: 0, a70: 450, b70: 0 },
  { id: 86, name: "Brake Shoe 2 Adad (بریک شو)", category: "Wheels", tags: ["brake", "shoe", "lining"], a125: 350, b125: 0, a70: 250, b70: 0 },

  // --- SUSPENSION ---
  { id: 23, name: "Kaan Jodi (کان جوڑی)", category: "Suspension", tags: ["kaan", "ear", "light", "bracket"], a125: 400, b125: 300, a70: 370, b70: 270 },
  { id: 24, name: "Jump Glass Jodi (جمپ گلاس)", category: "Suspension", tags: ["jump", "glass", "shocks", "cover"], a125: 400, b125: 350, a70: 370, b70: 270 },
  { id: 25, name: "Agly Jump ki Jodi (اگلے جمپ)", category: "Suspension", tags: ["jump", "front", "shocks", "suspension"], a125: 7500, b125: 4500, a70: 6000, b70: 4300 },
  { id: 48, name: "Engine Footrest+Stand (انجن فٹ ریسٹ)", category: "Suspension", tags: ["footrest", "engine", "stand", "bar"], a125: 900, b125: 700, a70: 850, b70: 600 },
  { id: 49, name: "Tail Light (ٹیل لائٹ)", category: "Suspension", tags: ["tail", "light", "back"], a125: 740, b125: 0, a70: 670, b70: 580 },
  { id: 52, name: "Kainchi (کینچی)", category: "Suspension", tags: ["kainchi", "swingarm", "rear", "suspension"], a125: 2800, b125: 1650, a70: 1450, b70: 1250 },
  { id: 53, name: "Pichla Jump Glass Jodi (پچھلا جمپ گلاس)", category: "Suspension", tags: ["jump", "glass", "back", "rear"], a125: 450, b125: 0, a70: 300, b70: 0 },
  { id: 54, name: "Mukammal Pichli Jump Jodi", category: "Suspension", tags: ["jump", "back", "rear", "shocks"], a125: 4000, b125: 3100, a70: 3800, b70: 3000 },
  { id: 61, name: "Side Stand (سائیڈ اسٹینڈ)", category: "Suspension", tags: ["stand", "side", "parking"], a125: 500, b125: 350, a70: 350, b70: 300 },

  // --- ENGINE & FUEL ---
  { id: 41, name: "Petrol Tank (پیٹرول ٹینک)", category: "Engine", tags: ["petrol", "tank", "fuel"], a125: 470, b125: 270, a70: 420, b70: 270 },
  { id: 42, name: "Carburetor (کاربوریٹر)", category: "Engine", tags: ["carburetor", "fuel", "engine"], a125: 3300, b125: 0, a70: 3000, b70: 0 },
  { id: 43, name: "Silencer (سلینسر)", category: "Engine", tags: ["silencer", "exhaust", "smoke"], a125: 3800, b125: 0, a70: 3500, b70: 3000 },
  { id: 44, name: "Silencer Patti (سلینسر پٹی)", category: "Engine", tags: ["patti", "silencer", "strip", "chrome"], a125: 650, b125: 0, a70: 150, b70: 0 },
  { id: 45, name: "Silencer Packing (سلینسر پیکنگ)", category: "Engine", tags: ["packing", "silencer", "seal"], a125: 50, b125: 0, a70: 30, b70: 0 },
  { id: 46, name: "Silencer Kainchi Patti", category: "Engine", tags: ["patti", "silencer", "bracket"], a125: 500, b125: 0, a70: 300, b70: 0 },
  { id: 50, name: "Kick (کک)", category: "Engine", tags: ["kick", "start", "engine"], a125: 1150, b125: 830, a70: 500, b70: 380 },
  { id: 65, name: "Plug + Cap (پلگ اور کیپ)", category: "Engine", tags: ["plug", "spark", "cap", "current"], a125: 550, b125: 250, a70: 500, b70: 200 },
  { id: 68, name: "Chain Sprocket (چین گراری سیٹ)", category: "Engine", tags: ["chain", "sprocket", "garari", "set"], a125: 2800, b125: 2000, a70: 2000, b70: 1500 },
  { id: 94, name: "Head Cylinder ka Kaam", category: "Engine", tags: ["head", "cylinder", "labor", "repair"], a125: 0, b125: 0, a70: 0, b70: 0 },
  { id: 95, name: "Engine ka Kaam", category: "Engine", tags: ["engine", "labor", "repair", "overhaul"], a125: 0, b125: 0, a70: 0, b70: 0 },

  // --- FINISHING & CHEMICALS ---
  { id: 72, name: "Silver Spray (سلور اسپرے)", category: "Chemicals", tags: ["spray", "color", "silver", "paint"], a125: 550, b125: 0, a70: 550, b70: 0 },
  { id: 73, name: "Kala Spray (کالا اسپرے)", category: "Chemicals", tags: ["spray", "color", "black", "paint"], a125: 550, b125: 0, a70: 550, b70: 0 },
  { id: 74, name: "Red Spray (ریڈ اسپرے)", category: "Chemicals", tags: ["spray", "color", "red", "paint"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 75, name: "Lacquer (لیکر)", category: "Chemicals", tags: ["lacquer", "shine", "paint", "finish"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 76, name: "Oil (آئل)", category: "Chemicals", tags: ["oil", "engine", "lubricant"], a125: 1100, b125: 1000, a70: 700, b70: 450 },
  { id: 78, name: "Polisher (پالشر)", category: "Chemicals", tags: ["polish", "shine", "wax"], a125: 200, b125: 0, a70: 200, b70: 0 },
  { id: 79, name: "Tube RTV (ٹیوب RTV)", category: "Chemicals", tags: ["silicone", "tube", "rtv", "glue"], a125: 100, b125: 0, a70: 100, b70: 0 },
  { id: 80, name: "Magic Tube (میجک ٹیوب)", category: "Chemicals", tags: ["magic", "glue", "repair"], a125: 100, b125: 0, a70: 100, b70: 0 },
  { id: 81, name: "Lota (لوٹا)", category: "Chemicals", tags: ["lota", "cleaning", "water"], a125: 0, b125: 0, a70: 170, b70: 0 },
  { id: 82, name: "Bottle (بوتل)", category: "Chemicals", tags: ["bottle", "spray", "clean"], a125: 0, b125: 0, a70: 170, b70: 0 },
  { id: 83, name: "Filter (فلٹر)", category: "Chemicals", tags: ["filter", "air", "oil"], a125: 0, b125: 0, a70: 170, b70: 0 },

  // --- PREMIUM SERVICES & MODS ---
  { id: 87, name: "Buff Normal (بف نارمل)", category: "Premium", tags: ["buffing", "shine", "polish", "cleaning"], a125: 5000, b125: 4000, a70: 4000, b70: 3000 },
  { id: 88, name: "Buff Steel (بف سٹیل)", category: "Premium", tags: ["buffing", "steel", "shine"], a125: 7000, b125: 5000, a70: 5000, b70: 4500 },
  { id: 89, name: "Buff Chrome + Color", category: "Premium", tags: ["buffing", "chrome", "color", "full"], a125: 40000, b125: 0, a70: 30000, b70: 0 },
  { id: 90, name: "Number Plate (نمبر پلیٹ)", category: "Premium", tags: ["number", "plate", "name"], a125: 800, b125: 0, a70: 800, b70: 0 },
  { id: 91, name: "Sticker Modify (سٹیکر)", category: "Premium", tags: ["sticker", "design", "graphics", "modify"], a125: 2500, b125: 1500, a70: 2000, b70: 1400 },
  { id: 92, name: "Leather Cloth (لیڈر دھلائی)", category: "Premium", tags: ["wash", "cleaning", "leather", "cloth"], a125: 200, b125: 0, a70: 200, b70: 0 },
  { id: 93, name: "Mix Nut Bolt (مکس نٹ بولٹ)", category: "Premium", tags: ["nut", "bolt", "screw", "mix"], a125: 600, b125: 0, a70: 300, b70: 0 },
  { id: 96, name: "Fancy Head Light (فینسی لائٹ)", category: "Premium", tags: ["fancy", "light", "led", "decoration"], a125: 4000, b125: 3000, a70: 4000, b70: 3000 },
  { id: 97, name: "Fancy Back Light (فینسی بیک لائٹ)", category: "Premium", tags: ["fancy", "light", "back", "decoration"], a125: 1500, b125: 1000, a70: 1500, b70: 1000 },
  { id: 98, name: "Fancy Meter Gol (فینسی میٹر)", category: "Premium", tags: ["fancy", "meter", "round", "gol"], a125: 2500, b125: 1500, a70: 2500, b70: 1500 },
  { id: 99, name: "Fancy Silencer 70", category: "Premium", tags: ["fancy", "silencer", "sound", "chrome"], a125: 0, b125: 0, a70: 2200, b70: 0 },
  { id: 100, name: "Motif/Lighting (موٹیف/لائٹ)", category: "Premium", tags: ["lighting", "motif", "design"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 101, name: "Mukammal Bolt Kit (بولٹ کٹ)", category: "Premium", tags: ["bolt", "kit", "complete", "screw"], a125: 2800, b125: 0, a70: 2200, b70: 0 },
];