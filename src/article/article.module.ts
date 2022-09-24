import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticleEntity} from "../entities/article.entity";
import {CommentEntity} from "../entities/comment.entity";


@Module({
  imports:[
      TypeOrmModule.forFeature([ArticleEntity,CommentEntity])
  ],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
