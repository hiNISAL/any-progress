import { Options } from './src/types/index';

declare class AnyProgress {
  constructor (options?: Options);

  /** 进度条暂停 */
  public pause();

  /** 直接取消进度条 */
  public stop();

  /** 进度条开始 */
  public start();

  /** 进度条直接到100%，但是依然显示在界面上 */
  public finish();

  /** 淡出进度条 */
  public fadeOut(callback?: (ap: AnyProgress) => any);

  /** 进度条直接到100%并且淡出 */
  public done(callback?: (ap: AnyProgress) => any);
  
  /** 将元素从DOM中移除 */
  public remove();
}

export default AnyProgress;
