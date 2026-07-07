const analyzeServiceIntelligence = (data) => {

    const metrics={
        evaluationConfidence:50,
        ownershipTransparency:50,
        inspectionPriority:50,
        disclosureAuthenticity:50,
        maintenanceConsistency:50,
        riskLevel:50,
        uncertaintyLevel:50
    };

    const advisories=[];

    // SERVICE HISTORY

    switch(data.serviceHistory){

        case "Full":

            metrics.evaluationConfidence+=8;
            metrics.ownershipTransparency+=5;

            advisories.push(
                "Reported maintenance records may improve service traceability."
            );

            break;

        case "Partial":

            metrics.evaluationConfidence+=5;
            metrics.disclosureAuthenticity+=8;

            advisories.push(
                "Partial maintenance documentation available across ownership history."
            );

            break;

        case "None":

            metrics.evaluationConfidence-=8;
            metrics.inspectionPriority+=10;
            metrics.uncertaintyLevel+=12;

            advisories.push(
                "Limited maintenance history available. Physical inspection becomes more important."
            );

            break;
    }

    // SERVICE TYPE

    switch(data.serviceType){

        case "Authorized":

            metrics.evaluationConfidence+=5;
            metrics.ownershipTransparency+=4;

            advisories.push(
                "Authorized maintenance reported, though supporting records may vary in availability."
            );

            break;

        case "Mixed":

            metrics.disclosureAuthenticity+=10;
            metrics.evaluationConfidence+=5;

            advisories.push(
                "Combination of authorized and independent servicing reported."
            );

            break;

        case "Local":

            metrics.uncertaintyLevel+=5;

            advisories.push(
                "Independent garage maintenance may reduce long-term service traceability."
            );

            break;
    }

    // ACCIDENT HISTORY

    switch(data.accidentHistory){

        case "None":

            metrics.evaluationConfidence+=2;

            advisories.push(
                "No major repair history reported by seller. Independent inspection is still recommended."
            );

            break;

        case "Minor":

            metrics.riskLevel+=5;
            metrics.ownershipTransparency+=6;
            metrics.disclosureAuthenticity+=8;

            advisories.push(
                "Minor cosmetic or panel repair history disclosed."
            );

            break;

        case "Major":

            metrics.riskLevel+=35;
            metrics.inspectionPriority+=40;
            metrics.evaluationConfidence-=10;
            metrics.ownershipTransparency+=12;

            advisories.push(
                "Structural repair history detected. Comprehensive chassis and alignment inspection strongly recommended."
            );

            break;
    }

    // MAINTENANCE DISCIPLINE

    switch(data.maintenanceDiscipline){

        case "Excellent":

            metrics.maintenanceConsistency+=10;
            metrics.evaluationConfidence+=5;

            advisories.push(
                "Ownership pattern suggests proactive maintenance behavior."
            );

            break;

        case "Average":

            metrics.disclosureAuthenticity+=6;

            advisories.push(
                "Minor servicing delays reported within typical ownership patterns."
            );

            break;

        case "Poor":

            metrics.riskLevel+=20;
            metrics.inspectionPriority+=20;
            metrics.ownershipTransparency+=10;

            advisories.push(
                "Signs of deferred maintenance may indicate accelerated component wear."
            );

            break;
    }

    // CONTRADICTION ENGINE

    if(
        data.serviceHistory==="Full" &&
        data.maintenanceDiscipline==="Poor"
    ){

        metrics.evaluationConfidence-=10;
        metrics.uncertaintyLevel+=10;

        advisories.push(
            "Servicing claims and ownership condition appear slightly inconsistent. Independent inspection recommended."
        );
    }

    if(
        data.serviceType==="Authorized" &&
        data.serviceHistory==="None"
    ){

        metrics.evaluationConfidence-=12;
        metrics.disclosureAuthenticity-=10;

        advisories.push(
            "Authorized maintenance reported, though supporting records are limited."
        );
    }

    let perfectSelections=0;

    if(data.serviceHistory==="Full") perfectSelections++;
    if(data.serviceType==="Authorized") perfectSelections++;
    if(data.accidentHistory==="None") perfectSelections++;
    if(data.maintenanceDiscipline==="Excellent") perfectSelections++;

    if(perfectSelections>=4){

        metrics.disclosureAuthenticity-=15;

        advisories.push(
            "Vehicle history appears exceptionally clean for its age. Additional verification may be beneficial."
        );
    }

    if(
        data.serviceType==="Local" &&
        data.maintenanceDiscipline==="Excellent" &&
        data.serviceHistory!=="None"
    ){

        metrics.disclosureAuthenticity+=12;
        metrics.ownershipTransparency+=6;

        advisories.push(
            "Consistent independent maintenance pattern reported."
        );
    }

    if(
        data.accidentHistory==="Major" &&
        data.maintenanceDiscipline==="Excellent"
    ){

        metrics.evaluationConfidence+=5;

        advisories.push(
            "Post-repair maintenance consistency may improve long-term ownership confidence."
        );
    }

    return{
        metrics,
        advisories
    };
}

module.exports = {
  analyzeServiceIntelligence
};