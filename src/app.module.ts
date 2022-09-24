import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ArticleModule } from './article/article.module';
import {ArticleEntity} from "./entities/article.entity";
import {CommentEntity} from "./entities/comment.entity";
import {HttpModule} from "@nestjs/axios";
import { PhotosModule } from './photos/photos.module';
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
      HttpModule,
      TypeOrmModule.forRoot(
          {
              type: 'mysql',
              username: 'root',
              password: 'rootroot',
              database: 'nestjs',
              logging:true,
              entities: [ArticleEntity,CommentEntity],
              synchronize: true,
              autoLoadEntities:true,
          }
      ),
      ArticleModule,
      PhotosModule,
      MulterModule.register({dest:'./uploads'}),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
