/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
export declare class UploadService {
    private readonly configService;
    private readonly s3Client;
    constructor(configService: ConfigService);
    upload(file: any): Promise<void>;
    uploadS3(file: Buffer, bucket: string, name: string): Promise<unknown>;
    getS3(): S3;
}
