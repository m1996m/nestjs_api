import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ArticleEntity} from "./article.entity";

@Entity('comment')
export class CommentEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    message:string;
    @ManyToOne(type => ArticleEntity,article=>article.comment)
    article:ArticleEntity;


}