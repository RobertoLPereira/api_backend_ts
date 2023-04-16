import { Column, Entity, Index } from "typeorm";

@Index("ped65_pkey", ["empresa", "pedido"], { unique: true })
@Entity("pedidos65", { schema: "nfefacil" })
export class Pedidos65 {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;

  @Column("character", { name: "documento", nullable: true, length: 14 })
  documento: string | null;

  @Column("character varying", {
    name: "nome_documento",
    nullable: true,
    length: 60,
  })
  nomeDocumento: string | null;

  @Column("integer", { name: "cod_forma_pgto" })
  codFormaPgto: number;

  @Column("date", { name: "data_digitacao", nullable: true })
  dataDigitacao: string | null;

  @Column("integer", { name: "qtde_itens" })
  qtdeItens: number;

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

  @Column("numeric", {
    name: "numero_nfe",
    nullable: true,
    precision: 9,
    scale: 0,
    default: () => "0",
  })
  numeroNfe: string | null;

  @Column("character varying", { name: "serienfe", nullable: true, length: 3 })
  serienfe: string | null;

  @Column("character varying", { name: "modelonfe", nullable: true, length: 2 })
  modelonfe: string | null;

  @Column("date", { name: "data_emissao", nullable: true })
  dataEmissao: string | null;

  @Column("boolean", { name: "cancelado", nullable: true })
  cancelado: boolean | null;

  @Column("integer", { name: "codcaixa", nullable: true })
  codcaixa: number | null;

  @Column("integer", { name: "codlogin", nullable: true })
  codlogin: number | null;

  @Column("integer", { name: "codmaquina", nullable: true })
  codmaquina: number | null;

  @Column("character varying", {
    name: "docauttef",
    nullable: true,
    length: 10,
  })
  docauttef: string | null;

  @Column("character", { name: "cnpjtef", nullable: true, length: 14 })
  cnpjtef: string | null;
}
