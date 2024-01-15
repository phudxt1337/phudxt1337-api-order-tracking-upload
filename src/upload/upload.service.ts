import { Body, Injectable, Logger, Response } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { HttpResponse, S3 } from 'aws-sdk';
import { response } from 'express';
@Injectable()

export class UploadService {
    private readonly s3Client = new S3Client({
        region: this.configService.get('AWS_S3_REGION')//get
    });
    constructor(private readonly configService: ConfigService) {}
    async upload(file) {
        const { originalname } = file;
        const bucketS3 = 'order-tracking-eiei';
        await this.uploadS3(file.buffer, bucketS3, originalname);
    }
    async uploadS3(file: Buffer, bucket: string, name: string) {
        const s3 = this.getS3();
        const params = {
            Bucket: bucket,
            Key: name,
            Body: file,
        };
        const url = s3.getSignedUrl('getObject', {Bucket: params.Bucket, Key: params.Key,});
        //return url;
        /*const url = s3.getSignedUrl('getObject', {
            Bucket: params.Bucket,
            Key: params.Key,
            //Expires: signedUrlExpireSeconds
        });*/
        console.log(url);
        return new Promise((resolve, reject) => {

            s3.upload(params, (err, data) => {
            if (err) {
                Logger.error(err);
                reject(err.message);
            }else{return url};
            resolve(data);
            });
        });
    }
    getS3() {
        return new S3({
            region: process.env.AWS_S3_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
}
