import { Column, Entity, Index } from "typeorm";

@Index("produto_pkey", ["codigo"], { unique: true })
@Entity("produto", { schema: "nfefacil" })
export class Produto {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", {
    name: "nome_reduzido",
    nullable: true,
    length: 60,
  })
  nomeReduzido: string | null;

  @Column("character varying", {
    name: "seg_name",
    nullable: true,
    length: 1024,
  })
  segName: string | null;

  @Column("character", { name: "unidade", nullable: true, length: 3 })
  unidade: string | null;

  @Column("character", { name: "ean", nullable: true, length: 14 })
  ean: string | null;

  @Column("character", { name: "ncm", nullable: true, length: 8 })
  ncm: string | null;

  @Column("character", { name: "cest", nullable: true, length: 7 })
  cest: string | null;

  @Column("character", { name: "origem", nullable: true, length: 1 })
  origem: string | null;

  @Column("double precision", {
    name: "preco_compra",
    nullable: true,
    precision: 53,
  })
  precoCompra: number | null;

  @Column("double precision", { name: "preco", nullable: true, precision: 53 })
  preco: number | null;

  @Column("numeric", { name: "peso", nullable: true, precision: 10, scale: 3 })
  peso: string | null;

  @Column("character", { name: "codigo_fornec", nullable: true, length: 12 })
  codigoFornec: string | null;

  @Column("character", { name: "fornecedor", nullable: true, length: 15 })
  fornecedor: string | null;

  @Column("character varying", { name: "marca", nullable: true, length: 25 })
  marca: string | null;

  @Column("character varying", { name: "link", nullable: true, length: 1024 })
  link: string | null;

  @Column("character varying", { name: "images", nullable: true, length: 1024 })
  images: string | null;

  @Column("character", { name: "source_fat", nullable: true, length: 2 })
  sourceFat: string | null;

  @Column("double precision", {
    name: "estoque",
    nullable: true,
    precision: 53,
  })
  estoque: number | null;

  @Column("double precision", {
    name: "garantia",
    nullable: true,
    precision: 53,
  })
  garantia: number | null;

  @Column("character varying", { name: "icms_cst", nullable: true, length: 3 })
  icmsCst: string | null;

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

  @Column("character varying", { name: "ipi_cst", nullable: true, length: 2 })
  ipiCst: string | null;

  @Column("double precision", {
    name: "ipi_perc",
    nullable: true,
    precision: 53,
  })
  ipiPerc: number | null;

  @Column("character varying", { name: "pis_cst", nullable: true, length: 2 })
  pisCst: string | null;

  @Column("double precision", {
    name: "pis_perc",
    nullable: true,
    precision: 53,
  })
  pisPerc: number | null;

  @Column("character varying", {
    name: "cofins_cst",
    nullable: true,
    length: 2,
  })
  cofinsCst: string | null;

  @Column("double precision", {
    name: "cofins_perc",
    nullable: true,
    precision: 53,
  })
  cofinsPerc: number | null;

  @Column("double precision", {
    name: "trib_st_perc",
    nullable: true,
    precision: 53,
  })
  tribStPerc: number | null;

  @Column("character", { name: "descnovo", nullable: true, length: 1024 })
  descnovo: string | null;

  @Column("character", { name: "descricao", nullable: true, length: 1024 })
  descricao: string | null;

  @Column("character", { name: "cnpj_fornecedor", nullable: true, length: 14 })
  cnpjFornecedor: string | null;

  @Column("character varying", { name: "tipo_ncm", nullable: true, length: 5 })
  tipoNcm: string | null;
}
