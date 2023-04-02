// project imports
import mock from './mockAdapter';

import type { notificationType, profileType, languageType,searchType } from '@/types/HeaderTypes'
// 
// Notification
// 
import user1 from '/images/profile/user-1.jpg';
import user2 from '/images/profile/user-2.jpg';
import user3 from '/images/profile/user-3.jpg';
import user4 from '/images/profile/user-4.jpg';
import user5 from '/images/profile/user-5.jpg';

const notifications:notificationType[] = [
    {
        avatar: user1,
        title: 'Roman Joined the Team!',
        subtitle: 'Congratulate him'
    },
    {
        avatar: user2,
        title: 'New message received',
        subtitle: 'Salma sent you new message'
    },
    {
        avatar: user3,
        title: 'New Payment received',
        subtitle: 'Check your earnings'
    },
    {
        avatar: user4,
        title: 'Jolly completed tasks',
        subtitle: 'Assign her new tasks'
    },
    {
        avatar: user5,
        title: 'New Payment received',
        subtitle: 'Check your earnings'
    },
    {
        avatar: user1,
        title: 'Roman Joined the Team!',
        subtitle: 'Congratulate him'
    }
];

// 
// Profile 
// 
import proUser1 from '/images/svgs/icon-account.svg';
import proUser2 from '/images/svgs/icon-inbox.svg';
import proUser3 from '/images/svgs/icon-tasks.svg';
const profileDD: profileType[] = [
    {
        avatar: proUser1,
        title: 'My Profile',
        subtitle: 'Account settings',
        href: '/apps/user/profile'
    },
    {
        avatar: proUser2,
        title: 'My Inbox',
        subtitle: 'Messages & Emails',
        href: ''
    },
    {
        avatar: proUser3,
        title: 'My Tasks',
        subtitle: 'To-do and Daily tasks',
        href: ''
    }
];

// 
// Language
// 
import flag1 from '/images/flag/icon-flag-en.svg';
import flag2 from '/images/flag/icon-flag-fr.svg';
import flag3 from '/images/flag/icon-flag-ro.svg';
import flag4 from '/images/flag/icon-flag-zh.svg';

const languageDD: languageType[] = [
    { title: 'English', subtext: 'UK', value: 'en', avatar: flag1 },
    { title: 'français', subtext: 'French', value: 'fr', avatar: flag2 },
    { title: 'عربي', subtext: 'Arbic', value: 'ro', avatar: flag3 },
    { title: '中国人', subtext: 'Chinese', value: 'zh', avatar: flag4 }
];

// 
// Search Data
// 
const searchSugg: searchType[] = [
    {
        title: 'Minimal',
        href: '/dashboards/minimal'
    },
    {
        title: 'Modern',
        href: '/dashboards/modern'
    },
    {
        title: 'Contacts',
        href: '/apps/contacts'
    },
    {
        title: 'Shop',
        href: '/apps/ecommerce/products'
    },
    {
        title: 'Checkout',
        href: '/apps/ecommerce/checkout'
    },
    {
        title: 'Chats',
        href: '/apps/chats'
    },
    {
        title: 'Notes',
        href: '/apps/notes'
    },
   
];

export { notifications, profileDD, languageDD,searchSugg };

