import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovel } from "./Imovel";

@Index("aluguelpadrao_pkey", ["idaluguelpadrao"], { unique: true })
@Entity("aluguelpadrao", { schema: "aluguel" })
export class Aluguelpadrao {
  @PrimaryGeneratedColumn({ type: "integer", name: "idaluguelpadrao" })
  idaluguelpadrao: number;

  @Column("double precision", {
    name: "valor",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valor: number | null;

  @Column("timestamp with time zone", { name: "cadastradoem", nullable: true })
  cadastradoem: Date | null;

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
  status: number | null;

  @ManyToOne(() => Imovel, (imovel) => imovel.aluguelpadraos)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;
}
