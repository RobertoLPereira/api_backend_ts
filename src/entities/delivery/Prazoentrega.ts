import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Anuncio } from "./Anuncio";

@Index("prazoentrega_pkey", ["idprazoentrega"], { unique: true })
@Entity("prazoentrega", { schema: "delivery" })
export class Prazoentrega {
  @PrimaryGeneratedColumn({ type: "integer", name: "idprazoentrega" })
  idprazoentrega: number;

  @Column("integer", { name: "qtdhoras" })
  qtdhoras: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToOne(() => Anuncio, (anuncio) => anuncio.prazoentrega)
  @JoinColumn([
    { name: "idprazoentrega", referencedColumnName: "idprazoentrega" },
  ])
  idprazoentrega2: Anuncio;
}
