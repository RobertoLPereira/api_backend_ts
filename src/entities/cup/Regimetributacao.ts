import { Column, Entity, Index, OneToMany } from "typeorm";
import { Pessoaregimetributacao } from "./Pessoaregimetributacao";

@Index("pk_regimetributacao", ["idregimetributacao"], { unique: true })
@Entity("regimetributacao", { schema: "cup" })
export class Regimetributacao {
  @Column("integer", { primary: true, name: "idregimetributacao" })
  idregimetributacao: number;

  @Column("character varying", { name: "denominacao", length: 50 })
  denominacao: string;

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

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @OneToMany(
    () => Pessoaregimetributacao,
    (pessoaregimetributacao) => pessoaregimetributacao.idregimetributacao2
  )
  pessoaregimetributacaos: Pessoaregimetributacao[];
}
