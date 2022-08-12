import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {

  }

  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  public createDomElement(componenteRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componenteRef.hostView);
    const domElement = (componenteRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    return domElement;
  }
}
