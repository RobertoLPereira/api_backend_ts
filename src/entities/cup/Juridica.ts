import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("juridica_pkey", ["idjuridica"], { unique: true })
@Index("fki_pessoaJuridica", ["idpessoa"], {})
@Entity("juridica", { schema: "cup" })
export class Juridica {
  @PrimaryGeneratedColumn({ type: "integer", name: "idjuridica" })
  idjuridica: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("character varying", {
    name: "razaosocial",
    length: 115,
    default: () => "''",
  })
  razaosocial: string;

  @Column("date", { name: "dataregistrojunta", nullable: true })
  dataregistrojunta: string | null;

  @Column("character varying", {
    name: "numeroregistrojunta",
    nullable: true,
    length: 12,
    default: () => "NULL::character varying",
  })
  numeroregistrojunta: string | null;

  @Column("character varying", {
    name: "orgaoexpedidor",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  orgaoexpedidor: string | null;

  @Column("character varying", {
    name: "inscricaoestadual",
    nullable: true,
    length: 15,
    default: () => "NULL::character varying",
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

  @Column("numeric", {
    name: "incentivoicms",
    nullable: true,
    precision: 6,
    scale: 2,
    default: () => "NULL::numeric",
  })
  incentivoicms: string | null;

  @Column("character varying", {
    name: "optantesimples",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  optantesimples: string | null;

  @Column("character varying", {
    name: "grupoeconomico",
    nullable: true,
    length: 40,
    default: () => "NULL::character varying",
  })
  grupoeconomico: string | null;

  @Column("integer", {
    name: "inscricaomunicipal",
    nullable: true,
    default: () => "0",
  })
  inscricaomunicipal: number | null;

  @Column("character varying", { name: "status", nullable: true })
  status: string | null;

  @Column("date", { name: "dataatualizacao", nullable: true })
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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.juridicas)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
