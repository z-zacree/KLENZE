'use client';

import { useSearchParams } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useMemo } from 'react';

import { TotalCostBreakdown } from '@/models/Pricing';

const defaultValue = {
    total: 0,
    costBreakdown: new Array<TotalCostBreakdown>(),
};

export const PricingContext = createContext(defaultValue);

export const PricingContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const searchParams = useSearchParams();

    const costBreakdown = useMemo(() => {
        let breakdown = new Array<TotalCostBreakdown>();

        const paramMap = Array.from(searchParams.entries()).reduce((agg, val) => {
            const [key, value] = val;

            if (!isNaN(Number(value))) agg.set(key, Number(value));

            return agg;
        }, new Map<string, number>());

        if (paramMap.has('bedroomCount')) {
            breakdown.push({
                key: 'bedroomCount',
                label: 'Bedroom' + (paramMap.get('bedroomCount')! > 1 ? 's' : ''),
                ppu: 60,
                value: paramMap.get('bedroomCount')!,
            });
        }

        if (paramMap.has('bathroomCount')) {
            breakdown.push({
                key: 'bathroomCount',
                label: 'Bathroom' + (paramMap.get('bathroomCount')! > 1 ? 's' : ''),
                ppu: 20,
                value: paramMap.get('bathroomCount')!,
            });
        }

        if (paramMap.has('powderRoomCount')) {
            breakdown.push({
                key: 'powderRoomCount',
                label: 'Additional Powder Room',
                ppu: 20,
                value: Math.max((paramMap.get('powderRoomCount') ?? 0) - 1, 0),
            });
        }

        if (paramMap.has('livingRoomCount')) {
            breakdown.push({
                key: 'livingRoomCount',
                label: 'Additional Living Area',
                ppu: 60,
                value: Math.max((paramMap.get('livingRoomCount') ?? 0) - 1, 0),
            });
        }

        if (paramMap.has('kitchenCount')) {
            breakdown.push({
                key: 'kitchenCount',
                label: 'Additional Kitchen Area',
                ppu: 55,
                value: Math.max((paramMap.get('kitchenCount') ?? 0) - 1, 0),
            });
        }

        if (paramMap.has('outdoorCount')) {
            breakdown.push({
                key: 'outdoorCount',
                label: 'Outdoor Area',
                ppu: 60,
                value: paramMap.get('outdoorCount')!,
            });
        }

        if (paramMap.has('linenDoubleCount')) {
            breakdown.push({
                key: 'linenDoubleCount',
                label: 'Linen - Queen/King',
                ppu: 24,
                value: paramMap.get('linenDoubleCount')!,
            });
        }

        if (paramMap.has('linenSingleCount')) {
            breakdown.push({
                key: 'linenSingleCount',
                label: 'Linen - Single',
                ppu: 18,
                value: paramMap.get('linenSingleCount')!,
            });
        }

        if (paramMap.has('showerPack')) {
            breakdown.push({
                key: 'showerPack',
                label: 'Shower pack',
                ppu: 7,
                value: paramMap.get('showerPack')!,
            });
        }

        if (paramMap.has('bathroomPack')) {
            breakdown.push({
                key: 'bathroomPack',
                label: 'Bathroom pack',
                ppu: 8,
                value: paramMap.get('bathroomPack')!,
            });
        }

        if (paramMap.has('completeBathroomSet')) {
            breakdown.push({
                key: 'completeBathroomSet',
                label: 'Complete bathroom set',
                ppu: 15,
                value: paramMap.get('completeBathroomSet')!,
            });
        }

        if (paramMap.has('towelPack')) {
            breakdown.push({
                key: 'towelPack',
                label: 'Towel pack',
                ppu: 5,
                value: paramMap.get('towelPack')!,
            });
        }

        if (paramMap.has('kitchenPack')) {
            breakdown.push({
                key: 'kitchenPack',
                label: 'Kitchen pack',
                ppu: 6,
                value: paramMap.get('kitchenPack')!,
            });
        }

        if (paramMap.has('beveragesPack')) {
            breakdown.push({
                key: 'beveragesPack',
                label: 'Beverages pack',
                ppu: 5,
                value: paramMap.get('beveragesPack')!,
            });
        }

        if (paramMap.has('completeKitchenSet')) {
            breakdown.push({
                key: 'completeKitchenSet',
                label: 'Complete Kitchen set',
                ppu: 11,
                value: paramMap.get('completeKitchenSet')!,
            });
        }

        return breakdown;
    }, [searchParams]);

    const total = useMemo(() => {
        let next = 60;

        costBreakdown.forEach(({ key, ppu, value }) => {
            next += ppu * value;

            if (key === 'bedroomCount' && value > 1) {
                next -= 40;
            }
        });

        return next;
    }, [costBreakdown]);

    return (
        <PricingContext.Provider value={{ total, costBreakdown }}>
            {children}
        </PricingContext.Provider>
    );
};
