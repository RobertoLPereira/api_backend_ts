import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Naturezatipo } from "./Naturezatipo";

@Index("naturezarelacionamento_pkey", ["id"], { unique: true })
@Entity("naturezarelacionamento", { schema: "apoio" })
export class Naturezarelacionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 30,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToMany(
    () => Naturezatipo,
    (naturezatipo) => naturezatipo.idnaturezarelacionamento2
  )
  naturezatipos: Naturezatipo[];
}
