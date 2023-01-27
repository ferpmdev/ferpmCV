import React from 'react';

export interface PropsItemList {
  timeItem: string;
  textItem: string;
  urlItem: string;
  srcItem: string;
}

export interface PropsAlertEmail {
  notNowCopyEmail: React.MouseEventHandler<HTMLDivElement> | undefined;
  copyEmail: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface PropsReactWhatsapp {
  number: string;
  message: string;
  onClick?: React.MouseEventHandler | undefined;
  props?: any;
  className?: string;
}

export interface PropsButton {
  href?: string;
  target?: string | undefined;
  classNameA: string | undefined;
  classNameP?: string | undefined;
  text?: string;
  download?: string | undefined;
  // onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  children?: React.ReactNode;
}
