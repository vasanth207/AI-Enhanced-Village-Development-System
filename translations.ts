
import { Language } from './types';

export const translations = {
  en: {
    appTitle: "GramUday",
    nav: {
      dashboard: "Overview",
      directory: "Village Directory",
      agriculture: "Smart Agri",
      water: "Water System",
      health: "Health Center",
      education: "Smart Education",
      schemes: "Schemes",
      planning: "City Planning",
      maps: "Resources",
      bills: "Bills & Tax",
      certificates: "Certificates"
    },
    status: "Online",
    activeVillage: "Active Village",
    change: "Change",
    dashboard: {
      title: "Dashboard",
      population: "Population",
      waterReserves: "Water Reserves",
      soilHealth: "Soil Health",
      avgIncome: "Avg Income",
      waterConsumption: "Water Consumption",
      marketSnapshot: "Market Snapshot",
      liveAlert: "Live Alert"
    },
    agri: {
      tabs: { scan: "Disease Scanner", recommend: "AI Recommender", market: "Market Predictor" },
      upload: "Upload Plant Photo",
      diagnose: "Diagnose Disease",
      analyzing: "Analyzing...",
      soil: "Soil Type",
      season: "Season",
      region: "Region",
      getRec: "Get Recommendations",
      cropName: "Crop Name",
      location: "Location",
      predict: "Predict Prices",
      soilTypes: {
        select: "Select Soil Type",
        blackCotton: "Black Cotton Soil",
        red: "Red Soil",
        laterite: "Laterite Soil",
        alluvial: "Alluvial Soil",
        clay: "Clay Soil",
        sandy: "Sandy Soil",
        loamy: "Loamy Soil",
        silt: "Silt Soil",
        peat: "Peat Soil",
        chalky: "Chalky Soil"
      },
      seasons: {
        select: "Select",
        spring: "Spring",
        summer: "Summer",
        monsoon: "Monsoon",
        winter: "Winter"
      },
      regions: {
        select: "Select Region",
        northKarnataka: "North Karnataka",
        southKarnataka: "South Karnataka",
        coastalKarnataka: "Coastal Karnataka",
        malnad: "Malnad",
        bayaluseeme: "Bayaluseeme",
        mumbai: "Mumbai Region",
        pune: "Pune Region",
        nashik: "Nashik Region",
        aurangabad: "Aurangabad Region",
        nagpur: "Nagpur Region",
        delhiNCR: "Delhi NCR",
        rajasthan: "Rajasthan",
        gujarat: "Gujarat",
        punjab: "Punjab",
        tamilNadu: "Tamil Nadu",
        kerala: "Kerala",
        andhraPradesh: "Andhra Pradesh",
        telangana: "Telangana",
        westBengal: "West Bengal",
        odisha: "Odisha"
      }
    },
    live: {
      listening: "Listening...",
      council: "Voice Council"
    },
    directory: {
      title: "GramUday Village Directory",
      subtitle: "Showing villages across the region",
      searchPlaceholder: "Search villages...",
      headers: {
        name: "Village Name",
        location: "Location",
        population: "Population",
        literacy: "Literacy Rate",
        pension: "Pension Beneficiaries",
        action: "Action"
      },
      pensionLabels: {
        total: "Total",
        old: "Old",
        widow: "Widow",
        disability: "Dis."
      },
      status: {
        active: "ACTIVE",
        managing: "Managing",
        manage: "Manage"
      },
      pagination: {
        page: "Page",
        of: "of",
        prev: "Previous",
        next: "Next",
        noResults: "No villages found matching"
      }
    },
    bills: {
       title: "My Bills & Taxes",
       subtitle: "Manage your panchayat tax payments securely",
       pending: "Pending",
       history: "Payment History",
       payNow: "Pay Now",
       noPending: "No pending bills! You are all caught up.",
       download: "Download Receipt"
    },
    certificates: {
        title: "My Certificates",
        subtitle: "Request and download official documents",
        newRequest: "New Request",
        history: "Request History",
        type: "Certificate Type",
        aadhaar: "Aadhaar Number",
        purpose: "Purpose of Request",
        submit: "Submit Request",
        status: "Status",
        download: "Download"
    }
  },
  kn: {
    appTitle: "ಗ್ರಾಮ ಉದಯ",
    nav: {
      dashboard: "ಅವಲೋಕನ",
      directory: "ಗ್ರಾಮ ಡೈರೆಕ್ಟರಿ",
      agriculture: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ",
      water: "ನೀರಿನ ವ್ಯವಸ್ಥೆ",
      health: "ಆರೋಗ್ಯ ಕೇಂದ್ರ",
      education: "ಸ್ಮಾರ್ಟ್ ಶಿಕ್ಷಣ",
      schemes: "ಯೋಜನೆಗಳು",
      planning: "ನಗರ ಯೋಜನೆ",
      maps: "ಸಂಪನ್ಮೂಲಗಳು",
      bills: "ತೆರಿಗೆ & ಬಿಲ್ಲುಗಳು",
      certificates: "ಪ್ರಮಾಣಪತ್ರಗಳು"
    },
    status: "ಆನ್‌ಲೈನ್",
    activeVillage: "ಸಕ್ರಿಯ ಗ್ರಾಮ",
    change: "ಬದಲಿಸಿ",
    dashboard: {
      title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      population: "ಜನಸಂಖ್ಯೆ",
      waterReserves: "ನೀರಿನ ಸಂಗ್ರಹ",
      soilHealth: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
      avgIncome: "ಸರಾಸರಿ ಆದಾಯ",
      waterConsumption: "ನೀರು ಬಳಕೆ",
      marketSnapshot: "ಮಾರುಕಟ್ಟೆ ನೋಟ",
      liveAlert: "ಲೈವ್ ಎಚ್ಚರಿಕೆ"
    },
    agri: {
      tabs: { scan: "ರೋಗ ಸ್ಕ್ಯಾನರ್", recommend: "ಬೆಳೆ ಸಲಹೆ", market: "ಮಾರುಕಟ್ಟೆ ಭವಿಷ್ಯ" },
      upload: "ಸಸ್ಯದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      diagnose: "ರೋಗ ಪತ್ತೆ ಮಾಡಿ",
      analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      soil: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
      season: "ಋತು",
      region: "ಪ್ರದೇಶ",
      getRec: "ಸಲಹೆ ಪಡೆಯಿರಿ",
      cropName: "ಬೆಳೆ ಹೆಸರು",
      location: "ಸ್ಥಳ",
      predict: "ಬೆಲೆ ಊಹಿಸಿ"
    },
    live: {
      listening: "ಆಲಿಸಲಾಗುತ್ತಿದೆ...",
      council: "ಧ್ವನಿ ಸಲಹೆಗಾರ"
    },
    directory: {
      title: "ಗ್ರಾಮ ಉದಯ ಡೈರೆಕ್ಟರಿ",
      subtitle: "ಪ್ರದೇಶದಾದ್ಯಂತ ಹಳ್ಳಿಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ",
      searchPlaceholder: "ಹಳ್ಳಿಗಳನ್ನು ಹುಡುಕಿ...",
      headers: {
        name: "ಗ್ರಾಮದ ಹೆಸರು",
        location: "ಸ್ಥಳ",
        population: "ಜನಸಂಖ್ಯೆ",
        literacy: "ಸಾಕ್ಷರತೆ ದರ",
        pension: "ಪಿಂಚಣಿ ಫಲಾನುಭವಿಗಳು",
        action: "ಕ್ರಿಯೆ"
      },
      pensionLabels: {
        total: "ಒಟ್ಟು",
        old: "ವೃದ್ಧಾಪ್ಯ",
        widow: "ವಿಧವೆ",
        disability: "ಅಂಗವಿಕಲ"
      },
      status: {
        active: "ಸಕ್ರಿಯ",
        managing: "ನಿರ್ವಹಿಸಲಾಗುತ್ತಿದೆ",
        manage: "ನಿರ್ವಹಿಸಿ"
      },
      pagination: {
        page: "ಪುಟ",
        of: "ಪೈಕಿ",
        prev: "ಹಿಂದಿನ",
        next: "ಮುಂದಿನ",
        noResults: "ಯಾವುದೇ ಹಳ್ಳಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
      }
    },
    bills: {
       title: "ನನ್ನ ಬಿಲ್ಲುಗಳು ಮತ್ತು ತೆರಿಗೆಗಳು",
       subtitle: "ನಿಮ್ಮ ಪಂಚಾಯತ್ ತೆರಿಗೆ ಪಾವತಿಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಿ",
       pending: "ಬಾಕಿ ಉಳಿದಿದೆ",
       history: "ಪಾವತಿ ಇತಿಹಾಸ",
       payNow: "ಈಗ ಪಾವತಿಸಿ",
       noPending: "ಯಾವುದೇ ಬಾಕಿ ಬಿಲ್ಲುಗಳಿಲ್ಲ!",
       download: "ರಶೀದಿ ಡೌನ್‌ಲೋಡ್"
    },
    certificates: {
        title: "ನನ್ನ ಪ್ರಮಾಣಪತ್ರಗಳು",
        subtitle: "ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ವಿನಂತಿಸಿ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        newRequest: "ಹೊಸ ವಿನಂತಿ",
        history: "ವಿನಂತಿ ಇತಿಹಾಸ",
        type: "ಪ್ರಮಾಣಪತ್ರದ ಪ್ರಕಾರ",
        aadhaar: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
        purpose: "ವಿನಂತಿಯ ಉದ್ದೇಶ",
        submit: "ವಿನಂತಿ ಸಲ್ಲಿಸಿ",
        status: "ಸ್ಥಿತಿ",
        download: "ಡೌನ್‌ಲೋಡ್"
    }
  },
  hi: {
    appTitle: "ग्राम उदय",
    nav: {
      dashboard: "अवलोकन",
      directory: "गांव निर्देशिका",
      agriculture: "स्मार्ट कृषि",
      water: "जल प्रणाली",
      health: "स्वास्थ्य केंद्र",
      education: "स्मार्ट शिक्षा",
      schemes: "योजनाएं",
      planning: "नगर नियोजन",
      maps: "संसाधन",
      bills: "बिल और कर",
      certificates: "प्रमाण पत्र"
    },
    status: "ऑनलाइन",
    activeVillage: "सक्रिय गांव",
    change: "बदलें",
    dashboard: {
      title: "डैशबोर्ड",
      population: "जनसंख्या",
      waterReserves: "जल भंडार",
      soilHealth: "मिट्टी का स्वास्थ्य",
      avgIncome: "औसत आय",
      waterConsumption: "जल की खपत",
      marketSnapshot: "बाजार का हाल",
      liveAlert: "लाइव अलर्ट"
    },
    agri: {
      tabs: { scan: "रोग स्कैनर", recommend: "फसल सुझाव", market: "बाजार अनुमान" },
      upload: "पौधे की फोटो अपलोड करें",
      diagnose: "रोग की पहचान करें",
      analyzing: "विश्लेषण हो रहा है...",
      soil: "मिट्टी का प्रकार",
      season: "मौसम",
      region: "क्षेत्र",
      getRec: "सुझाव प्राप्त करें",
      cropName: "फसल का नाम",
      location: "स्थान",
      predict: "कीमत का अनुमान"
    },
    live: {
      listening: "सुन रहा हूँ...",
      council: "वॉयस काउंसिल"
    },
    directory: {
      title: "ग्राम उदय निर्देशिका",
      subtitle: "पूरे क्षेत्र के गांवों को दिखाया जा रहा है",
      searchPlaceholder: "गांव खोजें...",
      headers: {
        name: "गांव का नाम",
        location: "स्थान",
        population: "जनसंख्या",
        literacy: "साक्षरता दर",
        pension: "पेंशन लाभार्थी",
        action: "कार्य"
      },
      pensionLabels: {
        total: "कुल",
        old: "वृद्धावस्था",
        widow: "विधवा",
        disability: "दिव्यांग"
      },
      status: {
        active: "सक्रिय",
        managing: "प्रबंधन",
        manage: "प्रबंधन करें"
      },
      pagination: {
        page: "पृष्ठ",
        of: "का",
        prev: "पिछला",
        next: "अगला",
        noResults: "कोई गांव नहीं मिला"
      }
    },
    bills: {
       title: "मेरे बिल और कर",
       subtitle: "अपने पंचायत कर भुगतान को सुरक्षित रूप से प्रबंधित करें",
       pending: "लंबित",
       history: "भुगतान इतिहास",
       payNow: "अभी भुगतान करें",
       noPending: "कोई लंबित बिल नहीं है!",
       download: "रसीद डाउनलोड"
    },
    certificates: {
        title: "मेरे प्रमाण पत्र",
        subtitle: "आधिकारिक दस्तावेजों का अनुरोध करें और डाउनलोड करें",
        newRequest: "नया अनुरोध",
        history: "अनुरोध इतिहास",
        type: "प्रमाण पत्र का प्रकार",
        aadhaar: "आधार संख्या",
        purpose: "अनुरोध का उद्देश्य",
        submit: "अनुरोध भेजें",
        status: "स्थिति",
        download: "डाउनलोड"
    }
  }
};