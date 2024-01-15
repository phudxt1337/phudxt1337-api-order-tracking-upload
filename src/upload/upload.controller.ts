import {Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    FileTypeValidator,
    MaxFileSizeValidator,
    ParseFilePipe, 
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

//import { Express } from 'express';

const maxMB = 5 *1000000;
@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: maxMB }),
            new FileTypeValidator({ fileType: 'image/jpeg'}),
        ]
    })) file) {
        //console.log(file);
        return await this.uploadService.upload(file);
    }
}

