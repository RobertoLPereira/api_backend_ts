import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("fisica_pkey", ["idfisica"], { unique: true })
@Index("fki_pessoaFisica", ["idpessoa"], {})
@Entity("fisica", { schema: "cup" })
export class Fisica {
  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("character varying", {
    name: "apelido",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  apelido: string | null;

  @Column("character varying", {
    name: "nomemae",
    length: 115,
    default: () => "''",
  })
  nomemae: string;

  @Column("character varying", {
    name: "nomepai",
    nullable: true,
    length: 115,
    default: () => "NULL::character varying",
  })
  nomepai: string | null;

  @Column("date", { name: "datanascimento", default: () => "now()" })
  datanascimento: string;

  @Column("integer", { name: "idestadocivil", default: () => "0" })
  idestadocivil: number;

  @Column("integer", { name: "idsexo", default: () => "0" })
  idsexo: number;

  @Column("character varying", {
    name: "profissao",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  profissao: string | null;

  @Column("character varying", {
    name: "ufnaturalidade",
    nullable: true,
    length: 2,
    default: () => "NULL::character varying",
  })
  ufnaturalidade: string | null;

  @Column("character varying", {
    name: "idnaturalidade",
    length: 20,
    default: () => "''",
  })
  idnaturalidade: string;

  @Column("character varying", {
    name: "nacionalidade",
    nullable: true,
    length: 15,
    default: () => "'Brasileira'",
  })
  nacionalidade: string | null;

  @Column("character varying", {
    name: "registrogeral",
    nullable: true,
    length: 15,
    default: () => "NULL::character varying",
  })
  registrogeral: string | null;

  @Column("date", {
    name: "dataregistrogeral",
    nullable: true,
    default: () => "now()",
  })
  dataregistrogeral: string | null;

  @Column("character varying", {
    name: "orgaoemissor",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  orgaoemissor: string | null;

  @Column("character varying", {
    name: "ufrg",
    nullable: true,
    length: 2,
    default: () => "NULL::character varying",
  })
  ufrg: string | null;

  @Column("character varying", {
    name: "ndependente",
    nullable: true,
    length: 2,
    default: () => "NULL::character varying",
  })
  ndependente: string | null;

  @Column("character varying", {
    name: "codigousuariorede",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  codigousuariorede: string | null;

  @Column("character varying", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
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

  @Column("character varying", {
    name: "senha",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  senha: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "idfisica" })
  idfisica: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.fisica)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  pessoa: Pessoa;
}
