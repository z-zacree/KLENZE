'use client';

import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

export const ExtraSupplies: FC = () => {
    const searchParams = useSearchParams();

    return <>Extra Supplies Panel</>;
};
