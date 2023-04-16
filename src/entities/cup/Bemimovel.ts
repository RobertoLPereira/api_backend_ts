import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemimovel", ["idbem"], {})
@Index("bemimovel_pkey", ["idbemimovel"], { unique: true })
@Entity("bemimovel", { schema: "cup" })
export class Bemimovel {
  @PrimaryGeneratedColumn({ type: "integer", name: "idbemimovel" })
  idbemimovel: number;

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @Column("integer", { name: "idtipobem", nullable: true })
  idtipobem: number | null;

  @Column("character varying", {
    name: "idsubtipobemimovel",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  idsubtipobemimovel: string | null;

  @Column("integer", {
    name: "nroapartamento",
    nullable: true,
    default: () => "0",
  })
  nroapartamento: number | null;

  @Column("integer", { name: "idtiporesidencia", nullable: true })
  idtiporesidencia: number | null;

  @Column("integer", {
    name: "idregimeobra",
    nullable: true,
    default: () => "0",
  })
  idregimeobra: number | null;

  @Column("numeric", {
    name: "areatotal",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "NULL::numeric",
  })
  areatotal: string | null;

  @Column("integer", { name: "idunidademedida", nullable: true })
  idunidademedida: number | null;

  @Column("numeric", {
    name: "areaconstruida",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "NULL::numeric",
  })
  areaconstruida: string | null;

  @Column("integer", { name: "idunidademedidaareaconstruida", nullable: true })
  idunidademedidaareaconstruida: number | null;

  @Column("numeric", {
    name: "metragemterreno",
    nullable: true,
    precision: 7,
    scale: 2,
    default: () => "0.00",
  })
  metragemterreno: string | null;

  @Column("numeric", {
    name: "areaprivada",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0.00",
  })
  areaprivada: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("character varying", {
    name: "numeroimovelrf",
    nullable: true,
    length: 40,
    default: () => "NULL::character varying",
  })
  numeroimovelrf: string | null;

  @Column("character varying", {
    name: "numeroimovelincra",
    nullable: true,
    length: 15,
    default: () => "NULL::character varying",
  })
  numeroimovelincra: string | null;

  @Column("character varying", {
    name: "situacaoimuneitr",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaoimuneitr: string | null;

  @Column("character varying", {
    name: "situacaocondominio",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaocondominio: string | null;

  @Column("integer", { name: "anoexercicioitr", nullable: true })
  anoexercicioitr: number | null;

  @Column("character varying", {
    name: "situacaoexploracao",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaoexploracao: string | null;

  @Column("character varying", {
    name: "situacaopenhora",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaopenhora: string | null;

  @Column("numeric", {
    name: "arealegal",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "NULL::numeric",
  })
  arealegal: string | null;

  @Column("integer", { name: "idunidademedidaarealegal", nullable: true })
  idunidademedidaarealegal: number | null;

  @Column("numeric", {
    name: "areareal",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "NULL::numeric",
  })
  areareal: string | null;

  @Column("integer", { name: "idunidademedidaareareal", nullable: true })
  idunidademedidaareareal: number | null;

  @Column("character varying", {
    name: "situacaoonus",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaoonus: string | null;

  @Column("integer", {
    name: "idtipoescritura",
    nullable: true,
    default: () => "0",
  })
  idtipoescritura: number | null;

  @Column("integer", {
    name: "idchabitese",
    nullable: true,
    default: () => "0",
  })
  idchabitese: number | null;

  @Column("integer", { name: "idanuncio", nullable: true })
  idanuncio: number | null;

  @Column("integer", { name: "idvista", nullable: true })
  idvista: number | null;

  @Column("integer", { name: "idaforamento", default: () => "1" })
  idaforamento: number;

  @Column("numeric", {
    name: "idlaudemio",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.00",
  })
  idlaudemio: string | null;

  @Column("numeric", {
    name: "valoriptu",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0.00",
  })
  valoriptu: string | null;

  @Column("numeric", {
    name: "idposicaosolar",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0.00",
  })
  idposicaosolar: string | null;

  @Column("integer", { name: "idregiao", default: () => "0" })
  idregiao: number;

  @Column("character varying", {
    name: "idlocalchave",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  idlocalchave: string | null;

  @Column("integer", {
    name: "idprontaentrega",
    nullable: true,
    default: () => "0",
  })
  idprontaentrega: number | null;

  @Column("integer", { name: "idtipogas", nullable: true, default: () => "0" })
  idtipogas: number | null;

  @Column("integer", {
    name: "idchurrasqueira",
    nullable: true,
    default: () => "0",
  })
  idchurrasqueira: number | null;

  @Column("integer", { name: "idesquina", nullable: true, default: () => "0" })
  idesquina: number | null;

  @Column("integer", {
    name: "idcaracteristicas",
    nullable: true,
    default: () => "0",
  })
  idcaracteristicas: number | null;

  @Column("integer", { name: "sacadas", nullable: true, default: () => "0" })
  sacadas: number | null;

  @Column("integer", { name: "idcomodos", nullable: true, default: () => "0" })
  idcomodos: number | null;

  @Column("integer", {
    name: "idcaracteristicacondominio",
    nullable: true,
    default: () => "0",
  })
  idcaracteristicacondominio: number | null;

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

  @ManyToOne(() => Bem, (bem) => bem.bemimovels)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
