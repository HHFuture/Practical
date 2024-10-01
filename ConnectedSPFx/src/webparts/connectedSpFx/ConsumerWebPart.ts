import { DynamicDataSharedDepth, IDynamicDataPropertyDefinition } from '@microsoft/sp-dynamic-data';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

export interface IConsumerWebPartProps {
  message: string;
}

export default class ConsumerWebPart extends BaseClientSideWebPart<IConsumerWebPartProps> {
  protected onInit(): Promise<void> {
    this.context.dynamicDataProvider.registerAvailableSourcesChanged(this.render);
    return super.onInit();
  }

  public render(): void {
    const source = this.context.dynamicDataProvider.tryGetSource('SourceWebPart');
    const message = source ? source.getPropertyValue('message') : 'No message available';
    this.domElement.innerHTML = `<div>${message}</div>`;
  }
}
