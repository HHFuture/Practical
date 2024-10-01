import { Version } from '@microsoft/sp-core-library';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './TestDeploySpFxWebPart.module.scss';

//import * as strings from 'TestDeploySpFxWebPartStrings';

export interface ITestDeploySpFxWebPartProps {
 // description: string;
}

export default class TestDeploySpFxWebPart extends BaseClientSideWebPart<ITestDeploySpFxWebPartProps> {

  
  public render(): void {
    this.domElement.innerHTML = `<div> test simple one </div>
    <div class="${styles.welcome}">
    <h2> welcome ${this.context.pageContext.user.displayName} to ${this.context.pageContext.web.title}</h2>
    </div>
    `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
