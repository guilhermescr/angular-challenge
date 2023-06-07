import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { PPostsComponent } from './p-posts.component';
import { PostComponent } from '../../components/post/post.component';

@NgModule({
  declarations: [PPostsComponent, PostComponent],
  imports: [CommonModule, FormsModule, NzSelectModule],
})
export class PPostsModule {}
