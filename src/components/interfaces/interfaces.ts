export interface PropsItemList {
  timeItem: string;
  textItem: string;
  urlItem: string;
  srcItem: string;
}

export interface PropsAutoret {
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement> | undefined;
}

export interface PropsButton {
  href: string | undefined;
  target?: string | undefined;
  classNameA: string | undefined;
  classNameP: string | undefined;
  text: string;
  download?: string | undefined;
}
