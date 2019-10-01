import { ParentComponent } from './parent-component.class';

/**
 * Clase padre de los componentes
 */
export abstract class ParentToolComponent extends ParentComponent {
  // indica si la tools está activa
  protected isActive = false;
  constructor() {
    super();
  }

  /**
   * Activa o desactiva la herramienta
   */
  public toggle() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.activateTool();
    } else {
      this.deactivateTool();
    }
  }

  /**
   * Implementación de metodo abstracto de ParentToolComponent. Metodo de activación de la herramienta
   */
  public abstract activateTool(): void;

  /**
   * Implementación de metodo abstracto de AbstractParentToolSelectableComponent
   * Método de desactivación de la herramienta
   */
  public abstract deactivateTool(): void;
}
