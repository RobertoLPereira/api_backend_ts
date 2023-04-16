import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("venda_item_pkey", ["id"], { unique: true })
@Entity("venda_item", { schema: "pdvandroid" })
export class VendaItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "id_venda", nullable: true })
  idVenda: number | null;

  @Column("character varying", { name: "cprod", nullable: true, length: 50 })
  cprod: string | null;

  @Column("character varying", { name: "cean", nullable: true, length: 20 })
  cean: string | null;

  @Column("character varying", { name: "xprod", nullable: true, length: 20 })
  xprod: string | null;

  @Column("character varying", { name: "ncm", nullable: true, length: 12 })
  ncm: string | null;

  @Column("character varying", { name: "cest", nullable: true, length: 12 })
  cest: string | null;

  @Column("integer", { name: "cfop", nullable: true })
  cfop: number | null;

  @Column("character varying", { name: "ucom", nullable: true, length: 10 })
  ucom: string | null;

  @Column("numeric", { name: "qcom", nullable: true, precision: 7, scale: 2 })
  qcom: string | null;

  @Column("numeric", { name: "vuncom", nullable: true, precision: 7, scale: 2 })
  vuncom: string | null;

  @Column("numeric", { name: "vprod", nullable: true, precision: 10, scale: 2 })
  vprod: string | null;

  @Column("character varying", { name: "ceantrib", nullable: true, length: 20 })
  ceantrib: string | null;

  @Column("character varying", { name: "utrib", nullable: true, length: 20 })
  utrib: string | null;

  @Column("numeric", {
    name: "vuntrib",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vuntrib: string | null;

  @Column("numeric", { name: "vfrete", nullable: true, precision: 7, scale: 2 })
  vfrete: string | null;

  @Column("numeric", { name: "vseg", nullable: true, precision: 7, scale: 2 })
  vseg: string | null;

  @Column("numeric", { name: "vdesc", nullable: true, precision: 7, scale: 2 })
  vdesc: string | null;

  @Column("numeric", { name: "voutro", nullable: true, precision: 7, scale: 2 })
  voutro: string | null;

  @Column("integer", { name: "indtot", nullable: true })
  indtot: number | null;

  @Column("character varying", { name: "orig", nullable: true, length: 30 })
  orig: string | null;

  @Column("character varying", { name: "csticms", nullable: true, length: 20 })
  csticms: string | null;

  @Column("integer", { name: "modbc", nullable: true })
  modbc: number | null;

  @Column("numeric", { name: "predbc", nullable: true, precision: 7, scale: 2 })
  predbc: string | null;

  @Column("numeric", {
    name: "vbcicms",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vbcicms: string | null;

  @Column("numeric", { name: "picms", nullable: true, precision: 5, scale: 2 })
  picms: string | null;

  @Column("numeric", { name: "vicms", nullable: true, precision: 7, scale: 2 })
  vicms: string | null;

  @Column("integer", { name: "modbcst", nullable: true })
  modbcst: number | null;

  @Column("numeric", { name: "pmvast", nullable: true, precision: 7, scale: 2 })
  pmvast: string | null;

  @Column("numeric", {
    name: "predbcst",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  predbcst: string | null;

  @Column("numeric", { name: "vbcst", nullable: true, precision: 7, scale: 2 })
  vbcst: string | null;

  @Column("numeric", {
    name: "picmsst",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  picmsst: string | null;

  @Column("numeric", {
    name: "vicmsst",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsst: string | null;

  @Column("numeric", {
    name: "vbcstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vbcstret: string | null;

  @Column("numeric", {
    name: "vicmsstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsstret: string | null;

  @Column("numeric", {
    name: "vbcstdest",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vbcstdest: string | null;

  @Column("numeric", {
    name: "vicmsstdest",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsstdest: string | null;

  @Column("numeric", { name: "pbcop", nullable: true, precision: 7, scale: 2 })
  pbcop: string | null;

  @Column("numeric", {
    name: "pcredsn",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  pcredsn: string | null;

  @Column("numeric", {
    name: "vcredicmssn",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vcredicmssn: string | null;

  @Column("numeric", {
    name: "vicmsdeson",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsdeson: string | null;

  @Column("numeric", {
    name: "vicmsop",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsop: string | null;

  @Column("numeric", { name: "pdif", nullable: true, precision: 7, scale: 2 })
  pdif: string | null;

  @Column("numeric", {
    name: "vicmsdif",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsdif: string | null;

  @Column("numeric", { name: "vbcfcp", nullable: true, precision: 7, scale: 2 })
  vbcfcp: string | null;

  @Column("numeric", { name: "pfcp", nullable: true, precision: 7, scale: 2 })
  pfcp: string | null;

  @Column("numeric", { name: "vfcp", nullable: true, precision: 7, scale: 2 })
  vfcp: string | null;

  @Column("numeric", {
    name: "vbcfcpstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vbcfcpstret: string | null;

  @Column("numeric", {
    name: "pfcpstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  pfcpstret: string | null;

  @Column("numeric", {
    name: "vfcpstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vfcpstret: string | null;

  @Column("numeric", { name: "pst", nullable: true, precision: 7, scale: 2 })
  pst: string | null;

  @Column("character varying", { name: "cenq", nullable: true, length: 20 })
  cenq: string | null;

  @Column("character varying", { name: "cstipi", nullable: true, length: 20 })
  cstipi: string | null;

  @Column("numeric", { name: "vbcipi", nullable: true, precision: 7, scale: 2 })
  vbcipi: string | null;

  @Column("numeric", { name: "pipi", nullable: true, precision: 7, scale: 2 })
  pipi: string | null;

  @Column("numeric", { name: "vipi", nullable: true, precision: 7, scale: 2 })
  vipi: string | null;

  @Column("numeric", { name: "qunid", nullable: true, precision: 7, scale: 2 })
  qunid: string | null;

  @Column("numeric", { name: "vunid", nullable: true, precision: 7, scale: 2 })
  vunid: string | null;

  @Column("character varying", { name: "cstpis", nullable: true, length: 20 })
  cstpis: string | null;

  @Column("numeric", { name: "vbcpis", nullable: true, precision: 7, scale: 2 })
  vbcpis: string | null;

  @Column("numeric", { name: "ppis", nullable: true, precision: 7, scale: 2 })
  ppis: string | null;

  @Column("numeric", { name: "vpis", nullable: true, precision: 7, scale: 2 })
  vpis: string | null;

  @Column("numeric", {
    name: "qbcprodpis",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  qbcprodpis: string | null;

  @Column("numeric", {
    name: "valiqprodpis",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  valiqprodpis: string | null;

  @Column("character varying", {
    name: "cstcofins",
    nullable: true,
    length: 30,
  })
  cstcofins: string | null;

  @Column("numeric", {
    name: "vbccofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vbccofins: string | null;

  @Column("numeric", {
    name: "pcofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  pcofins: string | null;

  @Column("numeric", {
    name: "vcofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vcofins: string | null;

  @Column("numeric", {
    name: "qbcprodcofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  qbcprodcofins: string | null;

  @Column("numeric", {
    name: "valiqprodcofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  valiqprodcofins: string | null;
}
