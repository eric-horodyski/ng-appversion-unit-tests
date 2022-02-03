import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-enterprise/app-version/ngx';

@Injectable()
export class AppVersionMock {
  public getVersionNumber(): Promise<string> {
    return Promise.resolve('1.0.0');
  }

  public getVersionCode(): Promise<string | number> {
    return Promise.resolve('222');
  }

  public getPackageName(): Promise<string> {
    return Promise.resolve('ABC');
  }

  public getAppName(): Promise<string> {
    return Promise.resolve('ABC');
  }
}
