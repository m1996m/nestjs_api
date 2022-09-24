import {Controller, Post, UseInterceptors, UploadedFile, UploadedFiles, Body} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {FileDto} from "../dtos/file.dto";
import {diskStorage} from "multer";
import { extname } from 'path'
import {PhotosService} from "./photos.service";

@Controller('photos')
export class PhotosController {
    constructor(private photoService:PhotosService) {
    }
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: PhotosService.destinationPath,
                filename: PhotosService.customFileName,
            }),
        }),
    )
    uploadfile(@UploadedFiles() files:any): string {
        console.log(files);
        return files;
    }
}

