import { Icon } from "@material-ui/core";

export default interface ICard {
  image?: string;
  video?: string;
  src?: string;
  icon?: any;
  backgroundImg?: string;
  backgroundVideo?: string;
  opacity?: number;
  title: string;
  subtitle?: string;
  number?: number;
  unit?: string;
  description: string;
  caption?: string;
  route?: string;
  routeText?: string;
  minHeight?: number;
  onClick?: any;
  onClickText?: string;
  linkUrl?: any;
  linkText?: string;
  messages?: any[];
  scrollDirection?: "horizontal" | "vertical";
  scrollTimer?: number;
}

export interface IPerson {
  fname: string;
  lname: string;
  mname?: string;
  picture?: string;
  video?: string;
  icon?: any;
  backgroundImg?: string;
  opacity?: number;
  title: string;
  subtitle?: string;
  number?: number;
  description: string;
  route?: string;
  minHeight?: number;
  onClick?: any;
  onClickText?: string;
}

export interface IProgram {
  image?: string;
  video?: string;
  icon?: any;
  backgroundImg?: string;
  opacity?: number;
  title: string;
  subtitle?: string;
  number?: number;
  description: string;
  route?: string;
  minHeight?: number;
  retailPrice?: number;
  promoPrice?: number;
}
