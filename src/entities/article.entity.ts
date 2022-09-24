import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommentEntity} from "./comment.entity";

@Entity('article')
export class ArticleEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:"nom",nullable:false})
    nom:string;
    @Column({nullable:true,type:"text"})
    description:string;
    @Column({default:false,type:"boolean"})
    statut:boolean;
    @CreateDateColumn()
    createdAt:Date;
    @OneToMany(type => CommentEntity,comment=>comment.article)
    comment:CommentEntity[];
}