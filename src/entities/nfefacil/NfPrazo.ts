import { Column, Entity, Index } from "typeorm";

@Index("nfprazo_pkey", ["empresa", "parcela", "pedido"], { unique: true })
@Entity("nf_prazo", { schema: "nfefacil" })
export class NfPrazo {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;

  @Column("integer", { primary: true, name: "parcela", default: () => "1" })
  parcela: number;

  @Column("character", { name: "documento", nullable: true, length: 12 })
  documento: string | null;

  @Column("date", { name: "datavcto", nullable: true })
  datavcto: string | null;

  @Column("double precision", {
    name: "vlr_parcela",
    nullable: true,
    precision: 53,
  })
  vlrParcela: number | null;

  @Column("date", { name: "datapgto", nullable: true })
  datapgto: string | null;

  @Column("double precision", {
    name: "vlr_pago",
    nullable: true,
    precision: 53,
  })
  vlrPago: number | null;

  @Column("date", { name: "datavcto_orig", nullable: true })
  datavctoOrig: string | null;
}
