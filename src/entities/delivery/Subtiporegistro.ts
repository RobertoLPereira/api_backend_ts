import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tiporelacionamento } from "./Tiporelacionamento";

@Index("subtiporegistro_pkey", ["idsubtiporegistro"], { unique: true })
@Entity("subtiporegistro", { schema: "delivery" })
export class Subtiporegistro {
  @PrimaryGeneratedColumn({ type: "integer", name: "idsubtiporegistro" })
  idsubtiporegistro: number;

  @Column("character", {
    name: "prefixo",
    nullable: true,
    length: 4,
    default: () => "NULL::bpchar",
  })
  prefixo: string | null;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @ManyToOne(
    () => Tiporelacionamento,
    (tiporelacionamento) => tiporelacionamento.subtiporegistros
  )
  @JoinColumn([
    {
      name: "idtiporelacionamento",
      referencedColumnName: "idtiporelacionamento",
    },
  ])
  idtiporelacionamento: Tiporelacionamento;
}
