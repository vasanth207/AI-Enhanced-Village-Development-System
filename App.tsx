
import React, { useState } from 'react';
import { Tab, Village, Language, User, UserRole } from './types';
import { translations } from './translations';
import { Dashboard } from './components/Dashboard';
import { Planning } from './components/Planning';
import { Agriculture } from './components/Agriculture';
import { WaterManagement } from './components/WaterManagement';
import { Healthcare } from './components/Healthcare';
import { MapsGrounding } from './components/MapsGrounding';
import { Education } from './components/Education';
import { LiveAssistant } from './components/LiveAssistant';
import { VillageDirectory } from './components/VillageDirectory';
import { Schemes } from './components/Schemes';
import { Auth } from './components/Auth';
import { AdminDashboard } from './components/AdminDashboard';
import { LandingPage } from './components/LandingPage';
import { Bills } from './components/Bills';
import { Certificates } from './components/Certificates';

// Comprehensive dataset covering all districts of Karnataka
const SEED_VILLAGES: Village[] = [
  // --- SOUTHERN KARNATAKA (Old Mysore Region) ---
  { 
    id: 'k_mandya_1', 
    name: 'Mandya', 
    panchayat: 'Mandya Central GP',
    population: 137000, 
    location: 'Mandya', 
    region: 'Southern Dry Zone',
    coordinates: { lat: 12.5206, lng: 76.8951 }, 
    soilType: 'Red Sandy Loam', 
    waterCapacity: 85000,
    literacyRate: 70.4,
    pensionData: { total: 12500, oldAge: 8000, widow: 3500, disability: 1000 }
  },
  { 
    id: 'k_mysore_1', 
    name: 'Mysuru Rural', 
    panchayat: 'Mysuru Rural GP',
    population: 55000, 
    location: 'Mysuru', 
    region: 'Southern Dry Zone',
    coordinates: { lat: 12.2958, lng: 76.6394 }, 
    soilType: 'Red Loam', 
    waterCapacity: 120000,
    literacyRate: 72.8,
    pensionData: { total: 8500, oldAge: 5500, widow: 2500, disability: 500 }
  },
  { 
    id: 'k_mysore_2', 
    name: 'Nanjangud', 
    panchayat: 'Mysuru Rural GP',
    population: 50000, 
    location: 'Mysuru', 
    region: 'Southern Dry Zone',
    coordinates: { lat: 12.1200, lng: 76.6800 }, 
    soilType: 'Black Clay', 
    waterCapacity: 60000,
    literacyRate: 68.5,
    pensionData: { total: 6000, oldAge: 4000, widow: 1500, disability: 500 }
  },
  { 
    id: 'k_chamarajanagar_1', 
    name: 'Chamarajanagar', 
    panchayat: 'Chamarajanagar GP',
    population: 70000, 
    location: 'Chamarajanagar', 
    region: 'Southern Transition Zone',
    coordinates: { lat: 11.9261, lng: 76.9437 }, 
    soilType: 'Red Sandy', 
    waterCapacity: 45000,
    literacyRate: 61.4,
    pensionData: { total: 9000, oldAge: 6000, widow: 2000, disability: 1000 }
  },
  { 
    id: 'k_hassan_1', 
    name: 'Hassan', 
    panchayat: 'Hassan GP',
    population: 155000, 
    location: 'Hassan', 
    region: 'Hemavathi Basin',
    coordinates: { lat: 13.0033, lng: 76.1004 }, 
    soilType: 'Red Sandy Loam', 
    waterCapacity: 95000,
    literacyRate: 76.0,
    pensionData: { total: 14000, oldAge: 9000, widow: 4000, disability: 1000 }
  },
  { 
    id: 'k_hassan_2', 
    name: 'Sakleshpur', 
    panchayat: 'Hassan GP',
    population: 23000, 
    location: 'Hassan', 
    region: 'Hilly Zone',
    coordinates: { lat: 12.9700, lng: 75.7800 }, 
    soilType: 'Laterite', 
    waterCapacity: 110000,
    literacyRate: 78.5,
    pensionData: { total: 2500, oldAge: 1500, widow: 800, disability: 200 }
  },
  { 
    id: 'k_ramanagara_1', 
    name: 'Ramanagara', 
    panchayat: 'Ramanagara GP',
    population: 95000, 
    location: 'Ramanagara', 
    region: 'Eastern Dry Zone',
    coordinates: { lat: 12.7209, lng: 77.2799 }, 
    soilType: 'Red Loam', 
    waterCapacity: 50000,
    literacyRate: 69.2,
    pensionData: { total: 8000, oldAge: 5000, widow: 2500, disability: 500 }
  },
  { 
    id: 'k_ramanagara_2', 
    name: 'Channapatna', 
    panchayat: 'Ramanagara GP',
    population: 72000, 
    location: 'Ramanagara', 
    region: 'Eastern Dry Zone',
    coordinates: { lat: 12.6518, lng: 77.2089 }, 
    soilType: 'Red Sandy', 
    waterCapacity: 52000,
    literacyRate: 70.1,
    pensionData: { total: 7500, oldAge: 4800, widow: 2200, disability: 500 }
  },
  
  // --- CENTRAL KARNATAKA ---
  { 
    id: 'k_tumakuru_1', 
    name: 'Tumakuru', 
    panchayat: 'Tumakuru GP',
    population: 302000, 
    location: 'Tumakuru', 
    region: 'Eastern Dry Zone',
    coordinates: { lat: 13.3392, lng: 77.1017 }, 
    soilType: 'Red Sandy', 
    waterCapacity: 65000,
    literacyRate: 75.1,
    pensionData: { total: 25000, oldAge: 15000, widow: 8000, disability: 2000 }
  },
  { 
    id: 'k_tumakuru_2', 
    name: 'Tiptur', 
    panchayat: 'Tumakuru GP',
    population: 60000, 
    location: 'Tumakuru', 
    region: 'Central Dry Zone',
    coordinates: { lat: 13.2600, lng: 76.4800 }, 
    soilType: 'Red Loam (Coconut Belt)', 
    waterCapacity: 58000,
    literacyRate: 78.2,
    pensionData: { total: 5500, oldAge: 3500, widow: 1500, disability: 500 }
  },
  { 
    id: 'k_chitradurga_1', 
    name: 'Chitradurga', 
    panchayat: 'Chitradurga GP',
    population: 140000, 
    location: 'Chitradurga', 
    region: 'Central Dry Zone',
    coordinates: { lat: 14.2200, lng: 76.4000 }, 
    soilType: 'Mixed Red & Black', 
    waterCapacity: 40000,
    literacyRate: 68.5,
    pensionData: { total: 12000, oldAge: 8000, widow: 3000, disability: 1000 }
  },
  { 
    id: 'k_davanagere_1', 
    name: 'Davanagere', 
    panchayat: 'Davanagere GP',
    population: 435000, 
    location: 'Davanagere', 
    region: 'Central Dry Zone',
    coordinates: { lat: 14.4644, lng: 75.9218 }, 
    soilType: 'Red Loam', 
    waterCapacity: 88000,
    literacyRate: 76.8,
    pensionData: { total: 35000, oldAge: 22000, widow: 10000, disability: 3000 }
  },
  { 
    id: 'k_shivamogga_1', 
    name: 'Shivamogga', 
    panchayat: 'Shivamogga GP',
    population: 322000, 
    location: 'Shivamogga', 
    region: 'Southern Transition Zone',
    coordinates: { lat: 13.9299, lng: 75.5681 }, 
    soilType: 'Red Laterite', 
    waterCapacity: 150000,
    literacyRate: 80.4,
    pensionData: { total: 28000, oldAge: 18000, widow: 8000, disability: 2000 }
  },
  { 
    id: 'k_shivamogga_2', 
    name: 'Sagara', 
    panchayat: 'Shivamogga GP',
    population: 65000, 
    location: 'Shivamogga', 
    region: 'Malnad Zone',
    coordinates: { lat: 14.1600, lng: 75.0300 }, 
    soilType: 'Laterite', 
    waterCapacity: 140000,
    literacyRate: 82.1,
    pensionData: { total: 5000, oldAge: 3000, widow: 1500, disability: 500 }
  },

  // --- COASTAL KARNATAKA ---
  { 
    id: 'k_udupi_1', 
    name: 'Udupi', 
    panchayat: 'Udupi GP',
    population: 145000, 
    location: 'Udupi', 
    region: 'Coastal Zone',
    coordinates: { lat: 13.3409, lng: 74.7421 }, 
    soilType: 'Coastal Alluvial', 
    waterCapacity: 78000,
    literacyRate: 86.2,
    pensionData: { total: 11000, oldAge: 7000, widow: 3000, disability: 1000 }
  },
  { 
    id: 'k_udupi_2', 
    name: 'Kundapura', 
    panchayat: 'Udupi GP',
    population: 32000, 
    location: 'Udupi', 
    region: 'Coastal Zone',
    coordinates: { lat: 13.6200, lng: 74.6900 }, 
    soilType: 'Coastal Alluvial', 
    waterCapacity: 82000,
    literacyRate: 85.0,
    pensionData: { total: 3000, oldAge: 1800, widow: 1000, disability: 200 }
  },
  { 
    id: 'k_mangalore_1', 
    name: 'Mangaluru Rural', 
    panchayat: 'Dakshina Kannada GP',
    population: 45000, 
    location: 'Dakshina Kannada', 
    region: 'Coastal Zone',
    coordinates: { lat: 12.9141, lng: 74.8560 }, 
    soilType: 'Lateritic', 
    waterCapacity: 95000,
    literacyRate: 88.5,
    pensionData: { total: 4000, oldAge: 2500, widow: 1200, disability: 300 }
  },
  { 
    id: 'k_mangalore_2', 
    name: 'Puttur', 
    panchayat: 'Dakshina Kannada GP',
    population: 53000, 
    location: 'Dakshina Kannada', 
    region: 'Coastal Transition',
    coordinates: { lat: 12.7600, lng: 75.2000 }, 
    soilType: 'Red Laterite', 
    waterCapacity: 88000,
    literacyRate: 84.3,
    pensionData: { total: 4500, oldAge: 2800, widow: 1500, disability: 200 }
  },
  { 
    id: 'k_uttarakannada_1', 
    name: 'Karwar', 
    panchayat: 'Uttara Kannada GP',
    population: 68000, 
    location: 'Uttara Kannada', 
    region: 'Coastal Zone',
    coordinates: { lat: 14.8058, lng: 74.1240 }, 
    soilType: 'Coastal Alluvial', 
    waterCapacity: 90000,
    literacyRate: 83.0,
    pensionData: { total: 6000, oldAge: 4000, widow: 1500, disability: 500 }
  },
  { 
    id: 'k_uttarakannada_2', 
    name: 'Gokarna', 
    panchayat: 'Uttara Kannada GP',
    population: 13000, 
    location: 'Uttara Kannada', 
    region: 'Coastal Zone',
    coordinates: { lat: 14.5400, lng: 74.3100 }, 
    soilType: 'Sandy Loam', 
    waterCapacity: 50000,
    literacyRate: 78.0,
    pensionData: { total: 1200, oldAge: 800, widow: 300, disability: 100 }
  },

  // --- MALNAD REGION ---
  { 
    id: 'k_kodagu_1', 
    name: 'Madikeri', 
    panchayat: 'Kodagu GP',
    population: 35000, 
    location: 'Kodagu', 
    region: 'Hilly Zone',
    coordinates: { lat: 12.4244, lng: 75.7382 }, 
    soilType: 'Laterite', 
    waterCapacity: 92000,
    literacyRate: 82.9,
    pensionData: { total: 4200, oldAge: 2500, widow: 1200, disability: 500 }
  },
  { 
    id: 'k_kodagu_2', 
    name: 'Virajpet', 
    panchayat: 'Kodagu GP',
    population: 20000, 
    location: 'Kodagu', 
    region: 'Hilly Zone',
    coordinates: { lat: 12.2000, lng: 75.8000 }, 
    soilType: 'Dark Brown Clay', 
    waterCapacity: 95000,
    literacyRate: 81.5,
    pensionData: { total: 2000, oldAge: 1200, widow: 700, disability: 100 }
  },
  { 
    id: 'k_chikkamagaluru_1', 
    name: 'Chikkamagaluru', 
    panchayat: 'Chikkamagaluru GP',
    population: 118000, 
    location: 'Chikkamagaluru', 
    region: 'Hilly Zone',
    coordinates: { lat: 13.3153, lng: 75.7754 }, 
    soilType: 'Red Clay', 
    waterCapacity: 88000,
    literacyRate: 79.2,
    pensionData: { total: 10500, oldAge: 6500, widow: 3500, disability: 500 }
  },
  { 
    id: 'k_chikkamagaluru_2', 
    name: 'Sringeri', 
    panchayat: 'Chikkamagaluru GP',
    population: 4500, 
    location: 'Chikkamagaluru', 
    region: 'Hilly Zone',
    coordinates: { lat: 13.4100, lng: 75.2500 }, 
    soilType: 'Laterite', 
    waterCapacity: 92000,
    literacyRate: 90.0,
    pensionData: { total: 400, oldAge: 250, widow: 120, disability: 30 }
  },

  // --- NORTH KARNATAKA (Bombay Karnataka) ---
  { 
    id: 'k_belagavi_1', 
    name: 'Belagavi', 
    panchayat: 'Belagavi GP',
    population: 488157, 
    location: 'Belagavi', 
    region: 'Northern Transitional Zone',
    coordinates: { lat: 15.8497, lng: 74.4977 }, 
    soilType: 'Black & Red', 
    waterCapacity: 88000,
    literacyRate: 78.5,
    pensionData: { total: 45000, oldAge: 28000, widow: 12000, disability: 5000 }
  },
  { 
    id: 'k_belagavi_2', 
    name: 'Gokak', 
    panchayat: 'Belagavi GP',
    population: 80000, 
    location: 'Belagavi', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 16.1600, lng: 74.8200 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 75000,
    literacyRate: 71.0,
    pensionData: { total: 7000, oldAge: 4500, widow: 2000, disability: 500 }
  },
  { 
    id: 'k_dharwad_1', 
    name: 'Hubli', 
    panchayat: 'Dharwad GP',
    population: 943741, 
    location: 'Dharwad', 
    region: 'Transitional Zone',
    coordinates: { lat: 15.3647, lng: 75.1240 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 95000,
    literacyRate: 80.0,
    pensionData: { total: 72000, oldAge: 45000, widow: 20000, disability: 7000 }
  },
  { 
    id: 'k_dharwad_2', 
    name: 'Dharwad Rural', 
    panchayat: 'Dharwad GP',
    population: 45000, 
    location: 'Dharwad', 
    region: 'Transitional Zone',
    coordinates: { lat: 15.4589, lng: 75.0078 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 82000,
    literacyRate: 79.5,
    pensionData: { total: 4000, oldAge: 2500, widow: 1200, disability: 300 }
  },
  { 
    id: 'k_haveri_1', 
    name: 'Haveri', 
    panchayat: 'Haveri GP',
    population: 67000, 
    location: 'Haveri', 
    region: 'Transitional Zone',
    coordinates: { lat: 14.7900, lng: 75.4000 }, 
    soilType: 'Red & Black', 
    waterCapacity: 60000,
    literacyRate: 72.5,
    pensionData: { total: 6000, oldAge: 4000, widow: 1500, disability: 500 }
  },
  { 
    id: 'k_gadag_1', 
    name: 'Gadag', 
    panchayat: 'Gadag GP',
    population: 172000, 
    location: 'Gadag', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 15.4300, lng: 75.6300 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 50000,
    literacyRate: 74.0,
    pensionData: { total: 15000, oldAge: 10000, widow: 4000, disability: 1000 }
  },
  { 
    id: 'k_bagalkot_1', 
    name: 'Bagalkot', 
    panchayat: 'Bagalkot GP',
    population: 112000, 
    location: 'Bagalkot', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 16.1700, lng: 75.6900 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 48000,
    literacyRate: 70.0,
    pensionData: { total: 10000, oldAge: 6500, widow: 3000, disability: 500 }
  },
  { 
    id: 'k_bagalkot_2', 
    name: 'Badami', 
    panchayat: 'Bagalkot GP',
    population: 30000, 
    location: 'Bagalkot', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 15.9100, lng: 75.6700 }, 
    soilType: 'Red Sandy', 
    waterCapacity: 45000,
    literacyRate: 66.5,
    pensionData: { total: 3000, oldAge: 2000, widow: 800, disability: 200 }
  },
  { 
    id: 'k_vijayapura_1', 
    name: 'Vijayapura', 
    panchayat: 'Vijayapura GP',
    population: 327000, 
    location: 'Vijayapura', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 16.8302, lng: 75.7100 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 45000,
    literacyRate: 67.2,
    pensionData: { total: 28000, oldAge: 18000, widow: 8000, disability: 2000 }
  },

  // --- HYDERABAD KARNATAKA (Kalyana Karnataka) ---
  { 
    id: 'k_kalaburagi_1', 
    name: 'Kalaburagi', 
    panchayat: 'Kalaburagi GP',
    population: 543000, 
    location: 'Kalaburagi', 
    region: 'North Eastern Dry Zone',
    coordinates: { lat: 17.3297, lng: 76.8343 }, 
    soilType: 'Black Clay', 
    waterCapacity: 40000,
    literacyRate: 64.8,
    pensionData: { total: 42000, oldAge: 25000, widow: 12000, disability: 5000 }
  },
  { 
    id: 'k_bidar_1', 
    name: 'Bidar', 
    panchayat: 'Bidar GP',
    population: 216000, 
    location: 'Bidar', 
    region: 'North Eastern Transition',
    coordinates: { lat: 17.9100, lng: 77.5000 }, 
    soilType: 'Laterite (Red)', 
    waterCapacity: 55000,
    literacyRate: 71.0,
    pensionData: { total: 18000, oldAge: 12000, widow: 5000, disability: 1000 }
  },
  { 
    id: 'k_yadgir_1', 
    name: 'Yadgir', 
    panchayat: 'Yadgir GP',
    population: 74000, 
    location: 'Yadgir', 
    region: 'North Eastern Dry Zone',
    coordinates: { lat: 16.7700, lng: 77.1300 }, 
    soilType: 'Black & Red', 
    waterCapacity: 35000,
    literacyRate: 58.0,
    pensionData: { total: 8000, oldAge: 5000, widow: 2500, disability: 500 }
  },
  { 
    id: 'k_raichur_1', 
    name: 'Raichur', 
    panchayat: 'Raichur GP',
    population: 234000, 
    location: 'Raichur', 
    region: 'North Eastern Dry Zone',
    coordinates: { lat: 16.2000, lng: 77.3600 }, 
    soilType: 'Deep Black', 
    waterCapacity: 38000,
    literacyRate: 62.5,
    pensionData: { total: 20000, oldAge: 13000, widow: 5000, disability: 2000 }
  },
  { 
    id: 'k_koppal_1', 
    name: 'Koppal', 
    panchayat: 'Koppal GP',
    population: 70000, 
    location: 'Koppal', 
    region: 'Northern Dry Zone',
    coordinates: { lat: 15.3500, lng: 76.1500 }, 
    soilType: 'Black Cotton', 
    waterCapacity: 42000,
    literacyRate: 65.0,
    pensionData: { total: 7000, oldAge: 4500, widow: 2000, disability: 500 }
  },
  { 
    id: 'k_bellary_1', 
    name: 'Bellary', 
    panchayat: 'Bellary GP',
    population: 410000, 
    location: 'Bellary', 
    region: 'Central Dry Zone',
    coordinates: { lat: 15.1394, lng: 76.9214 }, 
    soilType: 'Red Loamy', 
    waterCapacity: 45000,
    literacyRate: 67.4,
    pensionData: { total: 32000, oldAge: 20000, widow: 9000, disability: 3000 }
  },
  {
    id: 'k_hampi_1',
    name: 'Hampi (Kamalapur)',
    panchayat: 'Bellary GP',
    population: 28000,
    location: 'Bellary',
    region: 'Central Dry Zone',
    coordinates: { lat: 15.3350, lng: 76.4600 }, 
    soilType: 'Red Loamy', 
    waterCapacity: 40000,
    literacyRate: 65.5,
    pensionData: { total: 2800, oldAge: 1800, widow: 800, disability: 200 }
  },
  // --- SOUTHEAST KARNATAKA (Kolar Region) ---
  { 
    id: 'k_kolar_1', 
    name: 'Kolar', 
    panchayat: 'Kolar GP',
    population: 138000, 
    location: 'Kolar', 
    region: 'Eastern Dry Zone',
    coordinates: { lat: 13.1363, lng: 78.1292 }, 
    soilType: 'Red Sandy', 
    waterCapacity: 40000,
    literacyRate: 74.5,
    pensionData: { total: 11000, oldAge: 7000, widow: 3000, disability: 1000 }
  },
  { 
    id: 'k_chikkaballapur_1', 
    name: 'Chikkaballapur', 
    panchayat: 'Chikkaballapur GP',
    population: 63000, 
    location: 'Chikkaballapur', 
    region: 'Eastern Dry Zone',
    coordinates: { lat: 13.4355, lng: 77.7285 }, 
    soilType: 'Red Loam', 
    waterCapacity: 42000,
    literacyRate: 75.0,
    pensionData: { total: 5500, oldAge: 3500, widow: 1500, disability: 500 }
  }
];

const generateMockVillages = (seeds: Village[], targetCount: number): Village[] => {
  if (seeds.length === 0) return [];
  const generated: Village[] = [...seeds];
  const suffixes = ['North', 'South', 'East', 'West', 'Central', 'Rural', 'Colony'];
  let i = 0;
  while (generated.length < targetCount) {
    const seed = seeds[i % seeds.length];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const uniqueId = `${seed.id}_gen_${generated.length}`;
    const popVar = 0.8 + Math.random() * 0.4;
    generated.push({
      ...seed,
      id: uniqueId,
      name: `${seed.name} ${suffix} ${Math.floor(Math.random() * 99) + 1}`,
      panchayat: seed.panchayat, // Inherit panchayat from seed
      population: Math.floor(seed.population * popVar * 0.2),
      pensionData: seed.pensionData ? {
        total: Math.floor(seed.pensionData.total * popVar * 0.2),
        oldAge: Math.floor(seed.pensionData.oldAge * popVar * 0.2),
        widow: Math.floor(seed.pensionData.widow * popVar * 0.2),
        disability: Math.floor(seed.pensionData.disability * popVar * 0.2),
      } : undefined,
      coordinates: {
        lat: seed.coordinates.lat + (Math.random() - 0.5) * 0.05,
        lng: seed.coordinates.lng + (Math.random() - 0.5) * 0.05
      }
    });
    i++;
  }
  return generated;
};

const ALL_VILLAGES = generateMockVillages(SEED_VILLAGES, 12000);

const App: React.FC = () => {
  const [viewState, setViewState] = useState<'LANDING' | 'AUTH' | 'APP'>('LANDING');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>('citizen');
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  const [selectedVillage, setSelectedVillage] = useState<Village>(ALL_VILLAGES[0] || SEED_VILLAGES[0]);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const handlePortalSelect = (role: UserRole) => {
      setSelectedRole(role);
      setViewState('AUTH');
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    
    // Automatically select the village the user registered with
    if ((user.role === 'citizen' || user.role === 'village_admin') && user.villageId) {
        const userVillage = ALL_VILLAGES.find(v => v.id === user.villageId);
        if (userVillage) {
            setSelectedVillage(userVillage);
        }
    }

    // Try to set the selected village to one within the admin's panchayat for better UX
    if (user.role === 'official' && user.panchayatName) {
        // Use loose matching to find a village in the correct panchayat, aligning with dashboard logic
        const adminVillage = ALL_VILLAGES.find(v => v.panchayat.toLowerCase().includes(user.panchayatName?.toLowerCase() || ''));
        if (adminVillage) {
            setSelectedVillage(adminVillage);
        }
    }

    if (user.role === 'official' || user.role === 'village_admin') {
        setActiveTab(Tab.ADMIN_OVERVIEW);
    } else {
        setActiveTab(Tab.DASHBOARD);
    }
    setViewState('APP');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setViewState('LANDING');
    setActiveTab(Tab.DASHBOARD);
  };

  const renderContent = () => {
    // Admin Routes (both official and village_admin)
    if (currentUser?.role === 'official' || currentUser?.role === 'village_admin') {
       return <AdminDashboard 
         village={selectedVillage} 
         allVillages={ALL_VILLAGES} 
         onSelectVillage={setSelectedVillage} 
         onLogout={handleLogout} 
         adminPanchayatName={currentUser.panchayatName}
         isAdminRole={currentUser.role === 'official'}
       />;
    }

    // Citizen Routes
    switch (activeTab) {
      case Tab.DASHBOARD: return <Dashboard village={selectedVillage} language={language} />;
      case Tab.PLANNING: return <Planning village={selectedVillage} language={language} />;
      case Tab.AGRICULTURE: return <Agriculture village={selectedVillage} language={language} />;
      case Tab.WATER: return <WaterManagement village={selectedVillage} language={language} />;
      case Tab.HEALTH: return <Healthcare village={selectedVillage} language={language} />;
      case Tab.MAPS: return <MapsGrounding village={selectedVillage} language={language} />;
      case Tab.EDUCATION: return <Education language={language} />;
      case Tab.SCHEMES: return <Schemes language={language} />;
      case Tab.BILLS: return currentUser ? <Bills user={currentUser} language={language} /> : null;
      case Tab.CERTIFICATES: return currentUser ? <Certificates user={currentUser} language={language} /> : null;
      default: return <Dashboard village={selectedVillage} language={language} />;
    }
  };

  if (viewState === 'LANDING') {
      return <LandingPage onSelectPortal={handlePortalSelect} />;
  }

  if (viewState === 'AUTH' || !currentUser) {
    return <Auth onLogin={handleLogin} initialRole={selectedRole} onBack={() => setViewState('LANDING')} villages={ALL_VILLAGES} />;
  }

  // Admin View Structure
  if (currentUser.role === 'official' || currentUser.role === 'village_admin') {
     return <AdminDashboard 
       village={selectedVillage} 
       allVillages={ALL_VILLAGES} 
       onSelectVillage={setSelectedVillage} 
       onLogout={handleLogout} 
       adminPanchayatName={currentUser.panchayatName}
       isAdminRole={currentUser.role === 'official'}
     />;
  }

  // Citizen View Structure
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex z-10">
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">G</div>
            <span className="text-xl font-extrabold text-gray-800 tracking-tight">Gram<span className="text-emerald-600">Uday</span></span>
          </div>
          
          {/* Language Selector */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
             {(['en', 'kn', 'hi'] as Language[]).map(lang => (
                <button
                   key={lang}
                   onClick={() => setLanguage(lang)}
                   className={`flex-1 text-xs font-bold py-1.5 rounded-md transition-all ${language === lang ? 'bg-white shadow text-emerald-700' : 'text-gray-500 hover:text-gray-700'}`}
                >
                   {lang === 'en' ? 'ENG' : lang === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                </button>
             ))}
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {[
            { id: Tab.DASHBOARD, label: t.nav.dashboard, icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
            { id: Tab.AGRICULTURE, label: t.nav.agriculture, icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            { id: Tab.WATER, label: t.nav.water, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { id: Tab.HEALTH, label: t.nav.health, icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
            { id: Tab.EDUCATION, label: t.nav.education, icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
            { id: Tab.SCHEMES, label: t.nav.schemes, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { id: Tab.BILLS, label: t.nav.bills, icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z' },
            { id: Tab.CERTIFICATES, label: t.nav.certificates, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { id: Tab.PLANNING, label: t.nav.planning, icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
            { id: Tab.MAPS, label: t.nav.maps, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
          ].map((item) => (
             <button
               key={item.id}
               onClick={() => setActiveTab(item.id)}
               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                 activeTab === item.id 
                   ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' 
                   : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'
               }`}
             >
                <div className={`p-1.5 rounded-lg transition-colors ${activeTab === item.id ? 'bg-white/20' : 'bg-transparent group-hover:bg-emerald-100'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                </div>
                <span className="font-semibold">{item.label}</span>
             </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 flex flex-col gap-4">
           <button onClick={handleLogout} className="flex items-center text-gray-500 hover:text-red-600 transition-colors text-sm font-bold w-full px-2">
               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
               Back to Home
           </button>
           <div className="bg-gray-900 rounded-2xl p-4 text-white relative overflow-hidden cursor-pointer" onClick={handleLogout} title="Click to Logout">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 rounded-full blur-2xl opacity-20 -mr-6 -mt-6"></div>
              <p className="text-xs opacity-60 mb-1 font-medium tracking-wider uppercase">System Status</p>
              <div className="flex items-center space-x-2">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                 </span>
                 <p className="font-bold text-sm">{t.status}</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header */}
        <header className="bg-white border-b border-gray-200 p-4 md:hidden flex justify-between items-center z-20">
           <span className="font-bold text-lg text-emerald-800">GramUday</span>
           <button onClick={handleLogout} className="text-xs font-bold text-red-600 border border-red-200 px-3 py-1 rounded-lg">Exit</button>
        </header>

        {/* Dynamic View */}
        <div className="flex-1 overflow-auto bg-gray-50/50">
           {renderContent()}
        </div>

        {/* Sticky Live Assistant */}
        <LiveAssistant village={selectedVillage} language={language} />
      </main>
    </div>
  );
};

export default App;