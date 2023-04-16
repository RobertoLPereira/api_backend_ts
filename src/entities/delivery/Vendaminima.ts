import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Anuncio } from "./Anuncio";

@Index("vendaminima_pkey", ["idvendaminima"], { unique: true })
@Entity("vendaminima", { schema: "delivery" })
export class Vendaminima {
  @PrimaryGeneratedColumn({ type: "integer", name: "idvendaminima" })
  idvendaminima: number;

  @Column("numeric", { name: "valorminimo", precision: 10, scale: 2 })
  valorminimo: string;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToOne(() => Anuncio, (anuncio) => anuncio.vendaminima)
  @JoinColumn([
    { name: "idvendaminima", referencedColumnName: "idvendaminima" },
  ])
  idvendaminima2: Anuncio;
}
