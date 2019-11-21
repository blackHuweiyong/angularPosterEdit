import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosterEditComponent } from './poster/poster-edit/poster-edit.component';
import { PosterOptionsComponent } from './poster/poster-options/poster-options.component';


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
    path: '',
    redirectTo: '/poster',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
