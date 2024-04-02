export const cleanTypes = ['REGULAR_CLEAN', 'CHANGE_OVER', 'DEEP_CLEAN'] as const;
export const propertyTypes = ['APARTMENT', 'HOUSE', 'OTHERS'] as const;

export type CleanType = (typeof cleanTypes)[number];
export type PropertyType = (typeof propertyTypes)[number];

export type PricingInfo = {
    bedroomCount: number;
    bathroomCount: number;
    storeyCount: number;
    propertyType: PropertyType;
    cleanType: CleanType;
};

export type BasicPricingInfo = Pick<
    PricingInfo,
    'bathroomCount' | 'bedroomCount' | 'cleanType' | 'propertyType' | 'storeyCount'
>;

export const cleanTypeReadableMap: Record<CleanType, string> = {
    CHANGE_OVER: 'Changover clean',
    DEEP_CLEAN: 'Deep clean',
    REGULAR_CLEAN: 'Regular clean',
};

export const propertyTypeReadableMap: Record<PropertyType, string> = {
    APARTMENT: 'Apartment',
    HOUSE: 'House',
    OTHERS: 'Others',
};
