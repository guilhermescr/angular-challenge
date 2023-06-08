import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormModule } from 'src/app/core/components/form/form.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { PPostsComponent } from './p-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostsSelectComponent } from './components/posts-select/posts-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullPostComponent } from './components/full-post/full-post.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { FilterPostsPipe } from 'src/app/shared/pipes/filter-posts.pipe';

@NgModule({
  declarations: [
    PPostsComponent,
    PostComponent,
    PostsSelectComponent,
    FullPostComponent,
    CreatePostFormComponent,
    FilterPostsPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FormModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class PPostsModule {}
