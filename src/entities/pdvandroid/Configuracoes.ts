import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("configuracoes_pkey", ["id"], { unique: true })
@Entity("configuracoes", { schema: "pdvandroid" })
export class Configuracoes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "idempresa" })
  idempresa: number;

  @Column("character", { name: "caixa", nullable: true, length: 3 })
  caixa: string | null;

  @Column("character varying", {
    name: "enderecowebservice",
    nullable: true,
    length: 200,
  })
  enderecowebservice: string | null;

  @Column("date", {
    name: "dataultimoacesso",
    nullable: true,
    default: () => "now()",
  })
  dataultimoacesso: string | null;

  @Column("date", { name: "dataultimasincronizacao", nullable: true })
  dataultimasincronizacao: string | null;

  @Column("character varying", {
    name: "loginusuario",
    nullable: true,
    length: 30,
  })
  loginusuario: string | null;

  @Column("boolean", {
    name: "manterdadoslogin",
    nullable: true,
    default: () => "false",
  })
  manterdadoslogin: boolean | null;

  @Column("boolean", { name: "logado", nullable: true, default: () => "false" })
  logado: boolean | null;

  @Column("character varying", { name: "profile", nullable: true, length: 200 })
  profile: string | null;

  @Column("character varying", {
    name: "nomecaixa",
    nullable: true,
    length: 30,
  })
  nomecaixa: string | null;

  @Column("boolean", {
    name: "inicialdataloaded",
    nullable: true,
    default: () => "false",
  })
  inicialdataloaded: boolean | null;
}
