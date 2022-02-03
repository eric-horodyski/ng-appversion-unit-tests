import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppVersion } from '@ionic-enterprise/app-version/ngx';
import { IonicModule } from '@ionic/angular';
import { AppVersionMock } from '../mocks/app-version.mock';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [IonicModule.forRoot()],
        providers: [
          {
            provide: AppVersion,
            use: AppVersionMock,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
