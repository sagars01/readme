import { ApphelperModule } from './apphelper.module';

describe('ApphelperModule', () => {
  let apphelperModule: ApphelperModule;

  beforeEach(() => {
    apphelperModule = new ApphelperModule();
  });

  it('should create an instance', () => {
    expect(apphelperModule).toBeTruthy();
  });
});
