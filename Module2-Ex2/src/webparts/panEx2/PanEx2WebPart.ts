
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import {PropertyPaneSlider} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  //IPropertyPaneContinentSelectorInternalProps,
  IPropertyPaneContinentSelectorProps
} from '../../controls/PropertyPaneContainerSelector';

import { escape ,update} from '@microsoft/sp-lodash-subset';
//import styles from './PanEx2WebPart.module.scss';
import * as strings from 'PanEx2WebPartStrings';
import { PropertyPaneContinentSelector } from '../../controls/PropertyPaneContainerSelector/PropertyPaneContentSelector';

export interface IPanEx2WebPartProps {
  description: string;
  fontcolor : string;
  myContinent: string;
  numContinentsVisited: number;
}

export default class PanEx2WebPart extends BaseClientSideWebPart<IPanEx2WebPartProps> {

//list to hold the options
  public render(): void {
    this.domElement.innerHTML = `<div>Web part property value: <strong>${escape(this.properties.description)}</strong></div>
    <div>Continent where I reside: <strong>${escape(this.properties.myContinent)}</strong></div>
    <div>Number of continents I've visited: <strong>${this.properties.numContinentsVisited}</strong></div>
    `;
   
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }), 
               /*  PropertyPaneTextField('myContinent', {
                  label: 'Continent where I currently reside',
                  onGetErrorMessage: this.validateContinents.bind(this)
                }), */
                new PropertyPaneContinentSelector('myContinent', <IPropertyPaneContinentSelectorProps>{
                  label: 'Continent where I currently reside',
                  disabled: false,
                  selectedKey: this.properties.myContinent,
                  onPropertyChange: this.onContinentSelectionChange.bind(this),
                  onGetErrorMessage: this.validateContinents.bind(this)
                })
              ]
            }
          ]
        }
      ]
    };
  }
  private validateContinents(textboxValue: string): string {
    const validContinentOptions: string[] = ['africa', 'antarctica', 'asia', 'australia', 'europe', 'north america', 'south america'];
    const inputToValidate: string = textboxValue.toLowerCase();
  
    return (validContinentOptions.indexOf(inputToValidate) === -1)
      ? 'Invalid continent entry; valid options are "Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", and "South America"'
      : '';
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
private onContinentSelectionChange(propertyPath: string, newValue: any): void {
  update(this.properties, propertyPath, (): any => {return newValue});
  this.render();
}
/* eslint-enable @typescript-eslint/no-explicit-any */
}
