import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovelunidade } from "./Imovelunidade";

@Index("leituraluzunidade_pkey", ["idleituraluzunidade"], { unique: true })
@Entity("leituraluzunidade", { schema: "aluguel" })
export class Leituraluzunidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "idleituraluzunidade" })
  idleituraluzunidade: number;

  @Column("numeric", {
    name: "leituraanterior",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  leituraanterior: string | null;

  @Column("double precision", {
    name: "leituraatual",
    nullable: true,
    precision: 53,
  })
  leituraatual: number | null;

  @Column("integer", { name: "codigomedidor", nullable: true })
  codigomedidor: number | null;

  @Column("timestamp with time zone", { name: "dataleitura", nullable: true })
  dataleitura: Date | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;

  @Column("double precision", {
    name: "valor",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valor: number | null;

  @ManyToOne(
    () => Imovelunidade,
    (imovelunidade) => imovelunidade.leituraluzunidades
  )
  @JoinColumn([{ name: "idunidade", referencedColumnName: "idunidade" }])
  idunidade: Imovelunidade;
}
