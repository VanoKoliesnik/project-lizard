const classNames = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(" ");

export default classNames;
