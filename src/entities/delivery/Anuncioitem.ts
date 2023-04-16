import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Anuncio } from "./Anuncio";

@Index("anuncioitem_pkey", ["idanuncioitem"], { unique: true })
@Entity("anuncioitem", { schema: "delivery" })
export class Anuncioitem {
  @PrimaryGeneratedColumn({ type: "integer", name: "idanuncioitem" })
  idanuncioitem: number;

  @Column("character", { name: "codprodfornec", length: 15 })
  codprodfornec: string;

  @Column("character", { name: "nomeproduto", length: 50 })
  nomeproduto: string;

  @Column("character", {
    name: "descricao",
    nullable: true,
    length: 150,
    default: () => "NULL::bpchar",
  })
  descricao: string | null;

  @Column("character", {
    name: "unidademedida",
    length: 3,
    default: () => "'UNI'",
  })
  unidademedida: string;

  @Column("character", { name: "urlimagem", nullable: true, length: 150 })
  urlimagem: string | null;

  @Column("boolean", { name: "vegano", nullable: true, default: () => "false" })
  vegano: boolean | null;

  @Column("numeric", {
    name: "precovenda",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.00",
  })
  precovenda: string | null;

  @Column("character", { name: "nomedaimagem", nullable: true, length: 20 })
  nomedaimagem: string | null;

  @Column("numeric", {
    name: "qtdestoque",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  qtdestoque: string | null;

  @ManyToOne(() => Anuncio, (anuncio) => anuncio.anuncioitems)
  @JoinColumn([{ name: "idanuncio", referencedColumnName: "idanuncio" }])
  idanuncio: Anuncio;
}
