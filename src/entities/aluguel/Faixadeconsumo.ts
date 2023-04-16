import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovel } from "./Imovel";

@Index("faixadeconsumo_pkey", ["idfaixadeconsumo"], { unique: true })
@Entity("faixadeconsumo", { schema: "aluguel" })
export class Faixadeconsumo {
  @PrimaryGeneratedColumn({ type: "integer", name: "idfaixadeconsumo" })
  idfaixadeconsumo: number;

  @Column("character varying", { name: "denominacao", length: 50 })
  denominacao: string;

  @Column("integer", { name: "faixainicial", nullable: true })
  faixainicial: number | null;

  @Column("integer", { name: "faixafinal", nullable: true })
  faixafinal: number | null;

  @Column("numeric", {
    name: "tarifaagua",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  tarifaagua: string | null;

  @Column("numeric", {
    name: "tarifaesgoto",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  tarifaesgoto: string | null;

  @Column("numeric", { name: "tfdi", nullable: true, precision: 10, scale: 2 })
  tfdi: string | null;

  @Column("integer", { name: "idcategoriadeimoveis", nullable: true })
  idcategoriadeimoveis: number | null;

  @ManyToOne(() => Imovel, (imovel) => imovel.faixadeconsumos)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;
}
