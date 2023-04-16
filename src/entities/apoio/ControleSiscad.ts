import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("controleSiscad_pkey", ["idcontrole"], { unique: true })
@Entity("controleSiscad", { schema: "apoio" })
export class ControleSiscad {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcontrole" })
  idcontrole: number;

  @Column("character", { name: "descricao", length: 60 })
  descricao: string;
}
