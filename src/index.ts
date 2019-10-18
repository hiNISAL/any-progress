import { Options } from './types';
import { getDefaultOptions, setStyle } from './helpers';

 class AnyProgress {
  private el: HTMLElement = document.createElement('div');

  private timer: null|number = null;

  constructor(
    private options: Options,
  ) {
    this.initOptions();
    this.initElement();
  }

  /**
   * 获取要插入进度条的目标dom
   */
  private getContainer(): HTMLElement {
    if (this.options.el === 'document') {
      return document.body;
    }

    return document.querySelector(this.options.el!) || document.body;
  }

  /**
   * 初始化配置项
   */
  private initOptions() {
    this.options = getDefaultOptions(this.options);
  }

  /**
   * 初始化元素
   */
  private initElement() {
    const el: HTMLElement = this.getElement();

    this.el = el;

    this.getContainer().appendChild(el);
  }

  /**
   * 获取要插入到dom中的进度条元素
   */
  private getElement(): HTMLElement {
    const el = this.el;
    const es = el.style;

    es.zIndex = String(this.options.zIndex)!;
    es.backgroundColor = this.options.color!;
    es.position = 'absolute';
    es.top = '0';
    es.left = '0';
    es.height = '3px';
    es.width = '0%';
    es.transition = 'all .2s linear';
    es.boxShadow = this.options.shadow!;

    setStyle(el, this.options.style!);

    return el;
  }

  /**
   * 隐藏
   */
  private hideElement() {
    this.el.style.display = 'none';
  }

  /**
   * 设置宽度
   * @param width 
   */
  private setElementWidth(width: string) {
    this.el.style.width = width;
  }

  /**
   * 进度条宽度计算
   */
  private progressStart() {
    this.timer = setInterval(() => {
      let curWidth: number = parseInt(this.el.style.width!, 10);

      let base = [0, 0];

      if (curWidth <= 20) {
        base = [1, 2];
      } else if (curWidth <= 40) {
        base = [.8, 1.3];
      } else if (curWidth <= 60) {
        base = [.6, 1.2];
      } else if (curWidth <= 80) {
        base = [.4, 1.1];
      } else if (curWidth <= 90) {
        base = [.1, 0];
      } else if (curWidth >= 97) {
        this.pause();
      }

      let width: number = base[0] + (Math.floor(Math.random() * base[1]) + 1);

      if (width>= 97) {
        curWidth = 0;
        width = 99.5
      };

      this.setElementWidth(`${curWidth + width}%`);
    }, 200) as any;
  }

  /**
   * 清空定时器
   */
  private cleanTimer() {
    clearInterval(this.timer!);

    this.timer = null;
  }

  /**
   * 暂停
   */
  public pause() {
    this.cleanTimer();

    return this;
  }

  /**
   * 停止
   */
  public stop() {
    this.cleanTimer();

    this.hideElement();

    return this;
  }

  /**
   * 开始
   */
  public start() {
    if (this.timer) return this;

    this.el.style.display = 'block';
    this.el.style.opacity = '1';
    this.el.style.width = '0';

    this.progressStart();

    return this;
  }

  /**
   * 结束
   */
  public finish() {
    this.pause();
    this.el.style.width = '100%';

    return this;
  }

  /**
   * 淡出
   * @param fn
   */
  public fadeOut(fn = (...args) => {}) {
    setTimeout(() => {
      this.el.style.transition = 'all .3s ease';
      this.el.style.opacity = '0';
      setTimeout(() => {
        this.hideElement();
        fn(this);
      }, 300);
    }, 300);

    return this;
  }

  /**
   * 完成
   */
  public done() {
    this.cleanTimer();

    this.finish();
    
    this.fadeOut();

    return this;
  }
}

export default AnyProgress;
