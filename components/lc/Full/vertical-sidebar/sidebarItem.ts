import {
  ChartPieIcon,
  CoffeeIcon,
  CpuIcon,
  FlagIcon,
  ApertureIcon,
  ShoppingCartIcon,
  LayoutDashboardIcon,
  VolumeIcon,
  UserIcon,
  ReportAnalyticsIcon,
  UsersIcon,
  BrandYoutubeIcon,
  BuildingStoreIcon,
  SettingsIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  {
    title: "Campaigns",
    icon: VolumeIcon,
    to: "/404",
  },
  {
    title: "Influencers",
    icon: UserIcon,
    to: "/404",
  },
  {
    title: "Reports",
    icon: ReportAnalyticsIcon,
    to: "/404",
  },
  {
    title: "Teams",
    icon: UsersIcon,
    to: "/404",
  },
  {
    title: "Video Response Surveys",
    icon: BrandYoutubeIcon,
    to: "/404",
  },
  {
    title: "Store",
    icon: BuildingStoreIcon,
    to: "/404",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    to: "/404",
  },
  {
    title: "Help",
    icon: HelpIcon,
    to: "/404",
  },
];

export default sidebarItem;
