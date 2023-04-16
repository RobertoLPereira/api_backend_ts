import { Column, Entity, Index } from "typeorm";

@Index("pk_fisica_1", ["idpessoa"], { unique: true })
@Entity("fisica_old", { schema: "cup" })
export class FisicaOld {
  @Column("integer", { primary: true, name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "apelido", nullable: true, length: 50 })
  apelido: string | null;

  @Column("character varying", { name: "nomemae", length: 115 })
  nomemae: string;

  @Column("character varying", { name: "nomepai", nullable: true, length: 115 })
  nomepai: string | null;

  @Column("date", { name: "datanascimento" })
  datanascimento: string;

  @Column("integer", { name: "idestadocivil" })
  idestadocivil: number;

  @Column("integer", { name: "idsexo" })
  idsexo: number;

  @Column("character", { name: "idnaturalidade", length: 2 })
  idnaturalidade: string;

  @Column("character varying", { name: "registrogeral", length: 15 })
  registrogeral: string;

  @Column("date", { name: "dataregistrogeral" })
  dataregistrogeral: string;

  @Column("character varying", { name: "orgaoemissor", length: 50 })
  orgaoemissor: string;

  @Column("character", {
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
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;

  @Column("character varying", { name: "senha", nullable: true, length: 30 })
  senha: string | null;

  @Column("character", {
    name: "codigousuariorede",
    nullable: true,
    length: 30,
  })
  codigousuariorede: string | null;
}
