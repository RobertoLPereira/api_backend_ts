import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "encargossociaisbasicos_pk",
  ["codigoencargo", "empresa", "idtipodeencargo"],
  { unique: true }
)
@Entity("encargossociaisbasicos", { schema: "customobra" })
export class Encargossociaisbasicos {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "idtipodeencargo" })
  idtipodeencargo: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "codigoencargo" })
  codigoencargo: number;

  @Column("character varying", {
    name: "nomeencargo",
    nullable: true,
    length: 50,
  })
  nomeencargo: string | null;

  @Column("integer", { name: "quantdias", nullable: true })
  quantdias: number | null;

  @Column("real", { name: "taxapercentualmes", nullable: true, precision: 24 })
  taxapercentualmes: number | null;

  @Column("integer", { name: "codigocliente", nullable: true })
  codigocliente: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
