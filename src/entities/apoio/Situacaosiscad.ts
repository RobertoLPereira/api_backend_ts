import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("situacaosiscad_pkey", ["id"], { unique: true })
@Entity("situacaosiscad", { schema: "apoio" })
export class Situacaosiscad {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", { name: "descricao", length: 60 })
  descricao: string;
}
