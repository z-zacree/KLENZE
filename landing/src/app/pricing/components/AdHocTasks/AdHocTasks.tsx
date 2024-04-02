'use client';

import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

export const AdHocTasks: FC = () => {
    const searchParams = useSearchParams();

    return <>Ad Hoc Tasks Panel</>;
};
