export function analyzePriceIntelligence({
  askingPrice,
  marketAvg,
  marketMin,
  marketMax,
  healthScore
}) {

  let priceGapPercent =
  ((askingPrice - marketAvg) / marketAvg) * 100;

  let marketPosition = "";

  if(priceGapPercent <= -20) {
  marketPosition = "Needs Attention";
  }
  else if(priceGapPercent <= -10) {
    marketPosition = "Excellent Buy";
  }
  else if(priceGapPercent <= -5) {
    marketPosition = "Good Buy";
  }
  else if(priceGapPercent <= 5) {
    marketPosition = "Fair Deal";
  }
  else if(priceGapPercent <= 12) {
    marketPosition = "Slight Premium";
  }
  else {
    marketPosition = "Overpriced";
  }

  let observation = "";
  let recommendation = "";

  if(marketPosition === "Needs Attention"){
    observation =
    "Listed significantly below market expectations.";
    recommendation =
    "Additional verification recommended.";
  }

  else if(marketPosition === "Excellent Buy"){
    observation =
    "Priced attractively against the current market.";
    recommendation =
    "Worth serious consideration.";
  }

  else if(marketPosition === "Good Buy"){
    observation =
    "Pricing appears competitive.";
    recommendation =
    "Looks like a solid value.";
  }

  else if(marketPosition === "Fair Deal"){
    observation =
    "Pricing is broadly in line with the market.";
    recommendation =
    "Price appears reasonable.";
  }

  else if(marketPosition === "Slight Premium"){
    observation =
    "Seller is asking a modest premium.";
    recommendation =
    "Some negotiation may be worthwhile.";
  }

  else{
    observation =
    "Seller is asking well above market levels.";
    recommendation =
    "Negotiation strongly recommended.";
  }

  return {
    priceGapPercent,
    marketPosition,
    observation,
    recommendation
  };
}