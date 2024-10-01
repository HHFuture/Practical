
//import { Version } from '@microsoft/sp-core-library';
//import {
  //type IPropertyPaneConfiguration,
  //PropertyPaneTextField
//} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
//import type { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './ConnectedSpFxWebPart.module.scss';
//import * as strings from 'ConnectedSpFxWebPartStrings';

import { DynamicDataSharedDepth, IDynamicDataPropertyDefinition } from '@microsoft/sp-dynamic-data';
//import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

export interface ISourceWebPartProps {
  message: string;
}

export default class SourceWebPart extends BaseClientSideWebPart<ISourceWebPartProps> {
  protected onInit(): Promise<void> {
    this.context.dynamicDataSourceManager.initializeSource(this);
    return super.onInit();
  }

  public getPropertyDefinitions(): IDynamicDataPropertyDefinition[] {
    return [
      {
        id: 'message',
        title: 'Message'
      }
    ];
  }

  public getPropertyValue(propertyId: string): string {
    switch (propertyId) {
      case 'message':
        return this.properties.message;
    }
    return '';
  }

  public render(): void {
    this.domElement.innerHTML = `<div>${this.properties.message}</div>`;
  }
}
