import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Naturezatipo } from "./Naturezatipo";

@Index("tiporelacionamento_pkey", ["id"], { unique: true })
@Entity("tiporelacionamento", { schema: "apoio" })
export class Tiporelacionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToMany(
    () => Naturezatipo,
    (naturezatipo) => naturezatipo.idtiporelacionamento2
  )
  naturezatipos: Naturezatipo[];
}
