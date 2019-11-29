import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosterEditComponent } from './poster/poster-edit/poster-edit.component';
import { PosterOptionsComponent } from './poster/poster-options/poster-options.component';
import { PosterShowComponent } from './poster/poster-show/poster-show.component';


const routes: Routes = [
  {
    path: 'poster',
    component: PosterEditComponent,
    data: { title: '海报' }
  },
  {
    path: 'posterOption',
    component: PosterOptionsComponent,
    data: { title: '配置' }
  },
  {
    path: 'posterShow',
    component: PosterShowComponent,
    data: { title: '新建海报' }
  },
  {
    path: '',
    redirectTo: '/posterShow',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
