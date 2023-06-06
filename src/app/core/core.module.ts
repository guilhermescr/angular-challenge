import { NgModule } from '@angular/core';

import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  providers: [RegisterService, LoginService],
  declarations: [PageNotFoundComponent],
})
export class CoreModule {}
