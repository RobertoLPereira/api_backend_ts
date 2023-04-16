import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("venda_pkey", ["id"], { unique: true })
@Entity("venda", { schema: "pdvandroid" })
export class Venda {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "cuf", nullable: true })
  cuf: number | null;

  @Column("integer", { name: "cnf", nullable: true })
  cnf: number | null;

  @Column("character varying", { name: "natope", nullable: true, length: 20 })
  natope: string | null;

  @Column("integer", { name: "modelo", nullable: true })
  modelo: number | null;

  @Column("integer", { name: "serie", nullable: true })
  serie: number | null;

  @Column("integer", { name: "nnf", nullable: true })
  nnf: number | null;

  @Column("date", { name: "dhemi", nullable: true })
  dhemi: string | null;

  @Column("date", { name: "dhsaient", nullable: true })
  dhsaient: string | null;

  @Column("integer", { name: "tpnf", nullable: true })
  tpnf: number | null;

  @Column("integer", { name: "iddest", nullable: true })
  iddest: number | null;

  @Column("character varying", { name: "cmunfg", nullable: true, length: 15 })
  cmunfg: string | null;

  @Column("integer", { name: "tpimp", nullable: true })
  tpimp: number | null;

  @Column("integer", { name: "tpemis", nullable: true })
  tpemis: number | null;

  @Column("integer", { name: "cdv", nullable: true })
  cdv: number | null;

  @Column("integer", { name: "tpamb", nullable: true })
  tpamb: number | null;

  @Column("integer", { name: "finnfe", nullable: true })
  finnfe: number | null;

  @Column("integer", { name: "indfinal", nullable: true })
  indfinal: number | null;

  @Column("integer", { name: "indpres", nullable: true })
  indpres: number | null;

  @Column("integer", { name: "procemi", nullable: true })
  procemi: number | null;

  @Column("character varying", { name: "verproc", nullable: true, length: 30 })
  verproc: string | null;

  @Column("date", { name: "dhcont", nullable: true })
  dhcont: string | null;

  @Column("character varying", { name: "xjust", nullable: true, length: 100 })
  xjust: string | null;

  @Column("character varying", { name: "cnpjemi", nullable: true, length: 14 })
  cnpjemi: string | null;

  @Column("character varying", { name: "xnomeemi", nullable: true, length: 50 })
  xnomeemi: string | null;

  @Column("character varying", { name: "xfant", nullable: true, length: 50 })
  xfant: string | null;

  @Column("character varying", { name: "xlgremi", nullable: true, length: 50 })
  xlgremi: string | null;

  @Column("character varying", { name: "nroemi", nullable: true, length: 15 })
  nroemi: string | null;

  @Column("character varying", { name: "xcplemi", nullable: true, length: 15 })
  xcplemi: string | null;

  @Column("character varying", {
    name: "xbairroemi",
    nullable: true,
    length: 20,
  })
  xbairroemi: string | null;

  @Column("character varying", { name: "cmunemi", nullable: true, length: 20 })
  cmunemi: string | null;

  @Column("character varying", { name: "xmunemi", nullable: true, length: 20 })
  xmunemi: string | null;

  @Column("character", { name: "ufemi", nullable: true, length: 2 })
  ufemi: string | null;

  @Column("character varying", { name: "cepemi", nullable: true, length: 10 })
  cepemi: string | null;

  @Column("character varying", { name: "cpaisemi", nullable: true, length: 10 })
  cpaisemi: string | null;

  @Column("character varying", { name: "xpaisemi", nullable: true, length: 12 })
  xpaisemi: string | null;

  @Column("character varying", { name: "foneemi", nullable: true, length: 20 })
  foneemi: string | null;

  @Column("character varying", { name: "ieemi", nullable: true, length: 20 })
  ieemi: string | null;

  @Column("character varying", { name: "iest", nullable: true, length: 20 })
  iest: string | null;

  @Column("character varying", { name: "imemi", nullable: true, length: 20 })
  imemi: string | null;

  @Column("character varying", { name: "cnae", nullable: true, length: 10 })
  cnae: string | null;

  @Column("character varying", { name: "crt", nullable: true, length: 12 })
  crt: string | null;

  @Column("character varying", { name: "cnpjdest", nullable: true, length: 14 })
  cnpjdest: string | null;

  @Column("character varying", { name: "cpfdest", nullable: true, length: 11 })
  cpfdest: string | null;

  @Column("character varying", { name: "xlgrdest", nullable: true, length: 50 })
  xlgrdest: string | null;

  @Column("character varying", { name: "nrodest", nullable: true, length: 12 })
  nrodest: string | null;

  @Column("character varying", { name: "xcpldest", nullable: true, length: 12 })
  xcpldest: string | null;

  @Column("character varying", {
    name: "xbairrodest",
    nullable: true,
    length: 20,
  })
  xbairrodest: string | null;

  @Column("character varying", { name: "cmundest", nullable: true, length: 20 })
  cmundest: string | null;

  @Column("character varying", { name: "xmundest", nullable: true, length: 20 })
  xmundest: string | null;

  @Column("character varying", { name: "ufdest", nullable: true, length: 2 })
  ufdest: string | null;

  @Column("character varying", { name: "cepdest", nullable: true, length: 10 })
  cepdest: string | null;

  @Column("character varying", {
    name: "cpaisdest",
    nullable: true,
    length: 14,
  })
  cpaisdest: string | null;

  @Column("character varying", {
    name: "xpaisdest",
    nullable: true,
    length: 20,
  })
  xpaisdest: string | null;

  @Column("character varying", { name: "fonedest", nullable: true, length: 15 })
  fonedest: string | null;

  @Column("character varying", {
    name: "indiedest",
    nullable: true,
    length: 20,
  })
  indiedest: string | null;

  @Column("character varying", { name: "iedest", nullable: true, length: 10 })
  iedest: string | null;

  @Column("character varying", { name: "isuf", nullable: true, length: 2 })
  isuf: string | null;

  @Column("character varying", { name: "imdest", nullable: true, length: 20 })
  imdest: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("numeric", { name: "vbc", nullable: true, precision: 10, scale: 2 })
  vbc: string | null;

  @Column("numeric", { name: "vicms", nullable: true, precision: 5, scale: 2 })
  vicms: string | null;

  @Column("numeric", { name: "vbcst", nullable: true, precision: 5, scale: 2 })
  vbcst: string | null;

  @Column("numeric", { name: "vst", nullable: true, precision: 5, scale: 2 })
  vst: string | null;

  @Column("numeric", { name: "vprod", nullable: true, precision: 10, scale: 2 })
  vprod: string | null;

  @Column("numeric", { name: "vfrete", nullable: true, precision: 7, scale: 2 })
  vfrete: string | null;

  @Column("numeric", { name: "vseg", nullable: true, precision: 7, scale: 2 })
  vseg: string | null;

  @Column("numeric", { name: "vdesc", nullable: true, precision: 7, scale: 2 })
  vdesc: string | null;

  @Column("numeric", { name: "vii", nullable: true, precision: 7, scale: 2 })
  vii: string | null;

  @Column("numeric", { name: "vipi", nullable: true, precision: 7, scale: 2 })
  vipi: string | null;

  @Column("numeric", { name: "vpis", nullable: true, precision: 7, scale: 2 })
  vpis: string | null;

  @Column("numeric", {
    name: "vcofins",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vcofins: string | null;

  @Column("numeric", {
    name: "voutro",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  voutro: string | null;

  @Column("numeric", { name: "vnf", nullable: true, precision: 10, scale: 2 })
  vnf: string | null;

  @Column("numeric", {
    name: "vtottrib",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  vtottrib: string | null;

  @Column("numeric", {
    name: "vicmsdeson",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsdeson: string | null;

  @Column("numeric", {
    name: "vicmsufdestopc",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vicmsufdestopc: string | null;

  @Column("numeric", {
    name: "vicmsufremet",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  vicmsufremet: string | null;

  @Column("numeric", {
    name: "vfcpufdestopc",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vfcpufdestopc: string | null;

  @Column("numeric", { name: "vfcp", nullable: true, precision: 7, scale: 2 })
  vfcp: string | null;

  @Column("numeric", { name: "vfcpst", nullable: true, precision: 7, scale: 2 })
  vfcpst: string | null;

  @Column("numeric", {
    name: "vfcpstret",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vfcpstret: string | null;

  @Column("numeric", {
    name: "vipidevol",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vipidevol: string | null;

  @Column("character varying", { name: "modfrete", nullable: true, length: 30 })
  modfrete: string | null;

  @Column("character varying", {
    name: "cnpjtransp",
    nullable: true,
    length: 14,
  })
  cnpjtransp: string | null;

  @Column("character varying", {
    name: "cpftransp",
    nullable: true,
    length: 11,
  })
  cpftransp: string | null;

  @Column("character varying", {
    name: "xnometransp",
    nullable: true,
    length: 30,
  })
  xnometransp: string | null;

  @Column("character varying", { name: "ietransp", nullable: true, length: 20 })
  ietransp: string | null;

  @Column("character varying", { name: "xender", nullable: true, length: 30 })
  xender: string | null;

  @Column("character varying", {
    name: "xmuntransp",
    nullable: true,
    length: 12,
  })
  xmuntransp: string | null;

  @Column("character varying", { name: "uftransp", nullable: true, length: 2 })
  uftransp: string | null;

  @Column("character varying", {
    name: "infadfisco",
    nullable: true,
    length: 50,
  })
  infadfisco: string | null;

  @Column("character varying", { name: "infcpl", nullable: true, length: 100 })
  infcpl: string | null;

  @Column("character varying", { name: "nfat", nullable: true, length: 10 })
  nfat: string | null;

  @Column("numeric", { name: "vorig", nullable: true, precision: 10, scale: 2 })
  vorig: string | null;

  @Column("numeric", {
    name: "vdescfatura",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  vdescfatura: string | null;

  @Column("numeric", { name: "vliq", nullable: true, precision: 7, scale: 2 })
  vliq: string | null;

  @Column("character varying", { name: "versao", nullable: true, length: 10 })
  versao: string | null;

  @Column("character varying", { name: "chavenf", nullable: true, length: 200 })
  chavenf: string | null;

  @Column("character varying", {
    name: "statusnfe",
    nullable: true,
    length: 20,
  })
  statusnfe: string | null;
}
