import { Column, Entity, Index } from "typeorm";

@Index("pk_bemimovel", ["idbem"], { unique: true })
@Entity("bemimovel_old", { schema: "cup" })
export class BemimovelOld {
  @Column("integer", { primary: true, name: "idbem" })
  idbem: number;

  @Column("numeric", {
    name: "areatotal",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  areatotal: string | null;

  @Column("integer", { name: "idunidademedida", nullable: true })
  idunidademedida: number | null;

  @Column("numeric", {
    name: "areaconstruida",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  areaconstruida: string | null;

  @Column("integer", { name: "idunidademedidaareaconstruida", nullable: true })
  idunidademedidaareaconstruida: number | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("character varying", {
    name: "numeroimovelrf",
    nullable: true,
    length: 10,
  })
  numeroimovelrf: string | null;

  @Column("character varying", {
    name: "numeroimovelincra",
    nullable: true,
    length: 15,
  })
  numeroimovelincra: string | null;

  @Column("character", { name: "situacaoimuneitr", nullable: true, length: 1 })
  situacaoimuneitr: string | null;

  @Column("character", {
    name: "situacaocondominio",
    nullable: true,
    length: 1,
  })
  situacaocondominio: string | null;

  @Column("integer", { name: "anoexercicioitr", nullable: true })
  anoexercicioitr: number | null;

  @Column("character", {
    name: "idsubtipobemimovel",
    nullable: true,
    length: 1,
  })
  idsubtipobemimovel: string | null;

  @Column("character", {
    name: "situacaoexploracao",
    nullable: true,
    length: 1,
  })
  situacaoexploracao: string | null;

  @Column("character", { name: "situacaopenhora", nullable: true, length: 1 })
  situacaopenhora: string | null;

  @Column("numeric", {
    name: "arealegal",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  arealegal: string | null;

  @Column("integer", { name: "idunidademedidaarealegal", nullable: true })
  idunidademedidaarealegal: number | null;

  @Column("numeric", {
    name: "areareal",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  areareal: string | null;

  @Column("integer", { name: "idunidademedidaareareal", nullable: true })
  idunidademedidaareareal: number | null;

  @Column("character", { name: "situacaoonus", nullable: true, length: 1 })
  situacaoonus: string | null;

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
