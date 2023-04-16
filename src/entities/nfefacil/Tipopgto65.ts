import { Column, Entity, Index } from "typeorm";

@Index("idtpgto_pkey", ["empresa", "idTipoPgto", "pedido"], { unique: true })
@Entity("tipopgto65", { schema: "nfefacil" })
export class Tipopgto65 {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;

  @Column("integer", { primary: true, name: "id_tipo_pgto" })
  idTipoPgto: number;

  @Column("double precision", { name: "valor", nullable: true, precision: 53 })
  valor: number | null;
}
