import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemhipoteca", ["idbem"], {})
@Index("pk_hipoteca", ["idhipoteca"], { unique: true })
@Entity("hipoteca", { schema: "cup" })
export class Hipoteca {
  @Column("integer", { primary: true, name: "idhipoteca" })
  idhipoteca: number;

  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("character varying", {
    name: "nomecredor",
    nullable: true,
    length: 115,
  })
  nomecredor: string | null;

  @Column("date", { name: "dataregistro", nullable: true })
  dataregistro: string | null;

  @Column("date", { name: "datavencimento", nullable: true })
  datavencimento: string | null;

  @Column("numeric", {
    name: "valorpenhora",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valorpenhora: string | null;

  @Column("integer", { name: "idmoedapenhora", nullable: true })
  idmoedapenhora: number | null;

  @Column("numeric", {
    name: "valorsaldodevedor",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valorsaldodevedor: string | null;

  @Column("integer", { name: "idmoedasaldodevedor", nullable: true })
  idmoedasaldodevedor: number | null;

  @Column("date", { name: "datavalorizacaodivida", nullable: true })
  datavalorizacaodivida: string | null;

  @Column("numeric", {
    name: "valorprestacao",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valorprestacao: string | null;

  @Column("integer", { name: "idmoedaprestacao", nullable: true })
  idmoedaprestacao: number | null;

  @Column("integer", { name: "quantidademeses", nullable: true })
  quantidademeses: number | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column("date", {
    name: "dataatualizacao",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacao: string | null;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;

  @ManyToOne(() => Bem, (bem) => bem.hipotecas)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
