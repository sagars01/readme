import { AppDatasourceModule } from './app.datasource.module';

describe('App.DatasourceModule', () => {
  let appDatasourceModule: AppDatasourceModule;

  beforeEach(() => {
    appDatasourceModule = new AppDatasourceModule();
  });

  it('should create an instance', () => {
    expect(appDatasourceModule).toBeTruthy();
  });
});
