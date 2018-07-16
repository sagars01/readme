import { FramedesignModule } from './framedesign.module';

describe('FramedesignModule', () => {
  let framedesignModule: FramedesignModule;

  beforeEach(() => {
    framedesignModule = new FramedesignModule();
  });

  it('should create an instance', () => {
    expect(framedesignModule).toBeTruthy();
  });
});
