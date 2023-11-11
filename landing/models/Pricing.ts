export type PricingInfo = {
    bedroomCount: number;
    bathroomCount: number;
    storeyCount: number;
    propertyType: 'APARTMENT' | 'HOUSE' | 'OTHERS';
    cleanType: 'REGULAR_CLEAN' | 'CHANGE_OVER' | 'DEEP_CLEAN';
};

export type BasicPricingInfo = Pick<
    PricingInfo,
    'bathroomCount' | 'bedroomCount' | 'cleanType' | 'propertyType' | 'storeyCount'
>;
