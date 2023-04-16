import { Column, Entity, Index } from "typeorm";

@Index("pk_nf_ent", ["codFornecedor", "empresa", "numeroNfe", "serieNfe"], {
  unique: true,
})
@Entity("nf_entrada", { schema: "nfefacil" })
export class NfEntrada {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { name: "pedido" })
  pedido: number;

  @Column("integer", { primary: true, name: "cod_fornecedor" })
  codFornecedor: number;

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
    length: 1024,
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

  @Column("character", {
    name: "pedido_fornecedor",
    nullable: true,
    length: 25,
  })
  pedidoFornecedor: string | null;

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
}
