import { ComboboxItem } from '@mantine/core';

export const cleanTypes = ['REGULAR_CLEAN', 'CHANGE_OVER', 'DEEP_CLEAN'] as const;
export const propertyTypes = ['APARTMENT', 'HOUSE', 'OTHERS'] as const;

export type PropertyType = (typeof propertyTypes)[number];

export type PricingInfo = {
    bedroomCount: number;
    bathroomCount: number;
    storeyCount: number;
    propertyType: PropertyType;
};

export type BasicPricingInfo = Pick<
    PricingInfo,
    'bathroomCount' | 'bedroomCount' | 'propertyType' | 'storeyCount'
>;

export const propertyTypeReadableMap: Record<PropertyType, string> = {
    APARTMENT: 'Apartment',
    HOUSE: 'House',
    OTHERS: 'Others',
};

export type SelectFieldDetails = {
    id: string;
    type: 'select';
    label: string;
    description: string;
    placeholder: string;
    fieldName: string;
    value: string;
    options: ComboboxItem[];
};

export type CountFieldDetails = {
    id: string;
    type: 'count';
    label: string;
    description: string;
    fieldName: string;
    min: number;
    value: string;
};

export type PricingFieldDetails = (SelectFieldDetails | CountFieldDetails)[];

export type TotalCostBreakdown = {
    key: string;
    label: string;
    ppu: number;
    value: number;
};
