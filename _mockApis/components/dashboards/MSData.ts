import type { statsCards, recentInflu, influTeam } from '@/types/components/dashboards/MSDash';
import { VolumeIcon, UsersIcon, UserIcon, ReportAnalyticsIcon, BrandYoutubeIcon, DevicesIcon } from 'vue-tabler-icons';
import img1 from '/images-ms/dashboard/recentInflu-1.png';
import img2 from '/images-ms/dashboard/recentInflu-2.png';

const statsCardsData: statsCards[] = [
    {
        title: "TOTAL CAMPAIGNS",
        iconcolor: "primary",
        icon: VolumeIcon,
        number: "258",
    },
    {
        title: "TEAMS",
        iconcolor: "primary",
        icon: UsersIcon,
        number: "14",
    },
    {
        title: "RECENT INFLUENCERS",
        iconcolor: "primary",
        icon: UserIcon,
        number: "48",
    },
    {
        title: "TOTAL REPORTS",
        iconcolor: "primary",
        icon: ReportAnalyticsIcon,
        number: "26",
    },
    {
        title: "VIDEO SURVEYS",
        iconcolor: "primary",
        icon: BrandYoutubeIcon,
        number: "04",
    },
    {
        title: "CONNECTED DEVICES",
        iconcolor: "primary",
        icon: DevicesIcon,
        number: "03",
    },
];

const recentInfluData: recentInflu[] = [
    {
        title: "Richard Dawkins",
        avatar: img1,
        avatarstatus: "success",
        desc: "Style & Fashion | Television",
        count: "9M"
      },
      {
        title: "Siddharth Nigham",
        avatar: img2,
        avatarstatus: "error",
        desc: "Health Care | Television",
        count: "7M"
      },
];

const influTeamData: influTeam[] = [
    {
        title: "Team 1",
        team: [],
        desc: "Style & Fashion | Television",
      },
      {
        title: "Team 2",
        team: [],
        desc: "Music | Television",
      },
      {
        title: "Team 3",
        team: [],
        desc: "Television | Medicines",
      },
      {
        title: "Team 4",
        team: [],
        desc: "Healthcare | Medicines",
      },
      {
        title: "Team 5",
        team: [],
        desc: "Music | Television",
      },
];

export { statsCardsData, recentInfluData, influTeamData };