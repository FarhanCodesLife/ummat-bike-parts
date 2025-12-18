export interface BikePart {
  id: number;
  name: string;
  category: string; 
  a125: number;
  b125: number;
  a70: number;
  b70: number;
}

export const bikeParts: BikePart[] = [
  // --- BODY & EXTERIOR (1-8, 26-29, 35-36, 38, 55, 57, 66-67, 69-70) ---
  { id: 1, name: "Tanki + Side Cover + Lock (ٹنکی + سائیڈ کور + لوک)", category: "Body", a125: 13000, b125: 11000, a70: 5600, b70: 3200 },
  { id: 2, name: "Monogram Front (مونوگرام فرنٹ)", category: "Body", a125: 0, b125: 150, a70: 0, b70: 100 },
  { id: 3, name: "Side Cover Jodi (سائیڈ کور جوڑی)", category: "Body", a125: 2000, b125: 800, a70: 700, b70: 300 },
  { id: 4, name: "Side Cover Lock Jodi (سائیڈ کور لاک جوڑی)", category: "Body", a125: 0, b125: 240, a70: 0, b70: 240 },
  { id: 5, name: "Tanki Dhakna (ٹنکی ڈھکنا)", category: "Body", a125: 1200, b125: 0, a70: 0, b70: 400 },
  { id: 6, name: "Tanki Rubber (ٹنکی ربڑ)", category: "Body", a125: 50, b125: 0, a70: 0, b70: 40 },
  { id: 7, name: "Seat Mukammal (سیٹ مکمل)", category: "Body", a125: 8000, b125: 5000, a70: 4200, b70: 2600 },
  { id: 8, name: "Seat Bracket Lohe ki (سیٹ بریکٹ لوہے کی)", category: "Body", a125: 0, b125: 800, a70: 800, b70: 600 },
  { id: 26, name: "Agla Monogram (اگلا مونوگرام)", category: "Body", a125: 0, b125: 200, a70: 0, b70: 100 },
  { id: 27, name: "Agla Monogram Patti (اگلا مونوگرام پٹی)", category: "Body", a125: 0, b125: 200, a70: 0, b70: 150 },
  { id: 28, name: "Mudguard Jodi Chrome (مڈگارڈ جوڑی کروم)", category: "Body", a125: 5000, b125: 4000, a70: 3000, b70: 2000 },
  { id: 29, name: "Mudguard Bolt Kit (مڈگارڈ بولٹ کٹ)", category: "Body", a125: 0, b125: 200, a70: 0, b70: 200 },
  { id: 35, name: "Pichla Mudguard (پچھلا مڈگارڈ)", category: "Body", a125: 2500, b125: 2000, a70: 2000, b70: 1500 },
  { id: 36, name: "Agla Mudguard (اگلا مڈگارڈ)", category: "Body", a125: 2800, b125: 2300, a70: 2200, b70: 2000 },
  { id: 38, name: "Dum ki Jodi (دم کی جوڑی)", category: "Body", a125: 0, b125: 160, a70: 0, b70: 80 },
  { id: 55, name: "Carrier (کیریئر)", category: "Body", a125: 1200, b125: 800, a70: 0, b70: 720 },
  { id: 57, name: "Back Light Bracket (بیک لائٹ بریکٹ)", category: "Body", a125: 0, b125: 400, a70: 0, b70: 400 },
  { id: 66, name: "Chain Cover Plastic (چین کور پلاسٹک)", category: "Body", a125: 0, b125: 600, a70: 800, b70: 300 },
  { id: 67, name: "Chain Cover Lohe ka (چین کور لوہے کا)", category: "Body", a125: 2000, b125: 1600, a70: 1600, b70: 1200 },
  { id: 69, name: "Dum Jodi (دم جوڑی)", category: "Body", a125: 0, b125: 100, a70: 0, b70: 100 },
  { id: 70, name: "Seat U Bracket Plastic (سیٹ بریکٹ پلاسٹک)", category: "Body", a125: 0, b125: 0, a70: 550, b70: 200 },

  // --- HANDLE & CONTROLS (9-18, 51) ---
  { id: 9, name: "Handle (ہینڈل)", category: "Controls", a125: 1800, b125: 1200, a70: 1300, b70: 900 },
  { id: 10, name: "Tee (ٹی)", category: "Controls", a125: 500, b125: 0, a70: 200, b70: 0 },
  { id: 11, name: "Assembly Mukammal Set (اسمبلی مکمل سیٹ)", category: "Controls", a125: 0, b125: 2000, a70: 0, b70: 1400 },
  { id: 12, name: "Brake Lever ka Gutka (بریک لیور کا گٹکا)", category: "Controls", a125: 0, b125: 200, a70: 0, b70: 140 },
  { id: 13, name: "Handle Muthi Jodi (ہینڈل مٹھی جوڑی)", category: "Controls", a125: 0, b125: 400, a70: 0, b70: 200 },
  { id: 14, name: "Brake Lever (بریک لیور)", category: "Controls", a125: 0, b125: 150, a70: 200, b70: 150 },
  { id: 15, name: "Accelerator Cable (ایکسیلیٹر کیبل)", category: "Controls", a125: 280, b125: 0, a70: 240, b70: 150 },
  { id: 16, name: "Clutch Lever (کلچ لیور)", category: "Controls", a125: 200, b125: 0, a70: 200, b70: 130 },
  { id: 17, name: "Haff Assembly (باف اسمبلی)", category: "Controls", a125: 900, b125: 700, a70: 700, b70: 500 },
  { id: 18, name: "Clutch Gutka (کلچ گٹکا)", category: "Controls", a125: 0, b125: 200, a70: 0, b70: 140 },
  { id: 51, name: "Gear Lever (گیئر لیور)", category: "Controls", a125: 500, b125: 450, a70: 360, b70: 300 },

  // --- ELECTRICAL & METER (19-22, 40, 56, 59, 60, 62-64, 71, 77) ---
  { id: 19, name: "Meter Switch (میٹر سوئچ)", category: "Electrical", a125: 0, b125: 440, a70: 0, b70: 260 },
  { id: 20, name: "Meter Case (میٹر کیس)", category: "Electrical", a125: 1100, b125: 0, a70: 0, b70: 240 },
  { id: 21, name: "Meter Patti (میٹر پٹی)", category: "Electrical", a125: 0, b125: 200, a70: 0, b70: 160 },
  { id: 22, name: "Head Light (ہیڈ لائٹ)", category: "Electrical", a125: 2200, b125: 700, a70: 750, b70: 440 },
  { id: 40, name: "Mukammal Meter (مکمل میٹر)", category: "Electrical", a125: 2700, b125: 1800, a70: 1200, b70: 800 },
  { id: 56, name: "Back Light (بیک لائٹ)", category: "Electrical", a125: 1000, b125: 400, a70: 800, b70: 280 },
  { id: 59, name: "Indicator Char (اشارے چار عدد)", category: "Electrical", a125: 1600, b125: 1000, a70: 900, b70: 650 },
  { id: 60, name: "Mukammal Wiring (مکمل وائرنگ)", category: "Electrical", a125: 2500, b125: 2000, a70: 2200, b70: 1900 },
  { id: 62, name: "Battery (بیٹری)", category: "Electrical", a125: 2800, b125: 2000, a70: 2800, b70: 2000 },
  { id: 63, name: "Wire Switch (وائر سوئچ)", category: "Electrical", a125: 0, b125: 300, a70: 0, b70: 300 },
  { id: 64, name: "Horn (ہارن)", category: "Electrical", a125: 500, b125: 400, a70: 500, b70: 400 },
  { id: 71, name: "Meter/Tanki/Handle Lock Set", category: "Electrical", a125: 2800, b125: 0, a70: 2200, b70: 1500 },
  { id: 77, name: "Seal Battery Cell (سیل بیٹری سیل)", category: "Electrical", a125: 0, b125: 300, a70: 0, b70: 300 },

  // --- WHEELS & BRAKES (30-34, 37, 39, 47, 58, 84-86) ---
  { id: 30, name: "Mukammal Rim Jodi + Hub", category: "Wheels", a125: 18000, b125: 0, a70: 0, b70: 8000 },
  { id: 31, name: "Rim ki Jodi 2 Adad (رم جوڑی)", category: "Wheels", a125: 0, b125: 4800, a70: 3700, b70: 3200 },
  { id: 32, name: "Spoke ki Jodi 2 Adad (تیلیاں)", category: "Wheels", a125: 1500, b125: 0, a70: 0, b70: 1400 },
  { id: 33, name: "Wheel Thru ki Mazdoori", category: "Wheels", a125: 0, b125: 700, a70: 0, b70: 600 },
  { id: 34, name: "Hub Agla Pichla (ہب)", category: "Wheels", a125: 11000, b125: 0, a70: 5000, b70: 0 },
  { id: 37, name: "Hub k Bearing (بیرنگ)", category: "Wheels", a125: 0, b125: 300, a70: 300, b70: 200 },
  { id: 39, name: "Brake Setting (بریک سیٹنگ)", category: "Wheels", a125: 0, b125: 200, a70: 0, b70: 560 },
  { id: 47, name: "Brake Pedal (بریک پیڈل)", category: "Wheels", a125: 700, b125: 600, a70: 600, b70: 500 },
  { id: 58, name: "Footrest Jodi (فٹ ریسٹ جوڑی)", category: "Wheels", a125: 0, b125: 350, a70: 0, b70: 300 },
  { id: 84, name: "Tyre (ٹائر)", category: "Wheels", a125: 8500, b125: 7000, a70: 0, b70: 5000 },
  { id: 85, name: "Tube 1 Adad (ٹیوب)", category: "Wheels", a125: 600, b125: 1200, a70: 0, b70: 800 },
  { id: 86, name: "Brake Shoe 2 Adad (بریک شو)", category: "Wheels", a125: 0, b125: 0, a70: 0, b70: 300 },

  // --- SUSPENSION (23-25, 48-49, 52-54, 61) ---
  { id: 23, name: "Kaan Jodi (کان جوڑی)", category: "Suspension", a125: 520, b125: 340, a70: 500, b70: 340 },
  { id: 24, name: "Jump Glass Jodi (جمپ گلاس)", category: "Suspension", a125: 0, b125: 560, a70: 500, b70: 340 },
  { id: 25, name: "Agly Jump ki Jodi (اگلے جمپ)", category: "Suspension", a125: 10000, b125: 7000, a70: 9000, b70: 7000 },
  { id: 48, name: "Engine Footrest+Stand (انجن فٹ ریسٹ)", category: "Suspension", a125: 1500, b125: 1100, a70: 1400, b70: 1000 },
  { id: 49, name: "Double Stand (ڈبل اسٹینڈ)", category: "Suspension", a125: 1200, b125: 0, a70: 900, b70: 850 },
  { id: 52, name: "Kainchi (کینچی)", category: "Suspension", a125: 4000, b125: 2600, a70: 2400, b70: 1800 },
  { id: 53, name: "Pichla Jump Glass (پچھلا جمپ گلاس)", category: "Suspension", a125: 600, b125: 0, a70: 0, b70: 350 },
  { id: 54, name: "Mukammal Pichli Jump Jodi", category: "Suspension", a125: 7000, b125: 5000, a70: 6200, b70: 4800 },
  { id: 61, name: "Side Stand + Footrest", category: "Suspension", a125: 1500, b125: 1200, a70: 1400, b70: 1000 },

  // --- ENGINE & FUEL (41-46, 50, 65, 68, 94-95) ---
  { id: 41, name: "Petrol Cock (پیٹرول کاک)", category: "Engine", a125: 500, b125: 340, a70: 500, b70: 240 },
  { id: 42, name: "Carburetor (کاربوریٹر)", category: "Engine", a125: 4800, b125: 0, a70: 4400, b70: 0 },
  { id: 43, name: "Silencer (سلینسر)", category: "Engine", a125: 0, b125: 6000, a70: 3500, b70: 3000 },
  { id: 44, name: "Silencer Patti (سلینسر پٹی)", category: "Engine", a125: 0, b125: 800, a70: 0, b70: 0 },
  { id: 45, name: "Silencer Packing (سلینسر پیکنگ)", category: "Engine", a125: 50, b125: 0, a70: 0, b70: 40 },
  { id: 46, name: "Silencer Kainchi Patti", category: "Engine", a125: 0, b125: 800, a70: 0, b70: 400 },
  { id: 50, name: "Kick (کک)", category: "Engine", a125: 1700, b125: 1300, a70: 700, b70: 500 },
  { id: 65, name: "Plug + Cap (پلگ اور کیپ)", category: "Engine", a125: 700, b125: 300, a70: 600, b70: 200 },
  { id: 68, name: "Chain Sprocket (چین گراری سیٹ)", category: "Engine", a125: 4500, b125: 3500, a70: 3100, b70: 2200 },
  { id: 94, name: "Head Cylinder ka Kaam", category: "Engine", a125: 0, b125: 0, a70: 0, b70: 0 },
  { id: 95, name: "Engine ka Kaam", category: "Engine", a125: 0, b125: 0, a70: 0, b70: 0 },

  // --- FINISHING & CHEMICALS (72-76, 78-83) ---
  { id: 72, name: "Silver Spray Kenwood", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 800 },
  { id: 73, name: "Kala Spray Kenwood", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 800 },
  { id: 74, name: "Mid Spray", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 900 },
  { id: 75, name: "Lacquer 1 Adad (لیکر)", category: "Chemicals", a125: 2400, b125: 2000, a70: 1500, b70: 800 },
  { id: 76, name: "Nail 1 Adad (نیل)", category: "Chemicals", a125: 0, b125: 200, a70: 0, b70: 200 },
  { id: 78, name: "Polisher (پالشر)", category: "Chemicals", a125: 0, b125: 150, a70: 0, b70: 150 },
  { id: 79, name: "Tube RTV 1 Adad (ٹیوب)", category: "Chemicals", a125: 0, b125: 150, a70: 0, b70: 150 },
  { id: 80, name: "Magic Tube (میجک ٹیوب)", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 0 },
  { id: 81, name: "Lota (لوٹا)", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 200 },
  { id: 82, name: "Bottle (بوتل)", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 250 },
  { id: 83, name: "Filter (فلٹر)", category: "Chemicals", a125: 0, b125: 0, a70: 0, b70: 250 },

  // --- PREMIUM SERVICES & MODS (87-89, 90-93, 96-100, 101) ---
  { id: 87, name: "Buff Normal (بف نارمل)", category: "Premium", a125: 0, b125: 6000, a70: 0, b70: 3000 },
  { id: 88, name: "Buff Steel (بف سٹیل)", category: "Premium", a125: 0, b125: 6500, a70: 0, b70: 4000 },
  { id: 89, name: "Buff Chrome + Color", category: "Premium", a125: 0, b125: 45000, a70: 0, b70: 45000 },
  { id: 90, name: "Number Plate Agli Pichli", category: "Premium", a125: 0, b125: 1000, a70: 0, b70: 1000 },
  { id: 91, name: "Sticker Modify (سٹیکر)", category: "Premium", a125: 0, b125: 3000, a70: 0, b70: 2000 },
  { id: 92, name: "Gadi ki Dhulai (دھلائی)", category: "Premium", a125: 0, b125: 300, a70: 0, b70: 300 },
  { id: 93, name: "Mix Nut Bolt (مکس نٹ بولٹ)", category: "Premium", a125: 0, b125: 1000, a70: 0, b70: 600 },
  { id: 96, name: "Fancy Head Light (فینسی لائٹ)", category: "Premium", a125: 0, b125: 4000, a70: 0, b70: 4000 },
  { id: 97, name: "Fancy Back Light (فینسی بیک لائٹ)", category: "Premium", a125: 0, b125: 2000, a70: 0, b70: 2000 },
  { id: 98, name: "Fancy Meter Gol (فینسی میٹر)", category: "Premium", a125: 0, b125: 2500, a70: 0, b70: 2500 },
  { id: 99, name: "Fancy Silencer 70 Kala", category: "Premium", a125: 0, b125: 0, a70: 0, b70: 3500 },
  { id: 100, name: "Modification Lighting", category: "Premium", a125: 2000, b125: 0, a70: 0, b70: 0 },
  { id: 101, name: "Mukammal Bolt Kit (بولٹ کٹ)", category: "Premium", a125: 4400, b125: 1000, a70: 3500, b70: 2000 },
];