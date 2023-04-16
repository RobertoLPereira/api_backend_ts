import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovelunidade } from "./Imovelunidade";

@Index("leituraaguaunidade_pkey", ["idleituraaguaunidade"], { unique: true })
@Entity("leituraaguaunidade", { schema: "aluguel" })
export class Leituraaguaunidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "idleituraaguaunidade" })
  idleituraaguaunidade: number;

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

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
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
    (imovelunidade) => imovelunidade.leituraaguaunidades
  )
  @JoinColumn([{ name: "idunidade", referencedColumnName: "idunidade" }])
  idunidade: Imovelunidade;
}
