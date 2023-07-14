import { EntityRepository, Repository } from "@brandwork/typeorm-fork";
import { Photo } from '../photo.entity';
import { PhotoSchema } from './photo.schema';

@EntityRepository(PhotoSchema)
export class CustomPhotoSchemaRepository extends Repository<Photo> {}
