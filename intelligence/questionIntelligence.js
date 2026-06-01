export function generateQuestions({

  serviceDataProvided,
  ownershipConfidence,
  maintenanceStage,
  marketPosition,
  accidentHistory

}) {

  let highPriority = [];

  let usefulPool = [

    "Is the RC currently in your name?",

    "Do you have both original keys available?",

    "Are there any pending repairs or known issues?",

    "Do you have maintenance invoices available?",

    "Is the insurance currently active?",

    "Has the vehicle undergone any modifications?"

  ];



  // HIGH PRIORITY QUESTIONS

  if(serviceDataProvided !== "true"){

    highPriority.push(
      "Can you share service records or invoices?"
    );

  }

  if(accidentHistory === "Major"){

    highPriority.push(
      "What repairs were done after the accident?"
    );

  }

  if(maintenanceStage === "Major Maintenance Zone"){

    highPriority.push(
      "Has the engine or gearbox undergone major repairs?"
    );

  }

  if(maintenanceStage === "Advanced Wear Zone"){

    highPriority.push(
      "Have any expensive components been replaced recently?"
    );

  }

  if(
    marketPosition === "Excellent Buy" ||
    marketPosition === "Needs Attention"
  ){

    highPriority.push(
      "Why is the vehicle priced below market average?"
    );

  }

  if(marketPosition === "Overpriced"){

    highPriority.push(
      "What justifies the premium asking price?"
    );

  }

  if(ownershipConfidence === "Low"){

    highPriority.push(
      "Why has the vehicle changed owners multiple times?"
    );

  }



  // FILL REMAINING HIGH PRIORITY SLOTS

  const fallbackQuestions = [

    "Are there any pending repairs or known issues?",

    "Do you have maintenance invoices available?",

    "Is the RC currently in your name?",

    "Is the insurance currently active?"

  ];

  for(let question of fallbackQuestions){

    if(highPriority.length >= 3){
      break;
    }

    if(!highPriority.includes(question)){
      highPriority.push(question);
    }

  }



  // LIMIT TO TOP 3

  highPriority = highPriority.slice(0,3);



  // USEFUL QUESTIONS

  let useful = [];

  for(let question of usefulPool){

    if(
      useful.length < 3 &&
      !highPriority.includes(question)
    ){
      useful.push(question);
    }
  }



  return {

    highPriority,
    useful

  };

}