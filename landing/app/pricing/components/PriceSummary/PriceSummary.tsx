'use client';

import { useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react';

export const PriceSummary: FC = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log(searchParams.toString());
    }, [searchParams]);

    return <>Panel</>;
};
