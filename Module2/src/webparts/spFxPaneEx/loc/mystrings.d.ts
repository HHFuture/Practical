declare interface ISpFxPaneExWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
  //add value in my strings to be the lael of the field control
  CityFieldLabel: string;
  //group name for the pane
  SecondGroupName: string;
}

declare module 'SpFxPaneExWebPartStrings' {
  const strings: ISpFxPaneExWebPartStrings;
  export = strings;
}
