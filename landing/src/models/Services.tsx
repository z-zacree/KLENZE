import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import deepCleaningImage from '@/public/kitchen-long.jpg';
import changeoverCleaningImage from '@/public/living-dining-room.jpg';
import regularCleaningImage from '@/public/living-room-view.jpg';
import { IconBed, IconSpray, IconZoomScan } from '@tabler/icons-react';

export type Service = {
    icon: ReactNode;
    href: string;
    title: string;
    subtitle: string;
    imagePath: StaticImageData;
    features?: string[];
};

export const services: Service[] = [
    {
        icon: <IconSpray color="var(--mantine-color-teal-8)" />,
        href: '/services/regular',
        title: 'Regular Cleaning',
        subtitle:
            'Maintain a pristine home with our routine cleaning service, ensuring a consistently fresh and tidy living space for you and your loved ones',
        imagePath: regularCleaningImage,
        features: [
            'Charged on a per hour basis starting from $80',
            'Customized cleaning plans',
            'Thorough dusting and surface sanitization and disinfection',
            'Flexible scheduling to fit your lifestyle',
        ],
    },
    {
        icon: <IconBed color="var(--mantine-color-teal-8)" />,
        href: '/services/change-over',
        title: 'Change-over Cleaning',
        subtitle:
            'Experience seamless transitions with our changeover cleaning, leaving your space spotless for a new start or welcoming guests with a sparkling environment',
        imagePath: changeoverCleaningImage,
        features: [
            'Flat fee based on property size staring from $128',
            'Swift turnovers for rental properties',
            'Detailed inspection and surface sanitization and disinfection',
            'High quality, crisp and fresh linens every time',
        ],
    },
    {
        icon: <IconZoomScan color="var(--mantine-color-teal-8)" />,
        href: '/services/deep-clean',
        title: 'Deep Cleaning',
        subtitle:
            'Revitalize your home with our deep cleaning service, reaching every nook and cranny to eliminate dirt and grime, creating a truly rejuvenated living space',
        imagePath: deepCleaningImage,
        features: [
            'Flat fee based on property size starting from $218',
            'Thorough dirt, grime and stain removal',
            'Specialized treatment for a revitalized environment',
            'Complete kitchen and bathroom sanitization',
        ],
    },
];
