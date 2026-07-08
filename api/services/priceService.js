const calculatePriceIntelligence = ({
  askingPrice,
  marketAvg,
  marketMin,
  marketMax,
  healthScore
}) =>{

  let priceGapPercent =
  ((askingPrice - marketAvg) / marketAvg) * 100;

  let marketPosition = "";

  let excellentBuyLimit;
  let goodBuyLimit;
  let fairDealLimit;
  let slightPremiumLimit;

  if (healthScore >= 92) {

    excellentBuyLimit = -6;
    goodBuyLimit = -3;
    fairDealLimit = 5;
    slightPremiumLimit = 10;

  }

  else if (healthScore >= 86) {

    excellentBuyLimit = -8;
    goodBuyLimit = -5;
    fairDealLimit = 5;
    slightPremiumLimit = 9;

  }

  else if (healthScore >= 81) {

    excellentBuyLimit = -10;
    goodBuyLimit = -6;
    fairDealLimit = 5;
    slightPremiumLimit = 8;

  }

  else if (healthScore >= 76) {

    excellentBuyLimit = -12;
    goodBuyLimit = -7;
    fairDealLimit = 5;
    slightPremiumLimit = 8;

  }

  else if (healthScore >= 70) {

    excellentBuyLimit = -14;
    goodBuyLimit = -8;
    fairDealLimit = 5;
    slightPremiumLimit = 7;

  }

  else if (healthScore >= 66) {

    excellentBuyLimit = -17;
    goodBuyLimit = -10;
    fairDealLimit = 4;
    slightPremiumLimit = 6;

  }

  else if (healthScore >= 60) {

    excellentBuyLimit = -22;
    goodBuyLimit = -14;
    fairDealLimit = 3;
    slightPremiumLimit = 5;

  }

  else {

    excellentBuyLimit = -28;
    goodBuyLimit = -18;
    fairDealLimit = 2;
    slightPremiumLimit = 4;

  }

  if(priceGapPercent <= excellentBuyLimit) {
    marketPosition = "Excellent Buy";
  }

  else if(priceGapPercent <= goodBuyLimit) {
    marketPosition = "Good Buy";
  }

  else if(priceGapPercent <= fairDealLimit) {
    marketPosition = "Fair Deal";
  }

  else if(priceGapPercent <= slightPremiumLimit) {
    marketPosition = "Slight Premium";
  }

  else {
    marketPosition = "Overpriced";
  }

  // SMART VALUE OVERRIDES

  if (
      healthScore < 66 &&
      priceGapPercent > -15 &&
      marketPosition !== "Overpriced"
  ) {

      marketPosition = "Needs Attention";

  }

  else if (
    healthScore >= 90 &&
      priceGapPercent > 15
  ) {

      marketPosition = "Overpriced";

  }

  else if (
      healthScore >= 90 &&
      marketPosition === "Slight Premium"
  ) {

      marketPosition = "Justified Premium";

  }

  else if (
      healthScore < 66 &&
      priceGapPercent <= -25
  ) {

      marketPosition = "Needs Attention";

  }

  let observation = "";
  let recommendation = "";

  if(marketPosition === "Needs Attention"){

    observation =
    "The asking price does not provide sufficient compensation for the vehicle's overall condition.";

    recommendation =
    "TruWheels recommends a detailed inspection and stronger negotiation before considering this purchase.";

  }

  else if(marketPosition === "Justified Premium"){

      observation =
      "Although priced above market average, the vehicle's exceptional condition supports a reasonable premium.";

      recommendation =
      "A modest negotiation is worthwhile, but the asking price appears broadly justified.";

  }

  else if(marketPosition === "Excellent Buy"){

      if(
          healthScore >= 86 &&
          priceGapPercent <= -25
      ){

          observation =
          "The asking price is unusually low for a vehicle with such a strong health profile. Additional verification is recommended.";

          recommendation =
          "Confirm ownership records, service history and accident history before proceeding.";

      }

      else if(healthScore >= 86){

          observation =
          "Vehicle is priced attractively while maintaining an excellent overall health profile.";

          recommendation =
          "TruWheels considers this a strong value opportunity. Proceed with a routine inspection.";

      }

      else if(healthScore >= 76){

          observation =
          "The asking price is attractive relative to the vehicle's overall condition.";

          recommendation =
          "Worth serious consideration after a satisfactory inspection.";

      }

      else{

          observation =
          "Although the vehicle is priced well below market average, its overall condition requires additional attention.";

          recommendation =
          "The discount should not replace a detailed inspection before purchase.";

      }

  }

  else if(marketPosition === "Good Buy"){

      if(healthScore >= 81){

          observation =
          "Competitive pricing is supported by the vehicle's strong overall condition.";

          recommendation =
          "Represents a solid value proposition with limited negotiation required.";

      }

      else if(healthScore >= 71){

          observation =
          "Pricing appears competitive for the vehicle's current condition.";

          recommendation =
          "Worth evaluating further after a careful inspection.";

      }

      else{

          observation =
          "The discount only partially compensates for the vehicle's average condition.";

          recommendation =
          "Inspect carefully and negotiate further before proceeding.";

      }

  }

  else if(marketPosition === "Fair Deal"){

    if(healthScore >= 86){

      observation =
      "Pricing is in line with the market, while the vehicle's excellent condition strengthens its overall value.";

      recommendation =
      "Fair asking price with little room for negotiation.";

    }

    else if(healthScore >= 71){

      observation =
      "The asking price broadly matches both current market trends and vehicle condition.";

      recommendation =
      "Appears to be a balanced purchase.";

    }

    else{

      observation =
      "The asking price is reasonable, although the vehicle's condition leaves limited value for the buyer.";

      recommendation =
      "Consider negotiating for a better deal.";

    }

  }

  else if(marketPosition === "Slight Premium"){

    if(healthScore >= 86){

      observation =
      "The seller is asking a modest premium that is largely supported by the vehicle's excellent condition.";

      recommendation =
      "A small negotiation is advisable, but the premium appears justified.";

    }

    else if(healthScore >= 76){

      observation =
      "The asking price is slightly above market expectations.";

      recommendation =
      "Negotiate before proceeding.";

    }

    else{

      observation =
      "The vehicle's condition does not fully justify the premium over market pricing.";

      recommendation =
      "Meaningful negotiation is recommended.";

    }

  }

  else{

    if(healthScore >= 86){

      observation =
      "Despite the vehicle's strong condition, the asking price is substantially above current market expectations.";

      recommendation =
      "Negotiate aggressively or compare similar listings.";

    }

    else{

      observation =
      "The asking price is significantly above market value and is not supported by the vehicle's current condition.";

      recommendation =
      "TruWheels recommends considering better value alternatives.";

    }

  }

  return {
    priceGapPercent,
    marketPosition,
    observation,
    recommendation
  };
}

module.exports = {
  calculatePriceIntelligence
};