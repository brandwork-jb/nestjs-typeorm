import { Column, Entity, PrimaryGeneratedColumn } from "@brandwork/typeorm-fork";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ length: 500 })
  name!: string;

  @Column('text') description!: string;

  @Column() filename!: string;

  @Column('int') views!: number;

  @Column() isPublished!: boolean;
}
