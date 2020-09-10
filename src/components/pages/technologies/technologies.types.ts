import { IconifyIcon } from "@iconify/types";

export type logoType = {
  icon: IconifyIcon;
  description?: string;
  height: string;
  extraClasses?: string;
  onClick: any;
  onKeyPress: any;
};

export type project = {
  title: string;
  link: string;
};

export type projects = {
  [index: string]: project;
};

export type technology = {
  icon: IconifyIcon;
  name: string;
  comment: string;
  links?: project[];
  heightModifier?: string;
  classModifier?: string;
  experience?: number;
  interest?: number;
};

export type infoBox = {
  icon: IconifyIcon | undefined;
  name: string | undefined;
  comment: string | undefined;
  links: project[] | undefined;
  classModifier: string | undefined;
};

export interface ISelectedTech {
  icon?: IconifyIcon;
  name?: string;
  comment?: string;
  enabled?: boolean;
  links?: project[];
  classModifier?: string;
}
