'use client';

import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface ComponentProps {
    onPrevStep: Function;
    onFinishStep: Function;
}

export const AdHocTasks: FC<ComponentProps> = () => {
    const searchParams = useSearchParams();

    return <>Ad Hoc Tasks Panel</>;
};
