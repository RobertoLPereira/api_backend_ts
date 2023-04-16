import { Column, Entity, Index } from "typeorm";

@Index("pk_tipodeencargo", ["idtipodeencargo"], { unique: true })
@Entity("tipodeencargo", { schema: "customobra" })
export class Tipodeencargo {
  @Column("integer", { primary: true, name: "idtipodeencargo" })
  idtipodeencargo: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @Column("boolean", { name: "tributado", nullable: true })
  tributado: boolean | null;
}
