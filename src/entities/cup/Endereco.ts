import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("endereco_pkey", ["idendereco"], { unique: true })
@Index("fki_fk_pessoaendereco", ["idpessoa"], {})
@Entity("endereco", { schema: "cup" })
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
    length: 115,
    default: () => "''",
  })
  nomelogradouro: string;

  @Column("character varying", {
    name: "numerologradouro",
    length: 10,
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
    length: 8,
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

  @Column("integer", { name: "idtipoendereco", default: () => "0" })
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

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  idestacao: string | null;

  @Column("date", {
    name: "dataatualizacaocadastro",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacaocadastro: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
