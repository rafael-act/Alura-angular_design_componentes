import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from "@angular/core";
import { BodyInjectorService } from "src/app/shared/services/body-injector";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";
import { ModalRef } from "../models/model-ref";


@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef()
    componentRef.instance.config = config;

    console.log('open called')
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef=modalRef;
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }


}

