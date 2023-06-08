import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PPostsModule } from './posts/pages/p-posts/p-posts.module';
import { PostsService } from './posts/pages/p-posts/posts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PPostsModule],
  providers: [PostsService],
})
export class FeaturesModule {}
