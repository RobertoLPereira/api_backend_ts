import { Column, Entity, Index } from "typeorm";

@Index(
  "nfprodent_pkey",
  ["codFornecedor", "empresa", "item", "numeroNfe", "serieNfe"],
  { unique: true }
)
@Entity("nf_prod_entra", { schema: "nfefacil" })
export class NfProdEntra {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "cod_fornecedor" })
  codFornecedor: number;

  @Column("numeric", {
    primary: true,
    name: "numero_nfe",
    precision: 9,
    scale: 0,
    default: () => "0",
  })
  numeroNfe: string;

  @Column("character varying", { primary: true, name: "serie_nfe", length: 3 })
  serieNfe: string;

  @Column("integer", { primary: true, name: "item", default: () => "0" })
  item: number;

  @Column("integer", { name: "pedido" })
  pedido: number;

  @Column("integer", { name: "cod_produto" })
  codProduto: number;

  @Column("integer", { name: "cod_cfop", nullable: true })
  codCfop: number | null;

  @Column("integer", { name: "quantidade", default: () => "0" })
  quantidade: number;

  @Column("numeric", { name: "peso", nullable: true, precision: 10, scale: 3 })
  peso: string | null;

  @Column("double precision", { name: "vlr_unitario", precision: 53 })
  vlrUnitario: number;

  @Column("double precision", {
    name: "vlr_produto",
    nullable: true,
    precision: 53,
  })
  vlrProduto: number | null;

  @Column("double precision", {
    name: "vlr_desconto",
    nullable: true,
    precision: 53,
  })
  vlrDesconto: number | null;

  @Column("double precision", {
    name: "vlr_total",
    nullable: true,
    precision: 53,
  })
  vlrTotal: number | null;

  @Column("double precision", {
    name: "icms_bc",
    nullable: true,
    precision: 53,
  })
  icmsBc: number | null;

  @Column("double precision", {
    name: "icms_perc",
    nullable: true,
    precision: 53,
  })
  icmsPerc: number | null;

  @Column("double precision", {
    name: "icms_pred",
    nullable: true,
    precision: 53,
  })
  icmsPred: number | null;

  @Column("double precision", {
    name: "icms_vlr",
    nullable: true,
    precision: 53,
  })
  icmsVlr: number | null;

  @Column("character", { name: "icms_cst", nullable: true, length: 3 })
  icmsCst: string | null;

  @Column("double precision", { name: "ipi_bc", nullable: true, precision: 53 })
  ipiBc: number | null;

  @Column("double precision", {
    name: "ipi_perc",
    nullable: true,
    precision: 53,
  })
  ipiPerc: number | null;

  @Column("double precision", {
    name: "ipi_vlr",
    nullable: true,
    precision: 53,
  })
  ipiVlr: number | null;

  @Column("character", { name: "ipi_cst", nullable: true, length: 3 })
  ipiCst: string | null;

  @Column("double precision", { name: "pis_bc", nullable: true, precision: 53 })
  pisBc: number | null;

  @Column("double precision", {
    name: "pis_perc",
    nullable: true,
    precision: 53,
  })
  pisPerc: number | null;

  @Column("double precision", {
    name: "pis_vlr",
    nullable: true,
    precision: 53,
  })
  pisVlr: number | null;

  @Column("character", { name: "pis_cst", nullable: true, length: 3 })
  pisCst: string | null;

  @Column("double precision", {
    name: "cofins_bc",
    nullable: true,
    precision: 53,
  })
  cofinsBc: number | null;

  @Column("double precision", {
    name: "cofins_perc",
    nullable: true,
    precision: 53,
  })
  cofinsPerc: number | null;

  @Column("double precision", {
    name: "cofins_vlr",
    nullable: true,
    precision: 53,
  })
  cofinsVlr: number | null;

  @Column("character", { name: "cofins_cst", nullable: true, length: 3 })
  cofinsCst: string | null;
}
