import {Body, Controller, Get, Param, Post, Patch, Delete} from '@nestjs/common';
import {ArticleService} from "./article.service";
import {ArticleTdo} from "../dtos/article.tdo";
import {ArticleEntity} from "../entities/article.entity";
import {CommentDto} from "../dtos/comment.dto";

@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService:ArticleService
    ) {}

    @Get()
    getArticle(){
        return this.articleService.getAllArticle();
    }
    @Post('create')
    create(@Body() article:ArticleTdo){
        return this.articleService.createArticle(article);
    }
    @Get(':id')
    getOneArticle(@Param('id') id:number){
       return  this.articleService.getOneArticle(id);
    }
    @Patch('edite/:id')
    editeArticle(@Param('id') id:number,@Body() articleDto:ArticleTdo){
        return this.articleService.edtitArticle(id,articleDto);
    }
    @Delete('delete/:id')
    deleteArticle(@Param('id') id:number){
        this.articleService.deleteArticle(id);
    }
    @Post('comment')
    commentAdd(@Body() comment:CommentDto,id:number){
        this.articleService.addComment(1,comment);
    }

}
