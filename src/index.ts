import EDITOR_CONFIG from './config/editor.config';
import EditorUI from './modules/EditorUI/index';
import NativePlugin from './NativePlugin';

class AnyEditor {
  static config = EDITOR_CONFIG;

  private uiContainer: null|EditorUI = null;

  constructor() {
  }

  /**
   * 创建编辑器
   * @param container 编辑器容器
   */
  public create(container: HTMLElement) {
    const initInnerHTML: string = container.innerHTML;

    this.initUI({
      plugins: NativePlugin,
    }, initInnerHTML);

    container.innerHTML = '';
    container.appendChild(this.uiContainer!.dom!);
  }

  /**
   * 初始化编辑器的ui
   * @param config 
   * @param initHTML 
   */
  private initUI(config, initHTML) {
    this.uiContainer = new EditorUI(config, initHTML, this);
  }

  /**
   * 获取html内容
   */
  public get html() {
    return this.uiContainer!.dom!.outerHTML;
  }

  /**
   * 设置html内容
   */
  public set html(html: string) {
    this.uiContainer!.setContent(html);
  }

  /**
   * html-setter的语法糖
   */
  public setHTML(html: string) {
    this.uiContainer!.setContent(html);
  }
}

export default AnyEditor;
