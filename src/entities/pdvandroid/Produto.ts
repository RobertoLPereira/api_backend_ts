import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("produto_descricao_key", ["descricao"], { unique: true })
@Index("produto_pkey", ["id"], { unique: true })
@Entity("produto", { schema: "pdvandroid" })
export class Produto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "descricao", unique: true, length: 50 })
  descricao: string;

  @Column("character varying", { name: "gtin", length: 15 })
  gtin: string;

  @Column("character varying", { name: "un", length: 3 })
  un: string;

  @Column("numeric", { name: "preco", precision: 12, scale: 2 })
  preco: string;

  @Column("character varying", { name: "ncm", nullable: true, length: 10 })
  ncm: string | null;

  @Column("character varying", { name: "cest", nullable: true, length: 10 })
  cest: string | null;

  @Column("character varying", { name: "cfop", nullable: true, length: 5 })
  cfop: string | null;

  @Column("character varying", { name: "cst_icms", nullable: true, length: 10 })
  cstIcms: string | null;

  @Column("character varying", { name: "origem", nullable: true, length: 12 })
  origem: string | null;

  @Column("character varying", { name: "cst_pis", nullable: true, length: 3 })
  cstPis: string | null;

  @Column("character varying", {
    name: "cst_cofins",
    nullable: true,
    length: 3,
  })
  cstCofins: string | null;

  @Column("numeric", {
    name: "ibpt_federal",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  ibptFederal: string | null;

  @Column("numeric", {
    name: "ibpt_estadual",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  ibptEstadual: string | null;

  @Column("numeric", {
    name: "ibpt_municipal",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  ibptMunicipal: string | null;

  @Column("numeric", {
    name: "aliq_icms",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  aliqIcms: string | null;

  @Column("numeric", {
    name: "aliq_pis",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  aliqPis: string | null;

  @Column("numeric", {
    name: "aliq_cofins",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  aliqCofins: string | null;

  @Column("character varying", { name: "img", nullable: true, length: 50 })
  img: string | null;

  @Column("character varying", { name: "grupo", nullable: true, length: 30 })
  grupo: string | null;
}
