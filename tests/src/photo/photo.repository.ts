import { EntityRepository, Repository } from "@brandwork/typeorm-fork";
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
