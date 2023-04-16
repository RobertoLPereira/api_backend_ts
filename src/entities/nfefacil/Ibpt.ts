import { Column, Entity, Index } from "typeorm";

@Index("ibpt_pkey", ["ncm", "tipo", "uf"], { unique: true })
@Entity("ibpt", { schema: "nfefacil" })
export class Ibpt {
  @Column("character", { primary: true, name: "uf", length: 2 })
  uf: string;

  @Column("character", { primary: true, name: "ncm", length: 8 })
  ncm: string;

  @Column("character varying", { primary: true, name: "tipo", length: 5 })
  tipo: string;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 500,
  })
  descricao: string | null;

  @Column("double precision", {
    name: "aliqnacionalfederal",
    nullable: true,
    precision: 53,
  })
  aliqnacionalfederal: number | null;

  @Column("double precision", {
    name: "aliqimportadosfederal",
    nullable: true,
    precision: 53,
  })
  aliqimportadosfederal: number | null;

  @Column("double precision", {
    name: "aliqestadual",
    nullable: true,
    precision: 53,
  })
  aliqestadual: number | null;

  @Column("double precision", {
    name: "aliqmunicipal",
    nullable: true,
    precision: 53,
  })
  aliqmunicipal: number | null;

  @Column("date", { name: "vigenciainicio", nullable: true })
  vigenciainicio: string | null;

  @Column("date", { name: "vigenciafim", nullable: true })
  vigenciafim: string | null;

  @Column("character varying", { name: "chave", nullable: true, length: 10 })
  chave: string | null;

  @Column("character varying", { name: "versao", nullable: true, length: 10 })
  versao: string | null;

  @Column("character varying", { name: "fonte", nullable: true, length: 50 })
  fonte: string | null;
}
