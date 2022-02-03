import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { AppVersion } from '@ionic-enterprise/app-version/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  versionLabel: string;

  constructor(private appVersion: AppVersion) {}

  async ngOnInit() {
    const info = await Device.getInfo();
    if (info.platform === 'android') {
      this.versionLabel = await this.appVersion.getVersionNumber();
    } else {
      this.versionLabel =
        (await this.appVersion.getVersionNumber()) +
        '.' +
        (await this.appVersion.getVersionCode());
    }
  }
}
