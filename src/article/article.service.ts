import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticleEntity} from "../entities/article.entity";
import {Repository} from "typeorm";
import {ArticleTdo} from "../dtos/article.tdo";
import {promises} from "dns";
import {CommentEntity} from "../entities/comment.entity";
import {CommentDto} from "../dtos/comment.dto";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository:Repository<ArticleEntity>,
        @InjectRepository(CommentEntity)
        private readonly commentRepository:Repository<CommentEntity>,

    ) {}
    async createArticle(article:ArticleTdo){
        const articl= await this.articleRepository.save(article);
        if(!articl)
            return null;
        return articl;
    }
    async getAllArticle(){
        const articles=await this.articleRepository.find({relations:['comment']});
        if(!articles)
            return null;
        return articles;
    }
    async getOneArticle(id: number):Promise<ArticleEntity> {
        const article=await this.articleRepository.findOne({where: {id},});
        if(!article)
           return null;
        return article
    }
    async edtitArticle(id:number,articleTdo:ArticleTdo){
        const article=this.articleRepository.findOneById(id);
        if(!article)
            return null;
        await this.articleRepository.update(id,articleTdo);
        return article;
    }
    async  deleteArticle(id:number){
        const article= await this.articleRepository.findOneById(id);
        if(!article)
            return null;
        await  this.articleRepository.delete(id);
        return article;
    }

    async addComment(id:number,comment:CommentDto){
        const article = await this.articleRepository.findOneById(id);
        const comments =new CommentEntity();
        comments.message=comment?.message;
        comments.article=article;
        this.commentRepository.save(comments);
        return comment;
    }
}
