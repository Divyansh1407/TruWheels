const carDatabase = {

  Maruti: {

    brandReliability: 8,

    cars: {

      Alto: {
        reliability: 9,
        maintenance: "Low",
        kmTolerance: 1.0,
        petrolCharacter:"Simple Reliable",
        engineCharacter: "Simple Reliable",
        engineConfidence: 9,
        highwayConfidence: 4,
        cityConfidence: 9,
        turboRisk: 1,
        agingBehavior: "Simple",
      },

      WagonR: {
        reliability: 9,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Simple Reliable",
        engineCharacter: "City Workhorse",
        engineConfidence: 9,
        highwayConfidence: 5,
        cityConfidence: 10,
        turboRisk: 1,
        agingBehavior: "Reliable",
      },

      Swift: {
        reliability: 9,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Balanced Fun",
        dieselCharacter:"Fun Mileage Hatch",
        engineCharacter: "Balanced Fun",
        engineConfidence: 8,
        highwayConfidence: 7,
        cityConfidence: 9,
        turboRisk: 2,
        agingBehavior: "Reliable",
      },

      Dzire: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Practical Reliable",
        dieselCharacter:"Efficient Taxi Favorite",
        engineCharacter: "Practical Reliable",
        engineConfidence: 8,
        highwayConfidence: 7,
        cityConfidence: 9,
        turboRisk: 2,
        agingBehavior: "Reliable",

      },

      Baleno: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Efficient Urban",
        engineCharacter: "Efficient Urban",
        engineConfidence: 8,
        highwayConfidence: 6,
        cityConfidence: 9,
        turboRisk: 2,
        agingBehavior: "Smooth",

      },

      Ciaz: {
        reliability: 7.5,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Comfortable Cruiser",
        dieselCharacter:"Highway Sedan",
        engineCharacter: "Comfortable Cruiser",
        engineConfidence: 8,
        highwayConfidence: 8,
        cityConfidence: 7,
        turboRisk: 2,
        agingBehavior: "Graceful",

      },

      Brezza: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Dependable SUV",
        dieselCharacter:"Compact Torque SUV",
        engineCharacter: "Dependable SUV",
        engineConfidence: 8,
        highwayConfidence: 8,
        cityConfidence: 8,
        turboRisk: 3,
        agingBehavior: "Reliable",
      },

      Ertiga: {
        reliability: 8.5,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Family Workhorse",
        cngCharacter:"Practical People Mover",
        engineCharacter: "Family Workhorse",
        engineConfidence: 9,
        highwayConfidence: 8,
        cityConfidence: 8,
        turboRisk: 2,
        agingBehavior: "Reliable",
      },

      "S-Cross": {
        reliability: 7.5,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Underrated Highway Cruiser",
        dieselCharacter:"Compact Torque Crossover",
        engineCharacter: "Underrated Highway Cruiser",
        engineConfidence: 8,
        highwayConfidence: 9,
        cityConfidence: 6,
        turboRisk: 2,
        agingBehavior: "Graceful",
      }

    }

  },

  Hyundai: {

    brandReliability: 8,

    cars: {

      i10: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Easy Urban",
        engineCharacter:"Easy Urban",
        engineConfidence:8,
        highwayConfidence:5,
        cityConfidence:10,
        turboRisk:1,
        agingBehavior:"Simple",

      },

      "Grand i10": {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Smooth City Car",
        dieselCharacter:"Efficient Compact Cruiser",
        engineCharacter:"Smooth City Car",
        engineConfidence:8,
        highwayConfidence:6,
        cityConfidence:9,
        turboRisk:2,
        agingBehavior:"Reliable",

      },

      i20: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Premium Urban",
        dieselCharacter:"Efficient Premium Hatch",
        engineCharacter:"Premium Urban",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:9,
        turboRisk:4,
        agingBehavior:"Modern",
      },

      "Elite i20": {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Refined Urban Hatch",
        dieselCharacter:"Premium Mileage Hatch",
        engineCharacter:"Refined Cruiser",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:9,
        turboRisk:3,
        agingBehavior:"Smooth",

      },

      Verna: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Refined Enthusiast",
        dieselCharacter:"Fast Cruiser",
        engineCharacter:"Enthusiast Sedan",
        engineConfidence:7,
        highwayConfidence:8,
        cityConfidence:7,
        turboRisk:5,
        agingBehavior:"Modern",
      },

      Venue: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Turbo Urban SUV",
        dieselCharacter:"Compact Highway SUV",
        engineCharacter:"Compact Turbo Urban",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:9,
        turboRisk:6,
        agingBehavior:"Moderate",
      },

      Creta: {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Premium Family SUV",
        dieselCharacter:"Highway Family Cruiser",
        engineCharacter:"Premium All-Rounder",
        engineConfidence:8,
        highwayConfidence:8,
        cityConfidence:8,
        turboRisk:5,
        agingBehavior:"Modern",

      }

    }

  },

  Tata: {

    brandReliability: 6,

    cars: {

      Tiago: {
        reliability: 6,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Value City Car",
        cngCharacter:"Budget Mileage Hatch",
        engineCharacter:"Value City Car",
        engineConfidence:6,
        highwayConfidence:5,
        cityConfidence:8,
        turboRisk:1,
        agingBehavior:"Moderate",

      },

      Tigor: {
        reliability: 6,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Practical Compact",
        cngCharacter:"Economical Sedan",
        engineCharacter:"Practical Compact",
        engineConfidence:6,
        highwayConfidence:6,
        cityConfidence:8,
        turboRisk:1,
        agingBehavior:"Moderate",

      },

      Altroz: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Premium Hatchback",
        dieselCharacter:"Solid Mileage Hatch",
        engineCharacter:"Premium Hatchback",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:8,
        turboRisk:4,
        agingBehavior:"Modern",
      },

      Punch: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Rugged Urban",
        cngCharacter:"Compact Mileage SUV",
        engineCharacter:"Rugged Urban",
        engineConfidence:7,
        highwayConfidence:6,
        cityConfidence:8,
        turboRisk:2,
        agingBehavior:"Tough",
      },

      Nexon: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Safe Turbo Urban",
        dieselCharacter:"Torque Compact SUV",
        engineCharacter:"Safe Turbo Cruiser",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:8,
        turboRisk:6,
        agingBehavior:"Moderate",
      },

      Harrier: {
        reliability: 8,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        dieselCharacter:"Premium Highway Tank",
        engineCharacter:"Premium Highway SUV",
        engineConfidence:8,
        highwayConfidence:9,
        cityConfidence:5,
        turboRisk:4,
        agingBehavior:"Heavy Duty",
      },

      Safari: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        dieselCharacter:"Family Highway Machine",
        engineCharacter:"Family Highway Tank",
        engineConfidence:7,
        highwayConfidence:9,
        cityConfidence:5,
        turboRisk:4,
        agingBehavior:"Heavy Duty",
      }

    }

  },

  Mahindra: {

    brandReliability: 7,

    cars: {

      Bolero: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        dieselCharacter:"Rural Tank",
        engineCharacter:"Rural Workhorse",
        engineConfidence:9,
        highwayConfidence:7,
        cityConfidence:3,
        turboRisk:2,
        agingBehavior:"Built Tough",
      },

      XUV300: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Torque Urban SUV",
        dieselCharacter:"Compact Torque Machine",
        engineCharacter:"Torque Urban SUV",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:8,
        turboRisk:5,
        agingBehavior:"Moderate",
      },

      XUV500: {
        reliability: 6,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        dieselCharacter:"Powerful Long Distance SUV",
        petrolCharacter:"Torque Urban SUV",
        engineCharacter:"Powerful But Complex",
        engineConfidence:6,
        highwayConfidence:9,
        cityConfidence:5,
        turboRisk:6,
        agingBehavior:"Complex",
      },

      XUV700: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Performance Family SUV",
        dieselCharacter:"Modern Highway Beast",
        engineCharacter:"Premium Performance SUV",
        engineConfidence:7,
        highwayConfidence:9,
        cityConfidence:7,
        turboRisk:3.8,
        agingBehavior:"Modern",
      },

      Scorpio: {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        dieselCharacter:"Rugged Legend",
        engineCharacter:"Rugged SUV",
        engineConfidence:8,
        highwayConfidence:9,
        cityConfidence:4,
        turboRisk:3,
        agingBehavior:"Built Tough",
      },

      "Scorpio N": {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Modern Rugged SUV",
        dieselCharacter:"Modern Highway Beast",
        engineCharacter:"Modern Highway Beast",
        engineConfidence:8,
        highwayConfidence:9,
        cityConfidence:6,
        turboRisk:4,
        agingBehavior:"Tough",
      },

      Thar: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Adventure Lifestyle",
        dieselCharacter:"Offroad Torque Machine",
        engineCharacter:"Adventure SUV",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:5,
        turboRisk:4,
        agingBehavior:"Tough",

      }

    }

  },

  Honda: {

    brandReliability: 9,

    cars: {

      City: {

  reliability: 9,

  maintenance: "Medium",
  kmTolerance: 1.0,
  automaticType: "CVT",
  petrolCharacter:"Graceful Reliable",
  dieselCharacter:"Efficient Cruiser",
  engineCharacter: "Graceful Reliable",
  engineConfidence: 9,
  highwayConfidence: 8,
  cityConfidence: 9,
  turboRisk: 1,
  agingBehavior: "Graceful",

  priceData: {

    2011: {
      avg: 132000,
      min: 118000,
      max: 145000
    },

    2012: {
      avg: 150000,
      min: 135000,
      max: 165000
    },

    2013: {
      avg: 215000,
      min: 193000,
      max: 236000
    },

    2014: {
      avg: 275000,
      min: 247000,
      max: 302000
    },

    2015: {
      avg: 351000,
      min: 315000,
      max: 386000
    },

    2016: {
      avg: 395000,
      min: 355000,
      max: 434000
    },

    2017: {
      avg: 443000,
      min: 398000,
      max: 487000
    },

    2018: {
      avg: 496000,
      min: 446000,
      max: 545000
    },

    2019: {
      avg: 568000,
      min: 511000,
      max: 624000
    },

    2020: {
      avg: 667000,
      min: 600000,
      max: 733000
    },

    2021: {
      avg: 731000,
      min: 657000,
      max: 804000
    },

    2022: {
      avg: 823000,
      min: 740000,
      max: 905000
    },

    2023: {
      avg: 920000,
      min: 828000,
      max: 1012000
    },

    2024: {
      avg: 1100000,
      min: 990000,
      max: 1210000
    }

  }

},

      Amaze: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Dependable Daily",
        dieselCharacter:"Mileage Friendly",
        engineCharacter: "Dependable Daily",
        engineConfidence: 9,
        highwayConfidence: 7,
        cityConfidence: 9,
        turboRisk: 1,
        agingBehavior: "Reliable",
      },

      Jazz: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Smart Urban",
        engineCharacter: "Smart Urban",
        engineConfidence: 9,
        highwayConfidence: 7,
        cityConfidence: 10,
        turboRisk: 1,
        agingBehavior: "Graceful",
      },

      "WR-V": {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Practical Urban",
        dieselCharacter:"Compact Cruiser",
        engineCharacter: "Practical Crossover",
        engineConfidence: 8,
        highwayConfidence: 8,
        cityConfidence: 8,
        turboRisk: 2,
        agingBehavior: "Reliable",
      },

      Brio: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Fun Lightweight Urban",
        dieselCharacter:"Lightweight Mileage Hatch",
        engineCharacter: "Fun Lightweight Urban",
        engineConfidence: 8,
        highwayConfidence: 5,
        cityConfidence: 10,
        turboRisk: 1,
        agingBehavior: "Simple",
      }

    }

  },

  Kia: {

    brandReliability: 7,

    cars: {

      Sonet: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Feature-Rich Turbo",
        dieselCharacter:"Compact Premium Cruiser",
        engineCharacter:"Feature-Rich Turbo",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:9,
        turboRisk:6,
        agingBehavior:"Modern",

      },

      Seltos: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Premium Urban SUV",
        dieselCharacter:"Highway Premium SUV",
        engineCharacter:"Premium Urban SUV",
        engineConfidence:7,
        highwayConfidence:8,
        cityConfidence:8,
        turboRisk:6,
        agingBehavior:"Modern",
      },

      Carens: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Modern Family Cruiser",
        dieselCharacter:"Long Distance Family Car",
        engineCharacter:"Modern Family Cruiser",
        engineConfidence:7,
        highwayConfidence:8,
        cityConfidence:8,
        turboRisk:5,
        agingBehavior:"Modern",
      }

    }

  },

  Volkswagen: {

    brandReliability: 6.5,

    cars: {

      Polo: {
        reliability: 8,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DSG",
        petrolCharacter:"Turbo Enthusiast",
        dieselCharacter:"Highway Pocket Rocket",
        engineCharacter: "Enthusiast Pocket Rocket",
        engineConfidence: 7,
        highwayConfidence: 8,
        cityConfidence: 6,
        turboRisk: 4,
        agingBehavior: "Sensitive",
      },

      Vento: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DSG",
        petrolCharacter:"Driver Sedan",
        dieselCharacter:"Torque Cruiser",
        engineCharacter:"Driver-Focused Sedan",
        engineConfidence:7,
        highwayConfidence:8,
        cityConfidence:6,
        turboRisk:7,
        agingBehavior:"Sensitive",
      },

      Virtus: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DSG",
        petrolCharacter:"Modern Turbo Sedan",
        engineCharacter:"Modern Enthusiast Sedan",
        engineConfidence:8,
        highwayConfidence:8,
        cityConfidence:7,
        turboRisk:5,
        agingBehavior:"Modern",
      }

    }

  },

  Skoda: {

    brandReliability: 6,

    cars: {

      Rapid: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DSG"

      },

      Slavia: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DSG"
      }

    }

  },

  Renault: {

    brandReliability: 6,

    cars: {

      Kwid: {
        reliability: 6,
        maintenance: "Low",
        kmTolerance: 0.68,
        automaticType: "AMT",
        petrolCharacter:"Budget Urban",
        engineCharacter:"Budget Urban",
        engineConfidence:6,
        highwayConfidence:4,
        cityConfidence:8,
        turboRisk:1,
        agingBehavior:"Simple",
      },

      Triber: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 0.8,
        automaticType: "AMT",
        petrolCharacter:"Smart Family Budget",
        engineCharacter:"Smart Family Budget",
        engineConfidence:7,
        highwayConfidence:6,
        cityConfidence:8,
        turboRisk:2,
        agingBehavior:"Practical",

      },

      Duster: {
        reliability: 8,
        maintenance: "Medium-High",
        kmTolerance: 1.0,
        automaticType: "CVT",
        petrolCharacter:"Rugged Urban SUV",
        dieselCharacter:"Rugged Highway Machine",
        engineCharacter:"Rugged Highway Machine",
        engineConfidence:8,
        highwayConfidence:9,
        cityConfidence:5,
        turboRisk:4,
        agingBehavior:"Tough",
      }

    }

  },

  MG: {

    brandReliability: 6,

    cars: {

      Hector: {
        reliability: 7,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Feature-Loaded Cruiser",
        dieselCharacter:"Heavy Highway Cruiser",
        engineCharacter:"Feature-Loaded Cruiser",
        engineConfidence:6,
        highwayConfidence:8,
        cityConfidence:6,
        turboRisk:6,
        agingBehavior:"Complex",
      },

      Gloster: {
        reliability: 6,
        maintenance: "High",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        dieselCharacter:"Premium Highway Giant",
        engineCharacter:"Premium Highway Giant",
        engineConfidence:7,
        highwayConfidence:10,
        cityConfidence:4,
        turboRisk:5,
        agingBehavior:"Heavy Duty",
      }

    }

  },

  Ford: {

   brandReliability: 8,

   cars: {

      EcoSport: {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.2,
        automaticType: "Torque Converter",
        petrolCharacter:"Driver Urban SUV",
        dieselCharacter:"Torque Fun Machine",
        engineCharacter:"Driver SUV",
        engineConfidence:8,
        highwayConfidence:8,
        cityConfidence:7,
        turboRisk:4,
        agingBehavior:"Tough",
      },

      Endeavour: {
        reliability: 8,
        maintenance: "High",
        kmTolerance: 1.5,
        automaticType: "Torque Converter",
        dieselCharacter:"Built Tough Highway Beast",
        engineCharacter:"Built Tough Premium",
        engineConfidence:9,
        highwayConfidence:10,
        cityConfidence:4,
        turboRisk:4,
        agingBehavior:"Built Tough",
      },

      Aspire: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "Torque Converter",
        petrolCharacter:"Balanced Compact",
        dieselCharacter:"Compact Mileage Sedan",
        engineCharacter:"Balanced Compact",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:8,
        turboRisk:3,
        agingBehavior:"Reliable",
      },

      Figo: {
        reliability: 7,
        maintenance: "Medium",
        kmTolerance: 1.0,
        automaticType: "DCT",
        petrolCharacter:"Fun Hatchback",
        dieselCharacter:"Mileage Fun Hatch",
        engineCharacter:"Fun Driver Hatch",
        engineConfidence:7,
        highwayConfidence:7,
        cityConfidence:8,
        turboRisk:4,
        agingBehavior:"Moderate",
      },

      Freestyle: {
        reliability: 8,
        maintenance: "Medium",
        kmTolerance: 1.1,
        petrolCharacter:"Enthusiast Crossover",
        dieselCharacter:"Rugged Fun Hatch",
        engineCharacter:"Enthusiast Crossover",
        engineConfidence:8,
        highwayConfidence:8,
        cityConfidence:7,
        turboRisk:3,
        agingBehavior:"Tough",
      }

    }

  },

  Toyota: {

   brandReliability: 10,

   cars: {

      Fortuner: {
        reliability: 10,
        maintenance: "Medium",
        kmTolerance: 1.6,
        automaticType: "Torque Converter",
        petrolCharacter:"Smooth Giant",
        dieselCharacter:"Untouchable Highway King",
        engineCharacter:"Untouchable Highway King",
        engineConfidence:10,
        highwayConfidence:10,
        cityConfidence:5,
        turboRisk:3,
        agingBehavior:"Built Tough",
      },

      Innova: {
        reliability: 10,
        maintenance: "Medium",
        kmTolerance: 1.5,
        automaticType: "Torque Converter",
        petrolCharacter:"Comfort Cruiser",
        dieselCharacter:"Legendary Workhorse",
        engineCharacter:"Legendary Workhorse",
        engineConfidence:10,
        highwayConfidence:10,
        cityConfidence:7,
        turboRisk:2,
        agingBehavior:"Built Tough",
      },

      Glanza: {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.0,
        automaticType: "AMT",
        petrolCharacter:"Efficient Daily",
        engineCharacter:"Efficient Daily",
        engineConfidence:8,
        highwayConfidence:6,
        cityConfidence:9,
        turboRisk:1,
        agingBehavior:"Reliable",
      },

      "Urban Cruiser Hyryder": {
        reliability: 8,
        maintenance: "Low",
        kmTolerance: 1.1,
        automaticType: "Torque Converter",
        petrolCharacter:"Efficient Modern Cruiser",
        engineCharacter:"Efficient Modern Cruiser",
        engineConfidence:9,
        highwayConfidence:7,
        cityConfidence:9,
        turboRisk:2,
        agingBehavior:"Modern",
      },

    }

  }

};