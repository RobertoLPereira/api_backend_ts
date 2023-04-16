import { Column, Entity, Index } from "typeorm";

@Index(
  "movfin_pkey",
  ["clifor", "dataMvto", "documento", "empresa", "parcela", "tipomovfin"],
  { unique: true }
)
@Entity("movfin", { schema: "nfefacil" })
export class Movfin {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("character", { primary: true, name: "tipomovfin", length: 1 })
  tipomovfin: string;

  @Column("integer", { primary: true, name: "clifor" })
  clifor: number;

  @Column("date", { primary: true, name: "data_mvto" })
  dataMvto: string;

  @Column("character varying", { primary: true, name: "documento", length: 15 })
  documento: string;

  @Column("integer", { primary: true, name: "parcela" })
  parcela: number;

  @Column("double precision", { name: "valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("date", { name: "data_vcto", nullable: true })
  dataVcto: string | null;

  @Column("double precision", {
    name: "valor_pago",
    nullable: true,
    precision: 53,
  })
  valorPago: number | null;

  @Column("date", { name: "data_pgto", nullable: true })
  dataPgto: string | null;

  @Column("integer", { name: "numero_nfe", nullable: true })
  numeroNfe: number | null;

  @Column("character", { name: "serie_nfe", nullable: true, length: 3 })
  serieNfe: string | null;

  @Column("character", { name: "chave_nfe", nullable: true, length: 44 })
  chaveNfe: string | null;
}
