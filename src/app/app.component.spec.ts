import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppVersion } from '@ionic-enterprise/app-version/ngx';

import { AppComponent } from './app.component';
import { AppVersionMock } from './mocks/app-version.mock';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      const appVersion = new AppVersionMock();
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!
});
