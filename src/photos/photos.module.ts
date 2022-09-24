import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports:[
      MulterModule.register({dest:'./uploads'}),
  ],
  providers: [PhotosService],
  controllers: [PhotosController]
})
export class PhotosModule {}
