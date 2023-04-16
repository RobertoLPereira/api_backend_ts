import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemgaragem", ["idbem"], {})
@Index("garagemvinculada_pkey", ["idbemgaragem"], { unique: true })
@Entity("garagemvinculada", { schema: "cup" })
export class Garagemvinculada {
  @PrimaryGeneratedColumn({ type: "integer", name: "idbemgaragem" })
  idbemgaragem: number;

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @Column("integer", { name: "idtipobem", nullable: true })
  idtipobem: number | null;

  @ManyToOne(() => Bem, (bem) => bem.garagemvinculadas)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
