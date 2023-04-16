import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("boleto", { schema: "nfefacil" })
export class Boleto {
  @Column("character", { name: "ordem", nullable: true, length: 5 })
  ordem: string | null;

  @Column("character", { name: "banco", nullable: true, length: 30 })
  banco: string | null;

  @Column("character", { name: "nome_banco", nullable: true, length: 10 })
  nomeBanco: string | null;

  @Column("character", { name: "dataemis", nullable: true, length: 10 })
  dataemis: string | null;

  @Column("character", { name: "datavcto", nullable: true, length: 10 })
  datavcto: string | null;

  @Column("character", { name: "numbloq", nullable: true, length: 13 })
  numbloq: string | null;

  @Column("character", { name: "agencia", nullable: true, length: 4 })
  agencia: string | null;

  @Column("character", { name: "dac_agencia", nullable: true, length: 1 })
  dacAgencia: string | null;

  @Column("character", { name: "conta", nullable: true, length: 8 })
  conta: string | null;

  @Column("character", { name: "carteira", nullable: true, length: 2 })
  carteira: string | null;

  @Column("character", { name: "cod_cedente", nullable: true, length: 7 })
  codCedente: string | null;

  @Column("character", { name: "pac_cedente", nullable: true, length: 2 })
  pacCedente: string | null;

  @Column("character", { name: "nome_cedente", nullable: true, length: 50 })
  nomeCedente: string | null;

  @Column("character", { name: "cnpj_cedente", nullable: true, length: 24 })
  cnpjCedente: string | null;

  @Column("character", { name: "numdoc", nullable: true, length: 12 })
  numdoc: string | null;

  @Column("character", { name: "tipodoc", nullable: true, length: 10 })
  tipodoc: string | null;

  @Column("character", { name: "moeda", nullable: true, length: 4 })
  moeda: string | null;

  @Column("character", { name: "valor", nullable: true, length: 20 })
  valor: string | null;

  @Column("character", { name: "jurodia", nullable: true, length: 12 })
  jurodia: string | null;

  @Column("character", { name: "obs1", nullable: true, length: 80 })
  obs1: string | null;

  @Column("character", { name: "obs2", nullable: true, length: 80 })
  obs2: string | null;

  @Column("character", { name: "obs3", nullable: true, length: 50 })
  obs3: string | null;

  @Column("character", { name: "obs4", nullable: true, length: 50 })
  obs4: string | null;

  @Column("character", { name: "cod_sacado", nullable: true, length: 7 })
  codSacado: string | null;

  @Column("character", { name: "nome_sacado", nullable: true, length: 50 })
  nomeSacado: string | null;

  @Column("character", { name: "ende_sacado", nullable: true, length: 50 })
  endeSacado: string | null;

  @Column("character", { name: "cep_sacado", nullable: true, length: 9 })
  cepSacado: string | null;

  @Column("character", { name: "cidade_sacado", nullable: true, length: 30 })
  cidadeSacado: string | null;

  @Column("character", { name: "uf_sacado", nullable: true, length: 2 })
  ufSacado: string | null;

  @Column("character", { name: "doc_sacado", nullable: true, length: 25 })
  docSacado: string | null;

  @Column("character", { name: "vendedor", nullable: true, length: 30 })
  vendedor: string | null;

  @Column("character", { name: "carro", nullable: true, length: 5 })
  carro: string | null;

  @Column("character", { name: "dias_protesto", nullable: true, length: 2 })
  diasProtesto: string | null;

  @Column("character", { name: "cod_barra", nullable: true, length: 46 })
  codBarra: string | null;

  @Column("character", { name: "linha_digitavel", nullable: true, length: 60 })
  linhaDigitavel: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;
}
