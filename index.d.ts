import { Options } from './src/types/index';

declare class AnyProgress {
  constructor (options?: Options);

  /** 进度条暂停 */
  public pause(): AnyProgress;

  /** 直接取消进度条 */
  public stop(): AnyProgress;

  /** 进度条开始 */
  public start(): AnyProgress;

  /** 进度条直接到100%，但是依然显示在界面上 */
  public finish(): AnyProgress;

  /** 淡出进度条 */
  public fadeOut(callback?: (ap: AnyProgress) => any): AnyProgress;

  /** 进度条直接到100%并且淡出，随后从DOM中移除进度条 */
  public done(callback?: (ap: AnyProgress) => any): AnyProgress;
  
  /** 将元素从DOM中移除 */
  public remove(): AnyProgress;

  /** 进度条直接到100%并且淡出 */
  public end(): AnyProgress;
}

export default AnyProgress;
