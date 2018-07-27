import { CampModule } from './camp.module';

describe('CampModule', () => {
  let campModule: CampModule;

  beforeEach(() => {
    campModule = new CampModule();
  });

  it('should create an instance', () => {
    expect(campModule).toBeTruthy();
  });
});
