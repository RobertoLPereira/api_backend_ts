import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tipodespesa", ["idtipodespesa"], { unique: true })
@Entity("tipodespesa", { schema: "customobra" })
export class Tipodespesa {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtipodespesa" })
  idtipodespesa: number;

  @Column("character", { name: "descricao", nullable: true, length: 50 })
  descricao: string | null;
}
