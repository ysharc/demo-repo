import type { TablerIconComponent } from "vue-tabler-icons";

type statsCards = {
    title: string;
    iconcolor: string;
    icon: TablerIconComponent;
    number: string;
};

type recentInflu = {
    title: string,
    avatar: any,
    avatarstatus: string,
    desc: string,
    count: string
};

type influTeam = {
    title: string,
    team: [],
    desc: string,
}

export type { statsCards, recentInflu, influTeam };