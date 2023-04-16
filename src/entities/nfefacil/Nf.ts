import { Column, Entity, Index } from "typeorm";

@Index("nf_pkey", ["empresa", "pedido"], { unique: true })
@Entity("nf", { schema: "nfefacil" })
export class Nf {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;

  @Column("integer", { name: "cod_cliente" })
  codCliente: number;

  @Column("character", { name: "doc_cliente", nullable: true, length: 14 })
  docCliente: string | null;

  @Column("character varying", {
    name: "nome_documento",
    nullable: true,
    length: 60,
  })
  nomeDocumento: string | null;

  @Column("integer", { name: "cod_forma_pgto" })
  codFormaPgto: number;

  @Column("character", { name: "cod_tipo_doc", nullable: true, length: 2 })
  codTipoDoc: string | null;

  @Column("integer", { name: "cod_banco" })
  codBanco: number;

  @Column("date", { name: "data_digitacao", nullable: true })
  dataDigitacao: string | null;

  @Column("double precision", {
    name: "valor_produtos",
    nullable: true,
    precision: 53,
  })
  valorProdutos: number | null;

  @Column("double precision", {
    name: "valor_descontos",
    nullable: true,
    precision: 53,
  })
  valorDescontos: number | null;

  @Column("double precision", {
    name: "valor_total",
    nullable: true,
    precision: 53,
  })
  valorTotal: number | null;

  @Column("integer", { name: "cod_transportador" })
  codTransportador: number;

  @Column("character varying", {
    name: "dados_adicionais",
    nullable: true,
    length: 255,
  })
  dadosAdicionais: string | null;

  @Column("integer", {
    name: "qtde_volume",
    nullable: true,
    default: () => "0",
  })
  qtdeVolume: number | null;

  @Column("double precision", {
    name: "peso_volume",
    nullable: true,
    precision: 53,
  })
  pesoVolume: number | null;

  @Column("character", { name: "placa_veiculo", nullable: true, length: 8 })
  placaVeiculo: string | null;

  @Column("character", { name: "uf_placa", nullable: true, length: 2 })
  ufPlaca: string | null;

  @Column("character", { name: "pedido_cliente", nullable: true, length: 25 })
  pedidoCliente: string | null;

  @Column("character", { name: "modelonfe", nullable: true, length: 2 })
  modelonfe: string | null;

  @Column("numeric", {
    name: "numero_nfe",
    nullable: true,
    precision: 9,
    scale: 0,
    default: () => "0",
  })
  numeroNfe: string | null;

  @Column("character varying", { name: "serie_nfe", nullable: true, length: 3 })
  serieNfe: string | null;

  @Column("date", { name: "data_emissao", nullable: true })
  dataEmissao: string | null;

  @Column("character", { name: "chave_nfe", nullable: true, length: 54 })
  chaveNfe: string | null;

  @Column("double precision", {
    name: "icms_bc",
    nullable: true,
    precision: 53,
  })
  icmsBc: number | null;

  @Column("double precision", {
    name: "icms_vlr",
    nullable: true,
    precision: 53,
  })
  icmsVlr: number | null;

  @Column("double precision", { name: "ipi_bc", nullable: true, precision: 53 })
  ipiBc: number | null;

  @Column("double precision", {
    name: "ipi_vlr",
    nullable: true,
    precision: 53,
  })
  ipiVlr: number | null;

  @Column("double precision", { name: "pis_bc", nullable: true, precision: 53 })
  pisBc: number | null;

  @Column("double precision", {
    name: "pis_vlr",
    nullable: true,
    precision: 53,
  })
  pisVlr: number | null;

  @Column("double precision", {
    name: "cofins_bc",
    nullable: true,
    precision: 53,
  })
  cofinsBc: number | null;

  @Column("double precision", {
    name: "cofins_vlr",
    nullable: true,
    precision: 53,
  })
  cofinsVlr: number | null;

  @Column("double precision", {
    name: "vtottrib",
    nullable: true,
    precision: 53,
  })
  vtottrib: number | null;

  @Column("numeric", {
    name: "num_nfe_fat",
    nullable: true,
    precision: 9,
    scale: 0,
    default: () => "0",
  })
  numNfeFat: string | null;

  @Column("character", { name: "fin_nfe", nullable: true, length: 1 })
  finNfe: string | null;

  @Column("date", { name: "data_cancelamento", nullable: true })
  dataCancelamento: string | null;

  @Column("numeric", {
    name: "num_nfe_dev",
    nullable: true,
    precision: 9,
    scale: 0,
    default: () => "0",
  })
  numNfeDev: string | null;

  @Column("date", { name: "data_devolucao", nullable: true })
  dataDevolucao: string | null;

  @Column("character varying", { name: "qrcode", nullable: true, length: 1024 })
  qrcode: string | null;

  @Column("character", { name: "tpemis", nullable: true, length: 1 })
  tpemis: string | null;

  @Column("character", { name: "tpamb", nullable: true, length: 1 })
  tpamb: string | null;

  @Column("character", { name: "pedido_interno", nullable: true, length: 15 })
  pedidoInterno: string | null;

  @Column("double precision", {
    name: "vtotibpt",
    nullable: true,
    precision: 53,
  })
  vtotibpt: number | null;

  @Column("character", { name: "refnfe", nullable: true, length: 44 })
  refnfe: string | null;

  @Column("character", { name: "status_nfe", nullable: true, length: 3 })
  statusNfe: string | null;

  @Column("character varying", {
    name: "motivo_nfe",
    nullable: true,
    length: 300,
  })
  motivoNfe: string | null;

  @Column("character", { name: "mod_frete", nullable: true, length: 1 })
  modFrete: string | null;
}
