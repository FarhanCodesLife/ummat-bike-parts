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
  // === 1. FRONT FACE (Headlight, Meter & Front Body) ===
  { id: 1, name: "Head Light (ہیڈ لائٹ)", category: "Electrical", tags: ["light", "front", "headlight", "lamp"], a125: 1500, b125: 650, a70: 500, b70: 320 },
  { id: 2, name: "Fancy Head Light (فینسی لائٹ)", category: "Premium", tags: ["fancy", "light", "led", "decoration"], a125: 4000, b125: 3000, a70: 4000, b70: 3000 },
  { id: 3, name: "Focus Light (فوکس لائٹ)", category: "Electrical", tags: ["focus", "light", "extra", "led"], a125: 900, b125: 350, a70: 900, b70: 350 },
  { id: 4, name: "Agla Monogram (اگلا مونوگرام)", category: "Body", tags: ["logo", "front", "monogram"], a125: 150, b125: 0, a70: 100, b70: 0 },
  { id: 5, name: "Agla Monogram Patti (اگلا مونوگرام پٹی)", category: "Body", tags: ["patti", "front", "monogram", "strip"], a125: 200, b125: 0, a70: 120, b70: 0 },
  { id: 6, name: "Fancy Monogram Front", category: "Electrical", tags: ["fancy", "monogram", "light", "logo"], a125: 1000, b125: 500, a70: 1000, b70: 500 },
  { id: 7, name: "Mukammal Meter (مکمل میٹر)", category: "Electrical", tags: ["meter", "speedometer", "complete"], a125: 1900, b125: 1300, a70: 750, b70: 650 },
  { id: 8, name: "Fancy Meter Gol (فینسی میٹر)", category: "Premium", tags: ["fancy", "meter", "round", "gol"], a125: 2500, b125: 1500, a70: 2500, b70: 1500 },
  { id: 9, name: "Meter Case (میٹر کیس)", category: "Electrical", tags: ["meter", "case", "body", "cover"], a125: 700, b125: 0, a70: 190, b70: 0 },
  { id: 10, name: "Meter Patti (میٹر پٹی)", category: "Electrical", tags: ["meter", "patti", "bracket"], a125: 300, b125: 0, a70: 150, b70: 0 },
  { id: 11, name: "Meter Lock Switch (میٹر سوئچ)", category: "Electrical", tags: ["meter", "switch", "key", "ignition"], a125: 350, b125: 0, a70: 200, b70: 0 },
  
  // === 2. STEERING & CONTROLS (Handle System) ===
  // === 2. STEERING & CONTROLS (Handle System) ===
  { id: 12, name: "Handle (ہینڈل)", category: "Controls", tags: ["handle", "bar", "steering"], a125: 900, b125: 700, a70: 800, b70: 700 },
  { id: 13, name: "Tee (ٹی)", category: "Controls", tags: ["tee", "t", "handle", "fork"], a125: 500, b125: 0, a70: 300, b70: 0 },
  { id: 14, name: "Assembly Mukammal Set (اسمبلی مکمل سیٹ)", category: "Controls", tags: ["assembly", "switch", "handle", "set"], a125: 1400, b125: 0, a70: 1100, b70: 0 },
  { id: 15, name: "Haff Assembly (باف اسمبلی)", category: "Controls", tags: ["haff", "clutch", "assembly"], a125: 650, b125: 500, a70: 500, b70: 400 },
  { id: 16, name: "Handle Muthi Jodi (ہینڈل مٹھی جوڑی)", category: "Controls", tags: ["grip", "handle", "muthi", "jodi"], a125: 200, b125: 0, a70: 120, b70: 0 },
  { id: 17, name: "Brake Lever (بریک لیور)", category: "Controls", tags: ["brake", "lever", "hand"], a125: 150, b125: 0, a70: 120, b70: 0 },
  { id: 18, name: "Brake Lever ka Gutka (بریک لیور کا گٹکا)", category: "Controls", tags: ["brake", "lever", "gutka", "small"], a125: 150, b125: 0, a70: 120, b70: 0 },
  { id: 19, name: "Brake Cable (بریک کیبل)", category: "Controls", tags: ["brake", "wire"], a125: 150, b125: 0, a70: 120, b70: 0 },
  { id: 20, name: "Clutch Lever (کلچ لیور)", category: "Controls", tags: ["clutch", "lever", "hand"], a125: 200, b125: 0, a70: 200, b70: 100 },
  { id: 21, name: "Clutch Lever Gutka (کلچ گٹکا)", category: "Controls", tags: ["clutch", "gutka"], a125: 200, b125: 0, a70: 140, b70: 0 },
  { id: 22, name: "Clutch Cable (کلچ کیبل)", category: "Controls", tags: ["clutch", "wire"], a125: 200, b125: 0, a70: 140, b70: 0 },
  { id: 23, name: "Accelerator Cable (ایکسلیٹر کیبل)", category: "Controls", tags: ["race", "cable"], a125: 250, b125: 200, a70: 200, b70: 150 },
  { id: 24, name: "Horn (ہارن)", category: "Electrical", tags: ["horn", "sound"], a125: 500, b125: 350, a70: 450, b70: 350 },

  // === 3. FRONT SUSPENSION & MUDGUARD ===
  { id: 25, name: "Agly Jump ki Jodi (اگلے جمپ)", category: "Suspension", tags: ["jump", "front", "shocks"], a125: 7500, b125: 4500, a70: 6000, b70: 4300 },
  { id: 26, name: "Agly Jump ki service (اگلے جمپ)", category: "Suspension", tags: ["service", "shocks"], a125: 2200, b125: 0, a70: 2000, b70: 0 },
  { id: 27, name: "Chote bare Jump Glass Jodi (جمپ گلاس)", category: "Suspension", tags: ["jump", "glass"], a125: 400, b125: 350, a70: 370, b70: 270 },
  { id: 28, name: "Kaan Jodi (کان جوڑی)", category: "Suspension", tags: ["kaan", "ear", "bracket"], a125: 400, b125: 300, a70: 370, b70: 270 },
  { id: 29, name: "Agla Mudguard (اگلا مڈگارڈ)", category: "Body", tags: ["fender", "front", "agla"], a125: 1700, b125: 1200, a70: 1000, b70: 700 },
  { id: 30, name: "Mudguard Jodi Black (مڈگارڈ جوڑی)", category: "Body", tags: ["mudguard", "fender", "jodi"], a125: 3000, b125: 2500, a70: 2100, b70: 1500 },
  { id: 31, name: "Mudguard bolt kit (مڈگارڈ  )", category: "Body", tags: ["patti", "mudguard", "strip"], a125: 150, b125: 0, a70: 130, b70: 0 },

  // === 4. TANKI, SEAT & SIDE COVERS (Body Kit) ===
  { id: 32, name: "Tanki + Side Cover + Lock (ٹنکی + سائیڈ کور + لاک)", category: "Body", tags: ["tank", "tanki", "cover", "lock"], a125: 9000, b125: 8000, a70: 4400, b70: 2400 },
  { id: 33, name: "Petrol kak (پیٹرول )", category: "Engine", tags: ["petrol", "tank", "fuel"], a125: 470, b125: 270, a70: 420, b70: 270 },
  { id: 34, name: "Tanki Dhakna (ٹنکی ڈھکنا)", category: "Body", tags: ["cap", "tank", "dhakna"], a125: 1100, b125: 950, a70: 500, b70: 320 },
  { id: 35, name: "Tanki Rubber (ٹنکی ربڑ)", category: "Body", tags: ["rubber", "tank"], a125: 50, b125: 0, a70: 40, b70: 0 },
  { id: 36, name: "Monogram Tanki (مونوگرام )", category: "Body", tags: ["logo", "monogram", "tanki"], a125: 150, b125: 0, a70: 100, b70: 0 },
  { id: 37, name: "Side Cover Jodi (سائیڈ کور جوڑی)", category: "Body", tags: ["cover", "side", "tapa"], a125: 1500, b125: 650, a70: 500, b70: 200 },
  { id: 38, name: "Side Cover Lock Jodi (سائیڈ کور لاک جوڑی)", category: "Body", tags: ["lock", "cover", "side"], a125: 300, b125: 0, a70: 300, b70: 0 },
  { id: 39, name: "Seat Mukammal (سیٹ مکمل)", category: "Body", tags: ["seat", "complete"], a125: 5500, b125: 3500, a70: 3100, b70: 1700 },
  { id: 40, name: "Seat Bracket Lohe ki (سیٹ بریکٹ لوہے کی)", category: "Body", tags: ["bracket", "seat", "loha"], a125: 0, b125: 0, a70: 600, b70: 400 },
  { id: 41, name: "Seat U Bracket Plastic (سیٹ بریکٹ پلاسٹک)", category: "Body", tags: ["seat", "bracket", "plastic"], a125: 0, b125: 0, a70: 500, b70: 400 },

  // === 5. ENGINE, ELECTRICAL & CENTER AREA ===
  { id: 42, name: "Carburetor (کاربوریٹر)", category: "Engine", tags: ["carburetor", "fuel"], a125: 3300, b125: 0, a70: 3000, b70: 0 },
  { id: 43, name: "Plug + Cap (پلگ اور کیپ)", category: "Engine", tags: ["plug", "spark", "cap"], a125: 550, b125: 250, a70: 500, b70: 200 },
  { id: 44, name: "Mukammal Wiring (مکمل وائرنگ)", category: "Electrical", tags: ["wire", "wiring"], a125: 1800, b125: 1500, a70: 1400, b70: 1000 },
  { id: 45, name: "Battery (بیٹری)", category: "Electrical", tags: ["battery", "power"], a125: 1800, b125: 0, a70: 1800, b70: 1200 },
  { id: 46, name: "Seal Battery Cell (سیل بیٹری سیل)", category: "Electrical", tags: ["battery", "cell"], a125: 150, b125: 0, a70: 150, b70: 0 },
  { id: 47, name: "Lock Set Mukammal", category: "Electrical", tags: ["lock", "set", "key"], a125: 1600, b125: 0, a70: 1400, b70: 950 },
  { id: 48, name: "Wire Switch (وائر سوئچ)", category: "Electrical", tags: ["wire", "switch"], a125: 250, b125: 0, a70: 250, b70: 0 },
  { id: 49, name: "Head Cylinder ka Kaam", category: "Engine", tags: ["head", "cylinder", "repair"], a125: 0, b125: 0, a70: 0, b70: 0 },
  { id: 50, name: "Engine ka Kaam", category: "Engine", tags: ["engine", "overhaul"], a125: 0, b125: 0, a70: 0, b70: 0 },

  // === 6. FOOT CONTROLS & STANDS ===
  { id: 51, name: "Kick (کک)", category: "Engine", tags: ["kick", "start"], a125: 1150, b125: 830, a70: 500, b70: 380 },
  { id: 52, name: "Gear Lever (گیئر لیور)", category: "Controls", tags: ["gear", "lever"], a125: 510, b125: 400, a70: 310, b70: 250 },
  { id: 53, name: "Engine Footrest+Stand (انجن فٹ ریسٹ)", category: "Suspension", tags: ["footrest", "engine", "stand"], a125: 900, b125: 700, a70: 850, b70: 600 },
  { id: 54, name: "Footrest Jodi (فٹ ریسٹ جوڑی)", category: "Wheels", tags: ["footrest", "pedal"], a125: 350, b125: 0, a70: 280, b70: 0 },
  { id: 55, name: "Brake Pedal (بریک پیڈل)", category: "Wheels", tags: ["brake", "pedal"], a125: 500, b125: 430, a70: 500, b70: 360 },
  { id: 56, name: "Dabble Stand ( اسٹینڈ)", category: "Suspension", tags: ["stand", "double"], a125: 740, b125: 0, a70: 670, b70: 580 },
  { id: 57, name: "Side Stand (سائیڈ اسٹینڈ)", category: "Suspension", tags: ["stand", "side"], a125: 500, b125: 350, a70: 350, b70: 300 },

  // === 7. EXHAUST & DRIVE TRAIN (Silencer & Chain) ===
  { id: 58, name: "Silencer (سلینسر)", category: "Engine", tags: ["silencer", "exhaust"], a125: 3800, b125: 0, a70: 3500, b70: 3000 },
  { id: 59, name: "Fancy Silencer 70", category: "Premium", tags: ["fancy", "silencer"], a125: 0, b125: 0, a70: 2200, b70: 0 },
  { id: 60, name: "Silencer Patti (سلینسر پٹی)", category: "Engine", tags: ["patti", "silencer"], a125: 650, b125: 0, a70: 150, b70: 0 },
  { id: 61, name: "Silencer Packing (سلینسر پیکنگ)", category: "Engine", tags: ["packing", "silencer"], a125: 50, b125: 0, a70: 30, b70: 0 },
  { id: 62, name: "Silencer Kainchi Patti", category: "Engine", tags: ["patti", "silencer", "bracket"], a125: 500, b125: 0, a70: 300, b70: 0 },
  { id: 63, name: "Chain Cover Plastic (چین کور پلاسٹک)", category: "Body", tags: ["chain", "cover", "plastic"], a125: 600, b125: 450, a70: 500, b70: 300 },
  { id: 64, name: "Chain Cover Loha (چین کور )", category: "Body", tags: ["chain", "cover", "loha"], a125: 1100, b125: 950, a70: 900, b70: 700 },
  { id: 65, name: "Chain Sprocket (چین گراری سیٹ)", category: "Engine", tags: ["chain", "sprocket", "garari"], a125: 2800, b125: 2000, a70: 2000, b70: 1500 },

  // === 8. REAR SUSPENSION & REAR BODY ===
  { id: 66, name: "Kainchi (کینچی)", category: "Suspension", tags: ["kainchi", "swingarm"], a125: 2800, b125: 1650, a70: 1450, b70: 1250 },
  { id: 67, name: "Mukammal Pichli Jump Jodi (A Honda)", category: "Suspension", tags: ["jump", "back", "rear"], a125: 4000, b125: 3100, a70: 6000, b70: 3500 },
  { id: 68, name: "Pichlay Jump ki service (پچھلا جمپ)", category: "Suspension", tags: ["service", "shocks"], a125: 1800, b125: 0, a70: 1500, b70: 0 },
  { id: 69, name: "Pichla Jump Glass Jodi (پچھلا جمپ گلاس)", category: "Suspension", tags: ["jump", "glass", "back"], a125: 450, b125: 0, a70: 300, b70: 0 },
  { id: 70, name: "Pichla Mudguard (پچھلا مڈگارڈ)", category: "Body", tags: ["mudguard", "rear"], a125: 2000, b125: 1500, a70: 1600, b70: 1100 },
  { id: 71, name: "Dum ki Jodi (دم کی جوڑی)", category: "Body", tags: ["tail", "dum"], a125: 120, b125: 0, a70: 80, b70: 0 },
  { id: 72, name: "Carriel (کیریئر)", category: "Body", tags: ["carrier", "back"], a125: 880, b125: 750, a70: 500, b70: 0 },
  { id: 73, name: "Break Light (بیک لائٹ)", category: "Electrical", tags: ["light", "back"], a125: 700, b125: 500, a70: 450, b70: 300 },
  { id: 74, name: "Fancy Back Light (فینسی بیک لائٹ)", category: "Premium", tags: ["fancy", "light", "back"], a125: 1500, b125: 1000, a70: 1500, b70: 1000 },
  { id: 75, name: "Break Light Bracket (بیک لائٹ بریکٹ)", category: "Body", tags: ["bracket", "light", "back"], a125: 340, b125: 0, a70: 280, b70: 0 },
  { id: 76, name: "Indicator Char (اشارے سیٹ)", category: "Electrical", tags: ["indicator", "ishare"], a125: 1000, b125: 650, a70: 600, b70: 450 },

  // === 9. WHEELS, TYRES & BRAKES ===
  { id: 77, name: "Mukammal Rim Jodi + Hub", category: "Wheels", tags: ["rim", "wheel", "hub"], a125: 9000, b125: 8800, a70: 6500, b70: 5000 },
  { id: 78, name: "Rim 1 Adad (رم)", category: "Wheels", tags: ["rim", "wheel"], a125: 5100, b125: 3000, a70: 2500, b70: 2000 },
  { id: 79, name: "Spoke 1 Adad (تیلیاں)", category: "Wheels", tags: ["spoke", "tiliyan"], a125: 900, b125: 0, a70: 600, b70: 0 },
  { id: 80, name: "Hub Agla Pichla (ہب)", category: "Wheels", tags: ["hub", "wheel"], a125: 6800, b125: 0, a70: 3200, b70: 0 },
  { id: 81, name: "Hub k Bearing (بیرنگ)", category: "Wheels", tags: ["bearing", "hub"], a125: 200, b125: 0, a70: 140, b70: 0 },
  { id: 82, name: "Tyre (ٹائر)", category: "Wheels", tags: ["tyre", "rubber"], a125: 5000, b125: 4200, a70: 2700, b70: 2400 },
  { id: 83, name: "Tube 1 Adad (ٹیوب)", category: "Wheels", tags: ["tube", "air"], a125: 600, b125: 0, a70: 450, b70: 0 },
  { id: 84, name: "Brake Shoe 2 Adad (بریک شو)", category: "Wheels", tags: ["brake", "shoe"], a125: 350, b125: 0, a70: 250, b70: 0 },
  { id: 85, name: "Brake Setting (بریک سیٹنگ)", category: "Wheels", tags: ["brake", "setting"], a125: 450, b125: 0, a70: 380, b70: 0 },
  { id: 86, name: "Wheel Thru ki Mazdoori", category: "Wheels", tags: ["labor", "wheel"], a125: 650, b125: 0, a70: 450, b70: 0 },

  // === 10. FINISHING, CHEMICALS & MISC ===
  { id: 87, name: "Oil (آئل)", category: "Chemicals", tags: ["oil", "engine"], a125: 1100, b125: 1000, a70: 700, b70: 450 },
  { id: 88, name: "Filter (فلٹر)", category: "Chemicals", tags: ["filter", "air"], a125: 0, b125: 0, a70: 170, b70: 0 },
  { id: 89, name: "Silver Spray (سلور اسپرے)", category: "Chemicals", tags: ["spray", "silver"], a125: 550, b125: 0, a70: 550, b70: 0 },
  { id: 90, name: "Kala Spray (کالا اسپرے)", category: "Chemicals", tags: ["spray", "black"], a125: 550, b125: 0, a70: 550, b70: 0 },
  { id: 91, name: "Red Spray (ریڈ اسپرے)", category: "Chemicals", tags: ["spray", "red"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 92, name: "Lacquer (لیکر)", category: "Chemicals", tags: ["lacquer", "finish"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 93, name: "Polisher (پالشر)", category: "Chemicals", tags: ["polish", "shine"], a125: 200, b125: 0, a70: 200, b70: 0 },
  { id: 94, name: "Tube RTV (ٹیوب RTV)", category: "Chemicals", tags: ["silicone"], a125: 100, b125: 0, a70: 100, b70: 0 },
  { id: 95, name: "Magic Tube (میجک ٹیوب)", category: "Chemicals", tags: ["magic", "glue"], a125: 100, b125: 0, a70: 100, b70: 0 },
  { id: 96, name: "Lota (لوٹا)", category: "Chemicals", tags: ["lota", "cleaning"], a125: 0, b125: 0, a70: 170, b70: 0 },
  { id: 97, name: "Bottle (بوتل)", category: "Chemicals", tags: ["bottle", "spray"], a125: 0, b125: 0, a70: 170, b70: 0 },

  // === 11. PREMIUM SERVICES & MODS ===
  { id: 98, name: "Buff Normal (بف نارمل)", category: "Premium", tags: ["buffing", "shine"], a125: 5000, b125: 4000, a70: 4000, b70: 3000 },
  { id: 99, name: "Buff Steel (بف سٹیل)", category: "Premium", tags: ["buffing", "steel"], a125: 7000, b125: 5000, a70: 5000, b70: 4500 },
  { id: 100, name: "Buff Chrome + Color", category: "Premium", tags: ["buffing", "chrome"], a125: 40000, b125: 0, a70: 30000, b70: 0 },
  { id: 101, name: "Number Plate (نمبر پلیٹ)", category: "Premium", tags: ["number", "plate"], a125: 800, b125: 0, a70: 800, b70: 0 },
  { id: 102, name: "Sticker Modify (سٹیکر)", category: "Premium", tags: ["sticker", "modify"], a125: 2500, b125: 1500, a70: 2000, b70: 1400 },
  { id: 103, name: "Leather Cloth (لیڈر دھلائی)", category: "Premium", tags: ["wash", "leather"], a125: 200, b125: 0, a70: 200, b70: 0 },
  { id: 104, name: "Mix Nut Bolt (مکس نٹ بولٹ)", category: "Premium", tags: ["nut", "bolt"], a125: 600, b125: 0, a70: 300, b70: 0 },
  { id: 105, name: "Lighting (/لائٹ)", category: "Premium", tags: ["lighting", "motif"], a125: 600, b125: 0, a70: 600, b70: 0 },
  { id: 106, name: "Mukammal Bolt Kit (بولٹ کٹ)", category: "Premium", tags: ["bolt", "kit"], a125: 2800, b125: 0, a70: 2200, b70: 0 }
];