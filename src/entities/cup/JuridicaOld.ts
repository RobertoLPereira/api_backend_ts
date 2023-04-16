import { Column, Entity, Index } from "typeorm";

@Index("pk_juridica_1", ["idpessoa"], { unique: true })
@Entity("juridica_old", { schema: "cup" })
export class JuridicaOld {
  @Column("integer", { primary: true, name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "razaosocial", length: 115 })
  razaosocial: string;

  @Column("date", { name: "dataregistrojunta" })
  dataregistrojunta: string;

  @Column("character varying", {
    name: "inscricaoestadual",
    nullable: true,
    length: 15,
  })
  inscricaoestadual: string | null;

  @Column("date", { name: "dataconstituicao", nullable: true })
  dataconstituicao: string | null;

  @Column("integer", { name: "idformajuridica", nullable: true })
  idformajuridica: number | null;

  @Column("integer", { name: "quantidadefiliais", nullable: true })
  quantidadefiliais: number | null;

  @Column("integer", { name: "idramoatividade", nullable: true })
  idramoatividade: number | null;

  @Column("integer", { name: "idporte", nullable: true })
  idporte: number | null;

  @Column("double precision", {
    name: "incentivoicms",
    nullable: true,
    precision: 53,
  })
  incentivoicms: number | null;

  @Column("character", { name: "optantesimples", nullable: true, length: 1 })
  optantesimples: string | null;

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
}
