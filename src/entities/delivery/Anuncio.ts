import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Anuncioitem } from "./Anuncioitem";
import { Anunciorepasse } from "./Anunciorepasse";
import { Prazoentrega } from "./Prazoentrega";
import { Vendaminima } from "./Vendaminima";

@Index("fki_anuncioItem", ["idanuncio"], {})
@Index("anuncio_pkey", ["idanuncio"], { unique: true })
@Index("unq_anuncio_idcategoria", ["idcategoria"], { unique: true })
@Index("unq_anuncio_idprazoentrega", ["idprazoentrega"], { unique: true })
@Index("unq_anuncio_idvendaminima", ["idvendaminima"], { unique: true })
@Entity("anuncio", { schema: "delivery" })
export class Anuncio {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idanuncio" })
  idanuncio: number;

  @Column("integer", { name: "idcategoria", unique: true })
  idcategoria: number;

  @Column("numeric", {
    name: "qtdemestoqueproanuncio",
    nullable: true,
    precision: 7,
    scale: 2,
    default: () => "0.00",
  })
  qtdemestoqueproanuncio: string | null;

  @Column("integer", {
    name: "idvendaminima",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  idvendaminima: number | null;

  @Column("integer", {
    name: "idprazoentrega",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  idprazoentrega: number | null;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToMany(() => Anuncioitem, (anuncioitem) => anuncioitem.idanuncio)
  anuncioitems: Anuncioitem[];

  @OneToMany(() => Anunciorepasse, (anunciorepasse) => anunciorepasse.idanuncio)
  anunciorepasses: Anunciorepasse[];

  @OneToOne(() => Prazoentrega, (prazoentrega) => prazoentrega.idprazoentrega2)
  prazoentrega: Prazoentrega;

  @OneToOne(() => Vendaminima, (vendaminima) => vendaminima.idvendaminima2)
  vendaminima: Vendaminima;
}
