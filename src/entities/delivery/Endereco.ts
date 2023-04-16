import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("endereco_pkey", ["idendereco"], { unique: true })
@Index("fki_pessoaEndereco", ["idpessoa"], {})
@Index("unq_endereco_idtipoendereco", ["idtipoendereco"], { unique: true })
@Entity("endereco", { schema: "delivery" })
export class Endereco {
  @PrimaryGeneratedColumn({ type: "integer", name: "idendereco" })
  idendereco: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("character varying", {
    name: "tipologradouro",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  tipologradouro: string | null;

  @Column("character varying", {
    name: "nomelogradouro",
    length: 60,
    default: () => "''",
  })
  nomelogradouro: string;

  @Column("character varying", {
    name: "numerologradouro",
    length: 5,
    default: () => "''",
  })
  numerologradouro: string;

  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 15,
    default: () => "NULL::character varying",
  })
  complemento: string | null;

  @Column("character varying", {
    name: "perimetro",
    nullable: true,
    length: 115,
    default: () => "NULL::character varying",
  })
  perimetro: string | null;

  @Column("character varying", {
    name: "cep",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  cep: string | null;

  @Column("character varying", {
    name: "nomebairro",
    length: 50,
    default: () => "''",
  })
  nomebairro: string;

  @Column("character varying", {
    name: "nomemunicipio",
    length: 50,
    default: () => "''",
  })
  nomemunicipio: string;

  @Column("character varying", {
    name: "siglauf",
    length: 2,
    default: () => "''",
  })
  siglauf: string;

  @Column("character varying", {
    name: "caixapostal",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  caixapostal: string | null;

  @Column("integer", {
    name: "idtipoendereco",
    unique: true,
    default: () => "0",
  })
  idtipoendereco: number;

  @Column("integer", { name: "tempores", nullable: true })
  tempores: number | null;

  @Column("integer", { name: "idtipores", nullable: true })
  idtipores: number | null;

  @Column("character varying", {
    name: "idccorrespondencia",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  idccorrespondencia: string | null;

  @Column("character varying", {
    name: "torre",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  torre: string | null;

  @Column("character varying", {
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

  @Column("date", {
    name: "dataatualizacaocadastro",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacaocadastro: string | null;
}
