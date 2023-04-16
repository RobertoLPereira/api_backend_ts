import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovel } from "./Imovel";
import { Pessoas } from "./Pessoas";

@Index("vinculos_pkey", ["idvinculo"], { unique: true })
@Entity("vinculos", { schema: "aluguel" })
export class Vinculos {
  @PrimaryGeneratedColumn({ type: "integer", name: "idvinculo" })
  idvinculo: number;

  @Column("integer", { name: "idnaturezarelac", nullable: true })
  idnaturezarelac: number | null;

  @Column("timestamp with time zone", { name: "inicio", nullable: true })
  inicio: Date | null;

  @Column("timestamp with time zone", { name: "fim", nullable: true })
  fim: Date | null;

  @ManyToOne(() => Imovel, (imovel) => imovel.vinculos)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.vinculos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoas;
}
