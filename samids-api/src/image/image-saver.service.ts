import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class FileSaverService {
  async saveFile(
    fileName: string,
    mimeType: string,
    destinationFolder: string,
  ) {
    const path = require('path');

    const bucket = admin.storage().bucket();

    const [file, meta] = await bucket.upload(fileName, {
      destination: `${destinationFolder}/${path.basename(fileName)}`,
      resumable: false,
      public: true,
      metadata: {
        contentType: mimeType,
        metadata: {
          firebaseStorageDownloadTokens: uuidV4(),
        },
      },
    });
  }
}
